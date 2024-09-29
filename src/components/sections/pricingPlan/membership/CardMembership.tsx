import { HiMiniArrowLongRight } from "react-icons/hi2";
import { TbCircleCheckFilled } from "react-icons/tb";
import { dataCardMembership } from "./types";

const CardMembership = () => {
  return (
    <>
      {dataCardMembership?.map((value) => (
        <div
        data-aos="flip-right"
          key={value.id}
          className="overflow-hidden border lg:h-[777px] border-secondary rounded-2xl"
        >
          <div className="px-10 h-[45%] bg-secondary py-[30px]">
            <div
              className={`flex gap-5 mb-7 items-center border rounded-full border-third  ${
                value.isPopular
                  ? "bg-gradient-to-r from-[#D2EAEF] to-[#86BBF1]"
                  : "border-none"
              }`}
            >
              <h3 className="text-base lg:text-xl font-semibold border rounded-full bg-secondary text-third py-[10px] px-5">
                {value.title}
              </h3>
              {value.isPopular && (
                <span className="text-base lg:text-xl text-primary">Popular</span>
              )}
            </div>
            <p className="mb-10 text-sm lg:text-base font-Poppins text-third">
              {value.description}
            </p>

            <p className="text-[25px] lg:text-[50px] text-third font-semibold mb-[38px]">
              ${value.price}
              <span className="text-base lg:text-xl">/month</span>
            </p>
          </div>
          <div className=" h-[55%] pb-[30px] pt-[50px] px-10 flex flex-col justify-between">
            <ul className="flex flex-col gap-[30px]">
              {value?.service.map((res) => (
                <li
                  key={res}
                  className="flex items-center text-base lg:text-xl gap-x-4 font-Poppins text-primary"
                >
                  <TbCircleCheckFilled className="text-secondary" size={22} />{" "}
                  {res}
                </li>
              ))}
            </ul>
            <button
              className={`lg:max-w-full py-3 flex items-center gap-2 bg-gradient-to-r from-[#307BC4] to-[#274760] rounded-full sm:text-xs text-[10px] lg:text-base px-1 lg:px-0 font-medium text-third justify-center`}
            >
              Get Started <HiMiniArrowLongRight size={20} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardMembership;
