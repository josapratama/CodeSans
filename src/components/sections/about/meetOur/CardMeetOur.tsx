import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { dataCardMeetOur } from "./types";
import { Link } from "react-router-dom";

const CardMeetOur = () => {
  return (
    <>
      {dataCardMeetOur?.map((values) => (
        <div
        data-aos="flip-right"
          key={values.id}
          className="flex flex-col items-center justify-center px-16 text-center shadow-2xl pb-[70px] rounded-2xl shadow-secondary/20"
        >
          <div>
            <img src={values.image} alt={values.name} />
          </div>
          <h3 className="mb-2 text-2xl font-semibold">{values.name}</h3>
          <h4 className="mb-1 text-xl">{values.role}</h4>
          <p className="mb-5 text-lg text-black/50">{values.description}</p>
          <div className="grid grid-cols-3 gap-x-[18px]">
            <Link to="/about" className="p-3 rounded-full text-third bg-secondary/50">
              <FaFacebookF />
            </Link>
            <Link to="/about" className="p-3 rounded-full text-third bg-secondary/50">
              <FaLinkedinIn />
            </Link>
            <Link to="/about" className="p-3 rounded-full text-third bg-secondary/50">
              <FaTwitter />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardMeetOur;
