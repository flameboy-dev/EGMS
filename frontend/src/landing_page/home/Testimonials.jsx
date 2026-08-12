import React from 'react';
import TestimonialSlider from '@/components/custom/TestimonialSlider';

function Testimonials() {
  const testimonialsData = [
    {
      id: '1',
      quote:
        'Ever Green Model School has provided my child with such a supportive and joyful environment. The teachers are incredibly caring and dedicated, and I have seen amazing growth in both confidence and academics.',
      name: 'Rajesh Sharma',
      role: 'Parent of Aarav (STD - III)',
    },
    {
      id: '2',
      quote:
        'We are truly delighted with the activity-based learning approach. Our daughter looks forward to going to school every single day. The focus on values, art, and smart classroom learning is commendable.',
      name: 'Priya Mukherjee',
      role: 'Parent of Ananya (L.K.G)',
    },
    {
      id: '3',
      quote:
        'The safety measures, clean campus, and personal attention from every teacher give us complete peace of mind. EGMS really cares about the holistic development of every child.',
      name: 'Subhashis Roy',
      role: 'Parent of Ishan (STD - I)',
    },
    {
      id: '4',
      quote:
        'From computer basics to indoor sports and creative arts, the school offers everything a child needs. The progress in my son’s communication and curiosity has been remarkable.',
      name: 'Sneha Gupta',
      role: 'Parent of Reyansh (STD - II)',
    },
    {
      id: '5',
      quote:
        'A fantastic school with dedicated staff. The regular parent-teacher interactions and warm atmosphere make us feel like part of one big family.',
      name: 'Vikram Das',
      role: 'Parent of Diya (Nursery)',
    },
  ];

  return (
    <section className="w-full bg-[#F6FAEF] px-4 py-8 sm:px-6 sm:py-16 md:px-12 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-[1240px]">
        {/* Section Header */}
        <div className="mb-8 sm:mb-12 flex flex-col items-start space-y-2 sm:space-y-3">
          <h2 className="font-fredoka text-2xl font-semibold tracking-tight text-[#000000] sm:text-4xl md:text-[40px]">
            Testimonials
          </h2>
          <p className="max-w-4xl font-poppins text-sm sm:text-base text-[#000000]/80 sm:text-lg lg:max-w-none">
            Hear what parents have to say about their children’s joyful learning journey at Ever Green Model School.
          </p>
        </div>

        {/* Testimonials Slider */}
        <TestimonialSlider testimonials={testimonialsData} />
      </div>
    </section>
  );
}

export default Testimonials;