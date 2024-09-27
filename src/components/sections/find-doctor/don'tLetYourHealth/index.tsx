import DoctorImages from "../../../../assets/images/findDoctor";

const CloseSection = () => {
  return (
    <section className="translate-y-[188px]">
      <div
        className="container px-4 bg-center bg-no-repeat bg-cover max-w-7xl lg:px-0 h-[680px] sm:rounded-3xl"
        style={{
          backgroundImage: `url(${DoctorImages.section})`,
        }}
      >
        <div className="flex flex-col items-center justify-start h-full gap-3 md:py-40 sm:py-30 py-20 sm:text-left text-center sm:mr-72">
          <h2 className="sm:text-6xl text-5xl text-third font-bold leading-[60px]">
            Don't Let Your Health <br /> Take a Backseat!
          </h2>
          <p className="sm:text-2xl text-xl font-Poppins text-third">
            Schedule an appointment with one of our experienced <br />
            medical professionals today
          </p>
        </div>
      </div>
    </section>
  );
}

export default CloseSection