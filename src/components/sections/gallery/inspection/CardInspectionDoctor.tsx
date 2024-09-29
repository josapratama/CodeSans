import { dataCardInspectionDoctor } from "./type"

const CardInspectionDoctor = () => {
  return (
    <>
     {dataCardInspectionDoctor?.map((values, index) => (
        <div data-aos="zoom-in" key={values.id} className={`${index === 0 || index === 6 ? "col-span-2" : "col-span-1"}`}>
            <img src={values.image} alt="Inspection Doctor" />
        </div>
     ))} 
    </>
  )
}

export default CardInspectionDoctor
