import Link from 'next/link';
import Image from 'next/image';

import Button from '@/app/components/common/Button';
import styles from '@/app/styles/components/common/MultiCards.module.scss';

type tImgCardInfo = {
  imgSrc: string;
  alt: string;
  width: number;
  height: number;
  buttonText?: string;
  buttonColor?: string;
  buttonLink?: string;
};

interface Props {
  cardsContent: tImgCardInfo[];
}

const MultiCards = ({ cardsContent }: Props) => {
  return (
    <div className={styles.container}>
      {cardsContent.map((card) => {
        const { imgSrc, alt, width, height } = card;
        return (
          <div key={alt} className={styles['card-container']}>
            <Image width={width} height={height} src={imgSrc} alt={alt} />
            {card.buttonText && card.buttonLink && (
              <Link href={card.buttonLink}>
                <Button text={card.buttonText} className={styles.button} />
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MultiCards;
