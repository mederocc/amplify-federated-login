import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({
  items,
  depthLevel,

  isDropdownItem,
  isFirst,
}) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
    // eslint-disable-next-line
  }, []);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
    <div className={isDropdownItem ? "vertical-item-container" : ""}>
      <li
        className={`${
          isDropdownItem ? `menu-items vertical-menu-items` : `menu-items`
        }  `}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={closeDropdown}
      >
        {items.url && items.submenu ? (
          <div className={isDropdownItem ? "" : "menu-item-container"}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={!!dropdown}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {window.innerWidth < 960 && depthLevel === 0 ? (
                items.title
              ) : (
                <a href={`#${items.url.replace(" ", "_")}`}>{items.title}</a> // The ones with an arrow
              )}

              {depthLevel > 0 && window.innerWidth < 960 ? null : depthLevel >
                  0 && window.innerWidth > 960 ? (
                <div className="down-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height=".8em"
                    viewBox="0 0 256 512"
                  >
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z" />
                  </svg>
                </div>
              ) : (
                <div className="down-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
                  </svg>
                </div>
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              isFirst={isFirst}
            />
          </div>
        ) : !items.url && items.submenu ? (
          <div>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              onClick={() => setDropdown((prev) => !prev)}
            >
              {items.title}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
            />
          </div>
        ) : (
          <a
            href={`#${
              items.id
                ? items.id.replace(" ", "_")
                : items.title.replace(" ", "_")
            }`}
          >
            {items.title}
          </a>
        )}
      </li>
    </div>
  );
};

export default MenuItems;
