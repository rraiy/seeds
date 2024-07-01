import Image from 'next/image';
import { HiOutlineMapPin } from 'react-icons/hi2';

import LOCATION_INFO from '@/app/constants/content/location';

const LocationPage = () => {
  const { title, items, imgPath } = LOCATION_INFO;
  return (
    <div className="w-[990px] flex flex-col items-center tablet:w-screen">
      <div className="w-screen h-[256px] mb-10">
        <Image width="0" height="0" sizes="100vw" className="w-full h-full object-cover" src={imgPath} alt="喜茲體能" />
      </div>
      <div className="flex items-center mb-20 tablet:flex-col tablet:mb-10">
        <HiOutlineMapPin className="w-[40px] h-[40px] tablet:w-[40px]" />
        <h2 className="section-title mb-0 ml-2 mobile:text-[28px]">場館資訊</h2>
      </div>

      <div className="w-[100%] flex justify-between items-center tablet:w-[90%] tablet:flex-col">
        <div className="tablet:mb-10">
          <h3 className="mb-8 text-2xl">{title}</h3>
          {items.map((item) => (
            <div key={item.title} className="mb-6">
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
        <div className="w-[440px] h-[440px] tablet:max-w-[560px] tablet:mb-8 tablet:w-[100vw]">
          <iframe
            className="border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12440.239971398354!2d121.53656016787966!3d25.05370857489755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ab5051dc0d51%3A0x42a5e5f29f3dc9a7!2z5Zac6Iyy6auU6IO9IFNlZWRzIFRyYWluaW5n772c6IKM5Yqb6IiH6auU6IO96KiT57e05Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1719816049139!5m2!1szh-TW!2stw"
            width="100%"
            height="440"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
