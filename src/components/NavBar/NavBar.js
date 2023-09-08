import { NavIcons, Title } from "./NavIcons";
import NavLinks from "./Navlinks";

const NavBar = () => {
  return (
    <header className="flex items-center justify-between">
      <Title />
      <NavLinks />
      <NavIcons />
    </header>
  );
};

export default NavBar;
