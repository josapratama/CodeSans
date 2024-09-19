import { ReactNode } from 'react'

const SectionSubTitle = (props: {children: ReactNode}) => {
  return (
    <p className='text-secondary text-[26px] font-semibold'>
      {props.children}
    </p>
  )
}

export default SectionSubTitle
