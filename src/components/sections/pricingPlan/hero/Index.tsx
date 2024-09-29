import { ImageGalleryHome } from "../../../../assets/images/gallery/Index";

const HeroBanner = () => {
  return (
    <div
      className="relative pt-32 mb-[55px] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${ImageGalleryHome.layerGallery})` }}
    >
      <img
        src={ImageGalleryHome.maskLayer}
        alt="mask"
        className="absolute top-0 right-0 w-full h-full"
      />
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-[70px]">
          <div className="w-full lg:w-[50%]">
            <img
            data-aos="fade-right"
              src={ImageGalleryHome.bannerGalleryPerson}
              alt="Person"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-6 -translate-y-10 w-full lg:w-[50%]">
            <h2 data-aos="fade-left" className=" md:text-4xl text-3xl lg:text-[53px] font-bold text-primary lg:leading-tight tracking-widest">
              Wellcome to <br />
              ProHealth Galler
            </h2>
            <p data-aos="fade-left" className="text-lg font-Poppins text-primary">
              The special moment of our hospital
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
