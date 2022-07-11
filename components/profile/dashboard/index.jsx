import React from 'react'

import ProfileWrapper from '../profileWrapper'
import { useSelector } from "react-redux";
import Link from 'next/link';

function Index () {
  const {loginReducer}=useSelector(state=>state)
  return (
   
<ProfileWrapper>
     <div className="dashboard">
     <div className="dashboard__profile card profile-card">
      <div className="card-body profile-card__body">
 
        <div className="profile-card__name">{loginReducer.name} </div>
        <div className="profile-card__email">{loginReducer.email}</div>
        <div className="profile-card__edit">
          <Link href="/profile/edit" className="btn btn-secondary btn-sm">Edit Profile</Link>
        </div>
      </div>
    </div>
    <div className="dashboard__address card address-card address-card--featured">
      <div className="address-card__badge">Default Address</div>
      <div className="address-card__body">
        <div className="address-card__name">{loginReducer.name}</div>
        <div className="address-card__row">
        {loginReducer.address}
        </div>
        <div className="address-card__row">
          <div className="address-card__row-title">Phone Number</div>
          <div className="address-card__row-content">
          {loginReducer.phone_number}
          </div>
        </div>
        <div className="address-card__row">
          <div className="address-card__row-title">Email Address</div>
          <div className="address-card__row-content">
          {loginReducer.email}
          </div>
        </div>

      </div>
    </div>
    <div className="dashboard__orders card">
      <div className="card-header"><h5>Recent Orders</h5></div>
      <div className="card-divider" />
      <div className="card-table">
        <div className="table-responsive-sm">
          <table>
            <thead>
              <tr>
                <th>Order</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><a href="#">#8132</a></td>
                <td>02 April, 2019</td>
                <td>Pending</td>
                <td>$2,719.00 for 5 item(s)</td>
              </tr>
              <tr>
                <td><a href="#">#7592</a></td>
                <td>28 March, 2019</td>
                <td>Pending</td>
                <td>$374.00 for 3 item(s)</td>
              </tr>
              <tr>
                <td><a href="#">#7192</a></td>
                <td>15 March, 2019</td>
                <td>Shipped</td>
                <td>$791.00 for 4 item(s)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
 
  </div>
 
  </ProfileWrapper>

  )
}

export default Index