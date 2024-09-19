import { dataCardOurValues } from "./types";

const CardOurValues = () => {
  return (
    <>
      <div className="grid grid-cols-3 gap-[60px] justify-items-center">
        {dataCardOurValues?.slice(0, 3).map((values) => (
          <div key={values.id} className="rounded-3xl shadow-secondary/10 shadow-xl py-[50px] px-[30px] w-[390px] h-[336px]">
            <div className="flex items-center justify-center gap-4 mb-[34px]">
              <img
                src={values.icon}
                alt={values.title}
                className="rounded-full bg-secondary w-[45px] h-[45px] p-2"
              />
              <h3 className="text-[30px] font-semibold text-primary">{values.title}</h3>
            </div>
              <p>{values.description}</p>
          </div>
        ))}
      <div className="flex items-center justify-center col-span-3 gap-[60px]">
        {dataCardOurValues?.slice(3).map((values) => (
          <div key={values.id} className="w-[390px] h-[336px] rounded-3xl shadow-xl shadow-secondary/10 py-[50px] px-[30px]">
            <div className="flex items-center justify-center gap-4 mb-[34px]">
              <img
                src={values.icon}
                alt={values.title}
                className="bg-secondary rounded-full w-[45px] h-[45px] p-2"
              />
              <h3 className="text-[30px] font-semibold text-primary">{values.title}</h3>
            </div>
              <p>{values.description}</p>
          </div>
        ))}
      </div>
      </div>
    </>
  );
};

export default CardOurValues;
