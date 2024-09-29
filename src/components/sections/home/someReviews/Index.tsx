import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import SectionSubTitle from "../../../elements/SectionSubTitle";
import SectionTitle from "../../../elements/SectionTitle";
import CardSomeReviews from "./CardSomeReviews";
import { IconsAll } from "../../../../assets/icons";

const SomeReviews = () => {
  return (
    <section className="pt-[72px] pb-[112px]">
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="text-center mb-[72px]">
          <SectionTitle>Some Reviews</SectionTitle>
          <SectionSubTitle>OF OUR CLIENTS</SectionSubTitle>
        </div>
        <div className="flex flex-col justify-center gap-10md:items-center md:flex-row md:gap-0">
          <div className="relative grid w-full grid-rows-3 md:w-1/2 md:border-r-2 border-secondary gap-9">
            <CardSomeReviews />
          </div>
          <div className="flex flex-col md:flex-row items-start md:gap-[38px] w-full md:w-1/2 md:ps-[72px]">
            <img
            data-aos="flip-right"
              src={IconsAll.quote}
              alt="Quote"
              className="w-8 h-8 md:w-16 md:h-10"
            />
            <div data-aos="fade-left" className="flex flex-col py-10 gap-y-[30px]">
              <p className="text-base font-Poppins text-primary/50">
                The pediatrician was great with him and made him feel at ease,
                and the entire staff was kind and attentive. I recently had to
                bring my child to ProHealth for a minor injury, and I was so
                impressed with the care he received.
              </p>
              <div className="flex items-center gap-0.5 text-secondary">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomeReviews;
