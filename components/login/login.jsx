import React from 'react'
import * as Agent from "../../api/agent"
import { useDispatch } from "react-redux"
import { login } from "../../store/actions"
import Swal from 'sweetalert2'
import {useRouter} from 'next/router';

function Index () {
  const dispatch = useDispatch()
  const router = useRouter()

  const submitfuncion = async (e) => {
    e.preventDefault()
   const email=e.target.email.value
   const password=e.target.pasword.value
   const loginResponse = await Agent.login.loggin({ email, password })
   
    dispatch(login({
      address: loginResponse.data.address,
      email: loginResponse.data.email,
      name: loginResponse.data.name,
      password: loginResponse.data.password,
      phone_number: loginResponse.data.phone_number,
      surname:loginResponse.data.surname
   }))
    const refresh=loginResponse.data.tokens.split(":")[1].split("'")[1]
    const access=loginResponse.data.tokens.split(":")[2].split("'")[1]
    localStorage.setItem("token", access)
    localStorage.setItem("refresh__token", refresh)
    Swal.fire({
      title: 'Conguratilations!',
      text: 'You have been registered succesfully!',
      icon: 'success',
      confirmButtonText: 'Exit'
    }).then((result) => {
    router.push("/")
    })
}

    return (
      <div className="container mt-4">
             <div className="card flex-grow-1 mb-md-0">
     <div className="card-body">
       <h3 className="card-title">Login </h3>
       <form onSubmit={submitfuncion} >
         <div className="form-group">
           <label>Email address</label>
           <input name="email" type="email" className="form-control" placeholder="Enter email" />
         </div>
         <div className="form-group">
           <label>Password</label>
           <input name="pasword" type="password" className="form-control" placeholder="Password" />
           <small className="form-text text-muted">
             <a href="#">Forgotten Password</a>
           </small>
         </div>
         <div className="form-group">
           <div className="form-check">
             <span className="form-check-input input-check">
               <span className="input-check__body">
                 <input name='' className="input-check__input" type="checkbox" id="login-remember" />
                 <span className="input-check__box" />
                 <svg className="input-check__icon" width="9px" height="7px">
                   <use xlinkHref="images/sprite.svg#check-9x7" />
                 </svg>
               </span>
             </span>
             <label className="form-check-label" htmlFor="login-remember">Remember Me</label>
           </div>
         </div>
         <button type="submit" className="btn btn-primary mt-4"> Login </button>
       </form>
     </div>
   </div>
      </div>
   
  )
}

export default Index