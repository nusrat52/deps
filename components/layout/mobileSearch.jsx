import React, { useState } from "react";
import { SearchMobile, Cross } from "../../static/svg/svg1";

function MobileSearch({mobileSearch, setMobileSearch}) {
 
  const topSearchClass = mobileSearch
    ? "search search--location--mobile-header mobile-header__search mobile-header__search--open search--suggestions-open"
    : "search search--location--mobile-header mobile-header__search";

  return (
    <div className={topSearchClass}>
  <div className="search__body">
    <form className="search__form" action="#">
      <input className="search__input" name="search" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autoomplete="off" />
      <button className="search__button search__button--type--submit" type="submit">
        <SearchMobile />
      </button>
      <button onClick={()=>setMobileSearch(false)} className="search__button search__button--type--close" type="button">
        <Cross />
      </button>
      <div className="search__border"></div>
    </form>
    <div className="search__suggestions suggestions suggestions--location--mobile-header"></div>
  </div>
</div>
  );
}

export default MobileSearch;
