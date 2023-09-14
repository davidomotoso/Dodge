import AboutImage from "./AboutImage";
import AboutText from "./AboutText";

const About = () => {
  return (
    <section className="flex xl:flex-row flex-col gap-y-16 items-center justify-between mb-16 xl:w-[75em] p-8 mx-auto">
      <AboutText />
      <AboutImage />
    </section>
  );
};

export default About;
