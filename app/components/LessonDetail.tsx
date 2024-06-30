'use client';

import { HiChevronRight } from 'react-icons/hi2';

import Button from '@/app/components/common/Button';
import { iSubLesson } from '@/app/constants/content/lessonsDetail';

interface Props {
  content: iSubLesson;
}

const LessonDetail = ({ content }: Props) => {
  const { name, introduction, baggage, user, caveat } = content;

  return (
    <div className="w-[840px] [&>*]:mb-10 [&_h5]:font-bold [&_h5]:mb-4 tablet:w-[86%]">
      <div className="flex flex-col items-center">
        <h2 className="section-title">{name}</h2>
        <Button text="報名課程" icon={<HiChevronRight />} iconPosition="back" />
      </div>
      <div>
        <h5>課程介紹</h5>
        <p>{introduction}</p>
      </div>
      <div className="flex">
        <div className="w-[50%]">
          <h5>本課程可自行攜帶</h5>
          <ul>
            {baggage.map((item, idx) => (
              <li key={idx}>
                {idx + 1}. {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>適合對象</h5>
          <p>{user}</p>
        </div>
      </div>
      <ul>
        {caveat.map((item, idx) => (
          <li key={idx} className="flex text-primary text-opacity-60">
            <div className="before:content-['⦁'] before:mr-3" />
            <span> {item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LessonDetail;
