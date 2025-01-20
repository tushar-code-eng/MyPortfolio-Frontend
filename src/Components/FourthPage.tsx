const tennis = "/tennis.svg"
const myphoto = "/dp5.jpg"
import { useRef } from 'react';

const FourthPage = () => {

    const scrollRef = useRef(null)

    return (
        <div ref={scrollRef} className="w-full px-10 lg:px-40">
            <div className='pb-10'>
                <h1 className="text-green-500 text-center text-3xl md:text-5xl lg:p-4 mb-10">
                    This is me!
                </h1>
                <div className="text-white lg:flex w-full items-center justify-between ">
                    <div className="lg:max-w-[50%] ">
                        <h1 className='text-3xl text-center text-neutral-600 mb-2'>
                            Explorer of tech frontiers.
                        </h1>
                        <div className='text-neutral-300 text-center mb-4'>
                            <div className='flex text-base text-center mb-2'>
                                <span>I am an Engineer with skills ranging from developing web applications to conceptual thinking and making things work. When I am not in front of my screen I like to go to the court and play tennis</span>
                                <span className=' inline-flex'><img className='w-6' src={tennis} alt="tennis" /></span>
                            </div>
                            Exploring new technologies and make real world applications that solve problems, capitivate and engage users.
                        </div>
                    </div>
                    <div className="max-w-[100%]  w-96 m-auto rounded-md overflow-hidden"
                        >
                        <img src={myphoto} alt="picture" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FourthPage
