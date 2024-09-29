import { FaPhoneAlt } from "react-icons/fa";
import { FaAward, FaCalendarDays, FaGraduationCap } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { IoTime } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";
import { useParams } from "react-router-dom";
import { doctors } from "../../find-doctor/type";

const Header = () => {
  const { id } = useParams()
  const doctorDetail = doctors.find((value) => value.id == parseInt(id as string));
  console.log(doctorDetail)

  return (
    <section className="container bg-third relative sm:h-[1000px] h-[1650px] my-5">
      <div className="w-full h-[320px] bg-secondary"></div>
      <div className="container flex sm:flex-row flex-col justify-center sm:gap-20 gap-10 items-start absolute top-16 right-1/2 translate-x-1/2">
        <div className="w-full p-2 flex flex-col justify-center items-center gap-12">
          <img
            src={doctorDetail?.image}
            alt=""
            className="bg-third rounded-2xl sm:size-auto size-72  "
          />
          <div className="flex flex-col gap-4 px-4">
            <h3 className="flex flex-row items-center gap-4 sm:text-xl text-base">
              <FaCalendarDays className="sm:size-6 size-4 text-secondary" />
              Contact Info
            </h3>
            <div className="space-y-4">
              <h4 className="flex flex-row items-center gap-4 sm:text-base text-sm">
                <FaPhoneAlt className="sm:size-4 size-3 text-secondary" />
                {doctorDetail?.contactInfo.phone}
              </h4>
              <h4 className="flex flex-row items-center gap-4 sm:text-base text-sm">
                <TfiEmail className="sm:size-4 size-3 text-secondary" />
                {doctorDetail?.contactInfo.email}
              </h4>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="flex flex-row items-center gap-4 sm:text-xl text-base">
              <FaCalendarDays className="sm:size-6 size-4 text-secondary" />
              Appoinment Schedules
            </h3>
            <div className="space-y-4 m-2 p-4 rounded-xl shadow-md">
              <h4 className="flex flex-row items-center justify-between sm:gap-0 gap-6 sm:text-base text-xs">
                Monday
                <span className="flex flex-row items-center gap-2 sm:text-base text-xs">
                  <IoTime className="size-4 text-secondary" />
                  09.00 - 12.00
                </span>
              </h4>
              <h4 className="flex flex-row items-center justify-between sm:gap-0 gap-6 sm:text-base text-xs">
                Wednesday
                <span className="flex flex-row items-center gap-2 sm:text-base text-xs">
                  <IoTime className="size-4 text-secondary" />
                  15.00 - 18.00
                </span>
              </h4>
              <h4 className="flex flex-row items-center justify-between sm:gap-0 gap-6 sm:text-base text-xs">
                Friday
                <span className="flex flex-row items-center gap-2 sm:text-base text-xs">
                  <IoTime className="size-4 text-secondary" />
                  09.00 - 12.00
                </span>
              </h4>
            </div>
          </div>
        </div>
        <div className="sm:w-[1000px] w-screen px-4 flex flex-col sm:gap-6 gap-0 justify-start">
          {/* title */}
          <div className="" >
            <h1 className="text-3xl font-bold font-Poppins text-black/90 ">
              {doctorDetail?.name}
            </h1>
            <h3 className="text-xl font-medium sm:mt-4 mt-2 sm:mb-8 mb-4">
              {doctorDetail?.role}
            </h3>
            <p className="text-base font-normal">
              {doctorDetail?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea neque voluptas incidunt, harum quam sapiente eum amet illo expedita distinctio.
            </p>
          </div>
          <div className="flex flex-col gap-4 px-4 mt-14">
            <h3 className="flex flex-row items-center gap-4 sm:text-xl text-lg">
              <FaGraduationCap className="sm:size-6 size-4 text-secondary" />
              Degrees
            </h3>
            <div className="flex flex-col px-2 gap-2">
              {doctorDetail?.degrees.map((degree) => {
                return (
                  <p className="flex flex-row gap-2">
                    <GoDotFill className="text-secondary" />
                    {degree}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 mt-14">
            <h3 className="flex flex-row items-center gap-4 sm:text-xl text-lg">
              <MdOutlineWork className="sm:size-6 size-4 text-secondary" />
              Experiences
            </h3>
            <div className="flex flex-col px-2 gap-2">
              {doctorDetail?.experiences.map((exp) => {
                return (
                  <p className="flex flex-row gap-2">
                    <GoDotFill className="text-secondary" />
                    {exp}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-4 px-4 mt-14">
            <h3 className="flex flex-row items-center gap-4 sm:text-xl text-lg">
              <FaAward className="sm:size-6 size-4 text-secondary" />
              Award/Achievements
            </h3>
            <div className="flex flex-col px-2 gap-2">
              <p className="flex flex-row gap-2">
                <GoDotFill className="text-secondary" />
                Fellow of the American Psychiatric Association (FAPA).
              </p>
              <p className=" flex flex-row gap-2">
                <GoDotFill className="text-secondary" />
                Recognized for research contributions with grants from the
                National Institute of Mental Health (NIMH).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
