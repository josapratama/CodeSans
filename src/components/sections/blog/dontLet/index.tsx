import { ImageBlog } from "../../../../assets/images/blog/Index";

export const DontLetYourHealth = () => {
  return (
    <section className="translate-y-[100px] sm:translate-y-[188px]">
      <div className="container relative h-[550px] sm:h-[650px] md:h-[700px] max-w-full mx-4 bg-white shadow-[6px_4px_70px_8px_rgba(48,123,196,0.09)] mt-8 sm:mt-16 md:mt-30 pt-8 sm:pt-12 md:pt-36 px-4 sm:px-8 lg:pl-36 rounded-[30px] ">
        <div className="relative z-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-3 sm:mb-4 md:mb-6 pr-4 sm:pr-0 max-w-full sm:max-w-[70%] lg:max-w-[60%]">
            Don't Let Your Health Take a Backseat!
          </h2>
          <p className="text-base sm:text-lg md:text-xl font-medium text-[#27476085]/[.52] mt-2 sm:mt-4 md:mt-8 pr-4 sm:pr-0 max-w-full sm:max-w-[70%] lg:max-w-[50%]">
            Schedule an appointment with one of our experienced
            <br className="hidden lg:block" /> medical professionals today!
          </p>
        </div>

        <img
          src={ImageBlog.doctor}
          alt="Doctor"
          className="absolute bottom-10 right-16 w-[60%] sm:w-[50%] md:w-[45%] lg:w-auto lg:h-[120%] max-w-none object-contain object-bottom lg:object-right-bottom lg:top-auto lg:bottom-0 lg:right-[-5%]"
        />
      </div>
    </section>
  );
};
