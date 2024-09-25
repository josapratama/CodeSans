import SectionSubTitle from "../../../elements/SectionSubTitle"
import SectionTitle from "../../../elements/SectionTitle"
import CardHaveALookAt from "./CardHaveALookAt"

const HaveALookAt = () => {
    return (
        <section className="pb-5 pt-11">
            <div className="container px-4 max-w-7xl lg:px-0">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-[22px] gap-y-[14px] grid-rows-3">
                    <div className="col-span-2 row-span-1 text-center lg:text-start">
                        <SectionSubTitle>HAVE A LOOK AT</SectionSubTitle>
                        <SectionTitle classname="leading-tight">Our Facilities and <br /> Latest Activities</SectionTitle>
                    </div>
                    <CardHaveALookAt />
                </div>
            </div>
        </section>
    )
}
export default HaveALookAt