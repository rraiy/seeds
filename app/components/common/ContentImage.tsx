import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import ALL_LESSONS from '@/app/constants/content/allLessons';
// import Button from '@/app/components/common/Button';
import FadeInSection from '@/app/components/common/FadeInSection';

const ContentImage = () => {
  return (
    <section className="max-w-[1440px] w-screen [&>*]:mb-20 mobile:[&>*]:mb-4">
      {ALL_LESSONS.map((lesson) => {
        const { title, imgPath, imgPosition, alt, iconPath, sub, introduction } = lesson;
        return (
          <FadeInSection key={title}>
            <div
              className={twMerge(
                'min-w-[990px] flex justify-start items-center tablet:min-w-full tablet:justify-between mobile:[&>*]:mb-8 mobile:flex-col',
                imgPosition === 'right' && 'flex-row-reverse',
              )}
            >
              <div className="w-[50%] object-contain tablet-[40%] mobile:w-full">
                <Image src={imgPath} width={720} height={520} alt={alt} />
              </div>

              <div className="w-[35%] mx-12 [&>*]:mb-5 [&_p]:text-xl desktop:w-[35%] tablet:w-[40%] tablet:[&_p]:text-[16px] mobile:w-full mobile:px-10 mobile:relative">
                <Image className="mobile:absolute mobile:top-[-92px]" src={iconPath} width={80} height={80} alt={alt} />
                <h2 className="text-3xl font-bold tablet:text-2xl">{title}</h2>
                {/* <div className="">
                  <p>難度:{level}</p>
                  <p>
                    學科知識含量:{' '}
                    {Array.from({ length: knowledgeLevel }, (_, index) => (
                      <span key={index}>+</span>
                    ))}
                  </p>
                </div> */}
                <p>{introduction}</p>
                {/* <Button text="了解更多" /> */}
                <div>
                  <h3 className="text-xl font-bold leading-4">課程項目如下：</h3>
                  {sub.map((item) => {
                    return (
                      <p key={item} className="leading-4">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
          </FadeInSection>
        );
      })}
    </section>
  );
};

export default ContentImage;
