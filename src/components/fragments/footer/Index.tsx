import { Link } from "react-router-dom";
import { ImageHomeFooter } from "../../../assets/images/home";
import { listFooterOne, listFooterThree, listFooterTwo } from "./types";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="relative sm:pt-[165px] pt-32 sm:mt-0 mt-16 bg-cover h-auto w-full bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${ImageHomeFooter.layerFooter})` }}
    >
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <img
          src={ImageHomeFooter.logoFooter}
          alt="Logo footer"
<<<<<<< HEAD
          className="absolute sm:size-96 size-72 sm:-top-32 -top-24 right-1/2 translate-x-1/2"
=======
          className="absolute translate-x-1/2 sm:size-96 size-72 sm:-top-48 -top-20 right-1/2"
>>>>>>> beb0fcd0d6e6f9649da92bcd61f713ce746991b3
        />

        {/* <div className="flex flex-col md:flex-row items-start justify-around gap-5 lg:gap-[50px] py-36"> */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:gap-[50px] md:py-36 py-20 md:px-20 sm:px-10 px-5 md:gap-10 gap-6 ">
          <div>
            <h2 className="lg:mb-[63px] mb-[30px]">CodeSans health</h2>
            <ul className="flex flex-col gap-y-[13px]">
              {listFooterOne?.map((values) => (
                <li data-aos="fade-down" key={values.id} className="flex items-center gap-x-[19px]">
                  <p className="p-2 text-sm rounded-full bg-secondary">
                    <values.icon className=" text-third" />
                  </p>
                  <p>
                    <span className="text-sm lg:text-base font-Poppins text-primary">
                      {" "}
                      {values.title}{" "}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              {listFooterTwo?.map((values) => (
                <li
                data-aos="fade-down"
                  key={values.id}
                  className="text-sm lg:text-base text-primary font-Poppins"
                >
                  <Link to={values.url}>{values.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="flex flex-col gap-5">
              {listFooterThree?.map((values) => (
                <li
                data-aos="fade-down"
                  key={values.id}
                  className="text-sm lg:text-base text-primary font-Poppins"
                >
                  <Link to={values.url}>{values.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 data-aos="fade-left" className="text-xl lg:text-[30px] font-bold text-primary mb-3">
              Be Our Subscribers
            </h3>
            <p data-aos="fade-left" className="text-sm lg:text-base mb-7 font-Poppins text-primary">
              To get the latest news about health from our experts
            </p>
            <div data-aos="zoom-in-up" className="py-[18px] ps-5 border flex items-center rounded-full relative h-[60px] border-primary/50">
              <input
                type="text"
                className="text-base bg-transparent outline-none text-primary/50 font-Poppins"
                placeholder="example@email.com"
              />
              <button
                className={`absolute px-4 right-1 h-[90%] flex items-center gap-2 bg-gradient-to-r from-[#307BC4] to-[#274760] rounded-full text-base font-medium text-third justify-center`}
              >
                Submit
                <HiMiniArrowLongRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[37px] bg-secondary w-full">
        <div className="flex items-center justify-between px-4 lg:px-20">
          <div className="flex items-center gap-2 w-full lg:gap-[30px]">
            <h3 className="text-[10px] md:text-base text-third">Follow Us</h3>
            <div className="flex items-center gap-2 lg:gap-4">
              <Link
                to="/"
                className="p-1 rounded-full bg-third/50 text-secondary"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="/"
                className="p-1 rounded-full bg-third/50 text-secondary"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="/"
                className="p-1 rounded-full bg-third/50 text-secondary"
              >
                <FaInstagram />
              </Link>
            </div>
          </div>
          <p className="text-[10px] w-full md:text-base text-start md:text-end text-third/50 font-Poppins">
            Copyright © 2024 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
