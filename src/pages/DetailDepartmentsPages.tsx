import { useParams } from "react-router-dom";
import Detail from "../components/sections/detailDepartments/detail/Index";
import HeaderDetailDepartments from "../components/sections/detailDepartments/header/Index";
import RelatedDoctor from "../components/sections/detailDepartments/relatedDoctor/Index";
import Treatments from "../components/sections/detailDepartments/treatments/Index";
import { dataCardOurMedicalDepartments } from "../components/sections/departments/ourMedicalDepartments/types";
import Appointment from "../components/sections/detailDepartments/appointment/Index";
import BackSeat from "../components/sections/detailDepartments/backseat/Index";

const DetailDepartmentsPages = () => {
  const { id } = useParams();
  const data = dataCardOurMedicalDepartments.find(
    (value) => value.id == parseInt(id as string)
  );
  return (
    <>
      <HeaderDetailDepartments />
      <Detail data={data} />
      <Treatments />
      <RelatedDoctor data={data} />
      <Appointment />
      <BackSeat />
    </>
  );
};

export default DetailDepartmentsPages;
