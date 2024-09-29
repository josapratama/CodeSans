import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { psychologyData } from "../data";
import { DontLetYourHealth } from "../dontLet";

export const Psychology = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-24 lg:mt-24 mb-8 sm:mb-12 lg:mb-16">
        <p className="font-normal text-sm sm:text-base text-[#274760]/[.52] mb-2">
          Home / Blog
        </p>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary">
          Psychology and Life Style
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {psychologyData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.img}
            date={card.date}
            title={card.title}
          />
        ))}
      </div>

      <div className="mt-12 sm:mt-16 lg:mt-20 mb-16">
        <ul className="flex items-center justify-center lg:justify-start gap-2 flex-wrap">
          <li>
            <FaArrowLeftLong size={20} className="text-[#307BC4]" />
          </li>
          {[1, 2, 3, "...", 8].map((item, index) => (
            <li key={index}>
              <Button classname={item === 1 ? "text-white bg-[#307BC4]" : ""}>
                {item}
              </Button>
            </li>
          ))}
          <li>
            <FaArrowRight size={20} className="text-[#307BC4]" />
          </li>
        </ul>
      </div>

      <DontLetYourHealth />
    </div>
  );
};
