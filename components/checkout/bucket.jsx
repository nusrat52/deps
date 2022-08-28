import React from 'react'
import {AiOutlineRight} from "react-icons/ai"
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import {increaseItem, decreaseItem, deleteProduct} from "../../store/actions"
function Bucket () {
  const dispatch = useDispatch()
  const { bucket } = useSelector(state => state)
  const increase = (id) => {
    dispatch(increaseItem(id))
  }

  const decrease = (id) => {
    dispatch(decreaseItem(id))
  }

  const deleteItem = (id) => {
    dispatch(deleteProduct(id))
  }

  const total=bucket?.reduce((currentValue, currentIndex )=>{
    return  currentValue=currentValue+ currentIndex.price*currentIndex.count
    }, 0)

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
      {  bucket.map((buck, index)=>  <tr key={index} className="cart-table__row">
              <td className="cart-table__column cart-table__column--image">
                <div className="product-image">
                  <a href="#" className="product-image__body">
                    <img className="product-image__img" src="images/products/product-1.jpg" alt="" />
                  </a>
                </div>
              </td>
              <td className="cart-table__column cart-table__column--product">
                <Link href={`/${buck.category.replace(/#| /g,'-')}/${buck.slug.replace(/#| /g,'-')}-${buck.id}`} ><a className="cart-table__product-name"> {buck.title} </a></Link>
               </td>
              <td className="cart-table__column cart-table__column--price" data-title="Price"> {buck.price} AZN </td>
              <td className="cart-table__column cart-table__column--quantity" data-title="Quantity">
                <div className="input-number">
                  <input value={buck.count} className="form-control input-number__input" type="number"  />
                  <div onClick={()=>increase(buck.id)} className="input-number__add" />
                  <div onClick={()=>decrease(buck.id)} className="input-number__sub" />
                </div>
              </td>
              <td className="cart-table__column cart-table__column--total" data-title="Total"> {buck.price*buck.count} </td>
              <td className="cart-table__column cart-table__column--remove">
                <button onClick={()=>deleteItem(buck.id)} type="button" className="btn btn-light btn-sm btn-svg-icon">
                  <svg width="12px" height="12px">
                    <use xlinkHref="images/sprite.svg#cross-12" />
                  </svg>
                </button>
              </td>
            </tr> )    }
            
      
          </tbody>
        </table>
 
        <div className="row justify-content-end pt-5">
          <div className="col-12 col-md-7 col-lg-6 col-xl-5">
            <div className="card">
              <div className="card-body">
                <h3 className="card-title">Cart Totals</h3>
                <table className="cart__totals">
                  <thead className="cart__totals-header">
               
                  </thead>
                  <tbody className="cart__totals-body">
            
             
                  </tbody>
                  <tfoot className="cart__totals-footer">
                    <tr>
                      <th>Total</th>
                      <td>{total} AZN</td>
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