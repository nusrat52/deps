import React, {useState, useEffect} from 'react'
import {AiOutlineRight, AiFillHeart} from "react-icons/ai"
import SearchDropdown from './searchDropdown'
import ReactRange from "./range"
import { useRouter } from "next/router";
import Link from "next/link";
import { addProduct, deleteProduct } from "../../store/actions";



function Index () {
  const router = useRouter()
 
const [products, setProducts]=useState([])
const [category, setCategory]=useState([])
 


const [values, setValues] = React.useState([0, 10000]);

  useEffect(() => {
    if (router.query.id) {
       const cate=router.query.id.split("=")[1]
      const min=router.query.minMax.split(":")[0]
      const max = router.query.minMax.split(":")[1]
      if (cate && min && max) {
 console.log("bura girirmi");
        }}
    }, [router.query])
    
 
    const addToDispatch = (object) => {
      dispatch(addProduct(object));
    };
  
    const deleteToDispatch = (id) => {
      dispatch(deleteProduct(id));
    };
    const checkIfInBucket = (id) => {
      const inBucket = bucket.find((buck) => buck.id == id)
      console.log(bucket, 'hemen');
      if (inBucket) {
        return true
      }
      return false
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
                    Search 
                    </li>
                  </ol>
          </nav>
        </div>
        <div className="page-header__title">
          <h1>Screwdrivers</h1>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="shop-layout shop-layout--sidebar--start">
        <div className="shop-layout__sidebar">
          <div className="block block-sidebar block-sidebar--offcanvas--mobile">
            <div className="block-sidebar__backdrop" />
            <div className="block-sidebar__body">
              <div className="block-sidebar__header">
                <div className="block-sidebar__title">Filters</div>
                <button className="block-sidebar__close" type="button">
                  <svg width="20px" height="20px">
                    <use xlinkHref="images/sprite.svg#cross-20" />
                  </svg>
                </button>
              </div>
              <div className="block-sidebar__item">
                <div className="widget-filters widget widget-filters--offcanvas--mobile" data-collapse data-collapse-opened-class="filter--opened">
                  <h4 className="widget-filters__title widget__title"> Filters </h4>
                                      <div className="widget-filters__list">
                                            <SearchDropdown/>
                     <div className="widget-filters__item">
                      <div className="filter filter--opened" data-collapse-item>
                        <button type="button" className="filter__title filter__title__mb" data-collapse-trigger> Price <svg className="filter__arrow" width="12px" height="7px">
                            <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                          </svg>
                        </button>
                        <div className="filter__body" data-collapse-content>
                          <div className="filter__container">

                             <ReactRange values={values} setValues={setValues}/>           

                               <div className="filter-price__title"> Price: {values[0]}$ <span className="filter-price__min-value" /> -{values[1]} $ <span className="filter-price__max-value" />
                              </div>
                           </div>
                        </div>
                      </div>
                    </div>
              


                                          
                   
                                          










                          
                  </div>
                  <div className="widget-filters__actions d-flex">
                    <button className="btn btn-primary btn-sm">Filter</button>
                    <button className="btn btn-secondary btn-sm">Reset</button>
                  </div>
                </div>
                </div>
                

 
            </div>
          </div>
        </div>
        <div className="shop-layout__content">
          <div className="block">
            <div className="products-view">
                              <div className="products-view__options">
                                  

                                  
                <div className="view-options view-options--offcanvas--mobile">
                  <div className="view-options__filters-button">
                    <button type="button" className="filters-button">
                      <svg className="filters-button__icon" width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#filters-16" />
                      </svg>
                      <span className="filters-button__title">Filters</span>
                      <span className="filters-button__counter">3</span>
                    </button>
                  </div>
  
       
          
                </div>
              </div>
              <div className="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false" data-mobile-grid-columns={2}>
                <div className="products-list__body">
            
                                      












                                      
                {products.map((product, index) => (
                      <div
                        key={index}
                        className="products-list__item products-list__item__sp"
                      >
                        <div className="product-card product-card--hidden-actions">
                          <div className="product-card__image product-image">
                            <a className="product-image__body pointer">
                              <Link href={"/product/" + product.id}>
                                <img
                                  className="product-image__img"
                                  src={product.images[0].image}
                                  alt=""
                                />
                              </Link>
                            </a>
                          </div>
                          <div className="product-card__info">
                            <div className="product-card__name">
                              <a>{product.title}</a>
                            </div>
                            <div className="product-card__rating">
                              <div className="product-card__rating-stars">
                                <div className="rating">
                                  <div className="rating__body">
                                    <svg
                                      className="rating__star rating__star--active"
                                      width="13px"
                                      height="12px"
                                    >
                                      <g className="rating__fill">
                                        <use xlinkHref="images/sprite.svg#star-normal" />
                                      </g>
                                      <g className="rating__stroke">
                                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                                      </g>
                                    </svg>
                                    <div className="rating__star rating__star--only-edge rating__star--active">
                                      <div className="rating__fill">
                                        <div className="fake-svg-icon" />
                                      </div>
                                      <div className="rating__stroke">
                                        <div className="fake-svg-icon" />
                                      </div>
                                    </div>
                                    <svg
                                      className="rating__star rating__star--active"
                                      width="13px"
                                      height="12px"
                                    >
                                      <g className="rating__fill">
                                        <use xlinkHref="images/sprite.svg#star-normal" />
                                      </g>
                                      <g className="rating__stroke">
                                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                                      </g>
                                    </svg>
                                    <div className="rating__star rating__star--only-edge rating__star--active">
                                      <div className="rating__fill">
                                        <div className="fake-svg-icon" />
                                      </div>
                                      <div className="rating__stroke">
                                        <div className="fake-svg-icon" />
                                      </div>
                                    </div>
                                    <svg
                                      className="rating__star"
                                      width="13px"
                                      height="12px"
                                    >
                                      <g className="rating__fill">
                                        <use xlinkHref="images/sprite.svg#star-normal" />
                                      </g>
                                      <g className="rating__stroke">
                                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                                      </g>
                                    </svg>
                                    <div className="rating__star rating__star--only-edge">
                                      <div className="rating__fill">
                                        <div className="fake-svg-icon" />
                                      </div>
                                      <div className="rating__stroke">
                                        <div className="fake-svg-icon" />
                                      </div>
                                    </div>
                                    <svg
                                      className="rating__star"
                                      width="13px"
                                      height="12px"
                                    >
                                      <g className="rating__fill">
                                        <use xlinkHref="images/sprite.svg#star-normal" />
                                      </g>
                                      <g className="rating__stroke">
                                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                                      </g>
                                    </svg>
                                    <div className="rating__star rating__star--only-edge">
                                      <div className="rating__fill">
                                        <div className="fake-svg-icon" />
                                      </div>
                                      <div className="rating__stroke">
                                        <div className="fake-svg-icon" />
                                      </div>
                                    </div>
                                    <svg
                                      className="rating__star"
                                      width="13px"
                                      height="12px"
                                    >
                                      <g className="rating__fill">
                                        <use xlinkHref="images/sprite.svg#star-normal" />
                                      </g>
                                      <g className="rating__stroke">
                                        <use xlinkHref="images/sprite.svg#star-normal-stroke" />
                                      </g>
                                    </svg>
                                    <div className="rating__star rating__star--only-edge">
                                      <div className="rating__fill">
                                        <div className="fake-svg-icon" />
                                      </div>
                                      <div className="rating__stroke">
                                        <div className="fake-svg-icon" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <ul className="product-card__features-list">
                              <li>Speed: 750 RPM</li>
                              <li>Power Source: Cordless-Electric</li>
                              <li>Battery Cell Type: Lithium</li>
                              <li>Voltage: 20 Volts</li>
                              <li>Battery Capacity: 2 Ah</li>
                            </ul>
                          </div>
                          <div className="product-card__actions">
                            <div className="product-card__availability">
                              {" "}
                              Availability:{" "}
                              <span className="text-success">In Stock</span>
                            </div>
                            <div className="product-card__prices">
                              {product.price} AZN
                            </div>
                            <div className="product-card__buttons">
                        {checkIfInBucket(product.id)  &&  <button onClick={()=>deleteToDispatch(product.id)} className="btn btn-danger product-card__addtocart" type="button"> Delete from Cart </button>}
                              {!checkIfInBucket(product.id) && <button
                                onClick={() =>
                                  addToDispatch({
                                    title: product.title,
                                    price: product.price,
                                    count: 1,
                                    image: product.images[0].image,
                                    id:product.id
                                  })
                                }
                                className="btn btn-success product-card__addtocart"
                                type="button"
                              >
                                {" "}
                                Add from Cart{" "}
                              </button>}
                              <button
                                className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                                type="button"
                              >
                                <AiOutlineHeart
                                  style={{ width: "25px", height: "25px" }}
                                />
                                {/* <AiFillHeart style={{"width":"25px", "height":"25px"}}/> */}
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}







                </div>
              </div>
              <div className="products-view__pagination">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link page-link--with-arrow" href="#" aria-label="Previous">
                      <svg className="page-link__arrow page-link__arrow--left" aria-hidden="true" width="8px" height="13px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-left-8x13" />
                      </svg>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">2 <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">3</a>
                  </li>
                  <li className="page-item">
                    <a className="page-link page-link--with-arrow" href="#" aria-label="Next">
                      <svg className="page-link__arrow page-link__arrow--right" aria-hidden="true" width="8px" height="13px">
                        <use xlinkHref="images/sprite.svg#arrow-rounded-right-8x13" />
                      </svg>
                    </a>
                  </li>
                </ul>
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