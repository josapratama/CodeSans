import CardInspectionDoctor from "./CardInspectionDoctor"

const InspectionDoctor = () => {
    return (
        <section className="pt-[55px]">
            <div className="container px-4 max-w-7xl lg:px-0">
                <div className="grid grid-cols-3 gap-6">
                    <CardInspectionDoctor />
                </div>
            </div>
        </section>
    )
}

export default InspectionDoctor