import { FaCalendarAlt } from "react-icons/fa";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import { MdAccessTime } from "react-icons/md";
import { ImageAppointment } from "../../../../assets/images/apointment/Index";

const Contact = () => {
  return (
    <section className="pt-[55px] mb-[200px] pb-[55px]">
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="flex flex-col lg:flex-row gap-y-[50px] gap-x-[110px]">
          <form className="flex-col flex-1 w-full">
            <h2 className="px-3 pb-6 text-[30px] font-medium text-primary">
              Appointment
            </h2>
            <div className="flex flex-col w-full lg:flex-row ">
              <label data-aos="fade-right" htmlFor="name" className="px-3 pb-6">
                <h4 className="text-base font-Poppins text-primary mb-[10px]">
                  Name
                </h4>
                <input
                  type="text"
                  name="username"
                  id="name"
                  placeholder="David John"
                  className="border-2 rounded-2xl w-[306px] h-[60px] border-secondary/50 text-base font-Poppins text-primary/50 outline-none px-[21px] py-[18px] "
                />
              </label>
              <label
                data-aos="fade-right"
                htmlFor="phoneNumber"
                className="px-3 pb-6"
              >
                <h4 className="text-base font-Poppins text-primary mb-[10px]">
                  Phone Number
                </h4>
                <input
                  type="text"
                  name="username"
                  id="phoneNumber"
                  placeholder="(123) 456 - 789"
                  className="text-base border-2 w-[306px] h-[60px] outline-none rounded-2xl border-secondary/50 font-Poppins text-primary/50 px-[21px] py-[18px]"
                />
              </label>
            </div>
            <label
              data-aos="fade-right"
              htmlFor="medicalRecord"
              className="block px-3 pb-6 "
            >
              <h4 className="text-base font-Poppins text-primary mb-[10px]">
                Medical Record Number
              </h4>
              <input
                type="text"
                placeholder="123456-7890-0987"
                name="medicalRecord"
                id="medicalRecord"
                className="text-base border-2 lg:w-full h-[60px] outline-none rounded-2xl border-secondary/50 font-Poppins text-primary/50 px-[21px] py-[18px]"
              />
            </label>
            <div className="flex flex-col md:flex-row ">
              <label
                data-aos="fade-up"
                htmlFor="preferredDate"
                className="px-3 pb-6 "
              >
                <h4 className="text-base font-Poppins text-primary mb-[10px]">
                  Preferred Date
                </h4>
                <div className="max-w-[306px] h-[60px] border-2 rounded-2xl bg-third relative border-secondary/50 px-[21px] py-[18px]">
                  <input
                    type="text"
                    name="preferredDate"
                    id="preferredDate"
                    placeholder="dd/mm/yyyy"
                    className="w-full h-full text-base bg-transparent outline-none ps-8 border-secondary/50 font-Poppins text-primary/50"
                  />
                  <FaCalendarAlt className="absolute -translate-y-1/2 left-5 top-1/2 text-secondary w-[18px] h-5" />
                </div>
              </label>
              <label
                data-aos="fade-down"
                htmlFor="phoneNumber"
                className="px-3 pb-6"
              >
                <h4 className="text-base font-Poppins text-primary mb-[10px]">
                  Preferred Time
                </h4>
                <div className="max-w-[306px] h-[60px] border-2 rounded-2xl bg-third relative border-secondary/50 px-[21px] py-[18px]">
                  <input
                    type="text"
                    name="preferredTime"
                    id="preferredDate"
                    placeholder="--:-- --"
                    className="w-full h-full text-base bg-transparent outline-none ps-8 border-secondary/50 font-Poppins text-primary/50"
                  />
                  <MdAccessTime className="absolute -translate-y-1/2 left-5 top-1/2 text-secondary w-[18px] h-5" />
                </div>
              </label>
            </div>
            <div className="w-full px-3 pb-6">
              <h4 className="mb-[10px] text-base font-Poppins text-primary">
                Reason for Visit
              </h4>
              <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-3">
                <label
                  data-aos="fade-right"
                  htmlFor="routine-checkup"
                  className="flex items-center gap-3"
                >
                  <input
                    type="radio"
                    name="visit-type"
                    id="routine-checkup"
                    className="w-5 h-5 "
                  />
                  <span className="text-base text-secondary/50 font-Poppins">
                    Routine Checkup
                  </span>
                </label>
                <label
                  data-aos="fade-right"
                  htmlFor="specific-concern"
                  className="flex items-center gap-3"
                >
                  <input
                    type="radio"
                    name="visit-type"
                    id="specific-concern"
                    className="w-5 h-5 "
                  />
                  <span className="text-base text-secondary/50 font-Poppins">
                    Specific Concern
                  </span>
                </label>
                <label
                  data-aos="fade-right"
                  htmlFor="new-patient-visit"
                  className="flex items-center gap-3"
                >
                  <input
                    type="radio"
                    name="visit-type"
                    id="new-patient-visit"
                    className="w-5 h-5 "
                  />
                  <span className="text-base text-secondary/50 font-Poppins">
                    New Patient Visit
                  </span>
                </label>
              </div>
            </div>
            <div className="w-[540px] px-3 pb-6">
              <h4 className="mb-[10px] text-base font-Poppins text-primary">
                Department
              </h4>
              <div className="grid grid-cols-1 gap-2 lg:gap-6 lg:grid-cols-6">
                <label
                  data-aos="fade-right"
                  htmlFor="routine-checkup"
                  className="flex items-center gap-1"
                >
                  <input
                    type="radio"
                    name="specialty"
                    id="routine-checkup"
                    className="w-5 h-5 "
                  />
                  <span className="text-base text-secondary/50 font-Poppins">
                    Pediatric
                  </span>
                </label>
                <label
                  data-aos="fade-right"
                  htmlFor="specific-concern"
                  className="flex items-center gap-1 lg:col-span-3"
                >
                  <input
                    type="radio"
                    name="specialty"
                    id="specific-concern"
                    className="w-5 h-5 "
                  />
                  <span className="text-base text-secondary/50 font-Poppins">
                    Obstetrics and Gynecology
                  </span>
                </label>
                <label
                  data-aos="fade-right"
                  htmlFor="new-patient-visit"
                  className="flex items-center gap-1"
                >
                  <input
                    type="radio"
                    name="specialty"
                    id="new-patient-visit"
                    className="w-5 h-5 "
                  />
                  <span className="text-base text-secondary/50 font-Poppins">
                    Cardiology
                  </span>
                </label>
                <label
                  data-aos="fade-right"
                  htmlFor="new-patient-visit"
                  className="flex items-center gap-1"
                >
                  <input
                    type="radio"
                    name="specialty"
                    id="new-patient-visit"
                    className="w-5 h-5 "
                  />
                  <span className="text-base text-secondary/50 font-Poppins">
                    Neurology
                  </span>
                </label>
              </div>
            </div>
            <div className="w-[150px] h-[50px] px-3">
              <button
                type="submit"
                className="bg-gradient-to-r flex items-center gap-3 from-[#307BC4] to-[#274760]   rounded-full px-4 py-3 text-third"
              >
                Submit <HiMiniArrowLongRight size={20} />
              </button>
            </div>
          </form>
          <div className="w-full lg:w-[25%]">
            <h2 className="px-3 pb-6 text-[30px] font-medium text-primary">
              Contact Info
            </h2>
            <div className="overflow-hidden mb-[60px] rounded-2xl">
              <img data-aos="fade-left" src={ImageAppointment.contactPerson} alt="Contact Person" />
            </div>
            <div className="flex flex-col gap-6">
              <div data-aos="fade-left">
                <h3 className="text-xl font-semibold text-primary">Phone</h3>
                <p className="text-base text-primary font-Poppins">123-456-7890</p>
              </div>
              <div data-aos="fade-left">
                <h3 className="text-xl font-semibold text-primary">Email Us</h3>
                <p className="text-base text-primary font-Poppins">hellocallcenter@gmail.com</p>
              </div>
              <div data-aos="fade-left">
                <h3 className="text-xl font-semibold text-primary">Our Location</h3>
                <p className="text-base text-primary font-Poppins">123 Anywhere St., Any City, 12345</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
