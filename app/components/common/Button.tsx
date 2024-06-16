import { twMerge } from 'tailwind-merge';

interface Props {
  text?: string;
  icon?: JSX.Element;
  widthLarge?: boolean;
  className?: string;
}

const Button = ({ text, icon, widthLarge = false, className }: Props) => {
  return (
    <button
      type="button"
      className={twMerge(
        `inline-block w-32 rounded-full bg-primary px-5 py-2.5 text-sm font-medium leading-normal text-white hover:bg-buttonHover ${widthLarge && 'w-full'}`,
        className,
      )}
    >
      {!!icon && icon}
      {text}
    </button>
  );
};

export default Button;
