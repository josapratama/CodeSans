import CardOurMedicalDepartments from "./CardOurMedicalDepartments"

const OurMedicalDepartments = () => {
    return (
        <section className="-translate-y-[130px] ">
            <div className="container px-4 max-w-7xl lg:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-[50px] justify-items-end">
                    <CardOurMedicalDepartments />
                </div>
            </div>
        </section>
    )
}

export default OurMedicalDepartments