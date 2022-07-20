import React ,{useState, useEffect} from "react";
import {
  MobileLogo,
  SearchMobile,
  HeartMobile,
  Card,
} from "../../static/svg/svg1";
import MenuList from "./menuList";
import RightMenuList from "./rightMenuList";
import BadgetDrpdown from "./BadgetDropdown";
import DashboarDropdown from "./dashboarDropdown"
import MobileSearch from "./mobileSearch.jsx"
import LeftMenuBar from "./leftMenuBar"
import TopBarItemDrpDown from "./topBarItemDrpDown";
import CategoryMenu from "./categoryMenu";
import Link from "next/link";
import {IoIosArrowDown } from "react-icons/io"
import {AiOutlineHeart} from "react-icons/ai"
import { useRouter } from "next/router";
import { useDispatch } from "react-redux"
import { getItemsFromStorage } from "../../store/actions"

 function Navbar () {
   const dispatch = useDispatch()
   const [mobileSearch, setMobileSearch] = useState(false)
  const [mobileLeftMenuBar, setMobileLeftMenuBar] = useState(false)
  const [search, setSearch] = useState('')
  const router=useRouter()
   const inputKeyDown = (e) => {
      if (e.keyCode == 13) {
      e.preventDefault()
       router.push(`/search/${search}`)
     }
 }
   useEffect(() => {
    
    const bucket=localStorage.getItem("bucket")
      if(!bucket){
         localStorage.setItem("bucket", JSON.stringify([]))
     }
 dispatch(getItemsFromStorage())
  }, [])
  
   return (
    <>
      <header className="site__header d-lg-none">
        <div className="mobile-header mobile-header--sticky" data-sticky-mode="pullToShow">
          <div className="mobile-header__panel">
            <div className="container">
              <div className="mobile-header__body">
                <button onClick={()=>setMobileLeftMenuBar(true)} className="mobile-header__menu-button">
                  <svg width="18px" height="14px">
                    <use xlinkHref="images/sprite.svg#menu-18x14"></use>
                  </svg>
                </button>
                <a className="mobile-header__logo" href="index.html">
                  <MobileLogo />
                </a>
             <MobileSearch setMobileSearch={setMobileSearch} mobileSearch={mobileSearch}/>
                   <div className="mobile-header__indicators">
                  <div className="indicator indicator--mobile-search indicator--mobile d-md-none">
                    <button onClick={()=>setMobileSearch(true)} className="indicator__button">
                      <span className="indicator__area">
                         <SearchMobile />
                       </span>
                    </button>
                  </div>
                  <div className="indicator indicator--mobile d-sm-flex d-none">
                    <a href="wishlist.html" className="indicator__button">
                      <span className="indicator__area">
                        <HeartMobile />
                        <span className="indicator__value">0</span>
                      </span>
                    </a>
                  </div>
                  <div className="indicator indicator--mobile">
                    <a href="cart.html" className="indicator__button">
                      <span className="indicator__area">
                        <Card />
                        <span className="indicator__value">3</span>
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
        <div className="site-header"> {/*
          <!-- .topbar --> */}{" "} <div className="site-header__topbar topbar">
            <div className="topbar__container container">
              <div className="topbar__row">
             
            
              
                 <div className="topbar__spring"></div>
                 
                  <TopBarItemDrpDown title="Language" >
       <li className="menu__item">
         <div className="menu__item-submenu-offset"></div>
         <a className="menu__item-link" href="#">
           <div className="menu__item-icon">
             <img srcSet="
                                    images/languages/language-1.png,
                                    images/languages/language-1@2x.png 2x
                                  " src="images/languages/language-1.png" alt="" />
           </div>{" "} English
         </a>
       </li>
       <li className="menu__item">
         <div className="menu__item-submenu-offset"></div>
         <a className="menu__item-link" href="#">
           <div className="menu__item-icon">
             <img srcSet="
                                    images/languages/language-4.png,
                                    images/languages/language-4@2x.png 2x
                                  " src="images/languages/language-4.png" alt="" />
           </div>{" "} Russian
         </a>
       </li>
       <li className="menu__item">
         <div className="menu__item-submenu-offset"></div>
         <a className="menu__item-link" href="#">
           <div className="menu__item-icon">
             <img srcSet="
                                    images/languages/language-5.png,
                                    images/languages/language-5@2x.png 2x
                                  " src="images/languages/language-5.png" alt="" />
           </div>{" "} Azerbaijan
         </a>
       </li>
     </TopBarItemDrpDown>
                 



              </div>
            </div>
          </div>{" "} {/*
          <!-- .topbar / end --> */}{" "} <div className="site-header__middle container">
            <div className="site-header__logo">
               <Link href="/">
                 <a className='pointer'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="196px" height="26px">
                  <path d="M194.797,18 L184,18 C184,18.552 183.552,19 183,19 L182,19 C181.448,19 181,18.552 181,18 L181,16 L178.377,16 C177.708,16 177.119,15.556 176.935,14.912 L173.246,2 L168,2 L168,4 L168.500,4 C169.328,4 170,4.672 170,5.500 L170,24.500 C170,25.328 169.328,26 168.500,26 L165.500,26 C164.672,26 164,25.328 164,24.500 L164,5.500 C164,4.672 164.672,4 165.500,4 L166,4 L166,1.500 C166,0.672 166.672,0 167.500,0 L173.622,0 C174.292,0 174.881,0.444 175.065,1.088 L178.754,14 L181,14 L181,13 C181,12.448 181.448,12 182,12 L183,12 C183.552,12 184,12.448 184,13 L194.797,13 C195.461,13 196,13.539 196,14.203 L196,16.797 C196,17.461 195.461,18 194.797,18 ZM156.783,26 L154.483,26 C153.767,26 153.129,25.552 152.884,24.878 L150.437,18.135 C150.407,18.054 150.331,18 150.245,18 L142.768,18 C142.682,18 142.606,18.054 142.576,18.135 L140.129,24.878 C139.884,25.552 139.245,26 138.530,26 L136.230,26 C135.395,26 134.815,25.169 135.100,24.383 L143.445,1.122 C143.690,0.448 144.328,0 145.044,0 L147.969,0 C148.685,0 149.323,0.448 149.568,1.122 L157.913,24.383 C158.198,25.169 157.618,26 156.783,26 ZM148.472,12.725 L146.698,7.848 C146.633,7.668 146.380,7.668 146.315,7.848 L144.541,12.725 C144.492,12.859 144.591,13 144.733,13 L148.280,13 C148.422,13 148.521,12.859 148.472,12.725 ZM130.493,26 L128.090,26 C127.555,26 127.060,25.714 126.792,25.250 L122.610,18 L120.003,22.520 L120.003,24.500 C120.003,25.328 119.333,26 118.505,26 L116.507,26 C115.680,26 115.009,25.328 115.009,24.500 L115.009,1.500 C115.009,0.672 115.680,0 116.507,0 L118.505,0 C119.333,0 120.003,0.672 120.003,1.500 L120.003,12.520 L126.792,0.750 C127.060,0.286 127.555,0 128.090,0 L130.493,0 C131.646,0 132.367,1.250 131.791,2.250 L125.487,13 L131.791,23.750 C132.367,24.750 131.646,26 130.493,26 ZM103.987,15.775 L103.987,24.500 C103.987,25.328 103.315,26 102.486,26 L100.485,26 C99.656,26 98.984,25.328 98.984,24.500 L98.984,15.775 L98.594,15.100 L91.180,2.250 C90.610,1.250 91.330,0 92.481,0 L94.792,0 C95.322,0 95.823,0.290 96.093,0.750 L101.486,10.090 L106.879,0.750 C107.149,0.290 107.649,0 108.179,0 L110.491,0 C111.641,0 112.362,1.250 111.791,2.250 L103.987,15.775 ZM79,26 C71.821,26 66,20.179 66,13 C66,5.820 71.821,-0.001 79,-0.001 C86.180,-0.001 92.001,5.820 92.001,13 C92.001,20.179 86.180,26 79,26 ZM79,5 C74.582,5 71,8.582 71,13 C71,17.418 74.582,21 79,21 C83.418,21 87,17.418 87,13 C87,8.582 83.418,5 79,5 ZM62.793,23.750 C63.362,24.750 62.643,26 61.494,26 L59.186,26 C58.656,26 58.157,25.710 57.887,25.250 L53.711,18 L49.005,18 L49.005,24.500 C49.005,25.330 48.335,26 47.506,26 L45.508,26 C44.679,26 44.009,25.330 44.009,24.500 L44.009,1.500 C44.009,0.670 44.679,0 45.508,0 L54,0 C58.966,0 62.992,4.030 62.992,9 C62.992,12.240 61.274,15.090 58.706,16.670 L62.793,23.750 ZM54,5 L50.004,5 C49.454,5 49.005,5.450 49.005,6 L49.005,12 C49.005,12.550 49.454,13 50.004,13 L54,13 C56.208,13 57.997,11.210 57.997,9 C57.997,6.790 56.208,5 54,5 ZM39.500,5 L33,5 L33,24.500 C33,25.328 32.328,26 31.500,26 L29.500,26 C28.672,26 28,25.328 28,24.500 L28,5 L21.500,5 C20.672,5 20,4.328 20,3.500 L20,1.500 C20,0.672 20.672,0 21.500,0 L39.500,0 C40.328,0 41,0.672 41,1.500 L41,3.500 C41,4.328 40.328,5 39.500,5 ZM16.487,8 L14.181,8 C13.565,8 13.040,7.611 12.790,7.048 C12.261,5.856 10.765,5 9,5 C6.793,5 5.005,6.340 5.005,8 C5.005,8.940 5.575,9.780 6.483,10.320 C6.706,10.455 6.948,10.574 7.206,10.673 C8.059,11 8.412,12.020 7.955,12.812 L6.948,14.558 C6.573,15.208 5.768,15.499 5.080,15.201 C3.872,14.679 2.815,13.924 1.989,13 C0.751,11.630 0.012,9.890 0.012,8 C0.012,3.580 4.037,0 9,0 C13.254,0 17.017,2.629 17.950,6.163 C18.196,7.095 17.450,8 16.487,8 ZM1.513,18 L3.820,18 C4.435,18 4.960,18.389 5.210,18.952 C5.739,20.144 7.236,21 9,21 C11.207,21 12.995,19.660 12.995,18 C12.995,17.060 12.426,16.220 11.517,15.680 C11.294,15.544 11.052,15.426 10.794,15.327 C9.941,14.999 9.588,13.980 10.045,13.188 L11.053,11.442 C11.427,10.792 12.233,10.501 12.920,10.799 C14.128,11.320 15.185,12.075 16.011,13 C17.249,14.370 17.988,16.110 17.988,18 C17.988,22.420 13.964,26 9,26 C4.747,26 0.983,23.371 0.050,19.837 C-0.196,18.905 0.550,18 1.513,18 Z"></path>
                </svg>
                 </a>
               </Link>
            </div>
            <div className="site-header__search">
              <div className="search search--location--header">
                <div className="search__body">
                  <form className="search__form" action="#">
    
                    <input onKeyDown={inputKeyDown} value={search} onChange={(e)=>setSearch(e.target.value)} className="search__input" name="search" placeholder="Search over 10,000 products" aria-label="Site search" type="text" autoomplete="off" />
                    <button className="search__button search__button--type--submit" type="submit">
                      <svg width="20px" height="20px">
                        <use xlinkHref="images/sprite.svg#search-20"></use>
                      </svg>
                    </button>
                    <div className="search__border"></div>
                  </form>
                  <div className="search__suggestions suggestions suggestions--location--header"></div>
                </div>
              </div>
            </div>
            <div className="site-header__phone">
              <div className="site-header__phone-title">Customer Service</div>
              <div className="site-header__phone-number">(800) 060-0730</div>
            </div>
          </div>
          <div className="site-header__nav-panel"> {" "} {/*
            <!-- data-sticky-mode - one of [pullToShow, alwaysOnTop] --> */}{" "} <div className="nav-panel nav-panel--sticky" data-sticky-mode="pullToShow">
               <div className="nav-panel__container container">
                 
                 <div className="nav-panel__row">
                   
                   <div className="nav-panel__departments">

  
                    <CategoryMenu/>
                   </div>
                  <div className="nav-panel__nav-links nav-links">
                     <ul className="nav-links__list">
                       
                         <Link style={{color:"red !important"}} href="/">
                           <a className="nav-links__item-link" >
                           <div className="nav-links__item-body">Home</div>
                           </a>
                         </Link>
                      <MenuList title="Account">
                      <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/daxilol">
                                <a className="menu__item-link" > {" "} Login{" "} </a>
                           </Link>
                         </li>


                         <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/register">
                                <a className="menu__item-link" > {" "} Register{" "} </a>
                           </Link>
                         </li>
          
                         <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/profile/dashboard">
                                <a className="menu__item-link" > {" "} Dashboard{" "} </a>
                           </Link>
                         </li>

                         <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/profile/edit">
                                <a className="menu__item-link" > {" "} Edit Profile{" "} </a>
                           </Link>
                         </li>


                         <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/register">
                                <a className="menu__item-link" > {" "} Register {" "} </a>
                           </Link>
                         </li>
                 
                         <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/profile/orderhistory">
                                <a className="menu__item-link" > {" "} Order History{" "} </a>
                           </Link>
                         </li>
                         
                       </MenuList>
                       <MenuList title="Contact Us">
                              <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/bizimleelaqe">
                                <a className="menu__item-link" > {" "} Contact Us{" "} </a>
                           </Link>
                         </li>
                         <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/direktorayaz">
                                <a className="menu__item-link" > {" "} Write Director{" "} </a>
                           </Link>
                         </li>
                         <li className="menu__item nav-links__item_hoversp">
                           <div className="menu__item-submenu-offset"></div>
                           <Link href="/sualver">
                                <a className="menu__item-link" > {" "} Ask Question{" "} </a>
                           </Link>
                         </li>
                         
                          </MenuList>
                      {/* <MenuList title="Shop">
                        <RightMenuList title="Shop Grid">
                          <li className="menu__item nav-links__item_hoversp">
                            <div className="menu__item-submenu-offset"></div>
                            <a className="menu__item-link " href="shop-grid-3-columns-sidebar.html"> {" "} 3 Columns Sidebar{" "} </a>
                          </li>
                          <li className="menu__item nav-links__item_hoversp">
                            <div className="menu__item-submenu-offset"></div>
                            <a className="menu__item-link nav-links__item_hoversp" href="shop-grid-4-columns-full.html"> {" "} 4 Columns Full{" "} </a>
                          </li>
                          <li className="menu__item nav-links__item_hoversp">
                            <div className="menu__item-submenu-offset"></div>
                            <a className="menu__item-link nav-links__item_hoversp" href="shop-grid-5-columns-full.html"> {" "} 5 Columns Full{" "} </a>
                          </li>
                        </RightMenuList>
                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <a className="menu__item-link" href="shop-list.html"> {" "} Shop List{" "} </a>
                        </li>
                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <a className="menu__item-link" href="shop-right-sidebar.html"> {" "} Shop Right Sidebar{" "} </a>
                        </li>
                        <li className="menu__item nav-links__item_hoversp">
                          <div className="menu__item-submenu-offset"></div>
                          <a className="menu__item-link" href="product.html"> {" "} Product{" "} <svg className="menu__item-arrow" width="6px" height="9px">
                              <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9"></use>
                            </svg>
                          </a>
                          <div className="menu__submenu">
                            <div className="menu menu--layout--classic">
                              <div className="menu__submenus-container"></div>
                              <ul className="menu__list">
                                <li className="menu__item nav-links__item_hoversp">
                                  <div className="menu__item-submenu-offset"></div>
                                  <a className="menu__item-link" href="product.html"> {" "} Product{" "} </a>
                                </li>
                                <li className="menu__item nav-links__item_hoversp">
                                  <div className="menu__item-submenu-offset"></div>
                                  <a className="menu__item-link" href="product-alt.html"> {" "} Product Alt{" "} </a>
                                </li>
                                <li className="menu__item nav-links__item_hoversp">
                                  <div className="menu__item-submenu-offset"></div>
                                  <a className="menu__item-link" href="product-sidebar.html"> {" "} Product Sidebar{" "} </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="menu__item">
                          <div className="menu__item-submenu-offset"></div>
                          <a className="menu__item-link" href="cart.html"> {" "} Cart{" "} </a>
                        </li>
                        <li className="menu__item">
                          <div className="menu__item-submenu-offset"></div>
                          <a className="menu__item-link" href="cart-empty.html"> {" "} Cart Empty{" "} </a>
                        </li>
                       </MenuList> */}
                        <li  className="nav-links__item">
                         <Link  href="/haqqimizda">
                           <a className="nav-links__item-link" >
                           <div className="nav-links__item-body">About us</div>
                           </a>
                         </Link>
                       </li>
                       
                    </ul>
                  </div>
                  <div className="nav-panel__indicators">
                    <div className="indicator">
                      <a href="wishlist.html" className="indicator__button">
                         <span className="indicator__area">
                      <AiOutlineHeart className="heartSp"/>
                           <span className="indicator__value">0</span>
                        </span>
                      </a>
                    </div>
                    <BadgetDrpdown />
                    <DashboarDropdown />
                  </div>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </header>
       <LeftMenuBar mobileLeftMenuBar={mobileLeftMenuBar} setMobileLeftMenuBar={setMobileLeftMenuBar} />
     
    </>
  );
}

export default Navbar;
