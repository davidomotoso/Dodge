import charger from "../../assets/vehicles-images/charger.png";
import sedan from "../../assets/vehicles-images/charger sedan.png";
import challenger from "../../assets/vehicles-images/challenger.png";
const VehicleImg = () => {
  return (
    <section className="flex flex-row h-[97%] justify-between items-center relative">
      <section className="bg-[#595872] w-full h-64 blur-[140px] absolute bottom-56"></section>
      {/* first car */}
      <section className="flex flex-col items-start justify-center relative">
        <figure>
          <img src={charger} alt="2023 charger" />
          <figcaption className="text-white text-2xl font-semibold">
            2023 Charger
          </figcaption>
        </figure>
        <section className="mb-6 mt-3 pl-3">
          <span className="text-[#494967EE] font-semibold text-[1.05em] mt-6 mb-4">
            Now starting at
          </span>
          <p className="text-[#ffba00] text-lg font-semibold mt-2">£34,230</p>
        </section>
        <button
          type="submit"
          className="border border-[#FFBA00] py-4 px-10 rounded-full text-[#FFBA00] font-semibold"
        >
          Know More
        </button>
      </section>
      {/* second car */}
      <section className="flex flex-col items-start justify-center relative">
        <figure>
          <img src={sedan} alt="2023 charger" />
          <figcaption className="text-white text-2xl font-semibold">
            2023 Charger Sedan
          </figcaption>
        </figure>
        <section className="mb-6 mt-3 pl-3">
          <span className="text-[#494967EE] font-semibold text-[1.05em] mt-6 mb-4">
            Now starting at
          </span>
          <p className="text-[#ffba00] text-lg font-semibold mt-2">£34,230</p>
        </section>
        <button
          type="submit"
          className="border border-[#FFBA00] py-4 px-10 rounded-full text-[#FFBA00] font-semibold"
        >
          Know More
        </button>
      </section>
      {/* third car */}
      <section className="flex flex-col items-start justify-center relative">
        <figure>
          <img src={challenger} alt="2023 charger" />
          <figcaption className="text-white text-2xl font-semibold">
            2023 Challenger SXT
          </figcaption>
        </figure>
        <section className="mb-6 mt-3 pl-3">
          <span className="text-[#494967EE] font-semibold text-[1.05em] mt-6 mb-4">
            Now starting at
          </span>
          <p className="text-[#ffba00] text-lg font-semibold mt-2">£34,230</p>
        </section>
        <button
          type="submit"
          className="border border-[#FFBA00] py-4 px-10 rounded-full text-[#FFBA00] font-semibold"
        >
          Know More
        </button>
      </section>
    </section>
  );
};

export default VehicleImg;
