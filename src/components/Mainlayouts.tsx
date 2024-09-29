import { Outlet, useLocation } from "react-router-dom";
import Header from "./fragments/header/Index";
import Footer from "./fragments/footer/Index";
import "aos/dist/aos.css";
import Aos from "aos";

import { useEffect } from "react";

const MainLayout = () => {
  const { pathname } = useLocation();

  const titlePage = pathname.split("/")[1] == "" ? "CodeSans Health" : `CodeSans | ${pathname.split("/").length == 2 ? pathname.split("/")[1].charAt(0).toUpperCase() + pathname.split("/")[1].slice(1) : pathname.split("/").slice(0, -1).map((name) => name.charAt(0).toUpperCase() + name.slice(1)).join(" ")}`
  
  document.title = titlePage

  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1000,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
