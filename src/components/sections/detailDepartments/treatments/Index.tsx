import SectionSubTitle from "../../../elements/SectionSubTitle"
import SectionTitle from "../../../elements/SectionTitle"
import TypeTreatments from "./TypeTreatments"

const Treatments = () => {
    return (
        <section>
            <div className="container px-4 overflow-hidden max-w-7xl lg:px-0">
                <SectionSubTitle>MORE TYPE OF</SectionSubTitle>
                <SectionTitle>Treatments</SectionTitle>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-r content-center from-[#ADDEE8] to-[#4494E6] rounded-2xl">
                    <TypeTreatments />
                </div>
            </div>
        </section>
    )
}

export default Treatments