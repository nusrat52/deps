import React from 'react'
import {AiOutlineRight} from "react-icons/ai"

function Index() {
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
          <h1>Checkout</h1>
        </div>
      </div>
    </div>
    <div className="checkout block">
      <div className="container">
        <div className="row">
  
                      


          {/* <div className="col-12 col-lg-6 col-xl-7">
            <div className="card mb-lg-0">
              <div className="card-body">
                <h3 className="card-title">Billing details</h3>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="checkout-first-name">First Name</label>
                    <input type="text" className="form-control" id="checkout-first-name" placeholder="First Name" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="checkout-last-name">Last Name</label>
                    <input type="text" className="form-control" id="checkout-last-name" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-company-name">Company Name <span className="text-muted">(Optional)</span>
                  </label>
                  <input type="text" className="form-control" id="checkout-company-name" placeholder="Company Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-country">Country</label>
                  <select id="checkout-country" className="form-control form-control-select2">
                    <option>Select a country...</option>
                    <option>United States</option>
                    <option>Russia</option>
                    <option>Italy</option>
                    <option>France</option>
                    <option>Ukraine</option>
                    <option>Germany</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-street-address">Street Address</label>
                  <input type="text" className="form-control" id="checkout-street-address" placeholder="Street Address" />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-address">Apartment, suite, unit etc. <span className="text-muted">(Optional)</span>
                  </label>
                  <input type="text" className="form-control" id="checkout-address" />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-city">Town / City</label>
                  <input type="text" className="form-control" id="checkout-city" />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-state">State / County</label>
                  <input type="text" className="form-control" id="checkout-state" />
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-postcode">Postcode / ZIP</label>
                  <input type="text" className="form-control" id="checkout-postcode" />
                </div>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="checkout-email">Email address</label>
                    <input type="email" className="form-control" id="checkout-email" placeholder="Email address" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="checkout-phone">Phone</label>
                    <input type="text" className="form-control" id="checkout-phone" placeholder="Phone" />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-check">
                    <span className="form-check-input input-check">
                      <span className="input-check__body">
                        <input className="input-check__input" type="checkbox" id="checkout-create-account" />
                        <span className="input-check__box" />
                        <svg className="input-check__icon" width="9px" height="7px">
                          <use xlinkHref="images/sprite.svg#check-9x7" />
                        </svg>
                      </span>
                    </span>
                    <label className="form-check-label" htmlFor="checkout-create-account">Create an account?</label>
                  </div>
                </div>
              </div>
              <div className="card-divider" />
              <div className="card-body">
                <h3 className="card-title">Shipping Details</h3>
                <div className="form-group">
                  <div className="form-check">
                    <span className="form-check-input input-check">
                      <span className="input-check__body">
                        <input className="input-check__input" type="checkbox" id="checkout-different-address" />
                        <span className="input-check__box" />
                        <svg className="input-check__icon" width="9px" height="7px">
                          <use xlinkHref="images/sprite.svg#check-9x7" />
                        </svg>
                      </span>
                    </span>
                    <label className="form-check-label" htmlFor="checkout-different-address">Ship to a different address?</label>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="checkout-comment">Order notes <span className="text-muted">(Optional)</span>
                  </label>
                  <textarea id="checkout-comment" className="form-control" rows={4} defaultValue={""} />
                </div>
              </div>
            </div>
          </div> */}
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
                    <tr>
                      <td> Electric Planer Brandix KL370090G 300 Watts × 2 </td>
                      <td>$1,398.00</td>
                    </tr>
                    <tr>
                      <td> Undefined Tool IRadix DPS3000SY 2700 watts × 1 </td>
                      <td>$849.00</td>
                    </tr>
                    <tr>
                      <td>Brandix Router Power Tool 2017ERXPK × 3</td>
                      <td>$3,630.00</td>
                    </tr>
                  </tbody>
                  <tbody className="checkout__totals-subtotals">
                    <tr>
                      <th>Subtotal</th>
                      <td>$5,877.00</td>
                    </tr>
                    <tr>
                      <th>Store Credit</th>
                      <td>$-20.00</td>
                    </tr>
                    <tr>
                      <th>Shipping</th>
                      <td>$25.00</td>
                    </tr>
                  </tbody>
                  <tfoot className="checkout__totals-footer">
                    <tr>
                      <th>Total</th>
                      <td>$5,882.00</td>
                    </tr>
                  </tfoot>
                </table>
                <div className="payment-methods">
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
                <div className="checkout__agree form-group">
                  <div className="form-check">
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
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-xl btn-block"> Place Order </button>
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