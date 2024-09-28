import { ReactNode } from "react";

export const Button = (props: { children: ReactNode; classname?: string }) => {
  return (
    <div
      className={`w-[45px] h-[45px] rounded-[10px] grid place-items-center shadow-[0px_4px_20px_0px_rgba(21,32,70,0.07)] ${props.classname}`}
    >
      <p className="text-base font-normal"> {props.children}</p>
    </div>
  );
};
