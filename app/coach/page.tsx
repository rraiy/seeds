import { HiOutlineRocketLaunch } from 'react-icons/hi2';

import CoachSection from '@/app/components/CoachSection';

const CoachPage = () => {
  return (
    <div className="min-h-[800px] flex flex-col items-center tablet:w-screen">
      <div className="flex items-center mb-20 tablet:flex-col tablet:mb-10">
        <HiOutlineRocketLaunch className="w-[40px] h-[40px] tablet:w-[40px]" />
        <h2 className="section-title mb-0 ml-2 mobile:text-[28px]">教練介紹</h2>
      </div>
      <CoachSection />
    </div>
  );
};

export default CoachPage;
