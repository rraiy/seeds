import Image from 'next/image';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';

const FeePage = () => {
  return (
    <div className="w-[990px] flex flex-col items-center tablet:w-screen">
      <div className="flex items-center mb-20 tablet:flex-col tablet:mb-10">
        <HiOutlineCurrencyDollar className="w-[40px] h-[40px] tablet:w-[40px]" />
        <h2 className="section-title mb-0 ml-2 mobile:text-[28px]">收費方式</h2>
      </div>
      <Image src="/images/fee.jpg" width={440} height={625} alt="喜茲體能費用" />
    </div>
  );
};

export default FeePage;
