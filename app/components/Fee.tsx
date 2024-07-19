'use client';

import Image from 'next/image';
import { useContext } from 'react';

import { GlobalContext } from '../contexts/GlobalContext';

const Fee = () => {
  const { isMobile } = useContext(GlobalContext);

  const imgPath = isMobile ? '/images/fee/fee_mobile.jpg' : '/images/fee/fee_pc.jpg';

  return (
    <div>
      <Image src={imgPath} width={1000} height={482} alt="喜茲體能 課程費用" />
    </div>
  );
};

export default Fee;
