import SectionSubTitle from "../../../elements/SectionSubTitle"
import SectionTitle from "../../../elements/SectionTitle"
import CardMeetOur from "./CardMeetOur"

const MeetOur = () => {
    return (
        <section className="pt-6 pb-11">
            <div className="container px-4 max-w-7xl lg:px-0">
                <div className="text-center mb-7">
                    <SectionSubTitle>MEET OUR</SectionSubTitle>
                    <SectionTitle>Experts Doctor</SectionTitle>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    <CardMeetOur />
                </div>
            </div>
        </section>
    )
}
export default MeetOur