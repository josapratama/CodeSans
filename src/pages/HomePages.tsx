import Footer from "../components/fragments/footer/Index";
import Header from "../components/fragments/header/Index";
import AboutUs from "../components/sections/home/aboutUs/Index";
import Appointment from "../components/sections/home/appointment/Index";
import DepartmentsOne from "../components/sections/home/departmentsOne/Index";
import DepartmentsTwo from "../components/sections/home/departmentsTwo/Index";
import HealthFirst from "../components/sections/home/HealthFirst/Index";
import HeroBanner from "../components/sections/home/hero/Index";
import LatestUpdate from "../components/sections/home/latestUpdate/Index";
import OurValues from "../components/sections/home/ourValues/Index";
import Partnert from "../components/sections/home/partnert/Index";
import SomeReviews from "../components/sections/home/someReviews/Index";
import UsualyAsked from "../components/sections/home/usualyAsked/Index";

const HomePages = () => {
  return (
    <>
      <Header classname="sticky bg-third"/>
      <main>
        <HeroBanner />
        <OurValues />
        <AboutUs />
        <DepartmentsOne />
        <DepartmentsTwo />
        <SomeReviews />
        <HealthFirst />
        <LatestUpdate/>
        <Appointment />
        <UsualyAsked/>
        <Partnert />
      </main>
      <Footer />
    </>
  );
};

export default HomePages;
