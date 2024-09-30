import DoctorImages from "../../../../assets/images/findDoctor";

const CloseSection = () => {
  return (
    <section className="translate-y-[188px]">
      <div
        className="container px-4 bg-center bg-no-repeat bg-cover overflow-hidden max-w-7xl lg:px-0 h-[680px] sm:rounded-3xl"
        style={{
          backgroundImage: `url(${DoctorImages.section})`,
        }}
      >
        <div className="flex flex-col items-center justify-start h-full gap-3 py-20 text-center md:py-40 sm:py-30 sm:text-left sm:mr-72">
          <h2
            data-aos="fade-up"
            className="sm:text-6xl text-5xl text-third font-bold leading-[60px]"
          >
            Don't Let Your Health <br /> Take a Backseat!
          </h2>
          <p data-aos="fade-up" className="text-xl sm:text-2xl font-Poppins text-third">
            Schedule an appointment with one of our experienced <br />
            medical professionals today
          </p>
        </div>
      </div>
    </section>
  );
};

export default CloseSection;
