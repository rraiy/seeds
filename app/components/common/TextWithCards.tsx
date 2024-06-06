import { Grid, GridItem } from '@chakra-ui/react';

import MultiCards from '@/app/components/common/MultiCards';

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

const TextWithCards = () => {
  return (
    <Grid templateRows="256px 440px">
      <GridItem>
        <h2>關於喜茲</h2>
        <p>
          我們是喜茲體能 Seeds Training
          不同於一般健身房或者重訓課程的強烈印象，喜茲偏向以「適合全年齡的肌力訓練」提供專業的課程規劃。並且與越野跑協會合作，開發越野跑體能訓練課程。
          基本上，喜茲不單只是教動作，課程中會給予適當的體能基礎知識去結合實作，讓學員更認識自己的身體並學會運用。
        </p>
      </GridItem>
      <GridItem>
        <MultiCards cardsContent={mock} />
      </GridItem>
    </Grid>
  );
};

export default TextWithCards;
