import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
  return (
    <section className="flex items-center justify-end gap-6 mb-10 w-[75em] mx-auto">
      <AboutText />
      <AboutImage />
    </section>
  );
};

export default About;
