import Link from 'next/link';
import Image from 'next/image';

import Button from '@/app/components/common/Button';
import iImgCardInfo from '@/app/interface/constants/about';

interface Props {
  cardsContent: iImgCardInfo[];
}

const MultiCards = ({ cardsContent }: Props) => {
  return (
    <div className="flex overflow-x-scroll">
      {cardsContent.map((card) => {
        const { imgSrc, alt } = card;
        return (
          <div key={alt} className="min-w-[340px] relative mx-4">
            <Image width="0" height="0" sizes="100vw" className="w-full h-auto" src={imgSrc} alt={alt} />
            {card.buttonText && card.buttonLink && (
              <Link href={card.buttonLink}>
                <Button text={card.buttonText} className="absolute bottom-10 left-1/2 -translate-x-1/2	" />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MultiCards;
