import challenger from "../../assets/Hero-images/challenger.png";
const HeroImage = () => {
  return (
    <aside>
      <figure className="w-max relative z-20">
        <img
          src={challenger}
          alt="dodge challenger"
          className="drop-shadow-[-5px_-10px_150px_#595872]"
        />
      </figure>
    </aside>
  );
};
export default HeroImage;
