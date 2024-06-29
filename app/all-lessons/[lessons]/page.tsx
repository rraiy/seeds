import Image from 'next/image';

import LessonsDetail, { lessonType } from '@/app/constants/content/lessonsDetail';
import ImgSlide from '@/app/components/common/carousel/ImgSlide';

const SubLessons = ({ params }: { params: { lessons: lessonType } }) => {
  const content = LessonsDetail[params.lessons];
  const { title, iconPath, subLessons } = content;
  // const router = useRouter();
  // console.log(params);

  // const { slug } = router;

  return (
    <div className="min-h-[800px]">
      <div className="flex flex-col items-center mb-8">
        <div className="w-[40px] mb-5 tablet:w-[40px]">
          <Image width="0" height="0" sizes="100vw" className="w-full h-auto" src={iconPath} alt="喜茲體能" />
        </div>
        <p className="">
          課程介紹 {'> '}
          <span className="font-bold">{title}</span>
        </p>
      </div>
      <ImgSlide count={6} hasCenter={true} />
    </div>
  );
};

export default SubLessons;
