import { dataCardSomeReviews } from "./types";

const CardSomeReviews = () => {
  return (
    <>
      {dataCardSomeReviews?.map((values, index) => (
        <div
          key={values.id}
          className={` flex w-full lg:w-[403px] h-[120px] items-center gap-5 py-5 rounded-2xl px-9 ${
            index % 2 === 1 ? "md:ml-[110px] bg-third" : ""
          }`}
        >
          <img data-aos="fade-right" src={values.avatar} alt={values.name} />
          <div data-aos='fade-right'>
            <h3 className="text-xl font-semibold text-primary">
              {values.name}
            </h3>
            <p className="text-lg font-Poppins text-primary">{values.origin}</p>
          </div>
          <span
            className={`absolute -right-1 hidden md:block w-2 h-2 rounded-full bg-secondary ${
              index % 2 === 1 ? "w-4 h-4 -right-2" : ""
            }`}
          ></span>
        </div>
      ))}
    </>
  );
};

export default CardSomeReviews;
