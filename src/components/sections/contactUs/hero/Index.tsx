import { ImageContactUsHero } from "../../../../assets/images/contactUs/Index";
import { ImageGalleryHome } from "../../../../assets/images/gallery/Index";
import SectionTitle from "../../../elements/SectionTitle";

const HeroBanner = () => {
  return (
    <div
      className="py-20 bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${ImageGalleryHome.layerGallery})` }}
    >
      <div className="container px-4 max-w-7xl lg:px-0">
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full lg:w-1/2">
            <SectionTitle dataAos="fade-right" classname="mb-6">Contact Us</SectionTitle>
            <p data-aos="fade-right" className="text-xl font-Poppins text-primary">Kindly reach us to get the fastest response and treatment</p>
          </div>
          <div className="w-full lg:w-1/2">
            <img data-aos="fade-left" src={ImageContactUsHero.bannerContactUsPerson} alt="" className="translate-y-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
