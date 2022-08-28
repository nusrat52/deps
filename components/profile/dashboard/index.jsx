import React from 'react'

import ProfileWrapper from '../profileWrapper'
import { useSelector } from "react-redux";
import Link from 'next/link';
import { dashboardTranslate } from "../../../translate";
import { useRouter } from 'next/router';
 
function Index () {
  const { loginReducer } = useSelector(state => state)
  const router=useRouter()
  return (
   
<ProfileWrapper>
     <div className="dashboard">
     <div className="dashboard__profile card profile-card">
      <div className="card-body profile-card__body">
 
        <div className="profile-card__name">{loginReducer.name} </div>
        <div className="profile-card__email">{loginReducer.email}</div>
        <div className="profile-card__edit">
          <Link href="/profile/password" className="btn btn-secondary btn-sm">change password</Link>
        </div>
      </div>
    </div>
    <div className="dashboard__address card address-card address-card--featured">
      <div className="address-card__badge">{dashboardTranslate['default'][router.locale]}</div>
      <div className="address-card__body">
        <div className="address-card__name">{loginReducer.name}</div>
        <div className="address-card__row">
        {loginReducer.address}
        </div>
        <div className="address-card__row">
          <div className="address-card__row-title">{dashboardTranslate['phoneNumber'][router.locale]}</div>
          <div className="address-card__row-content">
          {loginReducer.phone_number}
          </div>
        </div>
        <div className="address-card__row">
          <div className="address-card__row-title">{dashboardTranslate['emailAdress'][router.locale]}</div>
          <div className="address-card__row-content">
          {loginReducer.email}
          </div>
        </div>

      </div>
    </div>
    <div className="dashboard__orders card">
       <div className="card-divider" />
      <div className="card-table">
        <div className="table-responsive-sm">
         
        </div>
      </div>
      </div>
 
  </div>
 
  </ProfileWrapper>

  )
}

export default Index