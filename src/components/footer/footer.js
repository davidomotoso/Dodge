import MediaIcon from "../Hero-page/mediaIcon";
import Deatils from "./FooterDeatils";
import CopyRight from "./copyright";
import CustomerService from "./customerService";

const Footer = () => {
  return (
    <section className="relative">
      <section className="h-52 w-[50rem] bg-[#3c3b52] blur-[140px] absolute top-10 left-20"></section>
      <section className="flex justify-between items-start mt-16 relative">
        <MediaIcon />
        <Deatils />
        <CustomerService />
      </section>
      <CopyRight />
    </section>
  );
};

export default Footer;
