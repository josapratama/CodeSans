import HeroBanner from '../components/sections/pricingPlan/hero/Index'
import Membership from '../components/sections/pricingPlan/membership/Index'
import Question from '../components/sections/pricingPlan/question/Index'
import YourHealthMatters from '../components/sections/pricingPlan/yourHealthMatters/Index'

const PricingPlanPages = () => {
  return (
    <>
     <HeroBanner /> 
     <Membership />
     <Question />
     <YourHealthMatters />
    </>
  )
}

export default PricingPlanPages
