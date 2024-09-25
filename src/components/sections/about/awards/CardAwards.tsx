import { dataCardAwards } from "./types";

const CardAwards = () => {
  return (
    <>
      {dataCardAwards?.map((values) => (
        <div key={values.id} className="flex items-center justify-start gap-2 px-10 py-4 shadow-shadowBox h-[124px] shadow-secondary/20 rounded-2xl">
          <div className="w-[40%] md:w-[15%] h-full bg-secondary rounded-2xl">
            <img src={values.icon} alt={values.title} className="w-[92px] h-[92px] p-4" />
          </div>
          <h3 className="text-xs sm:text-sm md:text-lg w-[75%]">{values.title}</h3>
        </div>
      ))}
    </>
  );
};

export default CardAwards;
