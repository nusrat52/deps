import React, {useState} from 'react'
import { AiOutlineUser } from "react-icons/ai"
import Link from 'next/link';
import {useSelector} from "react-redux"
function DashboarDropdown () {

     
  const [dropOn, setDropOn] = useState(false);
  const {logged, surname, name, email} = useSelector(state => state.loginReducer)
     const dropClass = dropOn
      ? "indicator indicator--trigger--click  indicator--display indicator--open"
      : "indicator indicator--trigger--click";
      const dropclick = (e) => {
          e.stopPropagation();
          setDropOn(!dropOn);
    };
  const onblur = (e) => {
      console.log(e.target==e.relatedTarget, 'etarget');
        if (e.relatedTarget && e.relatedTarget.closest("#indicator--trigger--click")) {
              return
          }
          e.stopPropagation();
          setDropOn(false);
    };
  

 
  return (
    <div id='indicator--trigger--click' onBlur={onblur} onClick={dropclick} tabIndex='-1' className={dropClass}>
  <a className="indicator__button">
    <span className="indicator__area">

          <AiOutlineUser className='heartSp'/>
    </span>
  </a>
      <div onFocus={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()} className="indicator__dropdown"> <div className="account-menu">
    { !logged &&   <>
      <form className="account-menu__form">
        <div className="account-menu__form-title">Log In to Your Account </div>
        <div className="form-group">
          <label htmlFor="header-signin-email" className="sr-only"> Email address </label>
          <input onKeyDown={(e)=>e.preventDefault()} id="header-signin-email" type="email" className="form-control form-control-sm" placeholder="Email address" />
        </div>
        <div className="form-group">
          <label htmlFor="header-signin-password" className="sr-only"> Password </label>
          <div className="account-menu__form-forgot">
            <input id="header-signin-password" type="password" className="form-control form-control-sm" placeholder="Password" />
           </div>
        </div>
        <div className="form-group account-menu__form-button">
          <button type="submit" className="btn btn-primary btn-sm"> Login </button>
        </div>
        <div className="account-menu__form-link">
          <Link href='/register'>Create An Account</Link>
        </div>
      </form>
        <div className="account-menu__divider"></div>
        </>}

{  logged && <>
      <a href="account-dashboard.html" className="account-menu__user">
         <div className="account-menu__user-info">
          <div className="account-menu__user-name"> {name} {surname} </div>
          <div className="account-menu__user-email"> {email} </div>
        </div>
      </a>
      <div className="account-menu__divider"></div>
      <ul className="account-menu__links">
          <li>
            <Link href="/profile/edit">
            <a >Edit Profile</a>
            </Link>
         </li>
          <li>
          <Link href="/profile/orderhistory">
          <a  >Order History</a>
            </Link>
         
        </li>
          <li>
          <Link href="/profile/password">
          <a  >Password</a>
            </Link>
         
        </li>
        <li>
        <Link href="/profile/dashboard">
          <a  >Dashboard</a>
            </Link>
        </li>
      </ul>
      <div className="account-menu__divider"></div>
      <ul className="account-menu__links">
        <li>
          <a href="account-login.html">Logout</a>
        </li>
        </ul>
        
        </>}
    </div>
  </div>
</div>
  )
}

export default DashboarDropdown