import React from 'react'

function Index() {
    return (
      <div className="container mt-4">
             <div className="card flex-grow-1 mb-md-0">
     <div className="card-body">
       <h3 className="card-title">Login</h3>
       <form>
         <div className="form-group">
           <label>Email address</label>
           <input type="email" className="form-control" placeholder="Enter email" />
         </div>
         <div className="form-group">
           <label>Password</label>
           <input type="password" className="form-control" placeholder="Password" />
           <small className="form-text text-muted">
             <a href="#">Forgotten Password</a>
           </small>
         </div>
         <div className="form-group">
           <div className="form-check">
             <span className="form-check-input input-check">
               <span className="input-check__body">
                 <input className="input-check__input" type="checkbox" id="login-remember" />
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