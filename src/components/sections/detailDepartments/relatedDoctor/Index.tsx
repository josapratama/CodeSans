import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import SectionTitle from "../../../elements/SectionTitle";
import { Link } from "react-router-dom";
import { CardOurMedicalDepartments } from "../../departments/ourMedicalDepartments/types";
import { IoMdTime } from "react-icons/io";
import { BsTelephone } from "react-icons/bs";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
  HiOutlineChat,
} from "react-icons/hi";
import { useState } from "react";

const RelatedDoctor = (props: { data?: CardOurMedicalDepartments }) => {
  const { data } = props;
  const [viewDoctor, setViewDoctor] = useState<boolean>(false);
  const selectedDoctorIndex = viewDoctor ? 1 : 0;
  const doctor = data?.avaliableDoctor[selectedDoctorIndex] || {
    name: "No Doctor Available",
    image: "",
    experiences: [],
    degrees: [],
  };

  const experience = doctor?.experiences?.[0] || "No Experience";
  const degrees = doctor?.degrees?.[0] || "No Degree";
  return (
    <section className="pt-[42px] pb-[50px]">
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="flex flex-col gap-10 mb-5 lg:flex-row">
          <div data-aos="fade-right" className="lg:w-1/2 bg-gradient-to-b from-[#ADDEE8] from-80% to-[#4494E6] rounded-3xl">
            <img
              src={doctor?.image}
              alt={doctor?.name}
              className="w-full h-full"
            />
          </div>
          <div className="lg:w-1/2">
            <SectionTitle dataAos="fade-down" classname="leading-tight text-center lg:text-start mb-28">
              Related <br /> Doctor
            </SectionTitle>
            <div className="overflow-hidden lg:-translate-x-48 rounded-xl">
              <div  data-aos="flip-left" className="py-5 px-7 bg-third ">
                <h3 className="mb-5 text-xl font-semibold md:text-3xl text-primary">
                  {doctor?.name}
                </h3>
                <h4 className="mb-3 text-xl md:text-xl font-Poppins text-primary">
                  {degrees}
                </h4>
                <p className="text-sm md:text-base text-primary/50 font-Poppins mb-[30px]">
                  With experience in managing complex <br /> {experience}
                </p>
                <div className="flex items-center gap-1 lg:gap-4">
                  <Link
                    to=""
                    className="p-2 rounded-full bg-secondary text-third"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    to=""
                    className="p-2 rounded-full bg-secondary text-third"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    to=""
                    className="p-2 rounded-full bg-secondary text-third"
                  >
                    <FaTwitter />
                  </Link>
                </div>
              </div>
              <div data-aos="flip-right" className="flex items-center py-5 text-xs sm:text-sm md:text-base bg-secondary px-7 text-third font-Poppins">
                <div className="flex items-center flex-1 gap-1 lg:gap-10">
                  <h4 className="flex items-center gap-1 md:gap-4">
                    <IoMdTime />
                    Avaibility
                  </h4>
                  <h4 className="flex items-center gap-1 md:gap-4">
                    <BsTelephone />
                    Call
                  </h4>
                  <h4 className="flex items-center gap-1 md:gap-4">
                    <HiOutlineChat />
                    Chat
                  </h4>
                </div>
                <button className="flex items-center gap-3">
                  Booking <HiOutlineArrowNarrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end gap-2 ">
          <button
            onClick={() => setViewDoctor((doctor) => !doctor)}
            className="p-1 border rounded-full border-secondary text-secondary"
          >
            <HiOutlineArrowNarrowLeft />
          </button>
          <button
            onClick={() => setViewDoctor((doctor) => !doctor)}
            className="p-1 border rounded-full border-secondary text-secondary"
          >
            <HiOutlineArrowNarrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RelatedDoctor;
