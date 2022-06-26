import React, {useEffect} from 'react'
import Link from 'next/link';
import { Cross } from "../../static/svg/svg1"
import MobileChildDropDown from './mobileChildDropDown';
import MobileMenuDropdown from './mobileMenuDropdown';
function LeftMenuBar ({ mobileLeftMenuBar, setMobileLeftMenuBar }) {
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
        <div className="mobilemenu__title">Menu</div>
        <button onClick={()=>setMobileLeftMenuBar(false)} type="button" className="mobilemenu__close">
          <Cross />
        </button>
      </div>
      <div className="mobilemenu__content">
          <ul className="mobile-links mobile-links--level--0" data-collapse data-collapse-opened-classname="mobile-links__item--open">
            

     <li className={"mobile-links__item"} data-collapse-item>
    <div className="mobile-links__item-title">
                <Link href='/'>
              <a className="mobile-links__item-link"> Home </a>
              </Link>
     </div>
            </li>
            <li className={"mobile-links__item"} data-collapse-item>
    <div className="mobile-links__item-title">
                <Link href='/haqqimizda'>
              <a className="mobile-links__item-link"> About </a>
              </Link>
     </div>
     </li>

          <MobileMenuDropdown title="Account">
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
                <a className="mobile-links__item-link"> Password </a>
                  </Link>
              </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/profile/edit">
                <a className="mobile-links__item-link"> Edit Profile </a>
                  </Link>
              </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/profile/orderhistory">
                <a className="mobile-links__item-link"> Order History </a>
                  </Link>
              </div>
            </li>
            </MobileMenuDropdown>
            
            <MobileMenuDropdown title="Contact Us">
            <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/sualver">
                <a className="mobile-links__item-link"> Ask questions </a>
                  </Link>
              </div>
            </li>
               <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/direktorayaz">
                <a className="mobile-links__item-link"> Write Direktor </a>
                  </Link>
              </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <Link href="/bizimleelaqe">
                <a className="mobile-links__item-link"> Contact Us </a>
                  </Link>
              </div>
              </li>
           </MobileMenuDropdown>


          <MobileMenuDropdown title="categoryName">
            <MobileChildDropDown>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <a href="#" className="mobile-links__item-link"> Engravers </a>
                </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <a href="#" className="mobile-links__item-link"> Wrenches </a>
                </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <a href="#" className="mobile-links__item-link"> Wall Chaser </a>
                </div>
              </li>
              <li className="mobile-links__item" data-collapse-item>
                <div className="mobile-links__item-title">
                  <a href="#" className="mobile-links__item-link"> Pneumatic Tools </a>
                </div>
              </li>
            </MobileChildDropDown>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
                <a href="#" className="mobile-links__item-link"> Machine Tools </a>
                <button className="mobile-links__item-toggle" type="button" data-collapse-trigger>
                  <svg className="mobile-links__item-arrow" width="12px" height="7px">
                    <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7"></use>
                  </svg>
                </button>
              </div>
              <div className="mobile-links__item-sub-links" data-collapse-content>
                <ul className="mobile-links mobile-links--level--2">
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"> Thread Cutting </a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"> Chip Blowers </a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"> Sharpening Machines </a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"> Pipe Cutters </a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"> Slotting machines </a>
                    </div>
                  </li>
                  <li className="mobile-links__item" data-collapse-item>
                    <div className="mobile-links__item-title">
                      <a href="#" className="mobile-links__item-link"> Lathes </a>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </MobileMenuDropdown>
          <MobileMenuDropdown title="language">
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
                <a href="index.html" className="mobile-links__item-link"> English </a>
              </div>
            </li>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
                <a href="index.html" className="mobile-links__item-link"> Russian </a>
              </div>
            </li>
            <li className="mobile-links__item" data-collapse-item>
              <div className="mobile-links__item-title">
                <a href="index.html" className="mobile-links__item-link"> Azerbaijan </a>
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