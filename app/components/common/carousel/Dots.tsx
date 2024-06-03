"use client";

import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import styles from "@/app/styles/components/common/carousel/Dots.module.scss";

interface Props {
  idxArr: Array<number>;
  activeIdx: number;
  setCurrentIdx: Dispatch<SetStateAction<number>>;
}

// Not using
const Dots = ({ idxArr = [0, 1, 2], activeIdx = 1, setCurrentIdx }: Props) => {
  const handleClickDot = (i: number) => {
    setCurrentIdx(i);
  };

  return (
    <Wrap className={styles.container} spacing="20px">
      {idxArr.map((idx) => (
        <WrapItem
          key={idx}
          className={clsx(styles.dot, idx === activeIdx && styles.active)}
          onClick={() => handleClickDot(idx)}
        >
          &#9679;
        </WrapItem>
      ))}
    </Wrap>
  );
};

export default Dots;
