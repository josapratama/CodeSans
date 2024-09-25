import { ReactNode } from "react";

const SectionTitle = (props: {children: ReactNode, classname?: string}) => {
  return (
    <h2 className={`text-[30px] md:text-[50px] font-bold text-primary ${props.classname}`}>
      {props.children}
    </h2>
  );
};

export default SectionTitle;
