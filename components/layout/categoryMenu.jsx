import React, {useState, useEffect} from 'react'
import MenuItems from './menuItems'
import { useRouter } from 'next/router';
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io"
 function CategoryMenu () {
  const router = useRouter()
  



     const [dropOn, setDropOn] = useState(false);
    const dropClass = dropOn
      ? "departments departments--open"
      : "departments"
      const dropclick = (e) => {
          e.stopPropagation();
      setDropOn(!dropOn);
      };
  
      useEffect(() => {
        if (router.pathname == '/') {
          setDropOn(true);
        }
      }, [])
  
   return (
    <div className={dropClass} data-departments-fixed-by=".block-slideshow">
   <div className="departments__body">
     <div className="departments__links-wrapper">
       <div className="departments__submenus-container"></div>
       <ul className="departments__links">
         <MenuItems title="Power Tools" />
         <li className="departments__item">
               <a className="departments__item-link" href="#"> {" "} Hand Tools{" "}
                 <IoIosArrowForward className="departments__item-arrow departments__item-arrow_sp" />
 
           </a>
                          <div className="departments__submenu departments__submenu--type--megamenu departments__submenu--size--lg">
                              <div className="megamenu megamenu--departments">
               <div className="megamenu__body" style={{
                    backgroundImage:
                      "url('images/megamenu/megamenu-2.jpg')",
                  }}>
                 <div className="row">
                   <div className="col-4">
                     <ul className="megamenu__links megamenu__links--level--0">
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Hand Tools</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#">Screwdrivers</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Handsaws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Knives</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Axes</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Multitools</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Paint Tools</a>
                           </li>
                         </ul>
                       </li>
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Garden Equipment</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#">Motor Pumps</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Chainsaws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Electric Saws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Brush Cutters</a>
                           </li>
                         </ul>
                       </li>
                     </ul>
                   </div>
                   <div className="col-4">
                     <ul className="megamenu__links megamenu__links--level--0">
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Machine Tools</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#">Thread Cutting</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Chip Blowers</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#"> {" "} Sharpening Machines{" "} </a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Pipe Cutters</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#"> {" "} Slotting machines{" "} </a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Lathes</a>
                           </li>
                         </ul>
                       </li>
                     </ul>
                   </div>
                   <div className="col-4">
                     <ul className="megamenu__links megamenu__links--level--0">
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Instruments</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#"> {" "} Welding Equipment{" "} </a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Power Tools</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Hand Tools</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Measuring Tool</a>
                           </li>
                         </ul>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>{" "} {/*
             <!-- .megamenu / end --> */}
           </div>
         </li>
         <li className="departments__item">
           <a className="departments__item-link" href="#"> {" "} Machine Tools <IoIosArrowForward className="departments__item-arrow departments__item-arrow_sp" />
           </a>
           <div className="departments__submenu departments__submenu--type--megamenu departments__submenu--size--nl"> {" "} {/*
             <!-- .megamenu --> */}{" "} <div className="megamenu megamenu--departments">
               <div className="megamenu__body" style={{
                    backgroundImage:
                      "url('images/megamenu/megamenu-3.jpg')",
                  }}>
                 <div className="row">
                   <div className="col-6">
                     <ul className="megamenu__links megamenu__links--level--0">
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Hand Tools</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#">Screwdrivers</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Handsaws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Knives</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Axes</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Multitools</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Paint Tools</a>
                           </li>
                         </ul>
                       </li>
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Garden Equipment</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#">Motor Pumps</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Chainsaws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Electric Saws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Brush Cutters</a>
                           </li>
                         </ul>
                       </li>
                     </ul>
                   </div>
                   <div className="col-6">
                     <ul className="megamenu__links megamenu__links--level--0">
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Instruments</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#"> {" "} Welding Equipment{" "} </a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Power Tools</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Hand Tools</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Measuring Tool</a>
                           </li>
                         </ul>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>{" "} {/*
             <!-- .megamenu / end --> */}
           </div>
         </li>
         <li className="departments__item">
               <a className="departments__item-link" href="#"> {" "} Building Supplies{" "}
               <IoIosArrowForward className="departments__item-arrow departments__item-arrow_sp" />
           </a>
           <div className="departments__submenu departments__submenu--type--megamenu departments__submenu--size--sm"> {" "} {/*
             <!-- .megamenu --> */}{" "} <div className="megamenu megamenu--departments">
               <div className="megamenu__body">
                 <div className="row">
                   <div className="col-12">
                     <ul className="megamenu__links megamenu__links--level--0">
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Hand Tools</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#">Screwdrivers</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Handsaws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Knives</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Axes</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Multitools</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Paint Tools</a>
                           </li>
                         </ul>
                       </li>
                       <li className="megamenu__item megamenu__item--with-submenu">
                         <a href="#">Garden Equipment</a>
                         <ul className="megamenu__links megamenu__links--level--1">
                           <li className="megamenu__item">
                             <a href="#">Motor Pumps</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Chainsaws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Electric Saws</a>
                           </li>
                           <li className="megamenu__item">
                             <a href="#">Brush Cutters</a>
                           </li>
                         </ul>
                       </li>
                     </ul>
                   </div>
                 </div>
               </div>
             </div>{" "} {/*
             <!-- .megamenu / end --> */}
           </div>
         </li>
         <li className="departments__item">
           <a className="departments__item-link" href="#"> {" "} Electrical{" "}  <IoIosArrowForward className="departments__item-arrow departments__item-arrow_sp" />
           </a>
           <div className="departments__submenu departments__submenu--type--menu"> {" "} {/*
             <!-- .menu --> */}{" "} <div className="menu menu--layout--classic">
               <div className="menu__submenus-container"></div>
               <ul className="menu__list">
                 <li className="menu__item">
                   <div className="menu__item-submenu-offset"></div>
                   <a className="menu__item-link" href="#"> {" "} Soldering Equipment{" "} <svg className="menu__item-arrow" width="6px" height="9px">
                       <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9"></use>
                     </svg>
                   </a>
                   <div className="menu__submenu"> {" "} {/*
                     <!-- .menu --> */}{" "} <div className="menu menu--layout--classic">
                       <div className="menu__submenus-container"></div>
                       <ul className="menu__list">
                         <li className="menu__item">
                           <div className="menu__item-submenu-offset"></div>
                           <a className="menu__item-link" href="#"> {" "} Soldering Station{" "} </a>
                         </li>
                         <li className="menu__item">
                           <div className="menu__item-submenu-offset"></div>
                           <a className="menu__item-link" href="#"> {" "} Soldering Dryers{" "} </a>
                         </li>
                         <li className="menu__item">
                           <div className="menu__item-submenu-offset"></div>
                           <a className="menu__item-link" href="#"> {" "} Gas Soldering Iron{" "} </a>
                         </li>
                         <li className="menu__item">
                           <div className="menu__item-submenu-offset"></div>
                           <a className="menu__item-link" href="#"> {" "} Electric Soldering Iron{" "} </a>
                         </li>
                       </ul>
                     </div>{" "} {/*
                     <!-- .menu / end --> */}
                   </div>
                 </li>
                 <li className="menu__item">
                   <div className="menu__item-submenu-offset"></div>
                   <a className="menu__item-link" href="#"> {" "} Light Bulbs{" "} </a>
                 </li>
                 <li className="menu__item">
                   <div className="menu__item-submenu-offset"></div>
                   <a className="menu__item-link" href="#"> {" "} Batteries{" "} </a>
                 </li>
                 <li className="menu__item">
                   <div className="menu__item-submenu-offset"></div>
                   <a className="menu__item-link" href="#"> {" "} Light Fixtures{" "} </a>
                 </li>
                 <li className="menu__item">
                   <div className="menu__item-submenu-offset"></div>
                   <a className="menu__item-link" href="#"> {" "} Warm Floor{" "} </a>
                 </li>
                 <li className="menu__item">
                   <div className="menu__item-submenu-offset"></div>
                   <a className="menu__item-link" href="#"> {" "} Generators{" "} </a>
                 </li>
                 <li className="menu__item">
                   <div className="menu__item-submenu-offset"></div>
                   <a className="menu__item-link" href="#"> {" "} UPS{" "} </a>
                 </li>
               </ul>
             </div>{" "} {/*
             <!-- .menu / end --> */}
           </div>
         </li>
         <li className="departments__item">
           <a className="departments__item-link" href="#"> {" "} Power Machinery{" "} </a>
         </li>
         <li className="departments__item">
           <a className="departments__item-link" href="#"> {" "} Measurement{" "} </a>
         </li>
         <li className="departments__item">
           <a className="departments__item-link" href="#"> {" "} Clothes & PPE{" "} </a>
         </li>
         <li className="departments__item">
           <a className="departments__item-link" href="#"> {" "} Plumbing{" "} </a>
         </li>
         <li className="departments__item">
           <a className="departments__item-link" href="#"> {" "} Storage & Organization{" "} </a>
         </li>
         <li className="departments__item">
           <a className="departments__item-link" href="#"> {" "} Welding & Soldering{" "} </a>
         </li>
       </ul>
     </div>
   </div>
   <button onClick={dropclick} className="departments__button">
     {/* <svg className="departments__button-icon" width="18px" height="14px">
       <use xlinkHref="images/sprite.svg#menu-18x14"></use>
         </svg>{" "}
          */}
         <BiMenuAltLeft className='departments__button-icon departments__button-icon_sp'/>
         Shop By Category{" "}
         <IoIosArrowUp className="departments__button-arrow departments__button-arrow_sp"/>
 
   </button>
 </div>
   

  )
}

export default CategoryMenu