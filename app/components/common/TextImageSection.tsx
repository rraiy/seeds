import Image from 'next/image';
import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';

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
    <Flex className={styles.container}>
      <Flex direction="column" alignItems="center" justifyContent="center">
        <h2 className={titleClass}>{title}</h2>
        <p>{text}</p>
      </Flex>
      <Spacer />
      <Box className="flex">
        <Image className="z-10" width={800} height={800} src={imgSrc} alt={imgAlt} />
      </Box>
    </Flex>
  );
};

export default TextImageSection;
