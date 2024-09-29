import { ImageDepartmentsHeroBanner } from "../../../../assets/images/departments/Index";
import SectionTitle from "../../../elements/SectionTitle";

const YourHealthMatters = () => {
  return (
    <section className="lg:translate-y-[180px] ">
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="w-full lg:w-[40%] h-full mb-10">
            <img
            data-aos="fade-right"
              src={ImageDepartmentsHeroBanner.bannerPerson2}
              alt="Person"
              className="w-full h-full "
            />
          </div>
          <div className="w-full lg:w-[50%] text-start flex flex-col gap-5 -translate-y-12">
            <SectionTitle dataAos="fade-left">
              Don't let Your Health <br />
              Take a Backseat!
            </SectionTitle>
            <p data-aos="fade-left" className="text-xl font-medium text-primary/50 font-Poppins">
              Schedule an appointment with one of our experienced <br />
              medical professionals today!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default YourHealthMatters;
