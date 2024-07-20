'use client';

import { useState } from 'react';

import COACH from '../../constants/content/coach';
import SelectImg from '@/app/components/coach/SelectImg';

const CoachSection = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const coachImg = COACH.map((item) => item.imgPath);
  const activeInfo = COACH[activeIdx];

  return (
    <div className="w-[1200px] flex justify-between desktop:w-[768px] desktop:flex-col-reverse desktop:items-start mobile:w-[400px] mobile:items-center">
      <div className="w-[90%] [&>div]:mb-8 tablet:mb-10">
        <h3 className="mb-12 text-3xl mobile:mb-8">{activeInfo.name}</h3>
        <div>
          <h4 className="font-bold text-xl mb-2">資歷</h4>
          <ul>
            {activeInfo.info.map((item, idx) => (
              <li key={idx} className="flex">
                <div className="before:content-['⦁'] before:mr-3" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl mb-2">專長</h4>
          <ul>
            {activeInfo.skill.map((item, idx) => (
              <li key={idx} className="flex">
                <div className="before:content-['⦁'] before:mr-3" />
                <p>{item}</p>
              </li>
            ))}
          </ul>
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
