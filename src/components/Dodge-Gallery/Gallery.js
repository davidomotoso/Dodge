import GalleryImage from "./galleryimages";
import GalleryLinks from "./navlinks";

const Gallery = () => {
  return (
    <section className="w-[75em] mx-auto py-14">
      <GalleryLinks />
      <GalleryImage />
    </section>
  );
};

export default Gallery;
