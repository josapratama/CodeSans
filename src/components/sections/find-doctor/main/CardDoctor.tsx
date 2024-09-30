import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Doctor } from "../type";

const CardDoctor = ({data}: {
  data: Doctor[]
}) => {
  return (
    <>
      {data?.map((doctor, index) => {
        return (
          <Link
          data-aos="zoom-in-up"
          to={`/doctor/detail/${doctor.id}`}
            key={index}
            className="flex flex-col items-center justify-center px-16 text-center shadow-2xl pb-[70px] rounded-2xl shadow-secondary/20"
          >
            <div>
              <img src={doctor.image} alt={doctor.name} />
            </div>
            <h3 className="mb-2 text-2xl font-semibold">{doctor.name}</h3>
            <h4 className="mb-1 text-lg">{doctor.role}</h4>
            <p className="mb-5 text-lg text-black/50">{doctor.description}</p>
            <div className="grid grid-cols-3 gap-x-[18px]">
              <Link
                to="/about"
                className="p-3 rounded-full text-third bg-secondary/50"
              >
                <FaFacebookF />
              </Link>
              <Link
                to="/about"
                className="p-3 rounded-full text-third bg-secondary/50"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="/about"
                className="p-3 rounded-full text-third bg-secondary/50"
              >
                <FaTwitter />
              </Link>
            </div>
          </Link>
        );
      })}
    </>
  );
}

export default CardDoctor