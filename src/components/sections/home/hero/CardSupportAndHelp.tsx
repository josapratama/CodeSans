import Button from "../../../elements/Button";
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
            <values.icon className="lg:w-[60px] w-[36px] h-[36px] md:w-[40px] md:h-[40px]  lg:h-[60px]  bg-secondary rounded-full p-2 lg:p-4 text-third" />
          </div>
          <div className="col-span-2">
            <h3 className="text-sm font-semibold lg:text-base text-primary">
              {values.title}
            </h3>
            <p className="text-sm md:text-base lg:text-xl text-primary/50">
              {values.content}
            </p>
          </div>
        </div>
      ))}

      <Button type="button">Book Now</Button>
    </>
  );
};

export default CardSupportAndHelp;
