import { Outlet } from "react-router-dom";
import Header from "./fragments/header/Index"; 
import Footer from "./fragments/footer/Index";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
