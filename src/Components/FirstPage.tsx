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
