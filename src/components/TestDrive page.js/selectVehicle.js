const VehicleSelect = () => {
  const vehicles = ["Challenger", "Charger", "Viper", "Durango"];
  return (
    <aside className="w-80 pt-20 pb-8">
      <h3 className="text-2xl font-medium text-white mb-5">
        Select the Vehicle
      </h3>
      <section className="flex items-start justify-center flex-col gap-7">
        {vehicles.map((vehicle, index) => (
          <section key={index} className=" text-lg font-medium cursor-pointer">
            <input
              type="radio"
              name="cars"
              id={vehicle}
              className=" scale-110 accent-[#ffba00] border-[#ffba00]"
            />
            <label
              className="pl-2 hover:text-[#ffba00] text-xl inline-block text-white"
              htmlFor={vehicle}
            >
              {vehicle}
            </label>
          </section>
        ))}
      </section>
    </aside>
  );
};

export default VehicleSelect;
