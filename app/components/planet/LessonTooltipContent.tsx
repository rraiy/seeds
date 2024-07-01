import { HiOutlineInformationCircle } from 'react-icons/hi2';

import { PopupContent } from '@/app/interface/constants/exploreLessons';

interface Props {
  content: PopupContent;
  btnText?: string;
}

const LessonTooltipContent = ({ content, btnText }: Props) => {
  return (
    <div className="w-60 z-20 space-y-4">
      <p className="font-bold text-xl">{content.name}</p>
      <hr className="my-12 h-0.5 border-t-0 bg-secondary" />

      <ul className="list-disc pl-4  ">
        {content.subItem.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <hr className="my-12 h-0.5 border-t-0 bg-secondary" />
      <div className="flex items-center">
        <HiOutlineInformationCircle className="mr-2" />
        <p>點擊星球進入課程頁面</p>
      </div>
    </div>
  );
};

export default LessonTooltipContent;
