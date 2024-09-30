import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { Card } from "../components/card";
import { Button } from "../components/button";
import { psychologyData } from "../data";
import { DontLetYourHealth } from "../dontLet";
import { Link } from "react-router-dom";

export const Psychology = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-24 mb-8 lg:mt-24 sm:mb-12 lg:mb-16">
        <p data-aos="fade-right" data-aos-once="true" className="font-normal text-sm sm:text-base text-[#274760]/[.52] mb-2">
          <Link className="hover:text-secondary " to="/">Home</Link> / <Link className="hover:text-secondary " to="/blog">Blog</Link>
        </p>
        <h2 data-aos="fade-right" data-aos-once="true" className="text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl text-primary">
          Psychology and Life Style
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8">
        {psychologyData.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.img}
            date={card.date}
            title={card.title}
          />
        ))}
      </div>

      <div className="mt-12 mb-16 sm:mt-16 lg:mt-20">
        <ul className="flex flex-wrap items-center justify-center gap-2 lg:justify-start">
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
