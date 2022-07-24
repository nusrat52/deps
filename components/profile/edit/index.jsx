import React, {useState} from 'react'
import ProfileWrapper from '../profileWrapper'
import {login} from "../../../store/actions"
import * as Agent from "../../../api/agent"
import { useSelector, useDispatch } from 'react-redux'
import {dashboardTranslate, editTranslate} from "../../../translate"
import { useRouter } from 'next/router'

function Index () {
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [number, setNumber] = useState("")
  const [address, setAddress] = useState("")
  const { id } = useSelector(state => state.loginReducer)
const router=useRouter()
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
        <h5> {dashboardTranslate['edit'][router.locale]} </h5>
      </div>
      <div className="card-divider" />
      <div className="card-body">
        <div className="row no-gutters">
          <div className="col-12 col-lg-7 col-xl-6">
            <div className="form-group">
              <label htmlFor="profile-first-name">{editTranslate['firstName'][router.locale]}</label>
              <input value={name} onChange={e=>setName(e.target.value)} required type="text" name='name' className="form-control" id="profile-first-name" placeholder={editTranslate['firstName'][router.locale]} />
            </div>
            <div className="form-group">
              <label htmlFor="profile-last-name">{editTranslate['lastName'][router.locale]}</label>
              <input value={surname} onChange={e=>setSurname(e.target.value)} required type="text" name='surname' className="form-control" id="profile-last-name" placeholder={editTranslate['lastName'][router.locale]} />
            </div>
            <div className="form-group">
              <label htmlFor="profile-email"> {dashboardTranslate['emailAdress'][router.locale]}</label>
              <input value={address} onChange={e=>setAddress(e.target.value)} required type="email" name='address' className="form-control" id="profile-email" placeholder={dashboardTranslate['emailAdress'][router.locale]} />
            </div>
            <div className="form-group">
              <label htmlFor="profile-phone">{dashboardTranslate['phoneNumber'][router.locale]}</label>
              <input value={number} onChange={e=>setNumber(e.target.value)} required type="text" name='number' className="form-control" id="profile-phone" placeholder={dashboardTranslate['phoneNumber'][router.locale]}/>
            </div>
            <div className="form-group mt-5 mb-0">
              <button className="btn btn-primary">{editTranslate['save'][router.locale]}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ProfileWrapper>
  )
}

export default Index