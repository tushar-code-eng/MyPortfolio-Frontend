import { useEffect, useRef } from "react"
import gsap, { Expo } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const CommingUpAnimation = ({ Text }: { Text: string }) => {

  useEffect(() => {
    gsap.timeline().fromTo(
      firstRef.current,
      { y: 120 },
      {
        y: 0,
        duration: 2.5,
        delay: 4.6,
        ease: Expo.easeOut,
        ScrollTrigger: {
          trigger: firstRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  const firstRef = useRef(null)

  return (
    <span className="block text-[10rem] leading-none overflow-hidden ">
      <span ref={firstRef} className=" block">
        {Text}
      </span>
    </span>
  )
}

export default CommingUpAnimation
