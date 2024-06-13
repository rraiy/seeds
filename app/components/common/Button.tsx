import { twMerge } from 'tailwind-merge';

interface Props {
  text?: string;
  icon?: JSX.Element;
  widthLarge?: boolean;
}

const Button = ({ text, icon, widthLarge = false }: Props) => {
  return (
    <button
      type="button"
      className={twMerge(
        `inline-block w-32 rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium leading-normal text-white hover:bg-buttonHover ${widthLarge && 'w-full'}`,
      )}
    >
      {!!icon && icon}
      {text}
    </button>
  );
};

export default Button;
