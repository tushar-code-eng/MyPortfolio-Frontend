const NavbarElements = ({ scrollRef, Text, isScrolled, isFooterVisible }: { scrollRef: React.MutableRefObject<HTMLDivElement | null>, Text: string, isScrolled: boolean, isFooterVisible: boolean }) => {

  const handleScrollToFooter = (): void => {
    if (scrollRef && scrollRef.current) {
      // Get the current position and the target position
      const startPosition = window.pageYOffset;
      const targetPosition = scrollRef.current.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 1500; // Duration in milliseconds for slower scroll
      let startTime: number | null = null;

      const animateScroll = (currentTime: number): void => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);

        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      };

      // Easing function for smooth scroll effect
      const easeInOutQuad = (t: number, b: number, c: number, d: number): number => {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };

      requestAnimationFrame(animateScroll);
    }
  };

  return (
    <div onClick={handleScrollToFooter} className={`cursor-pointer relative text-base ${isFooterVisible ? 'text-black' : (isScrolled ? 'text-neutral-300' : 'text-black')}`}>
      {Text}
      <span id="line1" className={` absolute inline-block h-[0.5px]  ${isFooterVisible ? 'bg-black' : (isScrolled ? 'bg-neutral-300' : 'bg-black')}   bottom-1 right-0 w-full hover:w-0 `}></span>
      <span id="line2" className="line"></span>
    </div>
  )
}

export default NavbarElements
