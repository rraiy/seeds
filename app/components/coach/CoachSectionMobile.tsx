import Image from 'next/image';
import COACH from '../../constants/content/coach';

const CoachSectionMobile = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {COACH.map((item) => {
        const { name, info, skill, personality, imgPath } = item;
        return (
          <div key={name} className="w-[90%] flex flex-col items-center">
            <Image className="mb-10" src={imgPath} alt={name} width={300} height={300} />
            <h3 className="mb-12 text-2xl mobile:mb-8">{name}</h3>
            <div className="w-[100%]">
              <h4 className="font-bold text-xl mb-2">資歷</h4>
              {info.map((item) => (
                <li key="item" className="flex">
                  <div className="before:content-['⦁'] before:mr-3" />
                  <p>{item}</p>
                </li>
              ))}
            </div>
            <div>
              <h4 className="font-bold text-xl mb-2">專長</h4>
              {skill.map((item) => (
                <li key="item" className="flex">
                  <div className="before:content-['⦁'] before:mr-3" />
                  <p>{item}</p>
                </li>
              ))}
            </div>
            <p>{personality}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CoachSectionMobile;
