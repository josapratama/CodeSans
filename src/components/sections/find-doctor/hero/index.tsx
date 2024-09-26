import { ImageDepartmentsHeroBanner } from "../../../../assets/images/departments/Index";
import { ImageGalleryHome } from "../../../../assets/images/gallery/Index";
import SectionTitle from "../../../elements/SectionTitle";

const HeroBanner = () => {
  return (
    <div
      className="relative pt-32 mb-[50px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${ImageGalleryHome.layerGallery})` }}
    >
      <img
        src={ImageGalleryHome.maskLayer}
        alt="mask"
        className="absolute top-0 right-0 w-full h-full "
      />
      <div className="container pt-4 max-w-7xl lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start mx-4">
          <div className="flex flex-col sm:gap-6 gap-4 -translate-y-10 w-full lg:w-[50%]">
            <SectionTitle classname="leading-tight">
              Introduce You to
              <br /> Our Experts
            </SectionTitle>
            <p className="text-lg font-Poppins text-primary">
              The list of certified doctors with years of <br /> professional
              experiences
            </p>
          </div>

          <div className="w-full lg:w-[50%]">
            <img
              src={ImageDepartmentsHeroBanner.bannerPerson}
              alt="Person"
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
