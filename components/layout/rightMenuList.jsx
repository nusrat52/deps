import React, {useState} from "react";
 
function RightMenuList ({ children, title }) {
    
    const [menuOn, setMenuOn] = useState(false);
 
  const linkClass = menuOn
    ? "menu__submenu menu__submenu--display menu__submenu--open "
        : "menu__submenu";
    
    const linkHoverClass = menuOn
    ? "menu__item menu__item--hover"
    : "menu__item";
  return (
    <li onMouseOver={()=> setMenuOn(true)}  onMouseLeave={()=>setMenuOn(false)} className={"menu__item nav-links__item_hoversp"}>
      <div className="menu__item-submenu-offset"></div>
      <a className="menu__item-link nav-links__item_hoversp" href="shop-grid-3-columns-sidebar.html">
        {title}
        <svg className="menu__item-arrow" width="6px" height="9px">
          <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9"></use>
        </svg>
      </a>
          <div style={{ maxHeight: "485px",top:"0"}} className={linkClass}>
        <div className="menu menu--layout--classic">
          <div className="menu__submenus-container"></div>
          <ul className="menu__list">{children}</ul>
        </div>
      </div>
    </li>
  );
}

export default RightMenuList;
