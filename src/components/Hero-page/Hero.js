import NavBar from "../NavBar/NavBar";
import Herocombo from "./HeroCombo";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#1b1b23] overflow-x-hidden w-full xl:h-[100vh] px-4 pt-2 xl:pb-0 pb-10"
    >
      <section className="xl:w-[75em] h-full mx-auto">
        <NavBar />
        <Herocombo />
      </section>
    </section>
  );
};
export default Hero;
