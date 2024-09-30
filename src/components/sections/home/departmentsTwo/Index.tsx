import SectionTitle from "../../../elements/SectionTitle";
import CardDepartmentsTwo from "./CardDepartmentsTwo";

const DepartmentsTwo = () => {
  return (
    <section className="pt-[50px] pb-[72px]">
      <div className="container px-4 max-w-7xl lg:px-0">
        <div className="mb-5 lg:mb-12">
          <SectionTitle>Departments</SectionTitle>
        </div>
        <div className="grid gap-10 pt-6 lg:gap-2 md:grid-cols-2 lg:grid-cols-4">
          <CardDepartmentsTwo />
        </div>
      </div>
    </section>
  );
};

export default DepartmentsTwo;
