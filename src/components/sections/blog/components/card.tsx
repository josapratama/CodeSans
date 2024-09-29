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
    <div className="w-full h-auto max-w-full rounded-[20px] shadow-shadowCard bg-white overflow-hidden">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-cover max-w-full"
      />
      <div className="p-5">
        <div className="flex justify-between items-center mb-3">
          <p className="text-sm md:text-base text-[#274760]/[.52]">{date}</p>
          <ul className="flex space-x-3 text-[#274760]/[.52]">
            <li>
              <TiSocialLinkedinCircular
                size={24}
                className="hover:text-blue-500"
              />
            </li>
            <li>
              <RiFacebookCircleLine size={24} className="hover:text-blue-700" />
            </li>
            <li>
              <TiSocialTwitterCircular
                size={24}
                className="hover:text-blue-400"
              />
            </li>
          </ul>
        </div>
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl text-[#274760] my-3">
          {title}
        </h3>
        <p className="text-primary text-base font-medium cursor-pointer hover:underline">
          Learn More
        </p>
      </div>
    </div>
  );
};
