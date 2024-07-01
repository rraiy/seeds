'use client';

import { useState } from 'react';

import COACH from '../constants/content/coach';
import SelectImg from '@/app/components/common/SelectImg';

const CoachSection = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const coachImg = COACH.map((item) => item.imgPath);
  const activeInfo = COACH[activeIdx];

  return (
    <div className="w-[1200px] flex justify-between desktop:w-[768px] desktop:flex-col-reverse desktop:items-start mobile:w-[400px]">
      <div className="[&>div]:mb-8 tablet:mb-10">
        <h3 className="mb-16 text-4xl">{activeInfo.name} 教練</h3>
        <div>
          <h4 className="font-bold text-xl mb-2">資歷</h4>
          <p>{activeInfo.info}</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">專長</h4>
          <p>{activeInfo.skill}</p>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">特質</h4>
          <p>{activeInfo.personality}</p>
        </div>
      </div>
      <SelectImg className="desktop:mb-16" imgs={coachImg} onSelectCallback={setActiveIdx} />
    </div>
  );
};

export default CoachSection;
