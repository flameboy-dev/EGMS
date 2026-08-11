import express from 'express';
import cors from 'cors';
import multer from 'multer';
import nodemailer from 'nodemailer';
import { z } from 'zod';
import rateLimit from 'express-rate-limit';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.set('trust proxy', 1);
const port = process.env.PORT || 5000;
const JWT_SECRET = process.env.OTP_JWT_SECRET || 'egms_fallback_secret_key_2026';
const SCHOOL_EMAIL = process.env.NOTIFICATION_EMAIL || 'evergreenmodelschool58@gmail.com';

// Enable CORS & Body Parsers
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Global Rate Limiter (Max 100 requests per 15 minutes)
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { status: 'error', message: 'Too many requests. Please try again later.' },
});
app.use('/api/', globalLimiter);

// OTP Rate Limiter (Max 5 OTP requests per 15 minutes to prevent spam)
const otpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { status: 'error', message: 'Too many verification requests. Please wait 15 minutes.' },
});

// Configure Multer for File Uploads (In-Memory Buffer, Max 5MB per file)
const storage = multer.memoryStorage();
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF, JPG, JPEG, PNG, and WEBP files are allowed.'));
    }
  },
});

// In-Memory OTP Store: Map<email, { otp, expiresAt } >
const otpStore = new Map();

// Nodemailer Transporter Setup
function createTransporter() {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass || pass.includes('xxxx')) {
    console.warn('⚠️ SMTP credentials not fully configured in .env. Emails will be logged to console in Development Mode.');
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: { user, pass },
  });
}

// ----------------------------------------------------
// 1. Health Check Endpoint
// ----------------------------------------------------
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Ever Green Model School (E.G.M.S) Backend API Server Running',
    timestamp: new Date().toISOString(),
  });
});

// ----------------------------------------------------
// 2. Send Email OTP Verification Endpoint
// ----------------------------------------------------
app.post('/api/otp/send', otpLimiter, async (req, res) => {
  try {
    const { email } = req.body;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ status: 'error', message: 'Valid email address is required.' });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = Date.now() + 5 * 60 * 1000; // Expires in 5 minutes

    otpStore.set(email.toLowerCase(), { otp, expiresAt });

    // Generate stateless challenge token for serverless compatibility
    const otpHash = crypto.createHash('sha256').update(`${otp.trim()}:${email.toLowerCase()}:${JWT_SECRET}`).digest('hex');
    const challengeToken = jwt.sign(
      { email: email.toLowerCase(), otpHash },
      JWT_SECRET,
      { expiresIn: '5m' }
    );

    const transporter = createTransporter();

    if (transporter) {
      await transporter.sendMail({
        from: `"Ever Green Model School" <${process.env.SMTP_USER}>`,
        to: email,
        subject: '🔒 Email Verification Code - Ever Green Model School Enrollment',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 500px; margin: 0 auto; padding: 20px; border: 2px solid #191A23; border-radius: 16px; background-color: #F6FAEF;">
            <h2 style="color: #1E3F20; margin-top: 0;">Ever Green Model School (E.G.M.S)</h2>
            <p style="font-size: 15px; color: #191A23;">Your 6-digit email verification code for student enrollment is:</p>
            <div style="font-size: 32px; font-weight: bold; letter-spacing: 6px; color: #1E3F20; background: #ECF39E; padding: 15px; border-radius: 12px; text-align: center; margin: 20px 0; border: 1px solid #191A23;">
              ${otp}
            </div>
            <p style="font-size: 13px; color: #666;">This code is valid for 5 minutes. If you did not request this code, please ignore this email.</p>
          </div>
        `,
      });
      console.log(`✉️ OTP ${otp} sent to ${email}`);
    } else {
      console.log(`[DEV MODE] ✉️ Mock OTP for ${email}: ${otp}`);
    }

    return res.json({
      status: 'success',
      message: 'A 6-digit verification code has been sent to your email address.',
      challengeToken,
    });
  } catch (error) {
    console.error('Error sending OTP:', error);
    return res.status(500).json({ status: 'error', message: 'Failed to send verification email. Please try again.' });
  }
});

// ----------------------------------------------------
// 3. Verify OTP Endpoint
// ----------------------------------------------------
app.post('/api/otp/verify', (req, res) => {
  try {
    const { email, otp, challengeToken } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ status: 'error', message: 'Email and OTP are required.' });
    }

    let isValid = false;

    // Method 1: Check stateless challengeToken (Vercel Serverless safe)
    if (challengeToken) {
      try {
        const decoded = jwt.verify(challengeToken, JWT_SECRET);
        if (decoded.email === email.toLowerCase()) {
          const expectedHash = crypto.createHash('sha256').update(`${otp.trim()}:${email.toLowerCase()}:${JWT_SECRET}`).digest('hex');
          if (decoded.otpHash === expectedHash) {
            isValid = true;
          }
        }
      } catch (err) {
        // Token expired or invalid
      }
    }

    // Method 2: Check in-memory store fallback (Local Dev / Dedicated server)
    if (!isValid) {
      const record = otpStore.get(email.toLowerCase());
      if (record && Date.now() <= record.expiresAt && record.otp === otp.trim()) {
        isValid = true;
        otpStore.delete(email.toLowerCase());
      }
    }

    if (!isValid) {
      return res.status(400).json({ status: 'error', message: 'Invalid or expired verification code. Please request a new code.' });
    }

    // OTP is valid - generate a single-use JWT token
    const verificationToken = jwt.sign(
      { email: email.toLowerCase(), verifiedAt: Date.now() },
      JWT_SECRET,
      { expiresIn: '30m' }
    );

    return res.json({
      status: 'success',
      message: 'Email successfully verified!',
      verificationToken,
    });
  } catch (error) {
    console.error('Error verifying OTP:', error);
    return res.status(500).json({ status: 'error', message: 'Verification failed. Please try again.' });
  }
});

// ----------------------------------------------------
// Zod Validation Schema for Enrollment Form
// ----------------------------------------------------
const enrollmentSchema = z.object({
  studentName: z
    .string()
    .min(2, 'Student Name must be at least 2 characters')
    .regex(/^[a-zA-Z\s.-]+$/, 'Student Name must contain only letters, dots, and spaces (no numbers or special characters)'),
  dob: z.string().min(1, 'Date of Birth is required'),
  studentClass: z.enum(['Nursery', 'L.K.G', 'U.K.G', 'STD I', 'STD II', 'STD III', 'STD IV'], {
    errorMap: () => ({ message: 'Invalid class selected' }),
  }),
  studentAadhaar: z.string().regex(/^\d{12}$/, 'Student Aadhaar Number must be exactly 12 digits'),
  guardianName: z
    .string()
    .min(2, "Parent/Guardian's Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s.-]+$/, "Parent/Guardian's Name must contain only letters, dots, and spaces (no numbers or special characters)"),
  guardianOccupation: z
    .string()
    .min(2, "Parent/Guardian's Profession is required")
    .regex(/^[a-zA-Z0-9\s.,/-]+$/, "Parent/Guardian's Profession contains invalid special characters"),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, 'Mobile Number must be a valid 10-digit number'),
  email: z.string().email('Invalid Email Address'),
  verificationToken: z.string().min(1, 'Email verification token is required'),
  address: z.string().min(5, 'Full Residential Address is required'),
});

// ----------------------------------------------------
// 4. Enrollment Form Submission Endpoint (with Files & Verification)
// ----------------------------------------------------
app.post(
  '/api/enroll',
  upload.fields([
    { name: 'studentPhoto', maxCount: 1 },
    { name: 'birthCertificate', maxCount: 1 },
    { name: 'aadhaarCard', maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      // Parse & Validate Form Fields using Zod
      const validationResult = enrollmentSchema.safeParse(req.body);
      if (!validationResult.success) {
        const errorMessages = validationResult.error.errors.map((err) => err.message).join(', ');
        return res.status(400).json({ status: 'error', message: errorMessages });
      }

      const data = validationResult.data;

      // Verify JWT Token matching email
      try {
        const decoded = jwt.verify(data.verificationToken, JWT_SECRET);
        if (decoded.email !== data.email.toLowerCase()) {
          return res.status(400).json({ status: 'error', message: 'Email verification token does not match the provided email.' });
        }
      } catch (err) {
        return res.status(400).json({ status: 'error', message: 'Email verification expired or invalid. Please verify your email first.' });
      }

      // Check required attached files
      const studentPhotoFile = req.files?.studentPhoto?.[0];
      const birthCertFile = req.files?.birthCertificate?.[0];
      const aadhaarCardFile = req.files?.aadhaarCard?.[0];

      if (!studentPhotoFile) {
        return res.status(400).json({ status: 'error', message: "Child's Passport Size Photo is required." });
      }
      if (!birthCertFile) {
        return res.status(400).json({ status: 'error', message: "Child's Birth Certificate document is required." });
      }
      if (!aadhaarCardFile) {
        return res.status(400).json({ status: 'error', message: "Child's Aadhaar Card document is required." });
      }

      // Build Nodemailer Attachments
      const attachments = [
        {
          filename: `StudentPhoto_${data.studentName.replace(/\s+/g, '_')}${path.extname(studentPhotoFile.originalname)}`,
          content: studentPhotoFile.buffer,
          contentType: studentPhotoFile.mimetype,
        },
        {
          filename: `BirthCertificate_${data.studentName.replace(/\s+/g, '_')}${path.extname(birthCertFile.originalname)}`,
          content: birthCertFile.buffer,
          contentType: birthCertFile.mimetype,
        },
        {
          filename: `AadhaarCard_${data.studentName.replace(/\s+/g, '_')}${path.extname(aadhaarCardFile.originalname)}`,
          content: aadhaarCardFile.buffer,
          contentType: aadhaarCardFile.mimetype,
        },
      ];

      // Format HTML Email Template for School
      const emailHtml = `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; border: 2px solid #191A23; border-radius: 20px; overflow: hidden; background: #ffffff;">
          <div style="background-color: #1E3F20; color: #ffffff; padding: 20px 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px; color: #B9FF66;">Ever Green Model School (E.G.M.S)</h1>
            <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">New Student Online Enrollment Application</p>
          </div>

          <div style="padding: 24px; color: #191A23; font-size: 14px; line-height: 1.6;">
            <h3 style="color: #1E3F20; border-bottom: 2px solid #ECF39E; padding-bottom: 6px; margin-top: 0;">👶 Student Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 40%;">Student Full Name:</td><td>${data.studentName}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Date of Birth:</td><td>${data.dob}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Applying For Class:</td><td><span style="background: #ECF39E; padding: 3px 8px; border-radius: 6px; font-weight: bold;">${data.studentClass}</span></td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Child Aadhaar Number:</td><td>${data.studentAadhaar}</td></tr>
            </table>

            <h3 style="color: #1E3F20; border-bottom: 2px solid #ECF39E; padding-bottom: 6px;">👨‍👩‍👧 Parent / Guardian Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr><td style="padding: 6px 0; font-weight: bold; width: 40%;">Guardian Full Name:</td><td>${data.guardianName}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Guardian Profession:</td><td>${data.guardianOccupation}</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Mobile Number:</td><td><a href="tel:${data.mobileNumber}" style="color: #1E3F20; font-weight: bold;">${data.mobileNumber}</a></td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Verified Email:</td><td><a href="mailto:${data.email}">${data.email}</a> ✅ (OTP Verified)</td></tr>
              <tr><td style="padding: 6px 0; font-weight: bold;">Residential Address:</td><td>${data.address}</td></tr>
            </table>

            <h3 style="color: #1E3F20; border-bottom: 2px solid #ECF39E; padding-bottom: 6px;">📎 Attached Documents</h3>
            <ul style="padding-left: 20px; margin-bottom: 0;">
              <li>Student Photo (${studentPhotoFile.originalname} - ${(studentPhotoFile.size / 1024).toFixed(1)} KB)</li>
              <li>Birth Certificate (${birthCertFile.originalname} - ${(birthCertFile.size / 1024).toFixed(1)} KB)</li>
              <li>Aadhaar Card (${aadhaarCardFile.originalname} - ${(aadhaarCardFile.size / 1024).toFixed(1)} KB)</li>
            </ul>
          </div>

          <div style="background-color: #F6FAEF; padding: 12px 24px; font-size: 12px; color: #666; text-align: center; border-top: 1px solid #ddd;">
            Submitted via E.G.M.S Website Enrollment Portal on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </div>
        </div>
      `;

      const transporter = createTransporter();

      if (transporter) {
        await transporter.sendMail({
          from: `"EGMS Enrollment Portal" <${process.env.SMTP_USER}>`,
          to: SCHOOL_EMAIL,
          subject: `🎓 New Enrollment Application: ${data.studentName} (${data.studentClass})`,
          html: emailHtml,
          attachments,
        });
        console.log(`✅ Enrollment email successfully sent for student: ${data.studentName}`);
      } else {
        console.log(`[DEV MODE] ✅ Mock Enrollment Received for ${data.studentName} (${data.studentClass}) with ${attachments.length} attachments.`);
      }

      return res.json({
        status: 'success',
        message: 'Enrollment application and verified documents submitted successfully! Our school office will contact you soon.',
      });
    } catch (error) {
      console.error('Error submitting enrollment:', error);
      return res.status(500).json({ status: 'error', message: error.message || 'Server error occurred during enrollment submission.' });
    }
  }
);

// ----------------------------------------------------
// 5. Contact / Inquiry Form Endpoint
// ----------------------------------------------------
const contactSchema = z.object({
  parentName: z
    .string()
    .min(2, "Parent's Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s.-]+$/, "Parent's Name must contain only letters, dots, and spaces (no numbers or special characters)"),
  mobileNumber: z.string().regex(/^[6-9]\d{9}$/, 'Mobile Number must be a valid 10-digit number starting with 6-9'),
  email: z.string().email('Invalid Email Address'),
  verificationToken: z.string().min(1, 'Email verification token is required'),
  interestedClass: z.enum(['Nursery', 'L.K.G', 'U.K.G', 'STD-I', 'STD-II', 'STD-III', 'STD-IV'], {
    errorMap: () => ({ message: 'Please select an interested class' }),
  }),
  message: z.string().min(3, 'Message must be at least 3 characters'),
});

app.post('/api/contact', async (req, res) => {
  try {
    const validationResult = contactSchema.safeParse(req.body);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map((err) => err.message).join(', ');
      return res.status(400).json({ status: 'error', message: errorMessages });
    }

    const data = validationResult.data;

    // Verify JWT Token matching email
    try {
      const decoded = jwt.verify(data.verificationToken, JWT_SECRET);
      if (decoded.email !== data.email.toLowerCase()) {
        return res.status(400).json({ status: 'error', message: 'Email verification token does not match the provided email.' });
      }
    } catch (err) {
      return res.status(400).json({ status: 'error', message: 'Email verification expired or invalid. Please verify your email first.' });
    }

    const transporter = createTransporter();

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #191A23; border-radius: 16px; overflow: hidden; background: #ffffff;">
        <div style="background-color: #1E3F20; color: #ffffff; padding: 18px 20px; text-align: center;">
          <h2 style="margin: 0; color: #B9FF66;">Ever Green Model School (E.G.M.S)</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">New Online Admission Inquiry</p>
        </div>
        <div style="padding: 20px; color: #191A23; font-size: 14px; line-height: 1.6;">
          <p><strong>Parent Name:</strong> ${data.parentName}</p>
          <p><strong>Mobile Number:</strong> <a href="tel:${data.mobileNumber}">${data.mobileNumber}</a></p>
          <p><strong>Verified Email:</strong> <a href="mailto:${data.email}">${data.email}</a> ✅ (OTP Verified)</p>
          <p><strong>Interested Class:</strong> <span style="background: #ECF39E; padding: 2px 8px; border-radius: 4px; font-weight: bold;">${data.interestedClass}</span></p>
          <p><strong>Message / Inquiry:</strong></p>
          <div style="background: #F6FAEF; padding: 12px; border-radius: 8px; border-left: 4px solid #1E3F20;">${data.message}</div>
        </div>
      </div>
    `;

    if (transporter) {
      await transporter.sendMail({
        from: `"EGMS Website Inquiry" <${process.env.SMTP_USER}>`,
        to: SCHOOL_EMAIL,
        subject: `📩 New Admission Inquiry from ${data.parentName} (${data.interestedClass})`,
        html: emailHtml,
      });
      console.log(`✅ Contact inquiry email sent for: ${data.parentName}`);
    } else {
      console.log(`[DEV MODE] ✅ Mock Contact Inquiry Received for ${data.parentName}`);
    }

    return res.json({
      status: 'success',
      message: 'Thank you! Your admission inquiry has been received. We will contact you soon.',
    });
  } catch (error) {
    console.error('Error submitting contact inquiry:', error);
    return res.status(500).json({ status: 'error', message: 'Server error processing inquiry.' });
  }
});

// ----------------------------------------------------
// 6. Facility Application Endpoint
// ----------------------------------------------------
const facilitySchema = z.object({
  studentName: z
    .string()
    .min(2, "Student's Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s.-]+$/, "Student's Name must contain only letters, dots, and spaces (no numbers or special characters)"),
  guardianName: z
    .string()
    .min(2, "Parent/Guardian's Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s.-]+$/, "Parent/Guardian's Name must contain only letters, dots, and spaces (no numbers or special characters)"),
  studentClass: z.enum(['Nursery', 'L.K.G', 'U.K.G', 'STD I', 'STD II', 'STD III', 'STD IV'], {
    errorMap: () => ({ message: 'Please select student class' }),
  }),
  email: z.string().email('Invalid Email Address'),
  verificationToken: z.string().min(1, 'Email verification token is required'),
  contactNumber: z.string().regex(/^[6-9]\d{9}$/, 'Phone Number must be a valid 10-digit number starting with 6-9'),
  facilityTitle: z.string().optional(),
  programType: z.string().optional(),
  remarks: z.string().optional(),
});

app.post('/api/facility-application', async (req, res) => {
  try {
    const validationResult = facilitySchema.safeParse(req.body);
    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors.map((err) => err.message).join(', ');
      return res.status(400).json({ status: 'error', message: errorMessages });
    }

    const data = validationResult.data;

    // Verify JWT Token matching email
    try {
      const decoded = jwt.verify(data.verificationToken, JWT_SECRET);
      if (decoded.email !== data.email.toLowerCase()) {
        return res.status(400).json({ status: 'error', message: 'Email verification token does not match the provided email.' });
      }
    } catch (err) {
      return res.status(400).json({ status: 'error', message: 'Email verification expired or invalid. Please verify your email first.' });
    }

    const transporter = createTransporter();

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 2px solid #191A23; border-radius: 16px; overflow: hidden; background: #ffffff;">
        <div style="background-color: #1E3F20; color: #ffffff; padding: 18px 20px; text-align: center;">
          <h2 style="margin: 0; color: #B9FF66;">Ever Green Model School (E.G.M.S)</h2>
          <p style="margin: 4px 0 0 0; font-size: 13px; opacity: 0.9;">Facility / Program Application Registration</p>
        </div>
        <div style="padding: 20px; color: #191A23; font-size: 14px; line-height: 1.6;">
          <p><strong>Program / Facility:</strong> ${data.programType || data.facilityTitle || 'Special Program'}</p>
          <p><strong>Student Name:</strong> ${data.studentName}</p>
          <p><strong>Guardian Name:</strong> ${data.guardianName}</p>
          <p><strong>Class:</strong> ${data.studentClass}</p>
          <p><strong>Verified Email:</strong> <a href="mailto:${data.email}">${data.email}</a> ✅ (OTP Verified)</p>
          <p><strong>Phone Number:</strong> <a href="tel:${data.contactNumber}">${data.contactNumber}</a></p>
          ${data.remarks ? `<p><strong>Remarks / Preferences:</strong> ${data.remarks}</p>` : ''}
        </div>
      </div>
    `;

    if (transporter) {
      await transporter.sendMail({
        from: `"EGMS Facility Application" <${process.env.SMTP_USER}>`,
        to: SCHOOL_EMAIL,
        subject: `🎨 Facility Application: ${data.studentName} - ${data.programType || data.facilityTitle}`,
        html: emailHtml,
      });
      console.log(`✅ Facility application email sent for: ${data.studentName}`);
    } else {
      console.log(`[DEV MODE] ✅ Mock Facility Application Received for ${data.studentName}`);
    }

    return res.json({
      status: 'success',
      message: 'Facility application submitted successfully!',
    });
  } catch (error) {
    console.error('Error submitting facility application:', error);
    return res.status(500).json({ status: 'error', message: 'Server error processing application.' });
  }
});

// Export Express App
export default app;

// Start Express Server
if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`🚀 EGMS Backend API Server running on port ${port}`);
  });
}
