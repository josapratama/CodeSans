import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const { pathname } = useLocation();

  const breadName = pathname.split("/").slice(0, -1);
  breadName[0] = "Home"
  const pathName = breadName
    .map((name) =>name.charAt(0).toUpperCase() + name.slice(1))
    .join(" / ");

  return (
    <section className="container mt-24 flex flex-row justify-between items-center sm:px-16 px-4 sm:py-4 py-2 bg-third">
      <h2 className="sm:text-sm text-xs text-primary font-Poppins">
        {pathName}
      </h2>
      <div className="relative">
        <input
          type="text"
          className="sm:w-72 w-28 bg-white rounded-3xl sm:px-4 px-2 sm:py-2 py-1 text-sm font-Poppins text-primary border border-secondary"
          placeholder="Search Doctor"
        />
        <FaSearch className="sm:size-5 size-4 absolute top-2 sm:right-5 right-2" />
      </div>
    </section>
  );
}

export default BreadCrumbs