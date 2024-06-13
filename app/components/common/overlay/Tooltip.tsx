interface Props {
  content: string | JSX.Element;
  text?: string;
  children?: JSX.Element; // hover object
  className?: string;
}

const Tooltip = ({ content, children, className }: Props) => {
  return (
    <div className={`relative group inline-block ${className}`}>
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-max p-4 bg-white text-sm rounded-2xl border-solid border-2 border-[#E4E8EF] opacity-0 group-hover:opacity-100 transition-opacity">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
