import React, {useEffect} from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
import { login } from '../../api/agent';
 import {useSelector, useDispatch} from "react-redux"
import { login as loginAction } from '../../store/actions';
import Swal from 'sweetalert2'
import { useRouter } from 'next/router';
import jwt_decode from "jwt-decode";
import * as Agent from "../../api/agent"
const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   lastName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
   number: Yup.string()
   .min(10, 'Too Short!')
   .max(10, 'Too Long!')
     .required('Required'),
     password: Yup.string()
     .min(6, 'Too Short!')
     .max(25, 'Too Long!')
     .required('Required'),
      adres: Yup.string()
     .min(10, 'Too Short!')
     .required('Required'),
 });
  

 
function Index () {
  const dispatch = useDispatch()
  const router = useRouter()
 
  const logDetails = useSelector(state => state.loginReducer)
  
       return (
      <div className="container mt-4">
 <Formik
       initialValues={{
         firstName: '',
         lastName: '',
         email: '',
         number: '',
         password: '',
         adres: '',
       }}
       validationSchema={SignupSchema}
          onSubmit={async (values) => {
           const submitResponse =await login.register('en', {
          "email": values.email,
          "name": values.firstName,
          "password": values.password,
          "phone": values.number,
          "lastname": values.lastName,
          "adress": values.adres
             
           })
            
            if (submitResponse.msg.includes("Successfuly")) {
               

              
        
              
              
              
              localStorage.setItem("token", submitResponse.token)
              const userData = await Agent.login.getUserData(submitResponse.token)
              
              dispatch(loginAction({
                address: userData.adress,
                email: userData.email,
                name: userData.name,
                phone_number: userData.phone,
                surname: userData.lastname,
                id: userData.uniq_id,
                checkout:userData.checkout
              }))

             Swal.fire({
              title: 'Conguratilations!',
              text: 'You have been registered succesfully!',
              icon: 'success',
              confirmButtonText: 'Exit'
            }).then((result) => {
            router.push("/")
            })
          }
        }}
     >
       {({ errors, touched }) => (
         <Form>
         
           <div className="card flex-grow-1 mb-0">
        <div className="card-body">
          <h3 className="card-title">Register </h3>
             <div className="form-group">
              <label>name</label>
                    {/* <input type="email"  placeholder="Enter email" /> */}
                    <Field placeholder='name' className="form-control" name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
           ) : null}
                  </div>
                  <div className="form-group">
              <label>Lastname</label>
                     <Field type="text" className="form-control" placeholder="Last name"  name="lastName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.lastName}</div>
           ) : null}
                  </div>
                        <div className="form-group">
              <label>Phone</label>
                         <Field type="phone" className="form-control" placeholder="Phone"  name="number" />
           {errors.number && touched.number ? (
             <div>{errors.number}</div>
           ) : null}
            </div>
            <div className="form-group">
              <label>Password</label>
                     <Field type="password" className="form-control" placeholder="Password"  name="password" />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
                  </div>
                  <div className="form-group">
              <label>Email</label>
                     <Field type="email" className="form-control" placeholder="email"  name="email" />
           {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
                  </div>
                  <div className="form-group">
              <label>Adress</label>
                     <Field type="textfield" className="form-control" placeholder="Last name"  name="adres" />
           {errors.adres && touched.adres ? (
             <div>{errors.adres}</div>
           ) : null}
                  </div>

            
                
            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
         </div>
              </div>  
              </Form>
       )}
     </Formik>
            </div>
            
   
  )
}

export default Index