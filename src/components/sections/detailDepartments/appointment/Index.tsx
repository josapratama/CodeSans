import { HiMiniArrowLongRight } from "react-icons/hi2";
import SectionSubTitle from "../../../elements/SectionSubTitle";
import SectionTitle from "../../../elements/SectionTitle";
import { FaCalendarAlt } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { ImageDetailDepartments } from "../../../../assets/images/departmentsDetail/Index";

const Appointment = () => {
  return (
    <section className="translate-y-[100px] pt-[50px]">
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="relative flex flex-col gap-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="mb-8">
              <SectionSubTitle>BOOK AN</SectionSubTitle>
              <SectionTitle>Appointment</SectionTitle>
            </div>
            <form className="w-full ">
              <div className="flex flex-col w-full ">
                <label
                  data-aos="fade-right"
                  htmlFor="name"
                  className="px-3 pb-6"
                >
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
                <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
                  <label
                    data-aos="fade-right"
                    htmlFor="routine-checkup"
                    className="flex items-center gap-3"
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
                    className="flex items-center gap-3 lg:col-span-2"
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
                    className="flex items-center gap-3"
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
                    className="flex items-center gap-3"
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
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={ImageDetailDepartments.appointmentLayer}
              alt="layer"
              className="absolute top-0 -right-36 -z-10"
            />
            <div className="flex justify-end">
              <img
              data-aos="fade-left"
                src={ImageDetailDepartments.appointmentPerson}
                alt="layer"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
