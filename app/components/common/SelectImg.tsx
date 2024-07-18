'use client';

import Image from 'next/image';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

interface Props {
  imgs: string[];
  className?: string;
  onSelectCallback?: (i: number) => void;
}

const SelectImg = ({ imgs, className, onSelectCallback }: Props) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleSelectCallback = (i: number) => {
    if (onSelectCallback) onSelectCallback(i);
    setActiveIdx(i);
    return;
  };

  return (
    <div className={twMerge('flex [&>*]:ml-4 mobile:w-[100%]', className)}>
      {imgs.map((item, idx) => {
        const isActive = idx === activeIdx;
        return (
          <div
            key={item}
            className={twMerge(
              'relative w-[128px] h-[540px] transition-all duration-500 mobile:w-[25%]',
              isActive && 'w-[280px] clip-hex mobile:w-[40%] overflow-hidden',
            )}
            onClick={() => handleSelectCallback(idx)}
          >
            <Image
              className={twMerge(
                'object-cover rounded-md',
                isActive && 'transition-all duration-500 transform scale-125',
              )}
              src={item}
              width={0}
              height={0}
              fill
              sizes="100vw"
              alt="喜茲體能 教練"
              // placeholder="blur"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SelectImg;
