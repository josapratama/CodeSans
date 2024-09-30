import { ImageDetailDepartments } from "../../../../assets/images/departmentsDetail/Index";
import SectionTitle from "../../../elements/SectionTitle";

const BackSeat = () => {
  return (
    <section className=" sm:pb-[400px] pt-10 sm:translate-y-[270px] bg-third">
      <div className="container px-4 max-w-7xl lg:px-0">
        <div className="flex flex-col items-center justify-center text-center">
          <img data-aos="fade-up" src={ImageDetailDepartments.drPerson} alt="Dr Person" />

          <SectionTitle dataAos="zoom-in-up">
            Don't Let Your Health <br /> Take a Backseat
          </SectionTitle>
          <p data-aos="zoom-in-up" className="text-xl font-medium font-Poppins text-primary/50">
            Schedule an appointment with one of our experienced <br /> medical
            professionals today!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackSeat;
