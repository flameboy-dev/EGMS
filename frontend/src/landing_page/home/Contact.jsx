import React from 'react';
import ContactForm from '@/components/custom/ContactForm';

function Contact() {
  return (
    <section className="w-full bg-white px-6 py-10 sm:py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-col items-start space-y-2 sm:space-y-3">
          <h2 className="font-fredoka text-2xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            Contact Us
          </h2>
          <p className="max-w-2xl font-poppins text-sm text-[#000000]/80 sm:text-lg">
            Let's Build Your Child's Bright Future Together
          </p>
        </div>

        {/* Main Card Container */}
        <div className="w-full rounded-[24px] sm:rounded-[40px] md:rounded-[45px] bg-[#F3F3F3] p-5 sm:p-10 md:p-14 shadow-sm border border-[#191A23]/10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Contact Info */}
            <div className="flex flex-col space-y-8 lg:col-span-5">
              {/* Visit Our Campus */}
              <div>
                <h3 className="font-fredoka text-xl font-semibold text-[#000000] sm:text-2xl md:text-[26px] mb-3">
                  Visit Our Campus
                </h3>
                <div className="font-poppins text-base leading-relaxed text-[#000000]/80 sm:text-lg space-y-0.5">
                  <p>Ever Green Model School</p>
                  <p>Narayanpur, South 24 Parganas</p>
                  <p>West Bengal – 743357</p>
                </div>
              </div>

              {/* School Hours */}
              <div>
                <h3 className="font-fredoka text-xl font-semibold text-[#000000] sm:text-2xl md:text-[26px] mb-3">
                  School Hours
                </h3>
                <div className="font-poppins text-base leading-relaxed text-[#000000]/80 sm:text-lg space-y-2">
                  <div>
                    <p className="font-medium text-[#000000]">Monday – Friday</p>
                    <p>8:00 AM – 4:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#000000]">Saturday</p>
                    <p>8:00 AM – 1:00 PM</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#000000]">Sunday – Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Details */}
              <div>
                <h3 className="font-fredoka text-xl font-semibold text-[#000000] sm:text-2xl md:text-[26px] mb-3">
                  Contact Details
                </h3>
                <div className="font-poppins text-base leading-relaxed text-[#000000]/80 sm:text-lg space-y-1">
                  <p>
                    <span className="font-medium text-[#000000]">Phone:</span>{' '}
                    <a href="tel:9732644550" className="hover:underline text-[#000000]/90">
                      9732644550
                    </a>
                  </p>
                  <p className="break-all">
                    <span className="font-medium text-[#000000]">Email:</span>{' '}
                    <a href="mailto:evergreenmodelschool58@gmail.com" className="hover:underline text-[#000000]/90">
                      evergreenmodelschool58@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Follow Us */}
              <div>
                <h3 className="font-fredoka text-xl font-semibold text-[#000000] sm:text-2xl md:text-[26px] mb-3">
                  Follow Us
                </h3>
                <div className="flex items-center space-x-4">
                  {/* Facebook Button */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black text-white transition-transform duration-200 hover:scale-110 hover:bg-[#1E3F20]"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  {/* YouTube Button */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-11 w-12 items-center justify-center rounded-[14px] bg-black text-white transition-transform duration-200 hover:scale-110 hover:bg-[#1E3F20]"
                  >
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Admission Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;