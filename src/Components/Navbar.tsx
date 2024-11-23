import NavbarElements from "./subComponents/NavbarElements"
import DP from '../../public/dp2.jpg'
import { Button } from "../Components/ui/moving-border";

const Navbar = ({ fourthPageRef,thirdPageRef, secondPageRef, footerRef, isScrolled, isFooterVisible }: { fourthPageRef: React.MutableRefObject<HTMLDivElement | null>,thirdPageRef: React.MutableRefObject<HTMLDivElement | null>, secondPageRef: React.MutableRefObject<HTMLDivElement | null>, footerRef: React.MutableRefObject<HTMLDivElement | null>, isScrolled: boolean, isFooterVisible: boolean }) => {
    return (
        <div className="flex items-center justify-between fixed top-0 w-full px-8 py-4 z-100">
            <div className="flex gap-4 items-center justify-center cursor-pointer">
                <Button className="w-10 rounded-full overflow-hidden border-green-500 "
                >
                    <img src={DP} alt="" />
                </Button>
                <NavbarElements scrollRef={fourthPageRef} isFooterVisible={isFooterVisible} isScrolled={isScrolled} Text="Tushar Bajaj" />
            </div>
            <div className="hidden md:flex items-center justify-center gap-10">
                <NavbarElements scrollRef={secondPageRef} isFooterVisible={isFooterVisible} isScrolled={isScrolled} Text="Skills" />
                <NavbarElements scrollRef={thirdPageRef} isFooterVisible={isFooterVisible} isScrolled={isScrolled} Text="Projects" />
                <NavbarElements scrollRef={footerRef} isFooterVisible={isFooterVisible} isScrolled={isScrolled} Text="Connect" />
            </div>
        </div>
    )
}

export default Navbar
