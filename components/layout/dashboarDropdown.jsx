import React, {useState} from 'react'
import { AiOutlineUser } from "react-icons/ai"
import Link from 'next/link';
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../store/actions"
import { useRouter } from 'next/router';
import * as Agent from "../../api/agent"
import { login } from "../../store/actions"
import Swal from 'sweetalert2'
 function DashboarDropdown () {

  const dispatch = useDispatch()
  
   const router = useRouter()

  const submitfuncion = async (e) => {
    e.preventDefault()
   const email=e.target.email.value
   const password=e.target.pasword.value
    const loginResponse = await Agent.login.loggin({ email, password })
    console.log(loginResponse, 'loginResponse');
    if (loginResponse) {
      localStorage.setItem("token", loginResponse)
      
      const userDetails = await Agent.login.getUserData(loginResponse)
      

 
      dispatch(login({
        address: userDetails.adress,
        email: userDetails.email,
        name: userDetails.name,
        password: userDetails.password,
        phone_number: userDetails.phone,
        surname: userDetails.lastname,
        id: userDetails.uniq_id,
        checkout:userDetails.checkout
      }))
      

      Swal.fire({
        title: 'Conguratilations!',
        text: 'You have been registered succesfully!',
        icon: 'success',
        confirmButtonText: 'Exit'
      }).then((result) => {
      router.push("/")
      })
    }

 
    
 
}
 
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
  

  const logoutFunc = () => {
   dispatch(logout())
 }
  return (
    <div id='indicator--trigger--click' onBlur={onblur} onClick={dropclick} tabIndex='-1' className={dropClass}>
  <a className="indicator__button">
    <span className="indicator__area">

          <AiOutlineUser className='heartSp'/>
    </span>
  </a>
      <div onFocus={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()} className="indicator__dropdown"> <div className="account-menu">
    { !logged &&   <>
      <form onSubmit={submitfuncion}  className="account-menu__form">
        <div className="account-menu__form-title">Log In to Your Account </div>
        <div className="form-group">
          <label htmlFor="header-signin-email" className="sr-only"> Email address </label>
          <input  name='email' id="header-signin-email" type="email" className="form-control form-control-sm" placeholder="Email address" />
        </div>
        <div className="form-group">
          <label htmlFor="header-signin-password" className="sr-only"> Password </label>
          <div className="account-menu__form-forgot">
            <input name='pasword' id="header-signin-password" type="password" className="form-control form-control-sm" placeholder="Password" />
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
          <a className="account-menu__user pointer">
          <Link href="/profile/dashboard" >
         <div className="account-menu__user-info">
          <div className="account-menu__user-name"> {name} {surname} </div>
          <div className="account-menu__user-email"> {email} </div>
        </div>
      </Link>
          </a>  
      <div className="account-menu__divider"></div>
      <ul className="account-menu__links">
          {/* <li>
            <Link href="/profile/edit">
            <a >Edit Profile</a>
            </Link>
         </li> */}
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
        <li className='pointer' onClick={logoutFunc}>
          <a >Logout </a>
        </li>
        </ul>
        
        </>}
    </div>
  </div>
</div>
  )
}

export default DashboarDropdown