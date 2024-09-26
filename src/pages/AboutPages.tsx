import Awards from "../components/sections/about/awards/Index"
import HaveALookAt from "../components/sections/about/haveALookAt/Index"
import HeroBanner from "../components/sections/about/hero/Index"
import MeetOur from "../components/sections/about/meetOur/Index"
import OurAchievements from "../components/sections/about/ourAchievement/Index"
import Services from "../components/sections/about/services/Index"
import WhyChooseUs from "../components/sections/about/whyChooseUs/Index"
import YourHealthMatters from "../components/sections/about/YourHealthMatters/Index"

const AboutPages = () => {
  return (
    <>
      <HeroBanner />
      <Services />
      <WhyChooseUs />
      <OurAchievements />
      <MeetOur />
      <HaveALookAt />
      <Awards />
      <YourHealthMatters />
    </>
  )
}

export default AboutPages
