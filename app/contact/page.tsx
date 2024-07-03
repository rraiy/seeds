import Image from 'next/image';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';

import CoachSection from '@/app/components/CoachSection';

const ContactPage = () => {
  return (
    <div className="w-[1440px] min-h-[900px] relative  tablet:w-screen">
      <div className="absolute top-[-100px] right-0 w-[600px] tablet:w-[32px]">
        <Image width="0" height="0" sizes="100vw" className="w-full h-auto" src="/images/contact.jpg" alt="喜茲體能" />
      </div>
      <div className="flex flex-col tablet:flex-col tablet:mb-10">
        <div className="flex items-center">
          {/* <HiOutlineRocketLaunch className="w-[40px] h-[40px] tablet:w-[40px]" />
          <h2 className="section-title mb-0 ml-2 mobile:text-[28px]">聯絡我們</h2> */}
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeAu4DY4QBJtUst2iwCom5r7iZgWMNnWTs24mP_0PfUrJIbCQ/viewform?embedded=true"
          width="800"
          height="1000"
        >
          載入中…
        </iframe>
      </div>
    </div>
  );
};

export default ContactPage;
