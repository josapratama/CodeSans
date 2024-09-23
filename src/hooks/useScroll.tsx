import { useEffect, useState } from "react"

const useScroll = () => {
    const [isScroll, setIsScroll] = useState<number>(0)
    const handleScroll = () => {
        const Y = window.pageYOffset
        console.log(typeof Y)
        setIsScroll(Y)
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll )

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return isScroll
}

export default useScroll
