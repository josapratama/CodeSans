import { ImageGalleryWellnesAtTheForefront } from "../../../../assets/images/gallery/Index";
import SectionTitle from "../../../elements/SectionTitle";

const CloseSection = () => {
  return (
    <section className=" translate-y-[170px]">
      <div className="container px-4 max-w-7xl lg:px-0">
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row">
          <div className="w-full lg:w-[55%] text-start flex flex-col gap-5 -translate-y-12">
            <SectionTitle>
              Don't let Your Health <br />
              Take a Backseat!
            </SectionTitle>
            <p className="text-xl font-medium text-primary/50 font-Poppins">
              Schedule an appointment with one of our experienced <br />
              medical professionals today!
            </p>
          </div>
          <div className="w-full lg:w-[35%] h-full">
            <img
              src={
                ImageGalleryWellnesAtTheForefront.bannerWellnesAtTheForefront
              }
              alt="Person"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CloseSection