const NavLinks = () => {
  const navlinks = [
    { name: "Home", link: "home" },
    { name: "About us", link: "about-us" },
    { name: "Vehicles", link: "vehicles" },
    { name: "Services", link: "services" },
    { name: "Test-drive", link: "test-drive" },
    { name: "Contact", link: "contact" },
  ];
  return (
    <nav>
      <ul className="text-white flex item-center justify-between text-lg font-semibold w-[35rem]">
        {navlinks.map((navlink, index) => (
          <li
            className="hover:text-[#ffba00] duration-500 cursor-pointer"
            key={index}
          >
            {navlink.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
