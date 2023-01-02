import React, { useState, useEffect } from "react";
import {
  MobileLogo,
   HeartMobile,
 } from "../../static/svg/svg1";
import MenuList from "./menuList";
 import BadgetDrpdown from "./BadgetDropdown";
import DashboarDropdown from "./dashboarDropdown";
import MobileSearch from "./mobileSearch.jsx";
import LeftMenuBar from "./leftMenuBar";
import TopBarItemDrpDown from "./topBarItemDrpDown";
import CategoryMenu from "./categoryMenu";
import Link from "next/link";
 
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getItemsFromStorage } from "../../store/actions";
import * as Agent from "../../api/agent";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { homepageTranslate, dashboardTranslate } from "../../translate";
import WishlistDropdown from "./wishlistDropdown"
function Navbar() {
  const buckets = useSelector((state) => state.bucket);
  const dispatch = useDispatch();
  const [mobileSearch, setMobileSearch] = useState(false);
  const [mobileLeftMenuBar, setMobileLeftMenuBar] = useState(false);
  const [number, setNumber] = useState(false);
  const state = useSelector(state => state)
  
   const [search, setSearch] = useState("");
  const router = useRouter();
  const inputKeyDown = (e) => {
    if (e.keyCode == 13) {
      e.preventDefault();
      if (!search)
        return
      router.push(`/search/${search}`);
    }
  };
  const buttonClickSearch = () => {
    if (!search)
    return
  router.push(`/search/${search}`);
}

const {wishlistReducer} =useSelector(state=>state)

  
  


  useEffect(() => {
    const bucket = localStorage.getItem("bucket");
    if (!bucket) {
      localStorage.setItem("bucket", JSON.stringify([]));
    }
    dispatch(getItemsFromStorage());
  }, []);

  useEffect(() => {
    const getCustomerDetails = async () => {
      const customerDetails = await Agent.general.getAdress();
      setNumber(customerDetails[0]?.number1);
    };

    getCustomerDetails();
  }, []);

  return (
    <>
      <header className="site__header d-lg-none">
        <div
          className="mobile-header mobile-header--sticky"
          data-sticky-mode="pullToShow"
        >
          <div className="mobile-header__panel">
            <div className="container">
              <div className="mobile-header__body">
                <button
                  onClick={() => setMobileLeftMenuBar(true)}
                  className="mobile-header__menu-button"
                >
                  <GiHamburgerMenu className="hamburgerMenuIcon" />
                </button>
                <Link href={"/"}>
                  <a className="mobile-header__logo">
                    <MobileLogo />
                  </a>
                </Link>
                <MobileSearch
                  setMobileSearch={setMobileSearch}
                  mobileSearch={mobileSearch}
                />
                <div className="mobile-header__indicators">
                  <div className="indicator indicator--mobile-search indicator--mobile d-md-none">
                    <button
                      onClick={() => setMobileSearch(true)}
                      className="indicator__button"
                    >
                      <span className="indicator__area">
                        <BsSearch className="searchIcon" />
                      </span>
                    </button>
                  </div>
                  <div className="indicator indicator--mobile d-sm-flex d-none">
                    <a className="indicator__button">
                      <span className="indicator__area">
                        <HeartMobile />
                        <span className="indicator__value">0</span>
                      </span>
                    </a>
                  </div>
                  <div className="indicator indicator--mobile">
                    <a  className="indicator__button">
                      <span className="indicator__area">
                        <Link href={"/checkout"}>
                          <HiOutlineShoppingCart className="searchIcon" />
                        </Link>
                        <span className="indicator__value">
                          {buckets.length}
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="site__header d-lg-block d-none">
        <div className="site-header">
          {" "}
          {/*
          <!-- .topbar --> */}{" "}
          <div className="site-header__topbar topbar">
            <div className="topbar__container container">
              <div className="topbar__row">
                <div className="topbar__spring"></div>

                <TopBarItemDrpDown title={homepageTranslate["language"][router.locale]}>
                <li className="menu__item">
                    <div className="menu__item-submenu-offset"></div>
                    <Link href={`/${router.asPath}`} locale="az">
                      <a className="menu__item-link" href="#">
                        <div className="menu__item-icon">
                          <img
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Flag_of_Azerbaijan_%283-2%29.svg/1200px-Flag_of_Azerbaijan_%283-2%29.svg.png"
                            alt=""
                            width={22}
                          />
                        </div>{" "}
                        AZ
                      </a>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <div className="menu__item-submenu-offset"></div>
                    <Link href={`/${router.asPath}`} locale="en">
                      <a className="menu__item-link" href="#">
                        <div className="menu__item-icon">
                          <img
                             src="/images/languages/language-1.png"
                            alt=""
                          />
                        </div>{" "}
                        EN
                      </a>
                    </Link>
                  </li>
                  <li className="menu__item">
                    <div className="menu__item-submenu-offset"></div>
                    <Link href={`/${router.asPath}`} locale="ru">
                      <a className="menu__item-link" href="#">
                        <div className="menu__item-icon">
                          <img
                             src="/images/languages/language-4.png"
                            alt=""
                          />
                        </div>{" "}
                        RU
                      </a>
                    </Link>
                  </li>
         
                </TopBarItemDrpDown>
              </div>
            </div>
          </div>{" "}
          {/*
          <!-- .topbar / end --> */}{" "}
          <div className="site-header__middle container">
            <div className="site-header__logo">
              <Link href="/">
                <a className="pointer">
          <img width={196} src={"images/ilink-logo.jpeg"} />
                </a>
              </Link>
            </div>
            <div className="site-header__search">
              <div className="search search--location--header">
                <div className="search__body">
                  <form onSubmit={e=>e.preventDefault()} className="search__form" action="#">
                    <input
                      onKeyDown={inputKeyDown}
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="search__input"
                      name="search"
                      placeholder={homepageTranslate['search'][router.locale]}
                      aria-label="Site search"
                      type="text"
                      autoomplete="off"
                    />
                    <button
                      className="search__button search__button--type--submit"
                       onClick={buttonClickSearch}
                    >
                      <BsSearch className="searchIcon" />
                    </button>
                    <div className="search__border"></div>
                  </form>
                  <div className="search__suggestions suggestions suggestions--location--header"></div>
                </div>
              </div>
            </div>
            <div className="site-header__phone">
              <div className="site-header__phone-title">{homepageTranslate['servis'][router.locale]}</div>
              <div className="site-header__phone-number">
                <a href={`tel:${number}`}>{number}</a>
              </div>
            </div>
          </div>
          <div className="site-header__nav-panel">
 
            <div
              className="nav-panel nav-panel--sticky"
              data-sticky-mode="pullToShow"
            >
              <div className="nav-panel__container container">
                <div className="nav-panel__row">
                  <div className="nav-panel__departments">
                    <CategoryMenu />
                  </div>
                  <div className="nav-panel__nav-links nav-links">
                    <ul className="nav-links__list">
                      <Link style={{ color: "red !important" }} href="/">
                        <a className="nav-links__item-link">
                          <div className="nav-links__item-body">{homepageTranslate['home'][router.locale]}</div>
                        </a>
                      </Link>
                      <MenuList title={homepageTranslate['account'][router.locale]}>
                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <Link href="/daxilol">
                            <a className="menu__item-link"> {homepageTranslate['login'][router.locale]} </a>
                          </Link>
                        </li>

                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <Link href="/register">
                            <a className="menu__item-link"> {homepageTranslate['home'][router.locale]} </a>
                          </Link>
                        </li>

                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <Link href="/profile/dashboard">
                            <a className="menu__item-link"> Dashboard </a>
                          </Link>
                        </li>

       

                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <Link href="/register">
                            <a className="menu__item-link"> {homepageTranslate['register'][router.locale]} </a>
                          </Link>
                        </li>

                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <Link href="/profile/orderhistory">
                            <a className="menu__item-link"> {dashboardTranslate['orderHistory'][router.locale]} </a>
                          </Link>
                        </li>
                      </MenuList>
                      <MenuList title={homepageTranslate['contactUs'][router.locale]}>
                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <Link href="/bizimleelaqe">
                            <a className="menu__item-link"> {homepageTranslate['contactUs'][router.locale]} </a>
                          </Link>
                        </li>
                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <Link href="/direktorayaz">
                            <a className="menu__item-link"> {homepageTranslate['vriteDirector'][router.locale]} </a>
                          </Link>
                        </li>
                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <Link href="/sualver">
                            <a className="menu__item-link"> {homepageTranslate['askQuestion'][router.locale]} </a>
                          </Link>
                        </li>
                      </MenuList>
                 
                      <li className="nav-links__item">
                        <Link href="/haqqimizda">
                          <a className="nav-links__item-link">
                            <div className="nav-links__item-body">{homepageTranslate['aboutUs'][router.locale]}</div>
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-panel__indicators">


 

<WishlistDropdown/>
 
                    <BadgetDrpdown />
                    <DashboarDropdown />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <LeftMenuBar
        mobileLeftMenuBar={mobileLeftMenuBar}
        setMobileLeftMenuBar={setMobileLeftMenuBar}
      />
    </>
  );
}

export default Navbar;
