import { useEffect, useRef } from "react"
import gsap, { Expo } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const GoingUpAnimation = ({ Text }: { Text: string | JSX.Element }) => {

  useEffect(() => {
    gsap.timeline().fromTo(
      firstRef.current,
      { y: 0 },
      {
        y: -140,
        duration: 0.9,
        delay: 2.8,
        ease: Expo.easeIn,
      }
    )
  }, [])

  const firstRef = useRef(null)

  return (

    <span className="block overflow-hidden ">
      <span ref={firstRef} className=" block py-1">
        {Text}
      </span>
    </span>
  )
}

export default GoingUpAnimation
