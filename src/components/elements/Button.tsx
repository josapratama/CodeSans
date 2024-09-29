import { ReactNode } from "react";
import { HiMiniArrowLongRight } from "react-icons/hi2";

const Button = (props: {
  children: ReactNode;
  type: "button" | "submit" | "reset";
  classname?: string;
}) => {
  return (
    <button
      type={props.type}
      className={`lg:max-w-full h-full flex items-center gap-2 bg-gradient-to-r from-[#307BC4] to-[#274760] rounded-full sm:text-xs text-[10px] lg:text-base px-1 lg:px-0 ${props.classname} font-medium text-third justify-center`}
    >
      {props.children} <HiMiniArrowLongRight size={20} />
    </button>
  );
};

export default Button;
