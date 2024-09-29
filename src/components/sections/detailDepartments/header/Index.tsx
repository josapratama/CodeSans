import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const HeaderDetailDepartments = () => {
  return (
    <div className="pt-[80px] mb-[57px] ">
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="flex items-center justify-between py-6 ">
          <div className="text-xs md:text-base sm:text-sm lg:text-xl font-Poppins text-primary/50">
            <Link data-aos="zoom-in-up" data-aos-once="true" to="/" className="hover:text-secondary">Home</Link> /{" "}
            <Link data-aos="zoom-in-up" data-aos-once="true" to="/departments" className="hover:text-secondary">Departments</Link> /{" "}
            <Link data-aos="zoom-in-up" data-aos-once="true" to="/department-detail" className="hover:text-secondary">Department-detail</Link>
          </div>
          <div data-aos="fade-left" className="text-base font-Poppins text-primary/50 lg:min-w-[360px] relative px-5 py-3 overflow-hidden border border-secondary rounded-3xl">
            <input type="text" placeholder="Search Doctors" className="w-full h-full bg-transparent outline-none" />
            <CiSearch className="absolute font-semibold -translate-y-1/2 right-3 size-5 top-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderDetailDepartments;
