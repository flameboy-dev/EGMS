# ⚙️ EGMS Backend API Service

The backend REST API server for **Ever Green Model School (E.G.M.S)** built with **Node.js/Bun**, **Express.js**, **Zod**, and **Nodemailer**.

---

## 🔒 Features & Security

- **📩 Form Submission Pipelines**: Handles Admission Enrollments, Contact Inquiries, and Van/Facility Applications.
- **📧 Automated SMTP Email Dispatch**: Sends rich HTML email notifications directly to the school office email using Nodemailer.
- **🛡️ Anti-Bot & Spam Prevention**:
  - Challenge Token / OTP validation using stateless JWT signatures.
  - Strict Rate Limiting powered by `express-rate-limit` to prevent automated form abuse.
- **✅ Strict Payload Validation**: End-to-end Zod schema validation for user input fields (Phone numbers, Aadhaar format, Email sanitization).
- **📁 Document Processing**: Supports file attachments (Aadhaar & Birth Certificate) via Multer.

---

## 🛠️ API Endpoints Summary

| Endpoint | Method | Description |
| :--- | :--- | :--- |
| `/api/health` | `GET` | Server status health check |
| `/api/send-otp` | `POST` | Generate & send verification challenge token |
| `/api/verify-otp` | `POST` | Validate challenge token |
| `/api/enroll` | `POST` | Submit student admission application with documents |
| `/api/contact` | `POST` | Submit general admission inquiry / contact message |
| `/api/facility` | `POST` | Submit school van / facility request |

---

## ⚙️ Environment Configuration

Create a `.env` file in the `backend/` directory based on `.env.example`:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# SMTP Email Configuration (Gmail App Password)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-school-email@gmail.com
SMTP_PASS=your-16-character-gmail-app-password

# Email Recipient for Form Submissions
NOTIFICATION_EMAIL=evergreenmodelschool58@gmail.com

# Anti-Bot Security Secret for Signing Tokens
OTP_JWT_SECRET=your_secure_random_jwt_secret
```

---

## 🚀 Development & Running

### Install Dependencies
```bash
bun install
# or: npm install
```

### Run Server in Development Mode
```bash
bun dev
# or: npm run dev
```
Server will start listening at `http://localhost:5000`.

### Run Server in Production Mode
```bash
bun start
# or: npm start
```
