import SectionSubTitle from "../../../elements/SectionSubTitle";
import SectionTitle from "../../../elements/SectionTitle";
import CardLatestUpdate from "./CardLatestUpdate";

const LatestUpdate = () => {
  return (
    <section className="pt-[35px] pb-5">
      <div className="container px-4 max-w-7xl lg:px-0">
        <div className="text-center mb-[105px]">
            <SectionSubTitle>BLOG POST</SectionSubTitle>
            <SectionTitle>Latest Update</SectionTitle>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 place-items-center lg:grid-cols-3 lg:gap-7">
            <CardLatestUpdate />
        </div>
      </div>
    </section>
  );
};

export default LatestUpdate;
