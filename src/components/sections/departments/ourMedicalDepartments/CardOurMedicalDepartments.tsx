import { HiOutlineArrowRight } from "react-icons/hi2";
import { dataCardOurMedicalDepartments } from "./types";
import { Link } from "react-router-dom";

const CardOurMedicalDepartments = () => {
  return (
    <>
      {dataCardOurMedicalDepartments?.map((values, index) => {
        console.log(values);
        return (
          <Link
            to={`/departments/detail/${values.id}`}
            data-aos="zoom-in"
            key={values.id}
            className={`rounded-2xl pl-[34px] pr-[50px] relative py-[49px] shadow-lg shadow-secondary/10 bg-third overflow-hidden flex gap-6 items-start justify-start ${
              index === 6 ? "lg:col-start-2" : ""
            }`}
          >
            <div className="p-0 ">
              <img
                src={values.icon}
                alt={values.title}
                className="w-[70px] h-[66px] "
              />
            </div>
            <div className="w-[70%] ">
              <h2 className="text-[26px] font-bold text-primary leading-[34px] mb-5">
                {values.title}
              </h2>
              <p className="text-base font-Poppins text-primary/50">
                {values.description}
              </p>
            </div>
            <Link
              to="/departments"
              className="absolute bottom-0 rounded-tl-xl right-0 px-[17px] py-2 text-third text-3xl bg-secondary/50"
            >
              <HiOutlineArrowRight />
            </Link>
          </Link>
        );
      })}
    </>
  );
};

export default CardOurMedicalDepartments;
