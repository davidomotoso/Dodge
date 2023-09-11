import About from "../components/About-page/About";
import Gallery from "../components/Dodge-Gallery/Gallery";
import Dodge from "../components/Dodge-Vechicles/DodgeCars";
import Hero from "../components/Hero-page/Hero";
import TestDrive from "../components/TestDrive page.js/Testdrive";
import Services from "../components/car-services/services";
const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Dodge />
      <Gallery />
      <TestDrive />
    </main>
  );
};
export default Home;
