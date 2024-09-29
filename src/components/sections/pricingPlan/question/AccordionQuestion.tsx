import {
  IoArrowDownCircleOutline,
  IoArrowUpCircleOutline,
} from "react-icons/io5";
import { dataQuestions } from "./types";
import useHomeSelector from "../../../../hooks/useHomeSelector";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../redux/store/Store";
import { handleIsOpen } from "../../../../redux/slice/pricingPlan/questionsFeatures";

const AccordionQuestion = () => {
  const { questions } = useHomeSelector();
  const dispatch = useDispatch<AppDispatch>();
  console.log(questions);

  return (
    <>
      {dataQuestions?.map((value) => (
        <div
          key={value.id}
          className="overflow-hidden border rounded-3xl border-secondary"
        >
          <button
            onClick={() => dispatch(handleIsOpen(value.id))}
            className={`flex items-center justify-between w-full ${
              questions.isOpen[value.id]
                ? "bg-gradient-to-r from-[#D2EAEF] to-[#86BBF1]"
                : ""
            } py-[22px] px-6`}
          >
            {value.quest}
            {questions.isOpen[value.id] ? (
              <IoArrowDownCircleOutline className="text-3xl text-secondary" />
            ) : (
              <IoArrowUpCircleOutline className="text-3xl text-secondary" />
            )}
          </button>
          {questions.isOpen[value.id] && <p className="p-6">{value.answer}</p>}
        </div>
      ))}
    </>
  );
};

export default AccordionQuestion;
