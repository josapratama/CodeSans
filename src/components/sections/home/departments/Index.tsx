import { ImageHomeDepartments } from "../../../../assets/images/home"
import SectionTitle from "../../../elements/SectionTitle"

const Departments = () => {
    return (
        <section className="py-[50px]">
            <div className="container bg-center bg-cover max-w-7xl" style={{backgroundImage: `${ImageHomeDepartments.layerDepartments}`}}>
                <div className="text-center">
                    <SectionTitle>Departments</SectionTitle>
                </div>
            </div>
        </section>
    )
}

export default Departments