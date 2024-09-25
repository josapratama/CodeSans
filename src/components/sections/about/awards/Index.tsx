import SectionSubTitle from "../../../elements/SectionSubTitle";
import SectionTitle from "../../../elements/SectionTitle";
import CardAwards from "./CardAwards";

const Awards = () => {
  return (
    <section className="pt-5">
      <div className="container px-4 max-w-7xl lg:px-0">
        <div className="mb-8 text-center">
          <SectionSubTitle>AWARDS</SectionSubTitle>
          <SectionTitle classname="leading-[50px] mb-[18px]">
            Winning Awards and <br />
            Recognition
          </SectionTitle>
          <p>
            We have been recognized for our commitment to <br />excellence in
            healthcare.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-7">
            <CardAwards />
        </div>
      </div>
    </section>
  );
};

export default Awards;