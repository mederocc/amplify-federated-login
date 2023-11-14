import MenuItems from "./MenuItems";
const Dropdown = ({ submenus, dropdown, depthLevel, isFirst }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul
      className={`${dropdownClass} dropdown ${dropdown ? "show" : ""} ${
        isFirst ? "first-dropdown" : ""
      }`}
    >
      {submenus.map((submenu, index) => {
        return (
          <MenuItems
            isDropdownItem={true}
            items={submenu}
            key={index}
            depthLevel={depthLevel}
            isFirst={false}
          />
        );
      })}
    </ul>
  );
};

export default Dropdown;
