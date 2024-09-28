import Aos from "aos";
import { useEffect } from "react";
import { BsPlayCircle } from "react-icons/bs";
import { ImageHomeBanner } from "../../../../assets/images/home";

const HeroBanner = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
      easing: "ease-in-out"
    })
  }, [])
  return (
    <div
      className={`bg-center bg-cover bg-no-repeat sm:pt-20 pt-10`}
      style={{ backgroundImage: `url(${ImageHomeBanner.layerBanner})` }}
    >
      <div className="container relative px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="sm:h-[856px] h-[700px] pt-[82px]">
          <h2 data-aos="fade-right" className="font-bold md:text-4xl text-3xl lg:text-[66px] lg:leading-tight text-primary md:mb-[30px] sm:mb-[20px] mb-[10px]">
            Your Partner in <br />
            Health and Wellness
          </h2>
           <p data-aos="fade-right" className="md:text-lg text-base text-primary sm:mb-[110px] mb-[50px]">
            We are commited to providing you with the best medical <br />
            and healhcare services to help you live healthier and <br /> happier
          </p>
          <img
          data-aos="fade-left"
            src={ImageHomeBanner.personBanner}
            alt="ZenWell Health"
            className="absolute right-0 scale-95 -bottom-4 lg:-right-5"
          />
          <button className="flex items-center gap-x-[14px] text-lg text-primary">
            <BsPlayCircle className="lg:w-[50px] w-[30px] h-[30px] lg:h-[50px]" />
            See how we work
          </button>
          {/* <SupportAndHelp /> */}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
