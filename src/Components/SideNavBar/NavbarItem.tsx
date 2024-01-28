import { useContext } from "react";
import { Page } from "../../Types/Enums";
import { NavigationContext } from "../../Contexts/NavigationContext";

export const NavbarItem = ({ index }: { index: Page }) => {


  const { activePage, moveTo } = useContext(NavigationContext);

  return (
    <li className="navbar-item">

      <button onClick={() => moveTo(index)}
        className={`navbar-link  ${index == activePage ? "active" : ""}`}>
        {Page[index]}

      </button>

    </li >
  
  );
}