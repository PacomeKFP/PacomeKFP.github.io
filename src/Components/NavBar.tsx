import { Page } from "../Types/Enums";
import { NavbarItem } from "./SideNavBar/NavbarItem";





export const NavBar = () => {

  const tabs = Object.values(Page).filter((value) => typeof value == "number") as Page[];

  return (
    <nav className="navbar">

      <ul className="navbar-list">
        {
          tabs.map((tab) => <NavbarItem index={tab} />)
        }
      </ul>

    </nav>
  );
}