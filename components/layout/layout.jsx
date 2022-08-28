import React, {useEffect} from 'react'
import Footer from "./footer"
import Navbar from "./navbar"
import * as Agent from "../../api/agent";
import { useDispatch, useSelector } from "react-redux";
import {login, getCategory, logout, getWishlist} from "../../store/actions"
function Layout ({ children }) {
    const dispatch = useDispatch()
  const { categories } = useSelector(state => state)


  const statee = useSelector(state => state)


  console.log(statee, 'staeee');
   useEffect(() => {
        const token = localStorage.getItem("token")
  
       const userDataTaker = async () => {
         const userDetails = await Agent.login.getUserData(token)
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
       }
       if(token){
         userDataTaker()
       } else {
          dispatch(logout())
       }
     
     
     
     dispatch(getCategory())
     dispatch(getWishlist())


    }, [])
     
  return (
      <>
          <Navbar/>
          {children}
          <Footer />
       </>
         )
    }

export default Layout