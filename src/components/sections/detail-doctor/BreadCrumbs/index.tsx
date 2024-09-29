import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  const breadName = pathname.split("/").slice(0, -1);
  breadName[0] = "Home";
  const pathName = breadName
    .map((name) => name.charAt(0).toUpperCase() + name.slice(1))
    .join(" / ");

  return (
    <section className="container flex flex-row items-center justify-between px-4 py-2 mt-24 sm:px-16 sm:py-4 bg-third">
      <h2 className="text-xs sm:text-sm text-primary font-Poppins">
        {pathName}
      </h2>
      <div className="relative">
        <input
          type="text"
          className="px-2 py-1 text-sm bg-white border sm:w-72 w-28 rounded-3xl sm:px-4 sm:py-2 font-Poppins text-primary border-secondary"
          placeholder="Search Doctor"
        />
        <FaSearch className="absolute sm:size-5 size-4 top-2 sm:right-5 right-2" />
      </div>
    </section>
  );
};

export default BreadCrumbs;
