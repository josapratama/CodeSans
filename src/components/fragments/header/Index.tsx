import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 py-7 bg-[#F5F5F5]">
      <div className="container max-w-7xl">
        <nav className="flex items-center justify-between">
          <h2>CodeSans health</h2>
          <ul className="flex items-center gap-12 text-base font-Poppins text-primary">
            <li>
              <Link to="home">Home</Link>
            </li>
            <li>
              <Link to="about">About</Link>
            </li>
            <li>
              <Link to="find-doctor">Find Doctor</Link>
            </li>
            <li>
              <Link to="blog">Blog</Link>
            </li>
            <li>
              <Link to="pages">Pages</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <div className="flex items-center gap-4 text-primary">
            <CiSearch size={20} className="font-semibold" />
            <HiOutlineMenu size={20} className="font-semibold" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
