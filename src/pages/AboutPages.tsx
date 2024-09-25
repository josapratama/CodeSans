import Footer from "../components/fragments/footer/Index"
import Header from "../components/fragments/header/Index"
import Awards from "../components/sections/about/awards/Index"
import HaveALookAt from "../components/sections/about/haveALookAt/Index"
import HeroBanner from "../components/sections/about/hero/Index"
import MeetOur from "../components/sections/about/meetOur/Index"
import OurAchievements from "../components/sections/about/ourAchievement/Index"
import Services from "../components/sections/about/services/Index"
import WhyChooseUs from "../components/sections/about/whyChooseUs/Index"
import YourHealthMatters from "../components/sections/about/YourHealthMatters/Index"
import useScroll from "../hooks/useScroll"

const AboutPages = () => {
    const scroll = useScroll()
  return (
    <>
      <Header classname={`fixed top-0 transition-global ${scroll > 0 ? "bg-third" : ''}`} />
      <HeroBanner />
      <Services />
      <WhyChooseUs />
      <OurAchievements />
      <MeetOur />
      <HaveALookAt />
      <Awards />
      <YourHealthMatters />
      <Footer />
    </>
  )
}

export default AboutPages
