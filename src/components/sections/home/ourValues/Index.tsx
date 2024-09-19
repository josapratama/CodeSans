import SectionTitle from "../../../elements/SectionTitle";
import CardOurValues from "./CardOurValues";

const OurValues = () => {
  return (
    <section className="pb-[25px]">
      <div className="container max-w-7xl">
        <div className="text-center mb-[72px]">
          <SectionTitle>Our Values</SectionTitle>
        </div>
        <CardOurValues />
      </div>
    </section>
  );
};

export default OurValues;
