import MultiCards from '@/app/components/common/MultiCards';
import { twMerge } from 'tailwind-merge';

import iImgCardInfo from '@/app/interface/constants/about';

import styles from '@/app/styles/components/common/TextWithCards.module.scss';

interface Props {
  title: string;
  titleClass?: string;
  text?: string | JSX.Element;
  cardsContent: iImgCardInfo[];
}

const TextWithCards = ({ title, titleClass, text, cardsContent }: Props) => {
  return (
    <section className="z-10">
      <div className="flex flex-col items-center">
        <div className="w-[688px] flex flex-col mb-8 mobile:w-fit">
          <h2 className={twMerge(titleClass, 'text-center')}>{title}</h2>
          {text}
        </div>
        <div className={styles['cards-wrap']}>
          <MultiCards cardsContent={cardsContent} />
        </div>
      </div>
    </section>
  );
};

export default TextWithCards;
