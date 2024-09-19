import { HiArrowRight } from "react-icons/hi";
import { ImageHomeAboutUs } from "../../../../assets/images/home";
import SectionSubTitle from "../../../elements/SectionSubTitle";
import SectionTitle from "../../../elements/SectionTitle";

const AboutUs = () => {
  return (
    <section className="pt-[25px] pb-[50px] relative">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-2 place-items-start gap-[47px] ">
          <img
            src={ImageHomeAboutUs.layerAbout}
            alt="layer about us"
            className="absolute top-0 right-0 w-full h-full"
          />
          <div>
            <img
              src={ImageHomeAboutUs.bannerAbout}
              alt="About us"
              className=""
            />
          </div>
          <div className="mt-[125px] flex flex-col gap-[72px]">
            <div>
              <SectionTitle>About Us</SectionTitle>
              <SectionSubTitle>PRO HEALTH</SectionSubTitle>
            </div>
            <div className="flex gap-2">
              <div>
                <HiArrowRight className="w-[36px] h-[26px] text-primary" />
              </div>
              <div className="flex flex-col gap-6">
                <h3 className="text-2xl leading-tight text-primary/50">
                  ProHealth is a team of experienced <br />
                  medical professionals
                </h3>
                <p className="text-lg font-Poppins text-primary/50">
                  Dedicated to providing top-quality healthcare services. We
                  believe in a holistic approach to healthcare that focuses on
                  treating the whole person, not just the illness or symptoms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
