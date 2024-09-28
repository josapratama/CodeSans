import SectionTitle from "../../../elements/SectionTitle";
import CardFindUsHere from "./CardFindUsHere";

const FindUsHere = () => {
  return (
    <section className="mb-52">
      <div className="container px-4 max-w-7xl lg:px-0">
        <SectionTitle classname="mb-[68px]">Find Us Here</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-[60px]">
          <CardFindUsHere />
        </div>
        <div>
          <iframe
          className="rounded-3xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5144.601680677549!2d106.79680603408283!3d-6.218579716956437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f749eaf101f5%3A0xcd62c14b7a08da30!2sGBK%20Arena!5e1!3m2!1sid!2sid!4v1727499411330!5m2!1sid!2sid"
            width="100%"
            height="500"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default FindUsHere;
