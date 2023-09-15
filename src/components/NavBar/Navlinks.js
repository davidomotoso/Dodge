const NavLinks = () => {
  const navlinks = [
    { name: "Home", link: "home" },
    { name: "About us", link: "about" },
    { name: "Vehicles", link: "vehicles" },
    { name: "Services", link: "services" },
    { name: "Test-drive", link: "testDrive" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <nav className="rleative z-20 h-full">
      <i
        className="bi bi-list-nested text-white text-3xl cursor-pointer duration-500 md:hidden block"
        onClick={(e) => {
          const parent = e.target.parentElement;
          const sibiling = parent.children[1];
          if (sibiling.classList.contains("hidden")) {
            sibiling.classList.remove("hidden");
            e.target.classList.remove("bi-list-nested");
            e.target.classList.add("bi-x-circle");
            sibiling.classList.add("flex");
          } else {
            sibiling.classList.add("hidden");
            e.target.classList.remove("bi-x-circle");
            e.target.classList.add("bi-list-nested");
            sibiling.classList.remove("flex");
          }
        }}
      ></i>
      <ul className="text-white md:flex md:flex-row flex-col hidden item-center justify-between text-lg font-semibold md:w-[35rem] md:relative md:top-0 md:bg-transparent absolute top-14 left-0 w-full duration-500 bg-[#12121b]">
        {navlinks.map((navlink, index) => (
          <li
            className="hover:text-[#ffba00] duration-500 cursor-pointer md:border-0 border-b-2 border-b-gray-500 py-5 px-4 md:p-0 last-of-type:border-b-0"
            key={index}
          >
            <a href={`#${navlink.link}`}>{navlink.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
