import React, {useEffect} from 'react'
import Link from 'next/link';
import { Cross } from "../../static/svg/svg1"
import MobileChildDropDown from './mobileChildDropDown';
import MobileMenuDropdown from './mobileMenuDropdown';
import { useSelector } from "react-redux"
import { useRouter } from 'next/router';
import {AiOutlineClose } from "react-icons/ai"
import { dashboardTranslate, homepageTranslate } from "../../translate"
 
function LeftMenuBar ({ mobileLeftMenuBar, setMobileLeftMenuBar }) {
  const router = useRouter()
   const {categories}=useSelector(state=>state)
    const leftmenuClass = mobileLeftMenuBar ? "mobilemenu mobilemenu--open" : "mobilemenu"
    const onMouseDown = (e) => {
        if (e.nativeEvent.path[1].className == 'mobilemenu mobilemenu--open') {
            setMobileLeftMenuBar(false)
        }
     }
  return (
    <div onMouseDown={onMouseDown} className={leftmenuClass}>
    <div className="mobilemenu__backdrop"></div>
    <div className="mobilemenu__body">
      <div className="mobilemenu__header">
        <div className="mobilemenu__title">{homepageTranslate['menu'][router.locale]}</div>
        <button onClick={()=>setMobileLeftMenuBar(false)} type="button" className="mobilemenu__close">
          <AiOutlineClose className='mobileCloseButton' />
        </button>
      </div>
      <div className="mobilemenu__content">
          <ul className="mobile-links mobile-links--level--0" data-collapse data-collapse-opened-classname="mobile-links__item--open">
            
      <li className={"mobile-links__item"} data-collapse-item>
    <div className="mobile-links__item-title">
                <Link href='/'>
              <a className="mobile-links__item-link"> {homepageTranslate['home'][router.locale]} </a>
              </Link>
     </div>
            </li>
            <li className={"mobile-links__item"} data-collapse-item>
    <div className="mobile-links__item-title">
                <Link href='/haqqimizda'>
              <a className="mobile-links__item-link"> {homepageTranslate['aboutUs'][router.locale]} </a>
              </Link>
     </div>
     </li>

          <MobileMenuDropdown title= {homepageTranslate['account'][router.locale]}>
            <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/profile/dashboard">
                <a className="mobile-links__item-link"> Dashboard </a>
                  </Link>
              </div>
            </li>
               <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/profile/password">
                <a className="mobile-links__item-link"> {dashboardTranslate['pass'][router.locale]} </a>
                  </Link>
              </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  {/* <Link href="/profile/edit">
                <a className="mobile-links__item-link"> {dashboardTranslate['edit'][router.locale]} </a>
                  </Link> */}
              </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/profile/orderhistory">
                <a className="mobile-links__item-link"> {dashboardTranslate['orderHistory'][router.locale]} </a>
                  </Link>
              </div>
            </li>
            </MobileMenuDropdown>
            
            <MobileMenuDropdown title= {homepageTranslate['contactUs'][router.locale]}>
            <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/sualver">
                <a className="mobile-links__item-link"> {homepageTranslate['askQuestion'][router.locale]}  </a>
                  </Link>
              </div>
            </li>
               <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/direktorayaz">
                <a className="mobile-links__item-link">  {homepageTranslate['vriteDirector'][router.locale]} </a>
                  </Link>
              </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/bizimleelaqe">
                <a className="mobile-links__item-link">  {homepageTranslate['contactUs'][router.locale]} </a>
                  </Link>
              </div>
              </li>
           </MobileMenuDropdown>
 
            {categories.map(cate => <MobileMenuDropdown key={cate.uniq_id} title={cate.title}>
   
{cate.childs && cate.childs.map((child, index)=> <MobileChildDropDown key={index} title={child.fields.title}>
   {child.subCategories && child.subCategories.map((sub, index)=> <li key={index} className="mobile-links__item" data-collapse-item>
       <div className="mobile-links__item-title">
         <a  className="mobile-links__item-link"> {sub.fields.title} </a>
       </div>
     </li>)  }

   </MobileChildDropDown> )   }
        
            </MobileMenuDropdown> )    }
           <MobileMenuDropdown title= {homepageTranslate['language'][router.locale]}>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
                <Link href={`/${router.asPath}`} locale="en" className="mobile-links__item-link"><a className="mobile-links__item-link">en</a></Link>
              </div>
            </li>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
              <Link href={`/${router.asPath}`} locale="ru" className="mobile-links__item-link"><a className="mobile-links__item-link"> ru </a></Link>
              </div>
            </li>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
              <Link href={`/${router.asPath}`} locale="az" className="mobile-links__item-link"><a className="mobile-links__item-link">   {homepageTranslate['az'][router.locale]} </a></Link>
              </div>
            </li>
          </MobileMenuDropdown>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default LeftMenuBar