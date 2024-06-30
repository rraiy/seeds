import { twMerge } from 'tailwind-merge';

interface Props {
  text?: string;
  icon?: JSX.Element;
  widthLarge?: boolean;
  className?: string;
  iconPosition?: 'front' | 'back';
  mobileFull?: boolean;
}

const Button = ({ text, icon, widthLarge = false, className, iconPosition = 'front', mobileFull = false }: Props) => {
  return (
    <button
      type="button"
      className={twMerge(
        'w-32 flex justify-center items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium leading-normal text-white hover:bg-buttonHover',
        widthLarge && 'w-full',
        mobileFull && 'mobile:w-full',
        className,
      )}
    >
      {!!icon && iconPosition === 'front' && icon}
      <span className="mx-2">{text}</span>
      {!!icon && iconPosition === 'back' && icon}
    </button>
  );
};
export default Button;
