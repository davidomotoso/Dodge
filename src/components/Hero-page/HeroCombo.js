import HeroImage from "./Hero-image";
import HeroText from "./Hero-text";
import challenger from "../../assets/Hero-images/challenger.png";
import charger from "../../assets/Hero-images/charger.png";
import journey from "../../assets/Hero-images/journey.png";
import durango from "../../assets/Hero-images/durango.png";
import dart from "../../assets/Hero-images/dart.png";
import { useState } from "react";
const Herocombo = () => {
  const HeroVehicles = [
    { name: "CHALLENGER", src: challenger },
    {
      name: "CHARGER",
      src: charger,
    },
    {
      name: "JOURNEY",
      src: journey,
    },
    {
      name: "DURANGO",
      src: durango,
    },
    {
      name: "DART",
      src: dart,
    },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const handleChange = (index) => {
    setActiveSlide(index);
  };
  return (
    <section className="flex justify-between relative items-center h-[94.2%]">
      <div className="bg-[#595872] h-96 w-[45rem] blur-[140px] absolute left-80 bottom-44"></div>
      <HeroText text={HeroVehicles} active={activeSlide} />
      <HeroImage image={HeroVehicles} handleSlideChange={handleChange} />
    </section>
  );
};

export default Herocombo;