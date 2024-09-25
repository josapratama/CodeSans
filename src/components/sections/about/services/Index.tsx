import SectionSubTitle from "../../../elements/SectionSubTitle";
import SectionTitle from "../../../elements/SectionTitle";
import CardAbout from "./CardAbout";

const Services = () => {
  return (
    <section className="pt-[50px] pb-9">
      <div className="container px-4 max-w-7xl lg:px-0">
        <SectionSubTitle classname="text-center lg:text-start">SERVICES</SectionSubTitle>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-x-6 gap-y-2">
          <div className="text-center sm:col-span-2 lg:col-span-1 lg:text-start">
            <SectionTitle>Provide Our Best Services</SectionTitle>
          </div>
          <CardAbout />
        </div>
      </div>
    </section>
  );
};
export default Services;
