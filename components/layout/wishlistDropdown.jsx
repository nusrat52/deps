import React, { useState } from "react";
import { FaShoppingBasket } from "react-icons/fa"
import { useSelector } from "react-redux"
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
import { deleteWishlist } from "../../store/actions"
import {useDispatch} from "react-redux"

function BadgetDropdown () {
  const bucket=useSelector(state=>state.wishlistReducer)

const dispatch=useDispatch()
  const [dropOn, setDropOn] = useState(false);

  const dropClass = dropOn
    ? "indicator indicator--trigger--click indicator--display indicator--open"
    : "indicator indicator--trigger--click";
    const dropclick = (e) => {
        e.stopPropagation();
    setDropOn(!dropOn);
  };
  const onblur = (e) => {
    if (e.relatedTarget && e.relatedTarget.closest("#indicator--trigger--click__wishlist")){
      return
  }
        e.stopPropagation();
        setDropOn(false);
  };
const total=bucket?.reduce((currentValue, currentIndex )=>{
return  currentValue=currentValue+ currentIndex.price*currentIndex.count
}, 0)
   return (
    <div id="indicator--trigger--click__wishlist" tabIndex="-1" onBlur={onblur} onClick={dropclick} className={dropClass}>
    <a className="indicator__button">
      <span className="indicator__area">
      <AiOutlineHeart className="heartSp" />
        <span className="indicator__value">{bucket.length}</span>
      </span>
    </a>
    <div onFocus={(e)=> e.stopPropagation()} onClick={(e)=>e.stopPropagation()} className="indicator__dropdown"> <div className="dropcart dropcart--style--dropdown">
        <div className="dropcart__body">


          <div className="dropcart__products-list">
  {   bucket.map((buck, index) => <div key={index} className="dropcart__product">
    <div className="product-image dropcart__product-image">
      <Link href={`/${buck.category.replace(/#| /g,'-')}/${buck.title.replace(/#| /g,'-')}-${buck.id}`}>
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
                 </div>
              </div>
              <button onClick={()=>dispatch(deleteWishlist(buck.id))} type="button" className="dropcart__product-remove btn btn-light btn-sm btn-svg-icon">
              X
              </button>
            </div>)}
          </div>
          

 
 
        </div>
      </div>
    </div>
  </div>
  );
}

export default BadgetDropdown;
