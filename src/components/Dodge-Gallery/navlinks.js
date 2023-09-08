const GalleryLinks = () => {
  const Links = ["Challenger", "Charger", "Viper", "Durango", "Hornet"];
  return (
    <>
      <section className="mb-10">
        <h1 className="text-center text-4xl font-semibold">Gallery</h1>
      </section>
      <nav>
        <ul className="flex justify-between items-center">
          {Links.map((link, index) => (
            <li
              className="hover:underline cursor-pointer text-2xl font-normal decoration-2"
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
