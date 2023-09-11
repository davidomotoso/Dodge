import Footer from "../footer/footer";
import Heading from "./TestdriveHeading";
import ContactInfo from "./contact";
import VehicleSelect from "./selectVehicle";

const TestDrive = () => {
  return (
    <section className="bg-[#1f1f29] p-8">
      <section className="w-[75em] mx-auto">
        <Heading />
        <section className="flex bg-[#23232d] px-16  border border-gray-400 rounded-lg items-start justify-center w-max mx-auto">
          <VehicleSelect />
          <ContactInfo />
        </section>
        <Footer />
      </section>
    </section>
  );
};

export default TestDrive;
