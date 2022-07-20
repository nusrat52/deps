import React, {useState} from 'react'
import ProfileWrapper from '../profileWrapper'
import {login} from "../../../store/actions"
import * as Agent from "../../../api/agent"

import { useSelector, useDispatch } from 'react-redux'

function Index () {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const { id } = useSelector(state => state.loginReducer)

  const dispatch=useDispatch()
   const submitFunc = async (e) => {
     e.preventDefault()
     const token=localStorage.getItem("token")
     const changeLoginResponse= await Agent.login.editProfile(token, id, {
      name,
      surname,
      "phone_number":number,
      address
     })
      dispatch(login(changeLoginResponse))

   }

 


  return (
    <ProfileWrapper>
    <div className="card">
      <div className="card-header">
        <h5> Edit Profile </h5>
      </div>
      <div className="card-divider" />
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="form-group">
              <label htmlFor="profile-first-name">First Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} required type="text" name='name' className="form-control" id="profile-first-name" placeholder="First Name" />
            </div>
            <div className="form-group">
              <label htmlFor="profile-last-name">Last Name</label>
              <input value={surname} onChange={e=>setSurname(e.target.value)} required type="text" name='surname' className="form-control" id="profile-last-name" placeholder="Last Name" />
            </div>
            <div className="form-group">
              <label htmlFor="profile-email"> Address</label>
              <input value={address} onChange={e=>setAddress(e.target.value)} required type="email" name='address' className="form-control" id="profile-email" placeholder="Email Address" />
            </div>
            <div className="form-group">
              <label htmlFor="profile-phone">Phone Number</label>
              <input value={number} onChange={e=>setNumber(e.target.value)} required type="text" name='number' className="form-control" id="profile-phone" placeholder="Phone Number" />
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