import CardOurAchievement from "./CardOurAchievement"

const OurAchievements = () => {
    return (
        <section className="pb-6 pt-11">
            <div className="container px-4 overflow-hidden max-w-7xl lg:px-0 rounded-3xl">
                <div className="grid py-20 md:grid-cols-5 bg-gradient-to-r from-secondary/20 to-secondary/50">
                    <CardOurAchievement />
                </div>
            </div>
        </section>
    )
}

export default OurAchievements