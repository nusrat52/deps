import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa"
import { useSelector } from "react-redux"
import Link from "next/link";


function BadgetDropdown () {
  const {bucket}=useSelector(state=>state)


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
const total=bucket.reduce((currentValue, currentIndex )=>{
return  currentValue=currentValue+ currentIndex.price*currentIndex.count
}, 0)
   return (
    <div id="indicator--trigger--click__badget" tabIndex="-1" onBlur={onblur} onClick={dropclick} className={dropClass}>
    <a className="indicator__button">
      <span className="indicator__area">
    <FaShoppingBasket className="heartSp"/>
        <span className="indicator__value">{bucket.length}</span>
      </span>
    </a>
    <div onFocus={(e)=> e.stopPropagation()} onClick={(e)=>e.stopPropagation()} className="indicator__dropdown"> <div className="dropcart dropcart--style--dropdown">
        <div className="dropcart__body">


          <div className="dropcart__products-list">
  {   bucket.map(buck => <div key={buck.id} className="dropcart__product">
    <div className="product-image dropcart__product-image">
      <Link href={`/product/${buck.id}`}>
                <a   className="product-image__body">
                  <img className="product-image__img" src={buck.image} alt="" />
                </a>
     </Link>
              </div>
              <div className="dropcart__product-info">
                <div className="dropcart__product-name">
                  <a href={`/product/${buck.id}`}>  {buck.title} </a>
                </div>
        
                <div className="dropcart__product-meta">
                  <span className="dropcart__product-quantity"> {buck.count} </span> ×{" "} <span className="dropcart__product-price"> {buck.price} AZN </span>
                </div>
              </div>
              <button type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
                <svg width="10px" height="10px">
                  <use xlinkHref="images/sprite.svg#cross-10"></use>
                </svg>
              </button>
            </div>)}
          </div>
          


          <div className="dropcart__totals">
            <table>
              <tbody>
        
                <tr>
                  <th>Total</th>
                  <td>{total} AZN</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="dropcart__buttons">
            <Link  href={"/bucket"}><a className="btn btn-secondary" > View Cart{" "}</a></Link>
            <Link  href={"/checkout"}><a className="btn btn-primary">Checkout{" "}</a></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default BadgetDropdown;
