import React, {useState, useEffect} from 'react'
import {AiOutlineRight} from "react-icons/ai"
import * as Agent from "../../api/agent"
import Swal from 'sweetalert2'
import { postQuestions } from "../../translate"
import { useRouter } from 'next/router'
 

function writeDirector () {
  
 
const [name, setName]=useState("")
const [email, setEmail]=useState("")
const [message, setMessage]=useState("")
const [subject, setSubject] = useState("")
const [city, setCity] = useState("")
const [compname, setCompName] = useState("")
const [adress, setAdress]=useState({})

  const router=useRouter()

  const submitEvent = async (e) => {
    e.preventDefault()
   
      
      
      const postResponse = await Agent.general.writeDirector({
        name,
        email,
        phone: subject,
        message: message,
        source: "writeDirector",
       

      })
  
      if (postResponse) {
        Swal.fire({
          title: 'Conguratilations!',
          text: 'Your question was asked successfully!',
          icon: 'success',
          confirmButtonText: 'Exit'
        }).then(() => {
      setName("")
      setMessage("")
      setSubject("")
      setEmail("")
      setCity("")
      setCompName("")
        })
      }
  }

  useEffect(() => {
    const getUserAdress = async () => {
      const adresses = await Agent.general.getAdress()
       setAdress(adresses[0])
     }
    getUserAdress()
  }, [])

  return (
            <div>
               <div className="page-header">
            <div className="page-header__container container">
              <div className="page-header__breadcrumb">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a className="pointer">{postQuestions['home'][router.locale]}</a>
                      <AiOutlineRight className="profileWrapperIcon"/>
                    </li>
            
                    <li className="breadcrumb-item active" aria-current="page">
                    {postQuestions['writeDirector'][router.locale]}
                    </li>
                  </ol>
                </nav>
              </div>
        </div>
 
          </div>
        <div className="block">
         <div className="container">
           <div className="card mb-0">
             <div className="card-body contact-us">
               <div className="contact-us__container">
                 <div className="row">
                   <div className="col-12 col-lg-6 pb-4 pb-lg-0">
                     <h4 className="contact-us__header card-title">{postQuestions['adress'][router.locale]}</h4>
                     <div className="contact-us__address">
                       <p> {adress.adress} <br />{postQuestions['email'][router.locale]}: {adress.email} <br />{postQuestions['number'][router.locale]}: {adress.number1} </p>
                       <p>
                         <strong>{postQuestions['openningHours'][router.locale]}</strong>
                         <br />{adress.openTimes}
                       </p>
                  
                     </div>
                   </div>
                   <div className="col-12 col-lg-6">
                     <h4 className="contact-us__header card-title"> {postQuestions['leaveMessage'][router.locale]}  </h4>
                     <form onSubmit={submitEvent}>
                       <div className="form-row">
                         <div className="form-group col-md-6">
                           <label htmlFor="form-name">{postQuestions['name'][router.locale]}</label>
                           <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id="form-name" className="form-control" placeholder="Your Name" />
                         </div>
                         <div className="form-group col-md-6">
                           <label htmlFor="form-email">{postQuestions['email'][router.locale]}</label>
                           <input value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" id="form-email" className="form-control" placeholder="Email Address" />
                         </div>
                       </div>
                       <div className="form-group">
                         <label htmlFor="form-subject">{postQuestions['number'][router.locale]}</label>
                         <input value={subject} onChange={(e)=>setSubject(e.target.value)}  type="text" id="form-subject" className="form-control" placeholder="Subject" />
                      </div>
                      
                      {/* <div className="form-group">
                         <label htmlFor="form-subject">{postQuestions['city'][router.locale]}</label>
                         <input value={city} onChange={(e)=>setCity(e.target.value)}  type="text" id="form-subject" className="form-control" placeholder="Subject" />
                      </div> */}
                      

                      {/* <div className="form-group">
                         <label htmlFor="form-subject">{postQuestions['companyName'][router.locale]}</label>
                         <input value={compname} onChange={(e)=>setCompName(e.target.value)}  type="text" id="form-subject" className="form-control" placeholder="Subject" />
                      </div> */}
                      
                       <div className="form-group">
                         <label htmlFor="form-message">{postQuestions['message'][router.locale]}</label>
                         <textarea value={message} onChange={(e)=>setMessage(e.target.value)}  id="form-message" className="form-control" rows={4} defaultValue={""} />
                       </div>
                       <button type="submit" className="btn btn-primary"> {postQuestions['sendMessage'][router.locale]} </button>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
  )
}

export default writeDirector