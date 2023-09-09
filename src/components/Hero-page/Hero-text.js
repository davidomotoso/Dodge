import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MediaIcon from "./mediaIcon";

const HeroText = ({ text }) => {
  return (
    <aside className="text-white w-80 relative -mb-6 z-10 ">
      <section className="overflow-hidden absolute -z-10 -top-20 w-[49rem]">
        <section className="flex iems-center justify-between h-32">
          {/* <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            // autoPlay
            infiniteLoop
            interval={3000}
          > */}
          {text.map((txt, index) => (
            <h1
              key={index}
              className="w-full text-[#3d3d47] font-semibold text-9xl -mb-4 "
            >
              {txt.name}
            </h1>
          ))}
          {/* </Carousel> */}
        </section>
      </section>
      <section className="mb-5">
        <section className="overflow-hidden w-[23em]">
          <section className="w-full flex items-center justify-between">
            {/* <Carousel
              showArrows={false}
              showThumbs={false}
              showIndicators={false}
              showStatus={false}
              autoPlay
              infiniteLoop
              interval={1800}
            > */}
            {text.map((txt, index) => (
              <h2 key={index} className="text-6xl font-semibold">
                {txt.name}
              </h2>
            ))}
            {/* </Carousel> */}
          </section>
        </section>
      </section>
      <section className="mb-6 text-lg font-normal">
        <p>Expand the actual teaching of the great explorer of the truth</p>
      </section>
      <button
        type="submit"
        className="mb-5 border border-[#FFBA00] py-4 px-12 rounded-full text-[#FFBA00] font-semibold"
      >
        Know More
      </button>
      <MediaIcon />
    </aside>
  );
};
export default HeroText;
