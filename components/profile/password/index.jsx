import React, {useEffect} from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
  import {useSelector, useDispatch} from "react-redux"
 import Swal from 'sweetalert2'
import ProfileWrapper from '../profileWrapper'
 import {login} from "../../../api/agent"
const SignupSchema = Yup.object().shape({
 
    password: Yup.string()
    .min(6, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required'),
    password2: Yup.string()
    .min(6, 'Too Short!')
    .max(25, 'Too Long!')
    .required('Required')
 
});

function Index() {
    return (
      <ProfileWrapper>
           <div className="card">
        <div className="card-header">
          <h5>Change Password</h5>
        </div>
        <div className="card-divider" />
        <div className="card-body">
          <div className="row no-gutters">
            <div className="col-12 col-lg-7 col-xl-6">                

            <Formik
       initialValues={{
          password: '',
          password2: ''
        }}
       validationSchema={SignupSchema}
                  onSubmit={async (values) => {
                    const token = localStorage.getItem("token")
                    
                    if (values.password === values.password2) {
                      const submitResponse =await login.changePassword(token, {
                        "password":values.password,
                        "password2":values.password2
                      })
           
       
                      if (submitResponse) {
                       values.password=''
                       values.password2=''
                      }
       
         
            Swal.fire({
              title: 'Conguratilations!',
              text: 'You have changed password succesfully!',
              icon: 'success',
              confirmButtonText: 'Exit'
            }).then((result) => {
             })
            }
        }}
     >
       {({ errors, touched }) => (
         <Form>
 
               <label>New Passwordy</label>
                     <Field type="password" className="form-control" placeholder="Password"  name="password" />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
              
           
              <label>Reenter New Password</label>
                     <Field type="password" className="form-control" placeholder="Password"  name="password2" />
           {errors.password && touched.password ? (
             <div>{errors.password}</div>
           ) : null}
            
            <button type="submit" className="btn btn-primary mt-4">
            Change
            </button>
    
              </Form>
       )}
     </Formik>
                




         
            </div>
          </div>
        </div>
      </div>
      </ProfileWrapper>
   )
}

export default Index