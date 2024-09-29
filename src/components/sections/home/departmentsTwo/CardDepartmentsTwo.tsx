import { dataCardDepartmentsTwo } from './types'

const CardDepartmentsTwo = () => {
  return (
    <>
     {dataCardDepartmentsTwo?.map((values) => (
        <div data-aos="zoom-in-up" key={values.id} className='flex flex-col px-5 py-6 gap-y-[30px]'>
            <div className='flex gap-4'>
                <img src={values.icon} alt={values.title} className='bg-secondary w-[70px] h-[70px] lg:w-[90px] lg:h-[90px] rounded-xl py-4 px-5' />
                <h3 className='text-lg font-medium text-primary'>{values.title}</h3>
            </div>
            <p className='pl-[14px] pr-[9px] text-base font-Poppins text-primary/50'>{values.description}</p>
        </div>
     ))} 
    </>
  )
}

export default CardDepartmentsTwo
