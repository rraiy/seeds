import Image from 'next/image';
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

import styles from '@/app/styles/components/common/TextImageSection.module.scss';

interface Props {
  title: string;
  imgSrc: string;
  imgAlt: string;
  titleClass?: string;
  text?: string;
}

const TextImageSection = ({ title, titleClass, text, imgSrc, imgAlt }: Props) => {
  return (
    <Grid className={styles.container} templateColumns="200px 800px" columnGap={10} alignItems="center">
      <GridItem w="100%" h="400">
        <h2 className={titleClass}>{title}</h2>
        <p>{text}</p>
      </GridItem>
      <GridItem w="100%" h="800">
        <Image width={800} height={800} src={imgSrc} alt={imgAlt} />
      </GridItem>
    </Grid>
  );
};

export default TextImageSection;
