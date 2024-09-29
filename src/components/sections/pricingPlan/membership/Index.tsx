import SectionTitle from "../../../elements/SectionTitle";
import CardMembership from "./CardMembership";

const Membership = () => {
  return (
    <section className="pt-[50px] pb-[55px]">
      <div className="container px-4 max-w-7xl lg:px-0">
        <SectionTitle classname="mb-[70px] leading-tight text-center">
          Choose Your ProHealth <br /> Membership Plan
        </SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[50px]">
            <CardMembership />
        </div>
      </div>
    </section>
  );
};

export default Membership;
