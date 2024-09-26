import Footer from "../components/fragments/footer/Index";
import Header from "../components/fragments/header/Index";
import HeroBanner from "../components/sections/departments/hero/Index";
import OurMedicalDepartments from "../components/sections/departments/ourMedicalDepartments/Index";
import YourHealthMatters from "../components/sections/departments/YourHealthMatters/Index";
import useScroll from "../hooks/useScroll";

const DepartmentsPages = () => {
  const scroll = useScroll();
  return (
    <>
      <Header
        classname={`fixed top-0 ${scroll > 0 && "bg-third"} transition-global`}
      />
      <HeroBanner />
      <OurMedicalDepartments />
      <YourHealthMatters />
      <Footer />
    </>
  );
};

export default DepartmentsPages;
