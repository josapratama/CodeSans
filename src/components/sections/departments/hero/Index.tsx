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
      <div className="container px-4 py-20 max-w-7xl lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-[70px]">
          <div className="flex flex-col gap-6 -translate-y-10 w-full lg:w-[50%]">
            <SectionTitle classname="leading-tight">
              Get to Know <br />
              ProHealth Departments
            </SectionTitle>
            <p className="text-lg font-Poppins text-primary">
              At ProHealth, we affer a wide range of medical and healthcare{" "}
              <br />
              service that are designed to meet your individual needs and <br />
              help you achieve optimal health.
            </p>
          </div>

          <div className="w-full lg:w-[50%]">
            <img
              src={ImageDepartmentsHeroBanner.bannerPerson}
              alt="Person"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
