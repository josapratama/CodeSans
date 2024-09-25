import { dataCardWhyChooseUs } from "./types";

const CardWhyChooseUs = () => {
  return (
    <>
      {dataCardWhyChooseUs?.map((values) => (
        <div key={values.id} className="px-3 pb-10">
          <div className="flex items-center justify-center mb-5 rounded-full w-7 h-7 bg-secondary">
            <img src={values.icon} alt={values.title} className="w-full h-full p-1.5" />
          </div>
          <h3 className="mb-[14px] font-semibold text-6 text-primary">{values.title}</h3>
          <p className="text-primary/50 font-Poppins">{values.description}</p>
        </div>
      ))}
    </>
  );
};

export default CardWhyChooseUs;
