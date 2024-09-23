import { dataCardDepartmentsOne } from "./types";

const CardDepartmentsOne = () => {
  return (
    <>
      {dataCardDepartmentsOne?.map((values) => (
        <div
          key={values.id}
          className="flex flex-col w-[100px] lg:w-[234px] h-[100px] md:w-[120px] md:h-[120px] lg:h-[290px] items-center justify-center bg-third py-[68px] rounded-xl px-[30px]"
        >
          <img src={values.icon} alt={values.title} className="mb-5" />
          <h3 className="text-sm font-medium lg:text-xl text-primary font-Poppins">
            {values.title}
          </h3>
          <h3 className="text-sm font-medium lg:text-xl text-primary font-Poppins">
            {values.subtitle}
          </h3>
        </div>
      ))}
    </>
  );
};

export default CardDepartmentsOne;
