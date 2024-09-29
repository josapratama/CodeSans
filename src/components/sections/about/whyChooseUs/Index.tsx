import { ImageAboutWhyChooseUs } from "../../../../assets/images/about/Index"
import SectionTitle from "../../../elements/SectionTitle"
import CardWhyChooseUs from "./CardWhyChooseUs"

const WhyChooseUs = () => {
    return (
        <section className="pt-12 pb-11">
            <div className="container px-4 max-w-7xl lg:px-0">
                <div className="flex">
                    <div className="w-[40%] hidden md:block">
                        <img data-aos="fade-right" src={ImageAboutWhyChooseUs.bannerAbout} alt="About" />
                    </div>
                    <div className="md:w-[60%] w-full">
                        <SectionTitle classname="mb-12 text-center md:text-start" >Why Choose Us</SectionTitle>
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <CardWhyChooseUs />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs