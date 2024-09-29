import { useSelector } from "react-redux"
import {RootState} from "../redux/store/Store.ts"

const useHomeSelector = () => {
    const selector = useSelector((state: RootState) => state)
  return {
    usualyAsked: selector.home.UsualyAsked,
    questions: selector.pricingPlan.questions
  }
}

export default useHomeSelector
