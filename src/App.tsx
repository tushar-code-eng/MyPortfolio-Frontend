import FirstPageAnimaition from "./Components/FirstPageAnimation";
import "../src/App.css";
import Navbar from "./Components/Navbar";
import SecondPage from "./Components/SecondPage";
import ThirdPage from "./Components/ThirdPage";
import FourthPage from "./Components/FourthPage";
import Footer from "./Components/Footer";
import { useEffect, useState, useRef } from "react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const footerRef = useRef<HTMLDivElement | null>(null);
  const secondPageRef = useRef<HTMLDivElement | null>(null);
  const thirdPageRef = useRef<HTMLDivElement | null>(null);
  const fourthPageRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (footerRef.current) {
      const footerRect = footerRef.current.getBoundingClientRect();
      setIsFooterVisible(
        footerRect.top <= window.innerHeight && footerRect.bottom >= 0
      );
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';
    const timer = setTimeout(() => {
      document.body.style.overflow = 'auto'; // Enable scrolling after 5 seconds
    }, 5000);
    return () => {
      clearTimeout(timer); // Cleanup timer on unmount
      document.body.style.overflow = 'auto'; // Ensure scrolling is enabled on unmount
    };
  }, []);

  return (
    <div className="">
      <div className="w-full h-screen relative overflow-hidden">
        <FirstPageAnimaition />
      </div>
      <div className="">
        <Navbar
          fourthPageRef={fourthPageRef}
          thirdPageRef={thirdPageRef}
          secondPageRef={secondPageRef}
          footerRef={footerRef}
          isScrolled={isScrolled}
          isFooterVisible={isFooterVisible}
        />
        <div className="w-full bg-black bg-grid-white/[0.05]">
          <div ref={secondPageRef}>
            <SecondPage />
          </div>
          <div ref={thirdPageRef}>
            <ThirdPage />
          </div>
          <div ref={fourthPageRef}>
            <FourthPage />
          </div>
        </div>
        <div
          ref={footerRef}
          className="w-full bg-[#E1E1E1] h-screen bg-grid-black/[0.05] flex items-center justify-center"
        >
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
