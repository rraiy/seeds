import { Grid, GridItem } from '@chakra-ui/react';

import MultiCards from '@/app/components/common/MultiCards';

import styles from '@/app/styles/components/common/TextWithCards.module.scss';

const mock = [
  {
    imgSrc: '/image/about/info.png',
    alt: 'Image 1',
    width: 360,
    height: 440,
    buttonText: '場館資訊',
    buttonColor: 'primary',
    buttonLink: '/',
  },
  {
    imgSrc: '/image/about/coach.png',
    alt: 'Image 2',
    width: 360,
    height: 440,
    buttonText: '教練介紹',
    buttonColor: 'second',
    buttonLink: '/',
  },
  {
    imgSrc: '/image/about/fee.png',
    alt: '費用說明',
    width: 360,
    height: 440,
    buttonText: '費用說明',
    buttonColor: 'second',
    buttonLink: '/',
  },
  // {
  //   imgSrc: '/image/about/fee.jpg',
  //   alt: 'Image 4',
  //   width: 360,
  //   height: 440,
  // },
];

interface Props {
  title: string;
  titleClass?: string;
  text?: string | JSX.Element;
}

const TextWithCards = ({ title, titleClass, text }: Props) => {
  return (
    <Grid templateRows="256px 440px">
      <GridItem className={styles['text-container']}>
        <h2 className={titleClass}>{title}</h2>
        {text}
      </GridItem>
      <GridItem>
        <MultiCards cardsContent={mock} />
      </GridItem>
    </Grid>
  );
};

export default TextWithCards;
