import github from '../../public/github2.svg'
import twitter from '../../public/twitter2.svg'
import insta from '../../public/instagram2.svg'
import linkedin from '../../public/linkedin2.svg'
import top from '../../public/top-arrow.svg'
import arrow from '../../public/arrow-up-left.svg'

// import gsap from 'gsap'
// import { useState } from 'react'
// import axios from 'axios'

const Footer = () => {

    // const [name, setName] = useState("")
    // const [email, setEmail] = useState("")

    const scrollToTop = (): void => {
        const startPosition = window.pageYOffset;
        const duration = 1500;
        let startTime: number | null = null;

        const animateScroll = (currentTime: number): void => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const distance = -startPosition; // Distance to move (scrolling to the top)
            const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

            window.scrollTo(0, run);

            if (timeElapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        };

        const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
        };

        requestAnimationFrame(animateScroll);
    };



    // const handleClick = () => {
    //     const tl = gsap.timeline()

    //     tl.fromTo('.shrink', {

    //     }, {
    //         height: "1.5px",
    //         paddingTop: 0,
    //         paddingBottom: 0,
    //         backgroundColor: "#3D3D3D",
    //         border: "5px",
    //         duration: 2
    //     })
    //     tl.fromTo('.shrink', {

    //     }, {
    //         paddingLeft: "1px",
    //         paddingRight: "1px",
    //         duration: 1,
    //         transformOrigin: "center"
    //     })
    //     tl.fromTo('.shrink', {

    //     }, {
    //         rotation: 90,

    //         onComplete: () => {
    //             const tl2 = gsap.timeline()
    //             tl2.fromTo(".shrink", {}, {
    //                 display: "none",
    //                 opacity: 0
    //             })

    //             tl2.fromTo(".inputbox", {
    //                 paddingLeft: "1px",
    //                 paddingRight: "1px",
    //                 duration: 1,
    //             }, {
    //                 display: "block",
    //                 paddingBottom: "0.75rem",
    //                 paddingTop: "0.75rem",
    //                 paddingLeft: "1rem",
    //                 padding: "1rem",
    //                 transformOrigin: "center",
    //                 duration: 1,
    //                 opacity: 1,
    //                 // delay: 0.5
    //             })
    //         }
    //     })
    // }

    // const handleClick2 = () => {
    //     const tl = gsap.timeline()

    //     tl.fromTo('.shrink2', {

    //     }, {
    //         height: "1.5px",
    //         paddingTop: 0,
    //         paddingBottom: 0,
    //         backgroundColor: "#3D3D3D",
    //         border: "5px",
    //         duration: 2
    //     })
    //     tl.fromTo('.shrink2', {

    //     }, {
    //         paddingLeft: "1px",
    //         paddingRight: "1px",
    //         duration: 1,
    //         transformOrigin: "center"
    //     })
    //     tl.fromTo('.shrink2', {

    //     }, {
    //         rotation: 90,

    //         onComplete: () => {
    //             const tl2 = gsap.timeline()
    //             tl2.fromTo(".shrink2", {}, {
    //                 display: "none",
    //                 opacity: 0
    //             })

    //             tl2.fromTo(".inputbox2", {
    //                 paddingLeft: "1px",
    //                 paddingRight: "1px",
    //                 duration: 1,
    //             }, {
    //                 display: "block",
    //                 paddingBottom: "0.75rem",
    //                 paddingTop: "0.75rem",
    //                 paddingLeft: "1rem",
    //                 padding: "1rem",
    //                 transformOrigin: "center",
    //                 duration: 1,
    //                 opacity: 1,
    //                 onComplete: () => {
    //                     gsap.fromTo(".connectbutton", {}, {
    //                         display: "block",
    //                         ease: "power3.in"
    //                     })
    //                 }
    //                 // delay: 0.5
    //             })
    //         }
    //     })
    // }

    // const handleSubmit = async () => {

    //     const tl = gsap.timeline()

    //     tl.fromTo("#all",{},{
    //         opacity:0
    //     })

    //     const res = await axios.post('http://localhost:3000/api/users', { name, email })
    //     console.log(res)
    // }

    return (
        <div className="overflow-hidden w-[80%] m-auto h-[80%] translate-y-[12.5%] bg-white border-2">
            <div className='my-6 lg:my-12 flex items-center justify-between overflow-hidden mx-2 lg:mx-10'>
                <div className='w-16 lg:w-24'>
                    <img src={arrow} alt="" />
                </div>
                <div className=' flex justify-end items-center gap-4 '>
                    <span >
                        Back to top
                    </span>
                    <div
                        onClick={scrollToTop}
                        className='w-12 cursor-pointer z-10 '>
                        <img src={top} alt="" />
                    </div>
                </div>
            </div>
            <div className="w-full text-[#E1E1E1] flex flex-col items-center justify-center">
                <div className='flex flex-col' >
                    <span className="text-lg text-center lg:text-start text-[#3D3D3D] leading-1 lg:leading-none -mb-4">
                        Have something in mind <span className="bounce-effect">?</span>
                    </span>
                    <span className=" text-8xl text-center lg:text-start lg:text-[9rem] leading-none">
                        LET'S TALK
                    </span>
                </div>
            </div>
            {/* <div className='w-full flex items-center justify-around py-5'>
                <div onClick={handleClick} className={`shrink  hover-effect border py-5 px-12 rounded-full border-[#3D3D3D] cursor-pointer text-lg overflow-hidden`}>
                    Name
                </div>
                <input onChange={(e) => { e.preventDefault(); setName(e.target.value) }} id='all' className='inputbox hidden opacity-0 py-3 px-4 rounded-md outline-[#3D3D3D] outline-0 text-lg' placeholder='Please add your name' type="text" />
                <div onClick={handleClick2} className={`shrink2 hover-effect border py-5 px-12 rounded-full border-[#3D3D3D] cursor-pointer text-lg overflow-hidden`}>
                    Email
                </div>
                <input onChange={(e) => { e.preventDefault(); setEmail(e.target.value) }} id='all' className='inputbox2 hidden opacity-0 py-3 px-4 rounded-md outline-[#3D3D3D] outline-0 text-lg' placeholder='Please add your email' type="text" />
            </div>

            <div id='all' className='w-full text-center flex items-center justify-center'>
                <button onClick={handleSubmit} className='hidden connectbutton '>
                    Connect
                </button>
            </div> */}

            <div className='lg:hidden w-full flex flex-col gap-7 mt-4'>
                <div className='flex flex-wrap w-full items-center justify-around'>
                    <div
                        onClick={() => window.open('https://github.com/tushar-code-eng', '_blank')}
                        className='  flex items-center justify-center gap-2 p-2 rounded-md'>
                        Github <span><img className='w-5' src={github} alt="" /> </span>
                    </div>
                    <div
                        onClick={() => window.open('https://x.com/BajajTushar05', '_blank')}
                        className=' flex items-center justify-center gap-2 p-2 rounded-md'>
                        Twitter <span><img className='w-5' src={twitter} alt="" /> </span>
                    </div>

                </div>
                <div className='flex flex-wrap w-full items-center justify-around'>
                    <div
                        onClick={() => window.open('https://www.instagram.com/tushar_bajaj05/', '_blank')}
                        className=' flex items-center justify-center gap-2 p-2 rounded-md'>
                        Instagram <span><img className='w-5' src={insta} alt="" /> </span>
                    </div>
                    <div
                        onClick={() => window.open('https://www.linkedin.com/in/tushar-bajaj-6b7675246', '_blank')}
                        className=' flex items-center justify-center gap-2 p-2 rounded-md'>
                        LinkedIn <span><img className='w-5' src={linkedin} alt="" /> </span>
                    </div>

                </div>
            </div>

            <div className="hidden py-10 w-full lg:flex items-center justify-around px-10 ">
                <div className="flex items-start justify-start cursor-pointer">
                    <div
                        onClick={() => window.open('https://github.com/tushar-code-eng', '_blank')}
                        className="relative flex items-center justify-between hover-bg-drop text-lg pr-40 pt-2 pb-16 border-t-2 border-[#909090] lg:w-full">
                        <div id='text'>Github</div>
                        <div id='image' className='absolute bottom-0 right-0 p-2 w-12'>
                            <img src={github} alt="" />
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => window.open('https://x.com/BajajTushar05', '_blank')}
                    className="flex items-start justify-start cursor-pointer">
                    <div className="relative hover-bg-drop text-lg pr-40 pt-2 pb-16 border-t-2 border-[#909090] w-full">
                        <div id='text'>Twitter</div>
                        <div id='image' className='absolute bottom-0 right-0 p-2 w-12'>
                            <img src={twitter} alt="" />
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => window.open('https://www.instagram.com/tushar_bajaj05/', '_blank')}
                    className="flex items-start justify-start cursor-pointer">
                    <div className="hover-bg-drop text-lg pr-40 pt-2 pb-16 border-t-2 border-[#909090] w-full">
                        <div id='text'>Instagram</div>
                        <div id='image' className='absolute bottom-0 right-0 p-2 w-12'>
                            <img src={insta} alt="" />
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => window.open('https://www.linkedin.com/in/tushar-bajaj-6b7675246', '_blank')}
                    className="flex items-start justify-start cursor-pointer">
                    <div className="hover-bg-drop text-lg pr-40 pt-2 pb-16 border-t-2 border-[#909090] w-full">
                        <div id='text'>LinkedIn</div>
                        <div id='image' className='absolute bottom-0 right-0 p-2 w-14'>
                            <img src={linkedin} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
