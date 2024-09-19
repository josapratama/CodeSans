import { ImageHomeDepartments } from "../../../../assets/images/home";
import SectionTitle from "../../../elements/SectionTitle";
import CardDepartmentsOne from "./CardDepartmentsOne";

const DepartmentsOne = () => {
  return (
    <section className="py-[50px]">
      <div
        className="container relative bg-center bg-no-repeat bg-cover max-w-7xl rounded-2xl h-[400px] pt-20 mb-28"
        style={{
          backgroundImage: `url(${ImageHomeDepartments.layerDepartments})`,
        }}
      >
        <div className="text-center ">
          <SectionTitle>Departments</SectionTitle>
        </div>
        <div className="grid w-full grid-cols-5 translate-y-[85px] justify-items-center">
          <CardDepartmentsOne />
        </div>
      </div>
    </section>
  );
};

export default DepartmentsOne;
