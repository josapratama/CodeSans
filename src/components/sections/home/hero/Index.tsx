import { BsPlayCircle } from "react-icons/bs";
import { ImageHomeBanner } from "../../../../assets/images/home";
import SupportAndHelp from "./SupportAndHelp";

const HeroBanner = () => {
  return (
    <div
      className={`bg-center bg-cover bg-no-repeat sm:pt-20 pt-10 mb-[210px]`}
      style={{ backgroundImage: `url(${ImageHomeBanner.layerBanner})` }}
    >
      <div className="container relative max-w-7xl lg:px-0 px-4">
        <div className="sm:h-[856px] h-[700px] pt-[82px]">
          <h2 className="font-bold md:text-4xl text-3xl lg:text-[66px] lg:leading-tight text-primary md:mb-[30px] sm:mb-[20px] mb-[10px]">
            Your Partner in <br />
            Health and Wellness
          </h2>
           <p className="md:text-lg text-base text-primary sm:mb-[110px] mb-[50px]">
            We are commited to providing you with the best medical <br />
            and healhcare services to help you live healthier and <br /> happier
          </p>
          <img
            src={ImageHomeBanner.personBanner}
            alt="ZenWell Health"
            className="absolute bottom-0 right-0 lg:-right-14"
          />
          <button className="flex items-center gap-x-[14px] text-lg text-primary">
            <BsPlayCircle className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]" />
            See how we work
          </button>
          <SupportAndHelp />
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
