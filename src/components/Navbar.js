import { menuItems } from "../menuItems";
import MenuItems from "./MenuItems";
import LanguageSwitch from "./LanguageSwitch";
import ActionButton from "./ActionButton";

const Navbar = ({ signOut }) => {
  return (
    <nav>
      <ul className="menus">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              isFirst={true}
            />
          );
        })}
        <LanguageSwitch />
        <ActionButton
          children="Cerrar sesión"
          onClick={() => {
            signOut();
          }}
        />
      </ul>
    </nav>
  );
};

export default Navbar;
