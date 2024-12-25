import { Timeline } from "../../Components/ui/timeline";

const p1 = "/p1.png";
const p2 = "/p2.png";

// const p2_1 = "/p2_2.png";
// const p2_2 = "/p2_1.png";

const p2_1 = "/p2_1_2.png";
const p2_2 = "/p2_2_2.png";

const p3_1 = "/p3_1.png";
const p3_2 = "/p3_2.png";

const p4_1 = "/p4_1.png";
const p4_2 = "/p4_2.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";

import LaunchIcon from '@mui/icons-material/Launch';

gsap.registerPlugin(ScrollTrigger);

const TimelineEfect = () => {

    useEffect(() => {
        gsap.utils.toArray(".first").forEach((image: any, index) => {
            gsap.fromTo(image, {
                opacity: 0, y: 40
            },
                {
                    opacity: 1, y: 0, duration: 1, delay: index * 0.1, ease: "power3.inOut", scrollTrigger: {
                        trigger: ".trigger1",
                        scroller: "body",
                        start: "top 60%"
                    }
                }
            )
        });
        gsap.utils.toArray(".second").forEach((image: any, index) => {
            gsap.fromTo(image, {
                opacity: 0, y: 40
            },
                {
                    opacity: 1, y: 0, duration: 1, delay: index * 0.1, ease: "power3.inOut", scrollTrigger: {
                        trigger: ".trigger2",
                        scroller: "body",
                        start: "top 60%"
                    }
                }
            )
        });
        gsap.utils.toArray(".third").forEach((image: any, index) => {
            gsap.fromTo(image, {
                opacity: 0, y: 40
            },
                {
                    opacity: 1, y: 0, duration: 1, delay: index * 0.1, ease: "power3.inOut", scrollTrigger: {
                        trigger: ".trigger3",
                        scroller: "body",
                        start: "top 60%"
                    }
                }
            )
        });
        gsap.utils.toArray(".four").forEach((image: any, index) => {
            gsap.fromTo(image, {
                opacity: 0, y: 40
            },
                {
                    opacity: 1, y: 0, duration: 1, delay: index * 0.1, ease: "power3.inOut", scrollTrigger: {
                        trigger: ".trigger4",
                        scroller: "body",
                        start: "top 60%"
                    }
                }
            )
        });
    }, [])

    const [hov, setHov] = useState(false)

    const data = [
        {
            title: "Sai Travels",
            content: (
                <div>
                    <div className="trigger1 grid grid-cols-2 gap-4 group/card ">
                        <div className="first relative">
                            <div className={`z-10 right-1 top-1 ${hov ? 'absolute' : 'hidden'}`}>
                                <button
                                    onMouseEnter={() => { setHov(true) }}
                                    onMouseLeave={() => { setHov(false) }}
                                    onClick={() => window.open('https://sai-travels-3wmo.vercel.app/', '_blank')}
                                    className="px-2 py-1 rounded border text-neutral-200 bg-transparent">
                                    <LaunchIcon />
                                </button>
                            </div>
                            <img
                                onMouseEnter={() => { console.log(hov); setHov(true) }}
                                onMouseLeave={() => { console.log("second", hov); setHov(false) }}
                                src={p1}
                                alt="startup template"
                                width={500}
                                height={500}
                                className={`cursor-pointer hover:opacity-35 ${hov ? 'opacity-35' : 'opacity-100'} transition duration-300 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]`}
                            />
                        </div>
                        <div className=" hidden first p-3 lg:flex justify-center items-center text-neutral-500 rounded-lg object-cover md:h-44 lg:h-60 w-full">
                            <p>
                                SAI TRAVELS' ticket booking website offers a seamless way for passengers to book comfortable sleeper bus journeys from Chandigarh to Jammu. The platform provides an intuitive, user-friendly experience, making it easy to browse and reserve tickets. With features like downloadable PDF tickets and user profiles, our website ensures a hassle-free travel experience.
                            </p>
                        </div>
                        <div className="hidden first lg:flex p-3 justify-center items-center text-neutral-500 rounded-lg object-cover text-sm md:h-44 lg:h-60 w-full">
                            <p>
                                Built with modern technologies, the website leverages TypeScript, Next.js, and Tailwind CSS for a responsive and fast user interface. MongoDB manages data efficiently, while NextAuth.js secures user authentication. Recoil ensures smooth state management, and Vite enhances performance with quick load times.
                            </p>
                        </div>
                        <div className="first" >
                            <img

                                src={p2}
                                alt="startup template"
                                width={500}
                                height={500}
                                className=" cursor-pointer hover:opacity-35 transition duration-300 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            // title: "Anonymous Messaging",
            title: "Balenciaga",
            content: (
                <div>

                    <div className="trigger2 grid grid-cols-2 gap-4 group/card">

                        <div className="relative second">
                            <div className={`z-10 right-1 top-1  ${hov ? 'absolute' : 'hidden'}`}>
                                <button
                                    onMouseEnter={() => { console.log(hov); setHov(true) }}
                                    onMouseLeave={() => { console.log("second", hov); setHov(false) }}
                                    onClick={() => window.open('https://steady-frangollo-64fda9.netlify.app/', '_blank')}
                                    className="px-2 py-1 rounded border border-neutral-200 text-neutral-200 bg-transparent">
                                    <LaunchIcon />
                                </button>
                            </div>
                            <img
                                onMouseEnter={() => { console.log(hov); setHov(true) }}
                                onMouseLeave={() => { console.log("second", hov); setHov(false) }}
                                src={p2_1}
                                alt="startup template"
                                width={500}
                                height={500}
                                className={`cursor-pointer hover:opacity-35 ${hov ? 'opacity-35' : 'opacity-100'} transition duration-300 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]`}
                            />
                        </div>
                        <div className="p-3 hidden second lg:flex justify-center items-center text-neutral-500 rounded-lg object-cover max-h-20 md:max-h-44 lg:h-60 w-full">
                            <p>
                                {/* Anonymous messaging website allows users to send and receive messages without revealing their identity. It offers a secure and private way to communicate, fostering open and honest conversations. Users can enjoy seamless messaging without the fear of compromising their anonymity. */}
                                My redesigned Balenciaga landing page enhances the user experience by blending minimalist aesthetics with intuitive navigation, reflecting the brand's bold identity. It features striking visuals, seamless performance, and a mobile-responsive layout to ensure effortless exploration. The design prioritizes user engagement while maintaining Balenciaga's avant-garde style.
                            </p>
                        </div>
                        <div className="p-3 hidden second lg:flex justify-center items-center text-neutral-500 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full">
                            <p>
                                {/* The website is built using cutting-edge technologies like TypeScript and Next.js for a responsive, smooth user experience. Tailwind CSS is used for modern, adaptable styling, while MongoDB manages data securely. Authentication and data protection are ensured through robust back-end solutions to maintain user privacy. */}

                                I redesigned the Balenciaga landing page using Figma to create a visually striking and user-friendly design. The development was done with React and TypeScript, styled seamlessly using Tailwind CSS. This combination ensures a modern, responsive, and efficient user experience.
                            </p>
                        </div>
                        <div className="second">
                            <img
                                src={p2_2}
                                alt="startup template"
                                width={500}
                                height={500}
                                className="cursor-pointer hover:opacity-35 transition duration-300 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Video Call Application",
            content: (
                <div>

                    <div className="trigger3 grid grid-cols-2 gap-4 group/card">

                        <div className="third relative">
                            <div className={`z-10 right-1 top-1  ${hov ? 'absolute' : 'hidden'}`}>
                                <button
                                    onMouseEnter={() => { console.log(hov); setHov(true) }}
                                    onMouseLeave={() => { console.log("second", hov); setHov(false) }}
                                    onClick={() => window.open('https://github.com/tushar-code-eng/VideoCall-WebRTC', '_blank')}
                                    className="px-2 py-1 rounded border border-neutral-200 text-neutral-200 bg-transparent">
                                    <LaunchIcon />
                                </button>
                            </div>
                            <img
                                onMouseEnter={() => { console.log(hov); setHov(true) }}
                                onMouseLeave={() => { console.log("second", hov); setHov(false) }}
                                src={p3_1}
                                alt="startup template"
                                width={500}
                                height={500}
                                className={`cursor-pointer hover:opacity-35 ${hov ? 'opacity-35' : 'opacity-100'} transition duration-300 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]`}
                            />
                        </div>
                        <div className="third hidden lg:flex justify-center p-3 items-center text-neutral-500 rounded-lg object-cover max-h-20 md:max-h-44 lg:h-60 w-full">
                            <p>
                                Video call application makes it simple for people to connect with clear, high-quality video and audio. It provides a reliable experience for work, catching up with friends, or hosting virtual gatherings. The app is designed to be intuitive, making online conversations feel natural and easy.
                            </p>
                        </div>
                        <div className="third hidden lg:flex justify-center p-3 items-center text-neutral-500 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full">
                            <p>
                                Powered by TypeScript and React, the app delivers fast and interactive performance. WebRTC supports real-time, seamless video and audio, while Node.js and MongoDB manage data securely. Tailwind CSS ensures a sleek and responsive design that looks great on any device.
                            </p>
                        </div>
                        <div className="third">
                            <img
                                src={p3_2}
                                alt="startup template"
                                width={500}
                                height={500}
                                className="cursor-pointer hover:opacity-35 transition duration-300 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "Smart Contracts",
            content: (
                <div>
                    {/* <p className="text-neutral-500 text-xs md:text-sm font-normal mb-8">
                        Built smart contracts in ethereum.
                    </p> */}
                    <div className=" trigger4 grid grid-cols-2 gap-4 group/card">

                        <div className="four relative">
                            <div className={`z-10 right-1 top-1  ${hov ? 'absolute' : 'hidden'}`}>
                                <button
                                    onMouseEnter={() => { setHov(true) }}
                                    onMouseLeave={() => { setHov(false) }}
                                    onClick={() => window.open('https://github.com/tushar-code-eng/Smart_Contracts', '_blank')}
                                    className="px-2 py-1 rounded border border-neutral-200 text-neutral-200 bg-transparent">
                                    <LaunchIcon />
                                </button>
                            </div>
                            <img
                                onMouseEnter={() => { console.log(hov); setHov(true) }}
                                onMouseLeave={() => { console.log("second", hov); setHov(false) }}
                                src={p4_1}
                                alt="startup template"
                                width={500}
                                height={500}
                                className={`cursor-pointer hover:opacity-35 ${hov ? 'opacity-35' : 'opacity-100'} transition duration-300 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]`}
                            />
                        </div>
                        <div className="four hidden lg:flex p-3 justify-center items-center text-neutral-500 rounded-lg object-cover max-h-20 md:max-h-44 lg:h-60 w-full">
                            <p>
                                Smart contract solutions simplify interactions on the Ethereum blockchain, making transactions secure and automated. Built for various use cases, these contracts enable trustless agreements and decentralized applications. Designed for reliability, they streamline processes and reduce the need for intermediaries.
                            </p>
                        </div>
                        <div className="four  hidden lg:flex p-3 justify-center items-center text-neutral-500 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full">
                            <p>
                                Developed using Solidity, the contracts harness the power of the Ethereum blockchain for transparency and security. The deployment ensures immutability and trust, with optimized coding for efficient gas usage. Integrated development tools and frameworks support a robust, seamless implementation experience.
                            </p>
                        </div>
                        <div className="four">
                            <img
                                src={p4_2}
                                alt="startup template"
                                width={500}
                                height={500}
                                className="cursor-pointer hover:opacity-35 transition duration-300 rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}

export default TimelineEfect