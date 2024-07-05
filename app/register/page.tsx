import { HiOutlineSparkles } from 'react-icons/hi2';

const RegisterPage = () => {
  return (
    <div className="min-h-[800px] flex flex-col items-center tablet:w-screen">
      <div className="flex items-center mb-20 tablet:flex-col tablet:mb-10">
        <HiOutlineSparkles className="w-[40px] h-[40px] tablet:w-[40px]" />
        <h2 className="section-title mb-0 ml-2 mobile:text-[28px]">團體課報名</h2>
      </div>
      <div className="p-10 rounded border-double border-4 border-gray-500">
        <iframe
          className="w-[800px] h-[1000px] tablet:w-[750px] mobile:w-[400px]"
          src="https://docs.google.com/forms/d/1-89ZmNCplb1Vg2KEqJ8-ndwRIjigZ68nMVR1S6i3omw/viewform?embedded=true"
        >
          載入中…
        </iframe>
      </div>
    </div>
  );
};
export default RegisterPage;
