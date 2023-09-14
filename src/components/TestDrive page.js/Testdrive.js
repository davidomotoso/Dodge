import Footer from "../footer/footer";
import Heading from "./TestdriveHeading";
import ContactInfo from "./contact";
import VehicleSelect from "./selectVehicle";

const TestDrive = () => {
  return (
    <section className="bg-[#1f1f29] p-8">
      <section className="xl:w-[75em] mx-auto">
        <Heading />
        <section className="flex xl:flex-row flex-col bg-[#23232d] sm:px-16 px-8 border border-gray-400 rounded-lg xl:items-start justify-center sm:w-max mx-auto">
          <VehicleSelect />
          <ContactInfo />
        </section>
        <Footer />
      </section>
    </section>
  );
};

export default TestDrive;
