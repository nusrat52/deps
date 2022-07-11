import React, {useEffect} from 'react'
import Footer from "./footer"
import Navbar from "./navbar"
import * as Agent from "../../api/agent";
import { useDispatch, useSelector } from "react-redux";
import {login, getCategory} from "../../store/actions"
function Layout ({ children }) {
    const dispatch = useDispatch()
  const { categories } = useSelector(state => state)
  console.log(categories, 'categories');
     useEffect(() => {
  
       const token = localStorage.getItem("token")
       
       const userDataTaker = async () => {
        
        const usedata = await Agent.login.logginWithToken(token)
         dispatch(login({
          address: usedata.address,
          email: usedata.email,
          name: usedata.name,
          phone_number: usedata.phone_number,
          surname: usedata.surname, 
          id:usedata.id
        }))
       }
       if(token)
         userDataTaker()
       dispatch(getCategory())
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