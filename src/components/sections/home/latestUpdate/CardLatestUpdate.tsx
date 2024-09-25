import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { dataCardLatestUpdate } from "./types";
import { Link } from "react-router-dom";

const CardLatestUpdate = () => {
  return (
    <>
      {dataCardLatestUpdate?.map((values) => (
        <div key={values.id} className="rounded-xl lg:w-[408px] lg:h-[575px] shadow-2xl shadow-secondary/10">
          <div>
            <img src={values.image} alt={values.title} className="w-full" />
          </div>
          <div className="px-10 pt-[30px] pb-10">
            <div className="flex items-center gap-2 mb-7">
              <p className="text-base font-Poppins text-primary/50">
                {values.date}
              </p>
              <Link
                to="/"
                className="p-1 border rounded-full w-[30px] h-[30px] flex justify-center items-center border-secondary text-secondary"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                to="/"
                className="w-[30px] h-[30px] border rounded-full border-secondary flex justify-center items-center text-secondary"
              >
                {" "}
                <FaFacebookF />
              </Link>
              <Link
                to="/"
                className="flex items-center justify-center p-1 border rounded-full border-secondary text-secondary w-[30px] h-[30px]"
              >
                <FaTwitter />
              </Link>
            </div>
            <h3 className="mb-[18px] text-2xl font-semibold leading-8 text-primary">{values.title}</h3>
            <Link to={values.url} className="text-base font-medium text-primary">Learn More</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardLatestUpdate;
