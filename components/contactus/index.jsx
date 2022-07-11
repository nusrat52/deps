import React, {useState} from 'react'
import {AiOutlineRight} from "react-icons/ai"
import * as Agent from "../../api/agent"
import Swal from 'sweetalert2'
function Index () {
  
  const [name, setName]=useState("")
  const [email, setEmail]=useState("")
  const [message, setMessage]=useState("")
  const [subject, setSubject]=useState("")
  
   
    const submitEvent = async (e) => {
    e.preventDefault()
   
      
      
      const postResponse = await Agent.general.askQuestions({
        name,
        email,
        "phone_number": subject,
        "question": message
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
        })
      }
  }


  return (
  <>
    <div className="block-map block">
    <div className="block-map__body">
    <iframe src="https://www.google.com/maps/d/embed?mid=1RI_35ld7lWGwDKZ_z366xOlZKio&ehbc=2E312F" width="640" height="480"></iframe>
    </div>
  </div>
          <div>
            <div className="page-header">
        <div className="page-header__container container">
          <div className="page-header__breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="pointer">Home</a>
                  <AiOutlineRight className="profileWrapperIcon"/>
                </li>
                 <li className="breadcrumb-item active" aria-current="page">
                  {" "}
                 Contact Us{" "}
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
                 <h4 className="contact-us__header card-title">Our Address</h4>
                 <div className="contact-us__address">
                   <p> 715 Fake Ave, Apt. 34, New York, NY 10021 USA <br />Email: stroyka@example.com <br />Phone Number: +1 754 000-00-00 </p>
                   <p>
                     <strong>Opening Hours</strong>
                     <br />Monday to Friday: 8am-8pm <br />Saturday: 8am-6pm <br />Sunday: 10am-4pm
                   </p>
                   <p>
                     <strong>Comment</strong>
                     <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur suscipit suscipit mi, non tempor nulla finibus eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   </p>
                 </div>
               </div>
               <div className="col-12 col-lg-6">
                      <h4 className="contact-us__header card-title"> Leave us a Message </h4>
                      

                      <form onSubmit={submitEvent}>
                       <div className="form-row">
                         <div className="form-group col-md-6">
                           <label htmlFor="form-name">Your Name</label>
                           <input name='name' value={name} onChange={(e)=>setName(e.target.value)} required type="text" id="form-name" className="form-control" placeholder="Your Name" />
                         </div>
                         <div className="form-group col-md-6">
                           <label htmlFor="form-email">Email</label>
                           <input name='email' value={email} onChange={(e)=>setEmail(e.target.value)} required type="email" id="form-email" className="form-control" placeholder="Email Address" />
                         </div>
                       </div>
                       <div className="form-group">
                         <label htmlFor="form-subject">phone number</label>
                         <input value={subject} onChange={(e)=>setSubject(e.target.value)} name='subject' required type="text" id="form-subject" className="form-control" placeholder="Subject" />
                       </div>
                       <div className="form-group">
                         <label htmlFor="form-message">Message</label>
                         <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name='message' id="form-message" className="form-control" rows={4} defaultValue={""} />
                       </div>
                       <button type="submit" className="btn btn-primary"> Send Message </button>
                     </form>
                      

               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
  </>
  )
}

export default Index