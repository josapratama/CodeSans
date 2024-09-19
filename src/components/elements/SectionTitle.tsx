import { ReactNode } from "react";

const SectionTitle = (props: {children: ReactNode}) => {
  return (
    <h2 className="text-[50px] font-bold text-primary">
      {props.children}
    </h2>
  );
};

export default SectionTitle;
