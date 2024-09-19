import { HiMiniArrowLongRight } from "react-icons/hi2";
import { dataCardSupportAndHelp } from "./types";

const CardSupportAndHelp = () => {
  return (
    <>
      {dataCardSupportAndHelp?.map((values) => (
        <div
          key={values.id}
          className="grid grid-cols-3 gap-6 place-items-center"
        >
          <div className="col-span-1">
            <values.icon className="w-[60px] h-[60px] bg-secondary rounded-full p-4 text-third" />
          </div>
          <div className="col-span-2">
            <h3 className="text-base font-semibold text-primary">
              {values.title}
            </h3>
            <p className="text-xl text-primary/50">{values.content}</p>
          </div>
        </div>
      ))}
      <button className="flex items-center gap-2 bg-gradient-to-r from-[#307BC4] to-[#274760] rounded-full text-base font-medium text-third justify-center">
        Book Now <HiMiniArrowLongRight size={20} />
      </button>
    </>
  );
};

export default CardSupportAndHelp;
