import Image from 'next/image';

import ContentImage from '@/app/components/common/ContentImage';

const LessonsPage = () => {
  return (
    <div className="[&>*]:mb-20 flex flex-col items-center mobile:[&>*]:mb-8">
      <div className="flex items-center tablet:flex-col">
        <div className="w-[60px] tablet:w-[40px]">
          <Image
            width="0"
            height="0"
            sizes="100vw"
            className="w-full h-auto"
            src="/images/icon_img/fitness.png"
            alt="喜茲體能"
          />
        </div>

        <h2 className="section-title mb-0 ml-2 mobile:text-">課程介紹</h2>
      </div>
      <ContentImage />
    </div>
  );
};

export default LessonsPage;
