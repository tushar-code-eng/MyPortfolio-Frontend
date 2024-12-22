import { BrowserRouter } from "react-router-dom"
import TimelineEfect from "./subComponents/TimelineEffect"
import Cards from "./subComponents/cards"
import { useEffect } from "react"
import gsap from "gsap";

const p1 = "/p1.png";
const p2 = "/p2.png";

const p2_1 = "/p2_1_2.png";
const p2_2 = "/p2_2_2.png";

const p3_1 = "/p3_1.png";
const p3_2 = "/p3_2.png";

const p4_1 = "/p4_1.png";
const p4_2 = "/p4_2.png";

const slideImages1 = [p1, p2]
const slideImages2 = [p2_1, p2_2]
const slideImages3 = [p3_1, p3_2]
const slideImages4 = [p4_1, p4_2]

const heading1 = "Sai Travels"
// const heading2 = "Anonymous Messaging"
const heading2 = "Balenciaga"
const heading3 = "Video Call Application"
const heading4 = "Smart Contracts"

const content1 = "SAI TRAVELS' ticket booking website offers a seamless way for passengers to book comfortable sleeper bus journeys from Chandigarh to Jammu. The platform provides an intuitive, user-friendly experience, making it easy to browse and reserve tickets. With features like downloadable PDF tickets and user profiles, our website ensures a hassle-free travel experience."
// const content2 ="Anonymous messaging website allows users to send and receive messages without revealing their identity. It offers a secure and private way to communicate, fostering open and honest conversations. Users can enjoy seamless messaging without the fear of compromising their anonymity."
const content2 = "My redesigned Balenciaga landing page enhances the user experience by blending minimalist aesthetics with intuitive navigation, reflecting the brand's bold identity. It features striking visuals, seamless performance, and a mobile-responsive layout to ensure effortless exploration. The design prioritizes user engagement while maintaining Balenciaga's avant-garde style."
const content3 = "Video call application makes it simple for people to connect with clear, high-quality video and audio. It provides a reliable experience for work, catching up with friends, or hosting virtual gatherings. The app is designed to be intuitive, making online conversations feel natural and easy."
const content4= "Smart contract solutions simplify interactions on the Ethereum blockchain, making transactions secure and automated. Built for various use cases, these contracts enable trustless agreements and decentralized applications. Designed for reliability, they streamline processes and reduce the need for intermediaries."



const ThirdPage = () => {

    useEffect(() => {
        gsap.fromTo(".first", {
            opacity: 0, y: 40
        },
            {
                opacity: 1, display: 1, y: 0, duration: 1, ease: "power3.inOut", scrollTrigger: {
                    trigger: ".first",
                    scroller: "body",
                    start: "top 60%"
                }
            }
        )

    }, [])

    return (
        <div>
            <BrowserRouter>
                <div className="mt-10">
                    <h1 className="md:hidden block text-green-500 text-4xl text-center">
                        Recent Projects
                    </h1>
                    <div className="md:hidden text-white p-5 ">
                        <div className=" first w-full overflow-hidden border border-neutral-600 rounded-md bg-black p-2 shadow-md shadow-green-500">
                            <Cards heading={heading1} content={content1} slides={slideImages1} />
                        </div>
                    </div>
                    <div className="md:hidden text-white p-5 ">
                        <div className=" first w-full overflow-hidden border border-neutral-600 rounded-md bg-black p-2 shadow-md shadow-green-500">
                            <Cards heading={heading2} content={content2} slides={slideImages2} />
                        </div>
                    </div>
                    <div className="md:hidden text-white p-5 ">
                        <div className=" first w-full overflow-hidden border border-neutral-600 rounded-md bg-black p-2 shadow-md shadow-green-500">
                            <Cards heading={heading3} content={content3} slides={slideImages3} />
                        </div>
                    </div>
                    <div className="md:hidden text-white p-5 ">
                        <div className=" first w-full overflow-hidden border border-neutral-600 rounded-md bg-black p-2 shadow-md shadow-green-500">
                            <Cards heading={heading4} content={content4} slides={slideImages4} />
                        </div>
                    </div>
                </div>
                <div className="hidden md:block mt-20">
                    <TimelineEfect />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default ThirdPage
