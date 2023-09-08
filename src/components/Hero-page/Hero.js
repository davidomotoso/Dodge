import NavBar from "../NavBar/NavBar";
import HeroImage from "./Hero-image";
import HeroText from "./Hero-text";

const Hero = () => {
  return (
    <section
      className="bg-[#1b1b23] w-full h-[100vh]
    px-8 pt-4"
    >
      <section className="w-[75em] h-full mx-auto">
        <NavBar />
        <section className="flex justify-center items-center gap-10 h-[94.2%]">
          <HeroText />
          <HeroImage />
        </section>
      </section>
    </section>
  );
};
export default Hero;
