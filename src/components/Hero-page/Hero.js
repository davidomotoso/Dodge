import NavBar from "../NavBar/NavBar";
import Herocombo from "./HeroCombo";

const Hero = () => {
  return (
    <section
      className="bg-[#1b1b23] w-full h-[100vh]
    px-8 pt-2"
    >
      <section className="w-[75em] h-full mx-auto">
        <NavBar />
        <Herocombo />
      </section>
    </section>
  );
};
export default Hero;
