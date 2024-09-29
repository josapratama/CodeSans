import { ImageBlog } from "../../../../assets/images/blog/Index";
import SectionTitle from "../../../elements/SectionTitle";

export const DontLetYourHealth = () => {
  return (
    <section className="translate-y-[188px]">
      <div className="container relative h-[700px] max-w-full mx-4 bg-white shadow-[6px_4px_70px_8px_rgba(48,123,196,0.09)] mt-30 pt-36 lg:pl-36 px-4 rounded-[30px]">
        <SectionTitle>
          Don’t Let Your Health <br className="hidden lg:block" /> Take a
          Backseat!
        </SectionTitle>
        <p className="text-xl font-medium text-[#27476085]/[.52]">
          Schedule an appointment with one of our experienced
          <br className="hidden lg:block" /> medical professionals today!
        </p>

        <img
          src={ImageBlog.doctor}
          alt="Doctor"
          className="absolute top-[-50px] right-[-100px] w-[300px] h-auto lg:w-[460px] lg:top-[-100px] lg:right-[20px] max-w-full"
        />
      </div>
    </section>
  );
};
