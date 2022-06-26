import React from 'react'
import {AiOutlineRight} from "react-icons/ai"
import Link from 'next/link'
function Bucket() {
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
                    Bucket
                    </li>
                  </ol>
          </nav>
        </div>
        <div className="page-header__title">
          <h1>Shopping Cart</h1>
        </div>
      </div>
    </div>
    <div className="cart block">
      <div className="container">
        <table className="cart__table cart-table">
          <thead className="cart-table__head">
            <tr className="cart-table__row">
              <th className="cart-table__column cart-table__column--image"> Image </th>
              <th className="cart-table__column cart-table__column--product"> Product </th>
              <th className="cart-table__column cart-table__column--price"> Price </th>
              <th className="cart-table__column cart-table__column--quantity"> Quantity </th>
              <th className="cart-table__column cart-table__column--total"> Total </th>
              <th className="cart-table__column cart-table__column--remove" />
            </tr>
          </thead>
          <tbody className="cart-table__body">
            <tr className="cart-table__row">
              <td className="cart-table__column cart-table__column--image">
                <div className="product-image">
                  <a href="#" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-1.jpg" alt="" />
                  </a>
                </div>
              </td>
              <td className="cart-table__column cart-table__column--product">
                <a href="#" className="cart-table__product-name">Electric Planer Brandix KL370090G 300 Watts</a>
                <ul className="cart-table__options">
                  <li>Color: Yellow</li>
                  <li>Material: Aluminium</li>
                </ul>
              </td>
              <td className="cart-table__column cart-table__column--price" data-title="Price"> $699.00 </td>
              <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                <div className="input-number">
                  <input className="form-control input-number__input" type="number" min={1} defaultValue={2} />
                  <div className="input-number__add" />
                  <div className="input-number__sub" />
                </div>
              </td>
              <td className="cart-table__column cart-table__column--total" data-title="Total"> $1,398.00 </td>
              <td className="cart-table__column cart-table__column--remove">
                <button type="button" className="btn btn-light btn-sm btn-svg-icon">
                  <svg width="12px" height="12px">
                    <use xlinkHref="images/sprite.svg#cross-12" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="cart-table__row">
              <td className="cart-table__column cart-table__column--image">
                <div className="product-image">
                  <a href="#" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-2.jpg" alt="" />
                  </a>
                </div>
              </td>
              <td className="cart-table__column cart-table__column--product">
                <a href="#" className="cart-table__product-name">Undefined Tool IRadix DPS3000SY 2700 watts</a>
              </td>
              <td className="cart-table__column cart-table__column--price" data-title="Price"> $849.00 </td>
              <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                <div className="input-number">
                  <input className="form-control input-number__input" type="number" min={1} defaultValue={1} />
                  <div className="input-number__add" />
                  <div className="input-number__sub" />
                </div>
              </td>
              <td className="cart-table__column cart-table__column--total" data-title="Total"> $849.00 </td>
              <td className="cart-table__column cart-table__column--remove">
                <button type="button" className="btn btn-light btn-sm btn-svg-icon">
                  <svg width="12px" height="12px">
                    <use xlinkHref="images/sprite.svg#cross-12" />
                  </svg>
                </button>
              </td>
            </tr>
            <tr className="cart-table__row">
              <td className="cart-table__column cart-table__column--image">
                <div className="product-image">
                  <a href="#" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-5.jpg" alt="" />
                  </a>
                </div>
              </td>
              <td className="cart-table__column cart-table__column--product">
                <a href="#" className="cart-table__product-name">Brandix Router Power Tool 2017ERXPK</a>
                <ul className="cart-table__options">
                  <li>Color: True Red</li>
                </ul>
              </td>
              <td className="cart-table__column cart-table__column--price" data-title="Price"> $1,210.00 </td>
              <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                <div className="input-number">
                  <input className="form-control input-number__input" type="number" min={1} defaultValue={3} />
                  <div className="input-number__add" />
                  <div className="input-number__sub" />
                </div>
              </td>
              <td className="cart-table__column cart-table__column--total" data-title="Total"> $3,630.00 </td>
              <td className="cart-table__column cart-table__column--remove">
                <button type="button" className="btn btn-light btn-sm btn-svg-icon">
                  <svg width="12px" height="12px">
                    <use xlinkHref="images/sprite.svg#cross-12" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cart__actions">
        
          <div className="cart__buttons">
            <a href="index.html" className="btn btn-light">Continue Shopping</a>
            <a href="#" className="btn btn-primary cart__update-button">Update Cart</a>
          </div>
        </div>
        <div className="row justify-content-end pt-5">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Cart Totals</h3>
                <table className="cart__totals">
                  <thead className="cart__totals-header">
                    <tr>
                      <th>Subtotal</th>
                      <td>$5,877.00</td>
                    </tr>
                  </thead>
                  <tbody className="cart__totals-body">
                    <tr>
                      <th>Shipping</th>
                      <td> $25.00 <div className="cart__calc-shipping">
                          <a href="#">Calculate Shipping</a>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Tax</th>
                      <td>$0.00</td>
                    </tr>
                  </tbody>
                  <tfoot className="cart__totals-footer">
                    <tr>
                      <th>Total</th>
                      <td>$5,902.00</td>
                    </tr>
                  </tfoot>
                                  </table>
                                  <Link href={"/checkout"}>
                <a className="btn btn-primary btn-xl btn-block cart__checkout-button">Proceed to checkout</a>
                                  </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> 
  )
}

export default Bucket