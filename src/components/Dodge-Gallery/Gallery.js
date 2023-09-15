import GalleryImage from "./galleryimages";
import GalleryLinks from "./navlinks";

const Gallery = () => {
  return (
    <section className="xl:w-[75em] mx-auto px-4 py-14">
      <GalleryLinks />
      <GalleryImage />
    </section>
  );
};

export default Gallery;
