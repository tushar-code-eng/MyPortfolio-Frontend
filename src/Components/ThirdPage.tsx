import { BrowserRouter } from "react-router-dom"
import TimelineEfect from "./subComponents/TimelineEffect"

const ThirdPage = () => {

    return (
        <div>
            <BrowserRouter>
                <div className="hidden md:block mt-20">
                    <TimelineEfect />
                </div>
            </BrowserRouter>
        </div>
    )
}

export default ThirdPage
