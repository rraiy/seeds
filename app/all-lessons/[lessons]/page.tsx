import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import Carousel from '@/app/components/common/carousel/Carousel';
import FadeInSection from '@/app/components/common/FadeInSection';
import LESSONS_DETAIL, { lessonType, LESSONS_CAVEAT } from '@/app/constants/content/lessonsDetail';
import LessonDetail from '@/app/components/LessonDetail';

const SubLessons = ({ params }: { params: { lessons: lessonType } }) => {
  const content = LESSONS_DETAIL[params.lessons];
  const { title, iconPath, subLessons } = content;

  return (
    <div className="min-h-[800px] flex flex-col items-center">
      <div className="flex flex-col items-center mb-8">
        <div className="w-[40px] mb-5 tablet:w-[40px]">
          <Image width="0" height="0" sizes="100vw" className="w-full h-auto" src={iconPath} alt="喜茲體能" />
        </div>
        <p>
          課程介紹 {'> '}
          <span className="font-bold">{title}</span>
        </p>
      </div>
      {subLessons.map((sub, idx) => {
        const isOdd = idx % 2 !== 0;
        const imageNodes = sub.imgPath.map((item, idx) => {
          return (
            <div key={idx} className="min-w-[618px] flex justify-center items-center tablet:min-w-[84%]">
              <Image
                width="0"
                height="0"
                sizes="100vw"
                className="w-full h-auto object-cover"
                src={item}
                alt="喜茲體能"
              />
            </div>
          );
        });
        return (
          <FadeInSection key={sub.name}>
            <div
              className={twMerge(
                'w-[1200px] flex justify-between mb-12 desktop:w-[990px] tablet:w-[648px] tablet:flex-col tablet:items-center mobile:mb-16',
                isOdd && 'flex-row-reverse',
              )}
            >
              <div
                className="w-[618px] h-[464px] desktop:w-[60%]
            tablet:w-[90%] tablet:h-[auto] mobile:w-[400px]"
              >
                <Carousel className="[&_img]:object-cover">{imageNodes}</Carousel>
              </div>
              <LessonDetail content={sub} />
            </div>
          </FadeInSection>
        );
      })}
      <div className="self-start mt-8 mobile:px-5">
        <p className="mb-4 text-center">重要課程須知</p>
        <ul>
          {LESSONS_CAVEAT.map((item, idx) => (
            <li key={idx} className="flex text-xs text-primary text-opacity-60">
              <div className="before:content-['⦁'] before:mr-3" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SubLessons;
