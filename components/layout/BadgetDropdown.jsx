import React, { useState } from "react";
import {FaShoppingBasket} from "react-icons/fa"
function BadgetDropdown() {
  const [dropOn, setDropOn] = useState(false);

  const dropClass = dropOn
    ? "indicator indicator--trigger--click indicator--display indicator--open"
    : "indicator indicator--trigger--click";
    const dropclick = (e) => {
        e.stopPropagation();
    setDropOn(!dropOn);
  };
  const onblur = (e) => {
    if (e.relatedTarget && e.relatedTarget.closest("#indicator--trigger--click__badget")){
      return
  }
        e.stopPropagation();
        setDropOn(false);
  };

  return (
    <div id="indicator--trigger--click__badget" tabIndex="-1" onBlur={onblur} onClick={dropclick} className={dropClass}>
    <a className="indicator__button">
      <span className="indicator__area">
    <FaShoppingBasket className="heartSp"/>
        <span className="indicator__value">4</span>
      </span>
    </a>
    <div onFocus={(e)=> e.stopPropagation()} onClick={(e)=>e.stopPropagation()} className="indicator__dropdown"> <div className="dropcart dropcart--style--dropdown">
        <div className="dropcart__body">
          <div className="dropcart__products-list">
            <div className="dropcart__product">
              <div className="product-image dropcart__product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-1.jpg" alt="" />
                </a>
              </div>
              <div className="dropcart__product-info">
                <div className="dropcart__product-name">
                  <a href="product.html"> {" "} Electric Planer Brandix KL370090G 300 Watts{" "} </a>
                </div>
                <ul className="dropcart__product-options">
                  <li>Color: Yellow</li>
                  <li>Material: Aluminium</li>
                </ul>
                <div className="dropcart__product-meta">
                  <span className="dropcart__product-quantity"> 2 </span> ×{" "} <span className="dropcart__product-price"> $699.00 </span>
                </div>
              </div>
              <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                <svg width="10px" height="10px">
                  <use xlinkHref="images/sprite.svg#cross-10"></use>
                </svg>
              </button>
            </div>
            <div className="dropcart__product">
              <div className="product-image dropcart__product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-2.jpg" alt="" />
                </a>
              </div>
              <div className="dropcart__product-info">
                <div className="dropcart__product-name">
                  <a href="product.html"> {" "} Undefined Tool IRadix DPS3000SY 2700 watts{" "} </a>
                </div>
                <div className="dropcart__product-meta">
                  <span className="dropcart__product-quantity"> 1 </span> ×{" "} <span className="dropcart__product-price"> $849.00 </span>
                </div>
              </div>
              <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                <svg width="10px" height="10px">
                  <use xlinkHref="images/sprite.svg#cross-10"></use>
                </svg>
              </button>
            </div>
            <div className="dropcart__product">
              <div className="product-image dropcart__product-image">
                <a href="product.html" className="product-image__body">
                  <img className="product-image__img" src="images/products/product-5.jpg" alt="" />
                </a>
              </div>
              <div className="dropcart__product-info">
                <div className="dropcart__product-name">
                  <a href="product.html"> {" "} Brandix Router Power Tool 2017ERXPK{" "} </a>
                </div>
                <ul className="dropcart__product-options">
                  <li>Color: True Red</li>
                </ul>
                <div className="dropcart__product-meta">
                  <span className="dropcart__product-quantity"> 3 </span> ×{" "} <span className="dropcart__product-price"> $1,210.00 </span>
                </div>
              </div>
              <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                <svg width="10px" height="10px">
                  <use xlinkHref="images/sprite.svg#cross-10"></use>
                </svg>
              </button>
            </div>
          </div>
          <div className="dropcart__totals">
            <table>
              <tbody>
                <tr>
                  <th>Subtotal</th>
                  <td>$5,877.00</td>
                </tr>
                <tr>
                  <th>Shipping</th>
                  <td>$25.00</td>
                </tr>
                <tr>
                  <th>Tax</th>
                  <td>$0.00</td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td>$5,902.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dropcart__buttons">
            <a className="btn btn-secondary" href="cart.html"> View Cart{" "} </a>
            <a className="btn btn-primary" href="checkout.html"> Checkout{" "} </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BadgetDropdown;
