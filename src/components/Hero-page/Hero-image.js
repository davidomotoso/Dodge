import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const HeroImage = ({ image }) => {
  return (
    <aside className="overflow-hidden">
      <figure className="relative z-20 w-[54.36em] flex items-center justify-between">
        <Carousel
          showArrows={false}
          showThumbs={false}
          showIndicators={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          interval={1800}
        >
          {image.map((img, index) => (
            <img key={index} src={img.src} alt={img.name} />
          ))}
        </Carousel>
      </figure>
    </aside>
  );
};
export default HeroImage;
