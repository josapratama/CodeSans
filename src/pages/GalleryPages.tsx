import Footer from "../components/fragments/footer/Index"
import Header from "../components/fragments/header/Index"
import HeroBanner from "../components/sections/gallery/home/Index"
import InspectionDoctor from "../components/sections/gallery/inspection/Index"
import WellnessAtTheForefront from "../components/sections/gallery/WellnessAtTheForefront/Index"
import useScroll from "../hooks/useScroll"

const GalleryPages = () => {
  const scroll = useScroll()
  return (
    <>
      <Header classname={`fixed top-0 ${scroll > 0 && "bg-third"} transition-global`} />
      <HeroBanner />
      <InspectionDoctor />
      <WellnessAtTheForefront />
      <Footer />
    </>
  )
}

export default GalleryPages
