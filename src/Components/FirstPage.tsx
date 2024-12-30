// import CommingUpAnimation from "./subComponents/CommingUpAnimation"
// import { BackgroundLines } from "./subComponents/ui/background-lines"

// const FirstPage = () => {
//     return (
//         <>

//             <div className=" w-3/4 ">
//                 {/* <div className="h-[50rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
//                     <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
//                     <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
//                         Backgrounds
//                     </p>
//                 </div> */}


//                 <div className="flex w-full items-center justify-start bg-clip-text ">
//                     <div className="col-span-2 ">
//                         <CommingUpAnimation Text="FullStack" />
//                     </div>

//                 </div>
//                 <div className="flex w-full items-center justify-end ">

//                     <div className=" text-green-500 text-[10rem] leading-none mr-1 italic">
//                         Web
//                     </div>

//                     <div className="col-span-1">
//                         <CommingUpAnimation Text="Developer" />
//                     </div>

//                 </div>
//             </div>
//         </>
//     )
// }


import { FlipWords } from "../Components/ui/flip-words";
const words = ["Building", "Deploying", "Designing"];
import resumeArrow from '../../public/resumeArrow.svg'
import pdfUrl from '../../public/pdfs/Tushar_Bajaj_Resume.pdf'


const FirstPage = () => {

    const handleOpenPdf = () => {
        window.open(pdfUrl, "_blank");
    };

    return (
        <div className="w-full h-screen flex justify-center items-center">
            <div className="hidden md:block md:absolute top-44 right-48 text-2xl font-thin text-neutral-400 cursor-pointer">
                <div onClick={handleOpenPdf} className="flex items-center">
                    Resume
                    <span>
                        <img className="w-10" src={resumeArrow} alt=" arrow" />
                    </span>
                </div>

            </div>
            <div className="text-6xl md:text-8xl text-center font-normal text-[#3D3D3D] dark:text-neutral-400 ">
                FullStack Engineer <br />
                <FlipWords className="text-green-500" words={words} />
                modern websites
            </div>
        </div>
    )
}

export default FirstPage
