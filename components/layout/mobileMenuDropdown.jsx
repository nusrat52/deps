import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";
import Link from "next/link";
function MobileMenuDropdown({ children, title, slug }) {
  const [dropDown, setDropDown] = useState(false);
  const dropdownClass = dropDown
    ? "mobile-links__item mobile-links__item--open"
    : "mobile-links__item";

  const dropClick = () => setDropDown(!dropDown);

  return (
    <li className={dropdownClass} data-collapse-item>
      <div className="mobile-links__item-title">
        {slug && (
          <Link href={`/${slug.replace(/#| /g, "-")}`}>
            <a className="mobile-links__item-link"> {title} </a>
          </Link>
        )}
        {!slug && <a className="mobile-links__item-link"> {title} </a>}
        <button
          onClick={dropClick}
          className="mobile-links__item-toggle"
          type="button"
          data-collapse-trigger
        >
          <AiOutlineDown />
        </button>
      </div>
      <div className="mobile-links__item-sub-links" data-collapse-content>
        <ul className="mobile-links mobile-links--level--1">{children}</ul>
      </div>
    </li>
  );
}

export default MobileMenuDropdown;
