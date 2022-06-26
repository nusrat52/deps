import React, {useState} from 'react'
import {AiOutlineRight} from "react-icons/ai"
import SearchDropdown from './searchDropdown'
import ReactRange from "./range"
function Index () {
    

const [products, setProducts]=useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])


const [values, setValues] = React.useState([20, 40]);

    
    
    
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
              <div className="block-sidebar__item d-none d-lg-block">
                <div className="widget-products widget">
                  <h4 className="widget__title">Latest Products</h4>
                  <div className="widget-products__list">
                    <div className="widget-products__item">
                      <div className="widget-products__image">
                        <div className="product-image">
                          <a href="product.html" className="product-image__body">
                            <img className="product-image__img" src="images/products/product-1.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="widget-products__info">
                        <div className="widget-products__name">
                          <a href="product.html">Electric Planer Brandix KL370090G 300 Watts</a>
                        </div>
                        <div className="widget-products__prices">$749.00</div>
                      </div>
                    </div>
                    <div className="widget-products__item">
                      <div className="widget-products__image">
                        <div className="product-image">
                          <a href="product.html" className="product-image__body">
                            <img className="product-image__img" src="images/products/product-2.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="widget-products__info">
                        <div className="widget-products__name">
                          <a href="product.html">Undefined Tool IRadix DPS3000SY 2700 Watts</a>
                        </div>
                        <div className="widget-products__prices">$1,019.00</div>
                      </div>
                    </div>
                    <div className="widget-products__item">
                      <div className="widget-products__image">
                        <div className="product-image">
                          <a href="product.html" className="product-image__body">
                            <img className="product-image__img" src="images/products/product-3.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="widget-products__info">
                        <div className="widget-products__name">
                          <a href="product.html">Drill Screwdriver Brandix ALX7054 200 Watts</a>
                        </div>
                        <div className="widget-products__prices">$850.00</div>
                      </div>
                    </div>
                    <div className="widget-products__item">
                      <div className="widget-products__image">
                        <div className="product-image">
                          <a href="product.html" className="product-image__body">
                            <img className="product-image__img" src="images/products/product-4.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="widget-products__info">
                        <div className="widget-products__name">
                          <a href="product.html">Drill Series 3 Brandix KSR4590PQS 1500 Watts</a>
                        </div>
                        <div className="widget-products__prices">
                          <span className="widget-products__new-price">$949.00</span>
                          <span className="widget-products__old-price">$1189.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="widget-products__item">
                      <div className="widget-products__image">
                        <div className="product-image">
                          <a href="product.html" className="product-image__body">
                            <img className="product-image__img" src="images/products/product-5.jpg" alt="" />
                          </a>
                        </div>
                      </div>
                      <div className="widget-products__info">
                        <div className="widget-products__name">
                          <a href="product.html">Brandix Router Power Tool 2017ERXPK</a>
                        </div>
                        <div className="widget-products__prices">$1,700.00</div>
                      </div>
                    </div>
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
  
                   <div className="view-options__control">
                    <label htmlFor>Sort By</label>
                    <div>
                      <select className="form-control form-control-sm" name id>
                        <option value>Default</option>
                        <option value>Name (A-Z)</option>
                      </select>
                    </div>
                  </div>
                  <div className="view-options__control">
                    <label htmlFor>Show</label>
                    <div>
                      <select className="form-control form-control-sm" name id>
                        <option value>12</option>
                        <option value>24</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-view__list products-list" data-layout="grid-3-sidebar" data-with-features="false" data-mobile-grid-columns={2}>
                <div className="products-list__body">
            
                                      












                                      
             { products.map(product=> <div className="products-list__item">
                    <div className="product-card product-card--hidden-actions">
                      <button className="product-card__quickview" type="button">
                        <svg width="16px" height="16px">
                          <use xlinkHref="images/sprite.svg#quickview-16" />
                        </svg>
                        <span className="fake-svg-icon" />
                      </button>
                      <div className="product-card__image product-image">
                        <a href="product.html" className="product-image__body">
                          <img className="product-image__img" src="https://stroyka.html.themeforest.scompiler.ru/themes/red-ltr/images/products/product-1.jpg" alt="" />
                        </a>
                      </div>
                      <div className="product-card__info">
                        <div className="product-card__name">
                          <a href="product.html">Brandix Electric Jigsaw JIG7000BQ</a>
                        </div>
                        <div className="product-card__rating">
                          <div className="product-card__rating-stars">
                            <div className="rating">
                              <div className="rating__body">
                                <svg className="rating__star rating__star--active" width="13px" height="12px">
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
                                <svg className="rating__star rating__star--active" width="13px" height="12px">
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
                                <svg className="rating__star" width="13px" height="12px">
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
                                <svg className="rating__star" width="13px" height="12px">
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
                                <svg className="rating__star" width="13px" height="12px">
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
                          <div className="product-card__rating-legend"> 4 Reviews </div>
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
                        <div className="product-card__availability"> Availability: <span className="text-success">In Stock</span>
                        </div>
                        <div className="product-card__prices">$290.00</div>
                        <div className="product-card__buttons">
                          <button className="btn btn-primary product-card__addtocart" type="button"> Add To Cart </button>
                          <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button"> Add To Cart </button>
                          <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                            <svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#wishlist-16" />
                            </svg>
                            <span className="fake-svg-icon fake-svg-icon--wishlist-16" />
                          </button>
                          <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__compare" type="button">
                            <svg width="16px" height="16px">
                              <use xlinkHref="images/sprite.svg#compare-16" />
                            </svg>
                            <span className="fake-svg-icon fake-svg-icon--compare-16" />
                          </button>
                        </div>
                      </div>
                    </div>
                                      </div>   )    
                                      }







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