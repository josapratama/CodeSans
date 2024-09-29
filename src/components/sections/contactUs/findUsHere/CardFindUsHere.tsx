import { dataCardFindUsHere } from "./types"

const CardFindUsHere = () => {
  return (
    <>
     {dataCardFindUsHere?.map((values) => (
        <div key={values.id} className="bg-[#D2EAEF] flex items-center gap-5 px-5 md:px-[30px] py-8 rounded-3xl">
            <values.icon fontSize={40} className="text-secondary"/>
            <div>
                <h3 className="text-xl font-bold text-primary">{values.title}</h3>
                <p className="text-base font-Poppins text-primary">{values.contact}</p>
            </div>
        </div>
     ))} 
    </>
  )
}

export default CardFindUsHere
