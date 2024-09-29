import { RxHamburgerMenu } from "react-icons/rx";
import { ImageGalleryInspection } from "../../../../assets/images/gallery/Index";
import SectionTitle from "../../../elements/SectionTitle";
import { CardOurMedicalDepartments } from "../../departments/ourMedicalDepartments/types";
const Detail = (props: {data?: CardOurMedicalDepartments}) => {
    const {data} = props

  return (
    <section className="pt-[57px] pb-[42px]">
      <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
        <div className="flex flex-col gap-10 lg:flex-row items-center justify-between gap-x-[138px]">
          <div className="w-full lg:w-[40%] h-full ">
            <SectionTitle dataAos="fade-right" classname="mb-[30px] leading-tight">{data?.title}</SectionTitle>
            <p data-aos="fade-up" className="text-base font-Poppins text-primary/50">
              {data?.description}
            </p>
          </div>
          <div className="w-full lg:w-[60%] h-full flex flex-col justify-end items-start">
            <div data-aos="fade-left" className="flex justify-end w-full">
              <img
                src={ImageGalleryInspection.inspection3}
                alt="Detail Deparment"
                className="h-[400px]"
              />
            </div>
            <div data-aos="zoom-in-up" className="p-5 lg:translate-x-20 -translate-y-14 bg-third rounded-xl">
              <div className="mb-3">
                <h3 className="flex items-center justify-between w-full text-xl font-semibold text-primary">
                  Available Doctor <RxHamburgerMenu />
                </h3>
                <p className="text-sm text-primary/50">Select Doctor</p>
              </div>
              <div className="flex flex-col items-start gap-4 lg:min-w-[300px]">
                {data?.avaliableDoctor.map((res) => (
                  <div key={res.id} className="flex items-center gap-4">
                    <div className="w-12 overflow-hidden rounded-full bg-secondary">
                      <img src={res.image} alt="" />{" "}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-primary">{res.name}</h3>
                      <p className="text-sm text-primary/50">{res.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Detail;
