import Button from '@/app/components/common/Button';
import Link from 'next/link';
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
      {content.link ? (
        <Link href={content.link} className="block">
          <Button text={btnText} widthLarge />
        </Link>
      ) : (
        <Button text={btnText} widthLarge />
      )}
    </div>
  );
};

export default LessonTooltipContent;
