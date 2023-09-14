const GalleryLinks = () => {
  const Links = ["Challenger", "Charger", "Viper", "Durango", "Hornet"];
  return (
    <>
      <section className="mb-10">
        <h1 className="text-center text-4xl font-semibold">Gallery</h1>
      </section>
      <nav>
        <ul className="flex xl:flex-row flex-col gap-y-5 xl:border-0 xl:py-0 border-2 border-black py-3 justify-between items-center md:w-96 w-full xl:w-full mx-auto">
          {Links.map((link, index) => (
            <li
              className="xl:hover:underline xl:hover:text-black hover:text-[#ffba00] last-of-type:border-b-0 cursor-pointer text-2xl font-normal xl:decoration-2 xl:border-0 border-b-2 border-b-black text-center pb-3 mobile:w-full xl:w-auto"
              key={index}
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default GalleryLinks;
