import React from 'react';
import { Plus, Minus } from 'lucide-react';

function FaqItem({ number, question, answer, isOpen, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`group cursor-pointer w-full rounded-[35px] md:rounded-[40px] border-2 border-[#191A23] p-6 sm:p-8 md:px-10 md:py-8 shadow-[0_5px_0_0_#191A23] transition-all duration-300 ${
        isOpen ? 'bg-[#B9FF66]' : 'bg-[#F3F3F3] hover:bg-[#EBEBEB]'
      }`}
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center space-x-4 md:space-x-6">
          <span className="font-fredoka text-3xl font-medium tracking-tight text-[#191A23] sm:text-4xl md:text-[40px]">
            {number}
          </span>
          <h3 className="font-fredoka text-lg font-semibold leading-snug text-[#191A23] sm:text-xl md:text-2xl">
            {question}
          </h3>
        </div>

        {/* Plus / Minus Circular Toggle Button */}
        <div className="flex h-10 w-10 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#191A23] bg-white text-[#191A23] shadow-sm transition-transform duration-200 group-hover:scale-105">
          {isOpen ? (
            <Minus className="h-5 w-5 md:h-6 md:w-6 stroke-[3]" />
          ) : (
            <Plus className="h-5 w-5 md:h-6 md:w-6 stroke-[3]" />
          )}
        </div>
      </div>

      {/* Answer Expandable Area */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-[300px] opacity-100 mt-5 pt-5 border-t border-[#191A23]'
            : 'max-h-0 opacity-0 mt-0 pt-0 border-t-0'
        }`}
      >
        <p className="font-poppins text-sm leading-relaxed text-[#191A23] sm:text-base md:text-[16px]">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default FaqItem;
export { FaqItem as FaqCard };
