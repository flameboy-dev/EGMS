import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';
import Footer from '../Footer';
import {
  ShieldCheck,
  Lock,
  FileText,
  UserCheck,
  Eye,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

function PrivacyPage() {
  const lastUpdated = 'August 12, 2026';

  const highlights = [
    {
      icon: ShieldCheck,
      title: 'Data Protection',
      description:
        'We implement strict technical and administrative safeguards to keep student and family data secure.',
    },
    {
      icon: UserCheck,
      title: 'No Data Monetization',
      description:
        'We never sell, rent, or trade student or parent personal information to third-party advertisers.',
    },
    {
      icon: Eye,
      title: 'Transparent Purpose',
      description:
        'Personal data is strictly used for school admissions, academic communication, and safety.',
    },
    {
      icon: Lock,
      title: 'Parental Rights',
      description:
        'Parents and guardians have full rights to inspect, update, or request deletion of their child’s data.',
    },
  ];

  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#EBF1E5]">
      <div>
        <Navbar defaultBg="bg-[#EBF1E5]" />

        {/* Hero Header Section */}
        <section className="w-full border-t border-[#191A23]/10 bg-[#EBF1E5] px-4 pb-8 pt-8 sm:px-6 sm:pb-10 sm:pt-12 md:px-12 md:pb-12 md:pt-12 lg:px-16">
          <div className="mx-auto max-w-5xl text-center md:text-left">
            <div className="flex flex-col items-center md:items-start space-y-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#191A23]/10 bg-[#ECF39E] px-3.5 py-1 font-poppins text-xs font-semibold text-[#1E3F20]">
                <ShieldCheck className="h-4 w-4" /> Legal & Transparency
              </span>
              <h1 className="font-fredoka text-3xl font-semibold text-[#000000] sm:text-4xl md:text-5xl">
                Privacy Policy
              </h1>
              <p className="font-poppins text-sm font-medium text-[#1E3F20]/80 sm:text-base">
                Effective Date / Last Updated: <span className="font-semibold text-[#1E3F20]">{lastUpdated}</span>
              </p>
              <p className="w-full font-poppins text-base text-[#1E3F20]/90 sm:text-lg">
                At <strong className="font-semibold text-[#1E3F20]">Ever Green Model School (E.G.M.S)</strong>, protecting the privacy of our students, parents, and website visitors is fundamental. This Privacy Policy outlines how we collect, use, safeguard, and manage your personal data when you interact with our web platform.
              </p>
            </div>
          </div>
        </section>

        {/* Highlight Bento Cards */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-8 md:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-[20px] border border-[#191A23]/10 bg-white p-5 shadow-xs transition-all hover:shadow-md"
                >
                  <div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ECF39E] text-[#1E3F20] mb-3">
                      <IconComp className="h-5 w-5" />
                    </div>
                    <h3 className="font-fredoka text-lg font-semibold text-[#191A23]">
                      {item.title}
                    </h3>
                    <p className="mt-1 font-poppins text-xs text-[#191A23]/75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 md:px-12 md:pb-16">
          <div className="rounded-[20px] sm:rounded-[28px] border border-[#191A23]/10 bg-white p-4 sm:p-8 md:p-10 shadow-xs space-y-8 sm:space-y-10">
            
            {/* Section 1 */}
            <div className="space-y-3 border-b border-[#191A23]/10 pb-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E3F20] font-fredoka text-xs font-bold text-[#B9FF66]">
                  1
                </span>
                <h2 className="font-fredoka text-xl font-semibold text-[#191A23] sm:text-2xl">
                  Information We Collect
                </h2>
              </div>
              <p className="font-poppins text-sm text-[#191A23]/80 leading-relaxed">
                We collect information directly provided by parents, legal guardians, or prospective students when filling out our online forms or contacting the school administration:
              </p>
              <ul className="space-y-2 pt-2 font-poppins text-sm text-[#191A23]/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span><strong>Student Information:</strong> Full name, date of birth, gender, grade/class applied for, and academic history.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span><strong>Parent/Guardian Information:</strong> Father/Mother/Guardian name, mobile phone number, email address, and residential address.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span><strong>Communication Data:</strong> Inquiries, feedback, and tour requests submitted via our contact forms.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span><strong>Technical Logs:</strong> Standard web analytics including IP address, browser type, and page usage to ensure site performance and security.</span>
                </li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3 border-b border-[#191A23]/10 pb-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E3F20] font-fredoka text-xs font-bold text-[#B9FF66]">
                  2
                </span>
                <h2 className="font-fredoka text-xl font-semibold text-[#191A23] sm:text-2xl">
                  How We Use Your Information
                </h2>
              </div>
              <p className="font-poppins text-sm text-[#191A23]/80 leading-relaxed">
                Personal data collected by E.G.M.S is strictly utilized for legitimate educational and administrative purposes:
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 pt-2">
                <div className="rounded-xl border border-[#191A23]/10 bg-[#EBF1E5]/40 p-4">
                  <h4 className="font-fredoka text-base font-semibold text-[#1E3F20]">Admissions & Enrollment</h4>
                  <p className="mt-1 font-poppins text-xs text-[#191A23]/80">Processing applications, verifying student eligibility, and coordinating class placements.</p>
                </div>
                <div className="rounded-xl border border-[#191A23]/10 bg-[#EBF1E5]/40 p-4">
                  <h4 className="font-fredoka text-base font-semibold text-[#1E3F20]">Communication</h4>
                  <p className="mt-1 font-poppins text-xs text-[#191A23]/80">Sending admission status updates, fee details, academic schedules, and school announcements.</p>
                </div>
                <div className="rounded-xl border border-[#191A23]/10 bg-[#EBF1E5]/40 p-4">
                  <h4 className="font-fredoka text-base font-semibold text-[#1E3F20]">Safety & Compliance</h4>
                  <p className="mt-1 font-poppins text-xs text-[#191A23]/80">Maintaining student safety records, emergency contact lists, and legal compliance.</p>
                </div>
                <div className="rounded-xl border border-[#191A23]/10 bg-[#EBF1E5]/40 p-4">
                  <h4 className="font-fredoka text-base font-semibold text-[#1E3F20]">Website Maintenance</h4>
                  <p className="mt-1 font-poppins text-xs text-[#191A23]/80">Improving website usability, responsiveness, and preventing unauthorized access.</p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="space-y-3 border-b border-[#191A23]/10 pb-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E3F20] font-fredoka text-xs font-bold text-[#B9FF66]">
                  3
                </span>
                <h2 className="font-fredoka text-xl font-semibold text-[#191A23] sm:text-2xl">
                  Information Sharing & Disclosure
                </h2>
              </div>
              <p className="font-poppins text-sm text-[#191A23]/80 leading-relaxed">
                Ever Green Model School maintains a strict privacy policy regarding data sharing:
              </p>
              <ul className="space-y-2 pt-1 font-poppins text-sm text-[#191A23]/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span><strong>No Commercial Sharing:</strong> We do not sell, rent, trade, or share any personal details with commercial entities or third-party marketers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span><strong>Legal Mandates:</strong> Information may be disclosed only if required by applicable Indian laws, judicial orders, or educational regulatory boards.</span>
                </li>
              </ul>
            </div>

            {/* Section 4 */}
            <div className="space-y-3 border-b border-[#191A23]/10 pb-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E3F20] font-fredoka text-xs font-bold text-[#B9FF66]">
                  4
                </span>
                <h2 className="font-fredoka text-xl font-semibold text-[#191A23] sm:text-2xl">
                  Children's Privacy Protection
                </h2>
              </div>
              <p className="font-poppins text-sm text-[#191A23]/80 leading-relaxed">
                As a primary and lower-secondary educational institution (Nursery to STD IV), we are deeply committed to protecting the online privacy of children:
              </p>
              <p className="font-poppins text-sm text-[#191A23]/80 leading-relaxed">
                Enrollment forms and personal data submissions must be completed by a parent or authorized legal guardian. We do not knowingly collect personal data directly from minors without explicit parental consent.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3 border-b border-[#191A23]/10 pb-8">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#1E3F20] font-fredoka text-xs font-bold text-[#B9FF66]">
                  5
                </span>
                <h2 className="font-fredoka text-xl font-semibold text-[#191A23] sm:text-2xl">
                  Parental Rights & Data Management
                </h2>
              </div>
              <p className="font-poppins text-sm text-[#191A23]/80 leading-relaxed">
                Parents and legal guardians have the right to:
              </p>
              <ul className="space-y-2 pt-1 font-poppins text-sm text-[#191A23]/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span>Review any personal information submitted regarding their child.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span>Request corrections or updates to contact details or enrollment records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#1E3F20] shrink-0 mt-0.5" />
                  <span>Request the deletion of non-essential records upon school withdrawal.</span>
                </li>
              </ul>
            </div>

            {/* Section 6 - Contact Box */}
            <div className="rounded-[20px] bg-[#1E3F20] p-6 text-white sm:p-8 space-y-4">
              <div className="flex items-center gap-2.5">
                <FileText className="h-6 w-6 text-[#B9FF66]" />
                <h2 className="font-fredoka text-xl font-semibold text-[#B9FF66] sm:text-2xl">
                  Contact School Administration
                </h2>
              </div>
              <p className="font-poppins text-sm text-white/90 leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or your family's personal data, please reach out to our administrative team:
              </p>
              
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 pt-2 font-poppins text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-[#B9FF66] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Email Us</span>
                    <a
                      href="mailto:evergreenmodelschool58@gmail.com"
                      className="text-white/80 hover:text-[#B9FF66] underline underline-offset-2 break-all"
                    >
                      evergreenmodelschool58@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 text-[#B9FF66] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Call Us</span>
                    <a
                      href="tel:9732644550"
                      className="text-white/80 hover:text-[#B9FF66] underline underline-offset-2"
                    >
                      +91 9732644550
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-[#B9FF66] shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-white block">Address</span>
                    <span className="text-white/80 leading-snug block">
                      NH0117, Narayanpur, Kakdwip, South 24 Parganas, WB 743357
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="mx-auto max-w-5xl px-4 sm:px-6 pb-12 md:px-12 md:pb-16">
          <div className="flex flex-col items-center justify-between rounded-[20px] sm:rounded-[28px] border border-[#191A23]/10 bg-[#282933] p-5 sm:p-8 md:p-10 text-white shadow-md md:flex-row">
            <div className="max-w-xl text-center md:text-left">
              <h3 className="font-fredoka text-2xl font-semibold text-[#B9FF66]">
                Have Questions About Admissions?
              </h3>
              <p className="mt-2 font-poppins text-sm text-white/80">
                Contact our administration team directly or submit an online enrollment application today.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3 md:mt-0">
              <Link
                to="/enroll"
                className="inline-flex items-center gap-2 rounded-xl bg-[#B9FF66] px-6 py-3 font-fredoka text-sm font-medium text-[#000000] shadow-sm transition-all hover:bg-white"
              >
                <span>Enroll Now</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer defaultBg="bg-[#EBF1E5]" />
    </div>
  );
}

export default PrivacyPage;
