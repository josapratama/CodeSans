import Appointment from "../components/sections/detail-doctor/Appointment"
import BreadCrumbs from "../components/sections/detail-doctor/BreadCrumbs"
import CloseSection from "../components/sections/detail-doctor/close-footer"
import Header from "../components/sections/detail-doctor/Header"

const DetailDoctorPages = () => {
  return (
    <>
      <BreadCrumbs />
      <Header />
      <Appointment /> 
      <CloseSection />
    </>
  )
}

export default DetailDoctorPages