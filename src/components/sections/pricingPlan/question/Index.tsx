import { ImagePricingPlan } from "../../../../assets/images/pricingPlan"
import SectionTitle from "../../../elements/SectionTitle"
import AccordionQuestion from "./AccordionQuestion"

const Question = () => {
    return (
        <section className="pt-[55px]">
            <div className="container px-4 py-[105px] max-w-7xl lg:px-0">
                <SectionTitle classname="leading-tight mb-[70px]">Frequently Askes <br />Questions</SectionTitle>
                <div className="flex flex-col md:flex-row gap-[70px]">
                        <div className="flex flex-col flex-1 gap-5">
                            <AccordionQuestion />
                        </div>
                    <div>
                        <img src={ImagePricingPlan.question} alt="Pricing plan" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Question