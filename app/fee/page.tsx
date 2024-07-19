import { HiOutlineCurrencyDollar } from 'react-icons/hi2';

import FadeInSection from '@/app/components/common/FadeInSection';
import Fee from '@/app/components/Fee';

const FeePage = () => {
  return (
    <div className="w-[990px] tablet:w-screen">
      <FadeInSection>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-20 tablet:flex-col tablet:mb-10">
            <HiOutlineCurrencyDollar className="w-[40px] h-[40px] tablet:w-[40px]" />
            <h2 className="section-title mb-0 ml-2 mobile:text-[28px]">課程收費</h2>
          </div>
          <Fee />
        </div>
      </FadeInSection>
    </div>
  );
};

export default FeePage;
