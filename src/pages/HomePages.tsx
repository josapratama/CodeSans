import AboutUs from "../components/sections/home/aboutUs/Index";
import Appointment from "../components/sections/home/appointment/Index";
import SupportAndHelp from "../components/sections/home/cardSupport/Index";
import DepartmentsOne from "../components/sections/home/departmentsOne/Index";
import DepartmentsTwo from "../components/sections/home/departmentsTwo/Index";
import HealthFirst from "../components/sections/home/HealthFirst/Index";
import HeroBanner from "../components/sections/home/hero/Index";
// import SupportAndHelp from "../components/sections/home/hero/SupportAndHelp";
import LatestUpdate from "../components/sections/home/latestUpdate/Index";
import OurValues from "../components/sections/home/ourValues/Index";
import Partnert from "../components/sections/home/partnert/Index";
import SomeReviews from "../components/sections/home/someReviews/Index";
import UsualyAsked from "../components/sections/home/usualyAsked/Index";

const HomePages = () => {
  return (
    <>
      <HeroBanner />
      <SupportAndHelp />
      <OurValues />
      <AboutUs />
      <DepartmentsOne />
      <DepartmentsTwo />
      <SomeReviews />
      <HealthFirst />
      <LatestUpdate />
      <Appointment />
      <UsualyAsked />
      <Partnert />
    </>
  );
};

export default HomePages;
