import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { dataCardUsualyAsked } from "./types";
import useHomeSelector from "../../../../hooks/useHomeSelector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store/Store";
import { handleIsOpen } from "../../../../redux/slice/home/usualyAskedFeatures";
import { Fragment } from "react/jsx-runtime";

const CardUsualyAsked = () => {
  const { usualyAsked } = useHomeSelector();
  const dispatch = useDispatch<AppDispatch>();
  console.log({ usualyAsked });

  return (
    <>
      {dataCardUsualyAsked?.map((values) => (
        <Fragment key={values.id}>
          <button
            {...(!usualyAsked.isOpen[values.id] && { "data-aos": "fade-down" })}
            className={`relative flex items-center justify-between border-secondary/20 py-4 px-[30px] ${
              usualyAsked.isOpen[values.id]
                ? "bg-[#D2EAEF] rounded-t-2xl border-none ml-10"
                : "rounded-2xl"
            } border `}
            onClick={() => dispatch(handleIsOpen(values.id))}
          >
            <h3 className="text-lg font-medium text-primary">{values.title}</h3>
            {usualyAsked.isOpen[values.id] ? (
              <IoArrowDownCircleOutline className="text-3xl text-secondary" />
            ) : (
              <IoArrowUpCircleOutline className="text-3xl text-secondary" />
            )}
          </button>
          {usualyAsked.isOpen[values.id] ? (
            <p
              className={`px-[30px] rounded-b-2xl pb-4 font-Poppins ml-10 text-base text-primary -translate-y-5 transition-global bg-[#D2EAEF]`}
            >
              {values.description}
            </p>
          ) : null}
        </Fragment>
      ))}
    </>
  );
};

export default CardUsualyAsked;
