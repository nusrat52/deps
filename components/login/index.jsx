import React from 'react'

function Index() {
    return (
      <div className="container mt-4">
           <div className="card flex-grow-1 mb-0">
        <div className="card-body">
          <h3 className="card-title">Register</h3>
          <form>
            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" placeholder="Enter email" />
                        </div>
                        <div className="form-group">
              <label>Phone</label>
              <input type="phone" className="form-control" placeholder="Phone" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label>Repeat Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
          </form>
        </div>
      </div>  
      </div>
   
  )
}

export default Index