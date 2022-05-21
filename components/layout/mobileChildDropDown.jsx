import React, { useState } from "react";

function MobileChildDropDown({ children }) {
  const [dropDown, setDropDown] = useState(false);

  const dropdownClass = dropDown
    ? "mobile-links__item mobile-links__item--open"
    : "mobile-links__item ";

  const dropClick = () => setDropDown(!dropDown);

  return (
    <li className={dropdownClass} data-collapse-item>
    <div className="mobile-links__item-title">
      <a href="#" className="mobile-links__item-link"> Power Tools </a>
      <button className="mobile-links__item-toggle" type="button" data-collapse-trigger onClick={dropClick}>
        <svg className="mobile-links__item-arrow" width="12px" height="7px">
          <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
        </svg>
      </button>
    </div>
    <div className="mobile-links__item-sub-links" data-collapse-content>
      <ul className="mobile-links mobile-links--level--2">{children}</ul>
    </div>
  </li>
  );
}

export default MobileChildDropDown;
