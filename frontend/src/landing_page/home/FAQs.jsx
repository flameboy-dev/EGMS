import React, { useState } from 'react';
import FaqItem from '@/components/custom/FaqItem';

function FAQs() {
  const [openId, setOpenId] = useState('01');

  const faqsData = [
    {
      id: '01',
      number: '01',
      question: 'What classes does Ever Green Model School offer?',
      answer:
        "We offer classes from Nursery to Standard IV, providing a strong foundation for children's academic and personal growth.",
    },
    {
      id: '02',
      number: '02',
      question: 'What is the age requirement for Nursery admission?',
      answer:
        'Children should generally be 3 years or above at the time of admission. Please contact the school office for the latest admission guidelines.',
    },
    {
      id: '03',
      number: '03',
      question: 'When does the admission process begin?',
      answer:
        'Admissions usually open before the start of each academic session. Parents are encouraged to contact the school or visit the campus for updated information.',
    },
    {
      id: '04',
      number: '04',
      question: 'Are extracurricular activities available?',
      answer:
        'Yes. Students participate in art & craft, music, dance, storytelling, sports, cultural events, and other creative activities throughout the year.',
    },
    {
      id: '05',
      number: '05',
      question: 'How can parents apply for admission?',
      answer:
        'Parents can visit the school campus, collect the admission form, submit the required documents, and complete the admission process with the school office.',
    },
    {
      id: '06',
      number: '06',
      question: 'Does the school organize annual events?',
      answer:
        'Yes. We celebrate Annual Day, Sports Day, cultural programs, festivals, educational activities, and other events to encourage student participation and confidence.',
    },
    {
      id: '07',
      number: '07',
      question: 'How can I contact the school?',
      answer:
        'You can visit our campus, call our office during school hours, or use the Contact Us page to get in touch with us.',
    },
  ];

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="w-full bg-white px-6 py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start space-y-3">
          <h2 className="font-fredoka text-3xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            FAQs
          </h2>
          <p className="max-w-2xl font-poppins text-base text-[#000000]/80 sm:text-lg">
            Frequently Asked Questions
          </p>
        </div>

        {/* FAQ Items List */}
        <div className="flex flex-col space-y-6">
          {faqsData.map((faq) => (
            <FaqItem
              key={faq.id}
              number={faq.number}
              question={faq.question}
              answer={faq.answer}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQs;