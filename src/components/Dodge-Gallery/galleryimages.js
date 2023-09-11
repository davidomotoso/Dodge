import exterior from "../../assets/GalleryImages/exterior.png";
import capability from "../../assets/GalleryImages/capability.png";
import interior from "../../assets/GalleryImages/interior.png";
const GalleryImage = () => {
  const images = [
    { src: exterior, desc: "Exterior" },
    { src: interior, desc: "Interior" },
    { src: capability, desc: "Capability" },
  ];
  return (
    <section className="flex mt-6">
      {images.map((image, index) => (
        <figure key={index} className="overflow-hidden h-[19.6rem] ">
          <img
            className="hover:scale-125 cursor-pointer duration-500"
            src={image.src}
            alt={image.desc}
          />
          <figcaption className="text-2xl relative font-normal -top-10 text-white left-4">
            {image.desc}
          </figcaption>
        </figure>
      ))}
    </section>
  );
};

export default GalleryImage;
