// import { Grid, GridItem } from '@chakra-ui/react';

import MultiCards from '@/app/components/common/MultiCards';
import { twMerge } from 'tailwind-merge';

const mock = [
  {
    imgSrc: '/images/about/info.png',
    alt: 'Image 1',
    width: 360,
    height: 440,
    buttonText: '場館資訊',
    buttonColor: 'primary',
    buttonLink: '/',
  },
  {
    imgSrc: '/images/about/coach.png',
    alt: 'Image 2',
    width: 360,
    height: 440,
    buttonText: '教練介紹',
    buttonColor: 'second',
    buttonLink: '/',
  },
  {
    imgSrc: '/images/about/fee.png',
    alt: '費用說明',
    width: 360,
    height: 440,
    buttonText: '費用說明',
    buttonColor: 'second',
    buttonLink: '/',
  },
];

interface Props {
  title: string;
  titleClass?: string;
  text?: string | JSX.Element;
}

const TextWithCards = ({ title, titleClass, text }: Props) => {
  return (
    <section className="mb-24 z-10">
      <div className="flex flex-col items-center">
        <div className="w-[688px] flex flex-col mb-8 mobile:w-[380px]">
          <h2 className={twMerge(titleClass, 'text-center')}>{title}</h2>
          {text}
        </div>
        <div>
          <MultiCards cardsContent={mock} />
        </div>
      </div>
    </section>
  );
};

export default TextWithCards;
