import { dataTreatMent } from "./types";

const TypeTreatments = () => {
  return (
    <>
      {dataTreatMent?.map((value) => (
        <div data-aos="fade-up" key={value.id} className="flex flex-col items-center justify-center text-center py-14 px-9 ">
          <div className=" h-[30%]">
            <img src={value.icon} alt={value.title} className="mb-6 " />
          </div>
          <div className=" h-[70%]">
            <h3 className="mb-[14px] text-2xl font-semibold text-third">
              {value.title}
            </h3>
            <p className="text-base text-third font-Poppins">
              {value.description}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default TypeTreatments;
