import { dataCardOurValues } from "./types";

const CardOurValues = () => {
  return (
    <>
      <div className="grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 lg:gap-[60px] justify-items-center">
        {dataCardOurValues?.slice(0, 3).map((values, index) => (
          <div
            key={values.id}
            className={`rounded-3xl shadow-secondary/10 shadow-xl py-[50px] px-[30px] ${
              index === 1 ? "lg:h-[336px]" : "lg:h-[381px]"
            } lg:w-[390px] `}
          >
            <div
              className={`flex items-center justify-center gap-4 mb-[34px] ${
                index !== 1 ? "lg:mt-[45px]" : ""
              }`}
            >
              <img
                src={values.icon}
                alt={values.title}
                className="rounded-full bg-secondary w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] p-2"
              />
              <h3 className="text-xl lg:text-[30px] font-semibold text-primary">
                {values.title}
              </h3>
            </div>
            <p className="text-sm text-center lg:text-base font-Poppins">{values.description}</p>
          </div>
        ))}
        <div className="lg:flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-3 gap-[60px]">
          {dataCardOurValues?.slice(3).map((values) => (
            <div
              key={values.id}
              className="lg:w-[390px] h-[355px] rounded-3xl shadow-xl shadow-secondary/10 py-[50px] px-[30px]"
            >
              <div className="flex items-center justify-center gap-4 mb-[34px] mt-[45px]">
                <img
                  src={values.icon}
                  alt={values.title}
                  className="bg-secondary rounded-full w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] p-2"
                />
                <h3 className="lg:text-[30px] text-[20px] font-semibold text-primary">
                  {values.title}
                </h3>
              </div>
              <p className="text-center font-Poppins">{values.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardOurValues;
