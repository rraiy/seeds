import { Grid, GridItem } from '@chakra-ui/react';

import MultiCards from '@/app/components/common/MultiCards';

import styles from '@/app/styles/components/common/TextWithCards.module.scss';

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
    <div className="mb-24 z-10">
      <Grid templateRows="256px 440px">
        <GridItem className={styles['text-container']}>
          <h2 className={titleClass}>{title}</h2>
          {text}
        </GridItem>
        <GridItem>
          <MultiCards cardsContent={mock} />
        </GridItem>
      </Grid>
    </div>
  );
};

export default TextWithCards;
