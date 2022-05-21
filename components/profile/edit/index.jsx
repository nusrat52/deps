import React from 'react'
import ProfileWrapper from '../profileWrapper'
function Index() {
  return (
    <ProfileWrapper>
    <div className="card">
      <div className="card-header">
        <h5>Edit Profile</h5>
      </div>
      <div className="card-divider" />
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="form-group">
              <label htmlFor="profile-first-name">First Name</label>
              <input type="text" className="form-control" id="profile-first-name" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="profile-last-name">Last Name</label>
              <input type="text" className="form-control" id="profile-last-name" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="profile-email">Email Address</label>
              <input type="email" className="form-control" id="profile-email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="profile-phone">Phone Number</label>
              <input type="text" className="form-control" id="profile-phone" placeholder="Phone Number" />
            </div>
            <div className="form-group mt-5 mb-0">
              <button className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProfileWrapper>
  )
}

export default Index