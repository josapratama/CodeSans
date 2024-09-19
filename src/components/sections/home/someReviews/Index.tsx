import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import SectionSubTitle from "../../../elements/SectionSubTitle";
import SectionTitle from "../../../elements/SectionTitle";
import CardSomeReviews from "./CardSomeReviews";
import { IconsAll } from "../../../../assets/icons";

const SomeReviews = () => {
  return (
    <section className="pt-[72px] pb-[112px]">
      <div className="container max-w-7xl">
        <div className="text-center mb-[72px]">
          <SectionTitle>Some Reviews</SectionTitle>
          <SectionSubTitle>OF OUR CLIENTS</SectionSubTitle>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative grid w-1/2 grid-rows-3 border-r-2 border-secondary gap-9">
            <CardSomeReviews />
          </div>
          <div className="flex items-start gap-x-[38px] w-1/2 ps-[72px]">
            <img src={IconsAll.quote} alt="Quote" />
            <div className="flex flex-col py-10 gap-y-[30px]">
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
