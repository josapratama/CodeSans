import { ReactNode } from 'react'

const SectionSubTitle = (props: {children: ReactNode, classname?: string}) => {
  return (
    <p className={`text-secondary text-[26px] font-semibold ${props.classname}`}>
      {props.children}
    </p>
  )
}

export default SectionSubTitle
