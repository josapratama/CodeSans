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
            <SectionTitle classname="mb-6">Contact Us</SectionTitle>
            <p className="text-xl font-Poppins text-primary">Kindly reach us to get the fastest response and treatment</p>
          </div>
          <div className="w-full lg:w-1/2">
            <img src={ImageContactUsHero.bannerContactUsPerson} alt="" className="translate-y-20" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
