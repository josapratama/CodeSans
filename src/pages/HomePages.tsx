import Header from "../components/fragments/header/Index";
import AboutUs from "../components/sections/home/aboutUs/Index";
import DepartmentsOne from "../components/sections/home/departmentsOne/Index";
import DepartmentsTwo from "../components/sections/home/departmentsTwo/Index";
import HealthFirst from "../components/sections/home/HealthFirst/Index";
import HeroBanner from "../components/sections/home/hero/Index";
import OurValues from "../components/sections/home/ourValues/Index";
import SomeReviews from "../components/sections/home/someReviews/Index";

const HomePages = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <OurValues />
        <AboutUs />
        <DepartmentsOne />
        <DepartmentsTwo />
        <SomeReviews />
        <HealthFirst />
      </main>
    </>
  );
};

export default HomePages;
