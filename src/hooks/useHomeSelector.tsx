import { useSelector } from "react-redux"
import {RootState} from "../redux/store/Store.ts"

const useHomeSelector = () => {
    const selector = useSelector((state: RootState) => state.home)
  return {
    usualyAsked: selector.UsualyAsked
  }
}

export default useHomeSelector
