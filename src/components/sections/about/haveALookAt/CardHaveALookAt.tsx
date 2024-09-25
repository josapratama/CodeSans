import { dataCardHaveALookAt } from "./types"

const CardHaveALookAt = () => {
  return (
    <>
      {dataCardHaveALookAt?.map((values, index) => (
        <div key={values.id} className={`${index === 0 ? "row-span-2 col-span-1": 'row-span-1'} ${index === 3 ? "col-span-2" : ""}`}>
            <img src={values.image} alt="Facilities and Activities" className="w-full h-full"/>
        </div>
      ))}
    </>
  )
}

export default CardHaveALookAt
