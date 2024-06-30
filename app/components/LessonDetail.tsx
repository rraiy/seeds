'use client';

import { HiChevronRight } from 'react-icons/hi2';

import Button from '@/app/components/common/Button';
import { iSubLesson } from '@/app/constants/content/lessonsDetail';

interface Props {
  content: iSubLesson;
}

const LessonDetail = ({ content }: Props) => {
  const { name, introduction, baggage, user } = content;

  return (
    <div className="w-[500px] flex flex-col [&>div]:mb-10 [&_h5]:font-bold [&_h5]:mb-4 desktop:w-[35%] tablet:w-[86%] mobile:w-[380px]">
      <h2 className="text-[32px] font-bold self-center">{name}</h2>
      <div>
        <h5>課程介紹</h5>
        <p>{introduction}</p>
      </div>
      <div className="flex justify-between">
        <div className="w-[70%]">
          <h5>本課程可自行攜帶</h5>
          <ul>
            {baggage.map((item, idx) => (
              <li key={idx} className="flex">
                <p className="mr-2">{idx + 1}. </p> {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5>適合對象</h5>
          <p>{user}</p>
        </div>
      </div>
      <Button
        className="tablet:self-center"
        text="報名課程"
        icon={<HiChevronRight />}
        iconPosition="back"
        mobileFull={true}
      />
    </div>
  );
};

export default LessonDetail;
