import React, {useState, useEffect} from 'react'
import MenuItems from './menuItems'
import { useRouter } from 'next/router';
import { BiMenuAltLeft } from "react-icons/bi";
import { IoIosArrowUp, IoIosArrowForward } from "react-icons/io";
import { homepageTranslate } from '../../translate';
import { useSelector, useDispatch } from 'react-redux'
 function CategoryMenu () {
  const router = useRouter()
  
   const [dropOn, setDropOn] = useState(false);

   

const {categories}=useSelector(state=>state)

  
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
     } else {
      setDropOn(false);
        }
      }, [router])
  
   
   
   console.log(router.locale, 'routerrrr');


console.log(categories);
   

   return (
    <div className={dropClass} data-departments-fixed-by=".block-slideshow">
   <div className="departments__body">
     <div className="departments__links-wrapper">
       <div className="departments__submenus-container"></div>
           <ul className="departments__links">
 
             { categories.map((category, index) =>  <MenuItems key={index} id={category.id} slug={category.slug} subcategory={category.subcategory} title={category[`name_${router.locale}`]} />)
             }
         </ul>
     </div>
   </div>
   <button onClick={dropclick} className="departments__button">
          <BiMenuAltLeft className='departments__button-icon departments__button-icon_sp'/>
        {homepageTranslate['shopByCategory'][router.locale]}
         <IoIosArrowUp className="departments__button-arrow departments__button-arrow_sp"/>
 
   </button>
 </div>
   

  )
}

export default CategoryMenu