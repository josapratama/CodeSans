import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import { dataCardAbout } from "./types";

const CardAbout = () => {
  return (
    <>
      {dataCardAbout?.map((values) => (
        <div key={values.id} className="py-[30px] px-6 shadow-lg relative shadow-secondary/10 rounded-2xl overflow-hidden">
          <div className="flex items-center justify-center w-10 h-10 mb-5 rounded-full bg-secondary">
            <values.icon className="w-full h-full p-2 text-third" />
          </div>

          <h3 className="mb-[14px] text-2xl font-bold text-primary">{values.title}</h3>
          <p className="text-base font-Poppins text-primary/50">{values.description}</p>
         
            <Link to={values.url} className="absolute bottom-0 right-0 px-4 py-1 text-3xl rounded-tl-xl bg-secondary/50 text-third">
              {" "}
              <BsArrowRight />
            </Link>
       
        </div>
      ))}
    </>
  );
};

export default CardAbout;
