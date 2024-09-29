import { ImageDepartmentsHeroBanner } from "../../../../assets/images/departments/Index";
import SectionTitle from "../../../elements/SectionTitle";

const YourHealthMatters = () => {
  return (
    <section className="lg:translate-y-[180px] ">
      <div className="container px-4 max-w-7xl lg:px-0">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="w-full lg:w-[40%] h-full mb-10">
            <img
              src={ImageDepartmentsHeroBanner.bannerPerson2}
              alt="Person"
              className="w-full h-full "
            />
          </div>
          <div className="w-full lg:w-[50%] text-start flex flex-col gap-5 -translate-y-12">
            <SectionTitle classname="leading-tight">
              Choose Your Plan and <br />
              Invest in Your Health <br />Today!
            </SectionTitle>
           
          </div>
        </div>
      </div>
    </section>
  );
};
export default YourHealthMatters;
