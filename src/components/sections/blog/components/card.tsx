import {
  TiSocialLinkedinCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import { RiFacebookCircleLine } from "react-icons/ri";

interface CardProps {
  imgSrc: string;
  date: string;
  title: string;
}

export const Card = ({ imgSrc, date, title }: CardProps) => {
  return (
    <div className="w-full h-[574px] rounded-[20px] shadow-shadowCard bg-white">
      <img src={imgSrc} alt="" />
      <div className="h-[274px] p-5">
        <div className="w-[336px] h-[178px]">
          <div className="flex justify-between">
            <p className="font-normal text-base text-[#274760]/[.52]">{date}</p>
            <ul className="flex text-[#274760]/[.52] items-center text-blue-300">
              <li>
                <TiSocialLinkedinCircular size={26} />
              </li>
              <li>
                <RiFacebookCircleLine size={25} />
              </li>
              <li>
                <TiSocialTwitterCircular size={27} />
              </li>
            </ul>
          </div>
          <p className="top-[59px] font-semibold text-2xl text-[#274760] my-5">
            {title}
          </p>
        </div>
        <p className="text-[#274760] text-base font-medium">Learn More</p>
      </div>
    </div>
  );
};
