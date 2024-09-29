import { Link, useLocation } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { dataNavbar } from "./types";
import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import useScroll from "../../../hooks/useScroll";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const router = useLocation();
  const scroll = useScroll()

  const handleIsOpen = (condition: boolean) => {
    setIsOpen(condition);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setNavbarOpen(false);
  }, [router.pathname]);

  useEffect(() => {
    setNavbarOpen(false)
  },[scroll])

  const url = ["", "departments", "blog", "detail"];

  const urlBgWhite = url.includes(router.pathname.split("/")[2 || 1])


  return (
    <header
      className={`w-full px-4 top-0 z-50 py-7 fixed transition-global ${
        urlBgWhite
          ? "bg-third"
          : scroll || navbarOpen
          ? "bg-white"
          : "bg-transparent"
      }`}
    >
      <div className="container lg:px-0 max-w-7xl">
        <nav className="flex items-center justify-between">
          <h2>CodeSans health</h2>
          <ul
            className={`items-center gap-4 text-base md:gap-12 font-Poppins text-primary flex sm:flex sm:flex-row flex-col sm:relative fixed sm:top-auto top-16 sm:right-auto right-1/2 sm:translate-x-0 translate-x-1/2 sm:bg-transparent bg-third sm:w-auto w-full sm:py-0 py-2 transition-global ${
              navbarOpen ? "block" : " hidden"
            }`}
          >
            {dataNavbar?.map((values) =>
              values.isMenu ? (
                <li
                  key={values.id}
                  className="relative"
                  onMouseEnter={() => handleIsOpen(true)}
                  onMouseLeave={() => handleIsOpen(false)}
                >
                  <Link to={values.url}>{values.title}</Link>
                  {isOpen && values.isMenu ? (
                    <div
                      className="absolute flex flex-col px-4 py-5 rounded bg-third -right-12 top-6 sm:border-none border border-primary z-50"
                      onMouseLeave={() => handleIsOpen(false)}
                    >
                      <Link to="/gallery">Gallery</Link>
                      <Link to="/departments">Departments</Link>
                    </div>
                  ) : null}
                </li>
              ) : (
                <li key={values.id} className="relative">
                  <Link to={values.url}>{values.title}</Link>
                </li>
              )
            )}
          </ul>
          <div className="flex items-center gap-4 text-primary">
            <CiSearch className="size-5 font-semibold" />
            <button
              className="block transition-global sm:hidden"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <RxCross2 className="size-5 font-semibold" />
              ) : (
                <HiOutlineMenu className="size-5 font-semibold" />
              )}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
