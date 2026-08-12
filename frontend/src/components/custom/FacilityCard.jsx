import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImageWithSkeleton from './ImageWithSkeleton';
import { useLanguage } from '@/context/LanguageContext';

function FacilityCard({
  titleLines = [],
  titleBadgeBg = 'bg-[#B9FF66]',
  cardBg = 'bg-[#F3F3F3]',
  image,
  imageAlt = '',
  isDarkCard = false,
  linkTo = null,
}) {
  const { t } = useLanguage();

  const cardContent = (
    <div className="relative flex h-full w-full flex-col justify-between z-10">
      {/* Top Section: Stacked Title Badges */}
      <div className="flex flex-col items-start space-y-1.5 max-w-[55%] sm:max-w-[60%]">
        {titleLines.map((line, index) => (
          <span
            key={index}
            className={`inline-block rounded-[7px] px-2.5 py-0.5 font-fredoka text-2xl font-semibold leading-snug text-[#000000] sm:text-3xl md:text-[30px] ${titleBadgeBg}`}
          >
            {t(line)}
          </span>
        ))}
      </div>

      {/* Bottom Section: Action Link (Arrow + Learn More) */}
      <div className="flex items-center space-x-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-105 ${isDarkCard
            ? 'bg-white text-[#191A23]'
            : 'bg-[#191A23] text-[#B9FF66]'
            }`}
        >
          <ArrowUpRight className="h-6 w-6 stroke-[2.5]" />
        </div>
        <span
          className={`font-poppins text-base font-medium md:text-lg ${isDarkCard ? 'text-white' : 'text-[#000000]'
            }`}
        >
          {t("Learn more")}
        </span>
      </div>

      {/* Right Side Illustration Image (210px x 192.68px) */}
      {image && (
        <div className="pointer-events-none absolute right-0 bottom-0 sm:right-2 flex h-[130px] w-[140px] xs:h-[155px] xs:w-[170px] sm:h-[192.68px] sm:w-[210px] items-center justify-center">
          <ImageWithSkeleton
            src={image}
            alt={imageAlt || titleLines.join(' ')}
            wrapperClassName="h-full w-full flex items-center justify-center"
            className="max-h-full max-w-full w-auto h-auto object-contain"
          />
        </div>
      )}
    </div>
  );

  const containerClasses = `group relative flex h-[240px] xs:h-[265px] sm:h-[306px] w-full max-w-[600px] flex-col justify-between overflow-hidden rounded-[24px] sm:rounded-[45px] border-2 border-[#191A23] p-5 sm:p-8 md:p-10 shadow-[0_4px_0_0_#191A23] sm:shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 ${cardBg}`;

  if (linkTo) {
    return (
      <Link to={linkTo} className={containerClasses}>
        {cardContent}
      </Link>
    );
  }

  return <div className={containerClasses}>{cardContent}</div>;
}

export default FacilityCard;
export { FacilityCard as FacilitiesCard };
