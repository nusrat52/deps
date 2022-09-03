import React from 'react'
import { AiOutlineRight } from "react-icons/ai"
import { checkout, login } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux'
import * as Agent from "../../api/agent"
import Swal from 'sweetalert2'

function Index () {
  const dispatch = useDispatch()
  const { bucket, loginReducer } = useSelector(state => state)
  
  const total=bucket?.reduce((currentValue, currentIndex )=>{
    return  currentValue=currentValue+ currentIndex.price*currentIndex.count
  }, 0)
  
  
  const submitCheckout = async () => {



    const userDataTaker = async () => {
      const token=localStorage.getItem("token")
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
    
    bucket.forEach(async (buck, index) => {
      
      const checkoutResponse = await Agent.general.checkout({
        "uniq_id":loginReducer.id ,
        "count": buck.count,
        "adress": loginReducer.address,
        "productId": buck.id
      })

      if (((bucket.length - 1) == index) && checkoutResponse.includes("Successfuly")) {
        Swal.fire({
          title: 'Conguratilations!',
          text: 'The process was done successfully!',
          icon: 'success',
          confirmButtonText: 'Exit'
        })
        dispatch(checkout())

       


        userDataTaker()
      }

    })
  
 }

  return (
    <div className="site__body">
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
                    Checkout
                    </li>
                  </ol>
            </nav>
        </div>
        <div className="page-header__title">
          <h1>Checkout   </h1>
        </div>
      </div>
    </div>
    <div className="checkout block">
      <div className="container">
        <div className="row">
  
           <div className="col-12 col-lg-12 col-xl-12 mt-4 mt-lg-12">
            <div className="card mb-0">
              <div className="card-body">
                <h3 className="card-title">Your Order</h3>
                <table className="checkout__totals">
                  <thead className="checkout__totals-header">
                    <tr>
                      <th>Product</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                    <tbody className="checkout__totals-products">
                      
              {bucket.map((buck, index)=> <tr key={index}>
                      <td> {buck.title} × {buck.count} </td>
                      <td>{buck.price*buck.count} AZN</td>
                    </tr>)}
               
                  </tbody>
  
                  <tfoot className="checkout__totals-footer">
                    <tr>
                      <th>Total</th>
                      <td>{total} AZN</td>
                    </tr>
                  </tfoot>
                  </table>
                  



                {/* <div className="payment-methods">
                  <ul className="payment-methods__list">
                    <li className="payment-methods__item payment-methods__item--active">
                      <label className="payment-methods__item-header">
                        <span className="payment-methods__item-radio input-radio">
                          <span className="input-radio__body">
                            <input className="input-radio__input" name="checkout_payment_method" type="radio" defaultChecked="checked" />
                            <span className="input-radio__circle" /></span>
                        </span>
                        <span className="payment-methods__item-title">Direct bank transfer</span>
                      </label>
                      <div className="payment-methods__item-container">
                        <div className="payment-methods__item-description text-muted"> Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account. </div>
                      </div>
                    </li>
                    <li className="payment-methods__item">
                      <label className="payment-methods__item-header">
                        <span className="payment-methods__item-radio input-radio">
                          <span className="input-radio__body">
                            <input className="input-radio__input" name="checkout_payment_method" type="radio" />
                            <span className="input-radio__circle" /></span>
                        </span>
                        <span className="payment-methods__item-title">Check payments</span>
                      </label>
                      <div className="payment-methods__item-container">
                        <div className="payment-methods__item-description text-muted"> Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </div>
                      </div>
                    </li>
                    <li className="payment-methods__item">
                      <label className="payment-methods__item-header">
                        <span className="payment-methods__item-radio input-radio">
                          <span className="input-radio__body">
                            <input className="input-radio__input" name="checkout_payment_method" type="radio" />
                            <span className="input-radio__circle" /></span>
                        </span>
                        <span className="payment-methods__item-title">Cash on delivery</span>
                      </label>
                      <div className="payment-methods__item-container">
                        <div className="payment-methods__item-description text-muted"> Pay with cash upon delivery. </div>
                      </div>
                    </li>
                    <li className="payment-methods__item">
                      <label className="payment-methods__item-header">
                        <span className="payment-methods__item-radio input-radio">
                          <span className="input-radio__body">
                            <input className="input-radio__input" name="checkout_payment_method" type="radio" />
                            <span className="input-radio__circle" /></span>
                        </span>
                        <span className="payment-methods__item-title">PayPal</span>
                      </label>
                      <div className="payment-methods__item-container">
                        <div className="payment-methods__item-description text-muted"> Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account. </div>
                      </div>
                    </li>
                  </ul>
                  </div>
                  

 */}




                <div className="checkout__agree form-group">
                  {/* <div className="form-check">
                    <span className="form-check-input input-check">
                      <span className="input-check__body">
                        <input className="input-check__input" type="checkbox" id="checkout-terms" />
                        <span className="input-check__box" />
                        <svg className="input-check__icon" width="9px" height="7px">
                          <use xlinkHref="images/sprite.svg#check-9x7" />
                        </svg>
                      </span>
                    </span>
                    <label className="form-check-label" htmlFor="checkout-terms">I have read and agree to the website <a target="_blank" href="terms-and-conditions.html">terms and conditions</a>* </label>
                  </div> */}
                </div>
                <button onClick={submitCheckout} type="submit" className="btn btn-primary btn-xl btn-block"> Place Order </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Index