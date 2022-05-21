import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io"




function MenuList ({ children, title }) {
  const [menuOn, setMenuOn] = useState(false);

  const linkClass = menuOn
    ? "nav-links__submenu nav-links__submenu--type--menu nav-links__submenu--display nav-links__submenu--open"
    : "nav-links__submenu nav-links__submenu--type--menu";

  return (
    <li onMouseOver={()=>setMenuOn(true)} onMouseLeave={()=>setMenuOn(false)} className="nav-links__item nav-links__item--has-submenu">
      <a className="nav-links__item-link">
        <div className="nav-links__item-body">
          {title}
    <IoIosArrowDown className="dropdownIcon"/>
        </div>
      </a>
       <div className={linkClass}>
        <div className="menu menu--layout--classic">
          <div className="menu__submenus-container"></div>
           <ul className="menu__list">{children}</ul>
        </div>
      </div>
    </li>
  );
}

export default MenuList;
