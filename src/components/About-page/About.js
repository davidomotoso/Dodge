import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
  return (
    <section className="flex items-center justify-between mb-16 w-[75em] mx-auto">
      <AboutText />
      <AboutImage />
    </section>
  );
};

export default About;
