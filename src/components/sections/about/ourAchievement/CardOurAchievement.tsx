import { dataCardOurAchievement } from "./types"

const CardOurAchievement = () => {
  return (
    <>
      {dataCardOurAchievement?.map((values) => (
        <div key={values.id} className="px-10 py-6 text-center">
            <h3 className="mb-2 text-[40px] font-bold text-primary">{values.value} {values.id === 2 ? "%" : "+"}</h3>
            <h3 className="text-base font-Poppins text-primary">{values.title}</h3>
        </div>
      ))}
    </>
  )
}

export default CardOurAchievement
