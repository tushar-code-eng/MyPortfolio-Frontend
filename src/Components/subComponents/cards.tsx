import LaunchIcon from '@mui/icons-material/Launch';

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const Cards = ({ heading, content, slides }: { heading: string, content: string, slides: string[] }) => {

    return (
        <div>
            <div>
                <div className="text-start mb-6">
                    <div className="text-4xl my-2 text-green-500 flex items-center justify-between" >
                        <div>
                            {heading}
                        </div>
                        <div>
                            <button
                                onClick={() => window.open('https://sai-travels-3wmo.vercel.app/', '_blank')}
                                className="px-2 py-1 rounded  text-neutral-500 bg-transparent">
                                <LaunchIcon />
                            </button>
                        </div>
                    </div>
                    <p className="text-neutral-500">
                        {content}
                    </p>
                </div>
                <Slide>
                    {slides.map((slideImage, index) => (
                        <div key={index}>
                            <img src={slideImage} alt="image" />
                        </div>
                    ))}
                </Slide>
            </div>
        </div>
    )
}

export default Cards
