import SectionTitle from "../../../elements/SectionTitle";
import CardDepartmentsTwo from "./CardDepartmentsTwo";

const DepartmentsTwo = () => {
  return (
    <section className="pt-[50px] pb-[72px]">
      <div className="container max-w-7xl">
        <div className="mb-12">
          <SectionTitle>Departments</SectionTitle>
        </div>
        <div className="grid grid-cols-4 gap-2 pt-6">
          <CardDepartmentsTwo />
        </div>
      </div>
    </section>
  );
};

export default DepartmentsTwo;
