import { useEffect, useState } from "react";
import SectionSubTitle from "../../../elements/SectionSubTitle";
import CardDoctor from "./CardDoctor";
import { Doctor, doctors } from "../type";
import { IconsAll } from "../../../../assets/icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Main = () => {
  const [category, setCategory] = useState<string>("All");
  const [data, setData] = useState<Doctor[]>(doctors);
  const dataCategory = ["All", "Emergency", "Pediatric", "Psychiatry"];

  const filterData = () => {
    if (category == "All") {
      setData(doctors.slice(0, 12));
    } else {
      const newData = doctors.filter((value) =>
        value.role.toLowerCase().includes(category.toLowerCase())
      );
      setData(newData);
    }
  };

  useEffect(() => {
    filterData();
  }, [category]);
  return (
    <>
      <section className="flex flex-row items-center justify-between mx-5 my-10 sm:mx-20">
        <div className="flex flex-row items-center justify-center gap-8">
          <SectionSubTitle classname="hidden sm:block">
            <h1 className="text-sm text-primary/50">Sort by</h1>
          </SectionSubTitle>
          <div className="flex flex-row gap-2 sm:gap-4">
            {dataCategory.map((value) => (
              <button
                data-aos="fade-right"
                key={value}
                className={`sm:text-sm text-xs px-4 py-2 font-Poppins ${
                  category === value
                    ? "bg-secondary text-third"
                    : "text-secondary"
                } rounded-2xl border border-secondary transition-global`}
                onClick={() => setCategory(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
        <div className="flex-row items-center justify-center hidden gap-4 sm:flex">
          <SectionSubTitle>
            <h1 className="text-sm text-primary/50">Showing 12 items</h1>
          </SectionSubTitle>
          <img src={IconsAll.itemsActive} alt="" className="size-6" />
          <img src={IconsAll.items} alt="" className="size-6" />
        </div>
      </section>
      <section className="pt-6 pb-11">
        <div className="container px-4 max-w-7xl lg:px-0">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <CardDoctor data={data} />
          </div>
        </div>
        <div className="flex flex-row items-center justify-center gap-4 my-10">
          <FaArrowLeft className="sm:size-6 size-4 text-secondary" />
          <div className="flex flex-row gap-4">
            <button className="px-3 py-1 rounded-lg sm:py-2 sm:px-4 bg-third text-secondary">
              1
            </button>
            <button className="px-3 py-1 rounded-lg sm:py-2 sm:px-4 bg-third text-secondary">
              2
            </button>
            <button className="px-3 py-1 rounded-lg sm:py-2 sm:px-4 bg-third text-secondary">
              3
            </button>
            <button className="px-3 py-1 rounded-lg sm:py-2 sm:px-4 bg-third text-secondary">
              4
            </button>
          </div>
          <FaArrowRight className="sm:size-6 size-4 text-secondary" />
        </div>
      </section>
    </>
  );
};

export default Main;
