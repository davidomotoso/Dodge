import VehicleImg from "./Dodge-Vehicle-Img";
import ScrollAnimation from "./scroll";

const Dodge = () => {
  return (
    <section className="bg-[#1b1b23] h-[100vh] p-8 relative overflow-hidden">
      <section className="w-[75em] mx-auto h-full relative">
        <VehicleImg />
        <ScrollAnimation />
      </section>
      <h1 className="text-[#26262d] text-9xl font-bold absolute bottom-1 right-0">
        Dodge
      </h1>
    </section>
  );
};

export default Dodge;
