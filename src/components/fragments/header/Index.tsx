import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { dataNavbar } from "./types";
import { useState } from "react";

const Header = (props: { classname?: string }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleIsOpen = (condition: boolean) => {
    setIsOpen(condition);
  };
  return (
    <header className={`w-full top-0 z-50 py-7 ${props.classname}`}>
      <div className="container px-4 lg:px-0 max-w-7xl">
        <nav className="flex items-center justify-between">
          <h2>CodeSans health</h2>
          <ul className="items-center hidden gap-4 text-base md:gap-12 font-Poppins text-primary sm:flex">
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
                      className="absolute px-4 py-5 bg-third -right-6 top-6"
                      onMouseLeave={() => handleIsOpen(false)}
                    >
                      <Link to="/gallery">Gallery</Link>
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
            <CiSearch size={20} className="font-semibold" />
            <button className="block sm:hidden">
              <HiOutlineMenu size={20} className="font-semibold" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
