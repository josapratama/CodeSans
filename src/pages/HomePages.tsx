import Header from "../components/fragments/header/Index";
import AboutUs from "../components/sections/home/aboutUs/Index";
import Departments from "../components/sections/home/departments/Index";
import HeroBanner from "../components/sections/home/hero/Index";
import OurValues from "../components/sections/home/ourValues/Index";

const HomePages = () => {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <OurValues />
        <AboutUs />
        <Departments />
      </main>
    </>
  );
};

export default HomePages;
