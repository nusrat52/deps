import React, { useState } from "react";
import {AiOutlineUser} from "react-icons/ai"
function TopBarItemDrpDown({children, title}) {
  const [dropOn, setDropOn] = useState(false);

  const dropClass = dropOn
    ? "topbar-dropdown topbar-dropdown--opened"
    : "topbar-dropdown";
  
   const dropclick = (e) => {
    e.stopPropagation();
    setDropOn(!dropOn);
  };
    const onblur = (e) => {
     if (
      e.relatedTarget &&
      e.relatedTarget.closest(".topbar__item")
    ) {
      return;
    }
    e.stopPropagation();
    setDropOn(false);
  };

  return (
    <div   tabIndex="-1" onBlur={onblur} className="topbar__item">
  <div className={dropClass}>
        <button onClick={dropclick} className="topbar-dropdown__btn" type="button"> {" "} {title} 
          
          
      <svg width="7px" height="5px">
        <use xlinkHref="images/sprite.svg#arrow-rounded-down-7x5"></use>
      </svg>
        </button>
              <div className="topbar-dropdown__body">
                  <div className="menu menu--layout--topbar menu--with-icons">
                      <div className="menu__submenus-container"></div>
                      <ul className="menu__list">
                      {dropclick && children}
                       </ul>
       </div>
    </div>
  </div>
</div>
  );
}

export default TopBarItemDrpDown;
