import { ImageAboutYourHealthMatters } from "../../../../assets/images/about/Index";

const YourHealthMatters = () => {
  return (
    <section className="translate-y-[188px]">
      <div
        className="container px-4 bg-center bg-no-repeat bg-cover max-w-7xl lg:px-0 h-[680px]"
        style={{
          backgroundImage: `url(${ImageAboutYourHealthMatters.bannerYourHealthMatters})`,
        }}
      >
        <div className="flex flex-col items-center justify-start h-full gap-3 py-40 text-center">
          <h2 className="text-[52px] text-third font-bold leading-[60px]">
            Dont't Let Your Health <br /> Take a Backseat!
          </h2>
          <p className="text-xl font-Poppins text-third">
            Schedule an appointment with one of our experienced <br />
            medical professionals today
          </p>
        </div>
      </div>
    </section>
  );
};

export default YourHealthMatters;
