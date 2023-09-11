import { useState } from "react";
import VehicleImg from "./Dodge-Vehicle-Img";
import ScrollAnimation from "./scroll";

const Dodge = () => {
  const [carSlide, setcarSlide] = useState(0);
  const animationStyle = "scale:1.3;translate:0 -40px";
  const normalStyle = "scale:inherit;translate:0";
  const handleNextSlide = (e, prevButton, challenger, hornet) => {
    prevButton.disabled = false;
    if (carSlide == 0) {
      setcarSlide((prevNum) => prevNum - 410);
      challenger.style = `${animationStyle} `;
    } else if (carSlide === -410) {
      setcarSlide((prevNum) => prevNum - 410);
      challenger.style = `${normalStyle}`;
      hornet.style = `${animationStyle}`;
      e.target.parentElement.disabled = true;
    }
  };
  const handlePrevSlide = (e, nextButton, challenger, hornet) => {
    nextButton.disabled = false;
    if (carSlide === -820) {
      setcarSlide((prevNum) => prevNum + 410);
      hornet.style = `${normalStyle}`;
      challenger.style = `${animationStyle}`;
    } else if (carSlide === -410) {
      challenger.style = `${normalStyle}`;
      setcarSlide((prevNum) => prevNum + 410);
      e.target.parentElement.disabled = true;
    }
  };

  const translate = {
    transform: `translateX(${carSlide}px)`,
  };
  return (
    <section className="bg-[#1b1b23] h-[100vh] p-8 relative overflow-hidden">
      <section className="w-[75em] mx-auto h-full relative">
        <VehicleImg
          nextFunc={handleNextSlide}
          prevFunc={handlePrevSlide}
          scroll={translate}
        />
        <ScrollAnimation />
        <h1 className="text-[#26262d] text-9xl font-bold absolute -bottom-4 -right-16">
          Dodge
        </h1>
      </section>
    </section>
  );
};

export default Dodge;
