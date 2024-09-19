import { BsPlayCircle } from "react-icons/bs";
import { ImageHomeBanner } from "../../../../assets/images/home";
import SupportAndHelp from "./SupportAndHelp";

const HeroBanner = () => {
  return (
    <section
      className={`bg-center bg-cover bg-no-repeat mb-[210px]`}
      style={{ backgroundImage: `url(${ImageHomeBanner.layerBanner})` }}
    >
      <div className="container relative max-w-7xl">
        <div className="h-[856px] pt-[82px]">
          <h2 className="font-bold text-[66px] leading-tight text-primary mb-[30px]">
            Your Partner in <br />
            Health and Wellness
          </h2>
           <p className="text-lg text-primary mb-[110px]">
            We are commited to providing you with the best medical <br />
            and healhcare services to help you live healthier and <br /> happier
          </p>
          <img
            src={ImageHomeBanner.personBanner}
            alt="ZenWell Health"
            className="absolute bottom-0 -right-14"
          />
          <button className="flex items-center gap-x-[14px] text-lg text-primary">
            <BsPlayCircle className="w-[50px] h-[50px]" />
            See how we work
          </button>
          <SupportAndHelp />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
