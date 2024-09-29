import { ImageHomeHealthFirst } from "../../../../assets/images/home";

const HealthFirst = () => {
  return (
    <section className="pt-[112px] pb-[35px]">
      <div
        className="container px-4 py-5 overflow-hidden bg-center bg-no-repeat bg-cover max-w-7xl lg:px-0 lg:py-0"
        style={{
          backgroundImage: `url(${ImageHomeHealthFirst.layerHealthFirst})`,
        }}
      >
        <div className="h-[412px] flex lg:flex-row flex-col-reverse items-center justify-between">
          <div className="lg:ms-[90px] flex flex-col justify-center gap-6 w-full h-full ">
            <h2 data-aos="fade-right" className="lg:text-[54px] md:text-4xl sm:text-2xl text-third font-bold leading-tight ">
              Don't Let Your Health <br /> Take A Backseat!
            </h2>
            <p data-aos="fade-left" className="text-sm lg:text-xl font-Poppins text-primary">
              Schedule an appointment with one of our <br />
              experienced medical professionals today!
            </p>
          </div>
          <img
          data-aos="fade-left"
            src={ImageHomeHealthFirst.bannerHealthFirst}
            alt="Health First"
            className="lg:-translate-y-10 lg:w-[40%] w-[70%]"
          />
        </div>
      </div>
    </section>
  );
};
export default HealthFirst;
