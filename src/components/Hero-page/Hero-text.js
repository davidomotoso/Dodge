import MediaIcon from "./mediaIcon";

const HeroText = ({ text, active }) => {
  const Text = (slideIndex) => {
    if (slideIndex === 0) {
      return text[0].name;
    } else if (slideIndex === 1) {
      return text[1].name;
    } else if (slideIndex === 2) {
      return text[2].name;
    } else if (slideIndex === 3) {
      return text[3].name;
    } else if (slideIndex === 4) {
      return text[4].name;
    }
  };
  return (
    <aside className="text-white w-80 relative -mb-6 z-10">
      <section className="absolute -z-10 -top-20">
        <h1 className="md:block hidden text-[#3d3d47] font-semibold text-9xl -mb-4 pl-1">
          {Text(active)}
        </h1>
      </section>
      <section className="mb-5">
        <h2 className="md:text-6xl text-5xl font-semibold">{Text(active)}</h2>
      </section>
      <section className="mb-6 text-lg font-normal">
        <p>Expand the actual teaching of the great explorer of the truth</p>
      </section>
      <button
        type="submit"
        className="mb-5 border border-[#FFBA00] py-4 px-12 rounded-full text-[#FFBA00] font-semibold"
      >
        Know More
      </button>
      <MediaIcon />
    </aside>
  );
};
export default HeroText;
