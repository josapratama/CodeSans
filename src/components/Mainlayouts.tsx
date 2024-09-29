import { Outlet } from "react-router-dom";
import Header from "./fragments/header/Index"; 
import Footer from "./fragments/footer/Index";
import "aos/dist/aos.css"
import Aos from "aos"; 

import { useEffect } from "react";

const MainLayout = () => {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
      easing: "ease-in-out"
    })
  }, [])
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
