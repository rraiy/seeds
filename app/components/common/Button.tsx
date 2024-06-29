import { twMerge } from 'tailwind-merge';

interface Props {
  text?: string;
  icon?: JSX.Element;
  widthLarge?: boolean;
  className?: string;
  iconPosition?: 'front' | 'back';
}

const Button = ({ text, icon, widthLarge = false, className, iconPosition = 'front' }: Props) => {
  return (
    <button
      type="button"
      className={twMerge(
        `w-32 flex justify-between items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium leading-normal text-white hover:bg-buttonHover ${widthLarge && 'w-full'}`,
        className,
      )}
    >
      {!!icon && iconPosition === 'front' && icon}
      {text}
      {!!icon && iconPosition === 'back' && icon}
    </button>
  );
};

export default Button;
