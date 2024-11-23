import gsap, { Expo } from "gsap";
import { useEffect, useRef } from "react";
import GoingUpAnimation from "./subComponents/GoingUpAnimation";
import FirstPage from "./FirstPage";
import Loader from "./subComponents/Loader";
import { BackgroundBeams } from "./subComponents/ui/background-beams";

const FirstPageAnimation = () => {

    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)

    useEffect(() => {
        const tl = gsap.timeline()

        tl.to(firstRef.current, {
            height: 0,
            duration: 2,
            delay: 3,
            ease: Expo.easeInOut
        })
        tl.to(secondRef.current, {
            height: "100%",
            duration: 2,
            delay: -2,
            ease: Expo.easeInOut
        })
        tl.to(thirdRef.current, {
            height: "100%",
            duration: 2,
            delay: -1.6,
            display: 'flex',
            ease: Expo.easeInOut
        })
    }, [])

    useEffect(() => {
        gsap.timeline().fromTo(
            fourthRef.current,
            { x: 120, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 1.5,
                delay: 1.5,
                ease: Expo.easeOut,
            }
        )
    }, [])

    return (
        <>
            <div ref={firstRef} className="text-white w-full h-screen bg-black">
                <div className="flex flex-col items-center w-full justify-between h-screen py-8">
                    <div>
                        <GoingUpAnimation Text="My Portfolio" />
                    </div>
                    <div ref={fourthRef} className=" overflow-hidden text-6xl italic flex gap-3 p-2     lg:text-[6rem]">
                        <div>
                            <GoingUpAnimation Text="Tushar " />
                        </div>
                        <div className="text-green-500">
                            <GoingUpAnimation Text="Bajaj" />
                        </div>
                    </div>
                    <div className="p-4">
                        <Loader />
                    </div>
                </div>
                <BackgroundBeams />
            </div>
            <div ref={secondRef} className="w-full h-0 absolute bottom-0 bg-green-500"></div>
            <div ref={thirdRef} className="hidden w-full h-0 absolute bottom-0 bg-white">
                <div className="w-full flex h-screen items-center justify-center bg-grid-black/[0.05] bg-[#E1E1E1]">
                    <FirstPage />
                </div>
            </div>
        </>
    )
}

export default FirstPageAnimation
