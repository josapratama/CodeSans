import SectionSubTitle from "../../../elements/SectionSubTitle";
import SectionTitle from "../../../elements/SectionTitle";
import CardUsualyAsked from "./CardUsualyAsked";

const UsualyAsked = () => {
  return (
    <section className="pb-[75px] pt-[50px]">
      <div className="container max-w-3xl">
        <div className="mb-[70px] text-center">
            
          <SectionSubTitle>WHAT PEOPLE</SectionSubTitle>
          <SectionTitle>Usualy Asked</SectionTitle>
        </div>
        <div className="grid grid-rows-5 gap-5">
          <CardUsualyAsked />
        </div>
      </div>
    </section>
  );
};

export default UsualyAsked;
