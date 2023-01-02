import React, {useState} from 'react'
import { IoIosArrowForward } from "react-icons/io"
import Child from "./Child"
 import Link from 'next/link'
function menuItems ({  title, id, slug, subcategory }) {
 const [listOn, setListOn] = useState(false)
  
const classs= !listOn ?"departments__submenu departments__submenu--type--megamenu departments__submenu--size--xl departments__submenu--open d-none":"departments__submenu departments__submenu--type--megamenu departments__submenu--size--xl departments__submenu--open"
  
   return (
    <li onMouseOver={() => setListOn(true)} onMouseLeave={() => setListOn(false)} className="departments__item">
      <Link href={`/${slug.replace(/#| /g,'-')}`}>
    <a className="departments__item-link" href="#">
      {title}
      <IoIosArrowForward className="departments__item-arrow departments__item-arrow_sp" />
    </a>
      </Link>
     <div className={classs}>
       <div className="megamenu megamenu--departments departments__submenu--open">
        <div
          className="megamenu__body"
    
        >
          <div className="row">
            <div className="col-12">
                              <ul className="megamenu__links megamenu__links--level--0 megamenu__links_top">
  <Child  childs={subcategory} id={id}/>
                </ul>
                </div>
              
          </div>
         </div>
      </div>
     </div>
  </li>
  )
}

export default menuItems