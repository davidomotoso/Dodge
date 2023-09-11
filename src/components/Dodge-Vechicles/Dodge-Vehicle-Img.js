import charger from "../../assets/vehicles-images/charger.png";
import sedan from "../../assets/vehicles-images/charger sedan.png";
import challenger from "../../assets/vehicles-images/challenger.png";
import hornet from "../../assets/vehicles-images/hornet.png";
import dakota from "../../assets/vehicles-images/dakota.png";
const VehicleImg = () => {
  const vehicles = [
    {
      name: "2023 Charger",
      src: charger,
      price: "£34,230",
    },
    {
      name: "2023 Charger Sedan",
      src: sedan,
      price: "£32,645",
    },
    {
      name: "2023 Challenger SXT",
      src: challenger,
      price: "£32,695",
    },
    {
      name: "2023 Hornet",
      src: hornet,
      price: "£31,590",
    },
    {
      name: "2023 Dakota",
      src: dakota,
      price: "£36,820",
    },
  ];
  return (
    <section className="relative h-full">
      <section className="bg-[#595872] w-full h-64 blur-[140px] absolute bottom-56"></section>

      <section className="overflow-hidden h-[97%] ">
        <section className="w-[128.5em] h-full flex flex-row justify-between items-center relative">
          {vehicles.map((vehicle, index) => (
            <section
              key={index}
              className="flex flex-col items-start justify-center relative w-96"
            >
              <figure>
                <img src={vehicle.src} alt={vehicle.name} className="w-full" />
                <figcaption className="text-white text-2xl font-semibold">
                  {vehicle.name}
                </figcaption>
              </figure>
              <section className="mb-6 mt-3 pl-3">
                <span className="text-gray-400 font-semibold text-[1.05em] mt-6 mb-4">
                  Now starting at
                </span>
                <p className="text-[#ffba00] text-lg font-semibold mt-2">
                  {vehicle.price}
                </p>
              </section>
              <button
                type="submit"
                className="border border-[#FFBA00] py-4 px-10 rounded-full text-[#FFBA00] font-semibold"
              >
                Know More
              </button>
            </section>
          ))}
        </section>
      </section>
    </section>
  );
};

export default VehicleImg;
