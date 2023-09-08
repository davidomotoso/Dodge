import MediaIcon from "./mediaIcon";

const HeroText = () => {
  return (
    <aside className="text-white w-80 relative -mb-6 z-10">
      <h1 className="text-[#3d3d47] font-semibold text-9xl relative top-8 -mb-4 -z-10">
        CHALLENGER
      </h1>
      <section className="mb-5">
        <h2 className="text-6xl font-semibold">CHALLENGER</h2>
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
