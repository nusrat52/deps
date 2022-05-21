import React, {useState} from 'react'
import Layout from "../../components/layout/layout"
import { useRouter } from 'next/router'
import Image from 'next/image'
import Detailed from "../../components/detailed"
import {AiFillHeart} from "react-icons/ai"
function index ({ idisi }) {
    
const [content, setContent] = useState("description")

   const router = useRouter()
    return (
         <div>
        <div className="site">
          <div className="site__body">
            <div className="page-header">
              <div className="page-header__container container">
                <div className="page-header__breadcrumb">
                  <nav aria-label="breadcrumb">
                      <ol className="breadcrumb">
                        
                        <li className="breadcrumb-item">
                          <a href="index.html">Home</a>
                         <svg className="breadcrumb-arrow" width="6px" height="9px">
                          <Image src="/images/sprite.svg#arrow-rounded-right-6x9" width={64} height={64} alt="" />
                          </svg>
                         </li>
                        
                      <li className="breadcrumb-item">
                        <a href="#">Breadcrumb</a>
                        <svg className="breadcrumb-arrow" width="6px" height="9px">
                          <use xlinkHref="images/sprite.svg#arrow-rounded-right-6x9"/>
                        </svg>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        Brandix Screwdriver SCREW1500ACC
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="container">
                <div className="product product--layout--standard" data-layout="standard">
                    <div className="product__content">
                       <div className="product__gallery">
                         <Detailed />
                        
                      </div>
                      





                     <div className="product__info product__info_sp">
                      <div className="product__wishlist-compare">
                        <button type="button" className="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip" data-placement="right" title="Wishlist">
                          <svg width="16px" height="16px">
                            <use xlinkHref="images/sprite.svg#wishlist-16" />
                          </svg>
                        </button>
                        <button type="button" className="btn btn-sm btn-light btn-svg-icon" data-toggle="tooltip" data-placement="right" title="Compare">
                          <svg width="16px" height="16px">
                            <use xlinkHref="images/sprite.svg#compare-16" />
                          </svg>
                        </button>
                      </div>
                      <h1 className="product__name">
                        Brandix Screwdriver SCREW1500ACC
                        </h1>
                        



                      <div className="product__rating">
                  
                        <div className="product__rating-legend">
                          <a href="#">7 Reviews</a><span>/</span><a href="#">Write A Review</a>
                        </div>
                        </div>
                        


                      <div className="product__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Curabitur ornare, mi in ornare elementum, libero nibh
                        lacinia urna, quis convallis lorem erat at purus. Maecenas
                        eu varius nisi.
                      </div>
                      <ul className="product__features">
                        <li>Speed: 750 RPM</li>
                        <li>Power Source: Cordless-Electric</li>
                        <li>Battery Cell Type: Lithium</li>
                        <li>Voltage: 20 Volts</li>
                        <li>Battery Capacity: 2 Ah</li>
                      </ul>
                      <ul className="product__meta">
                        <li className="product__meta-availability">
                          Availability: <span className="text-success">In Stock</span>
                        </li>
                        <li>Brand: <a href="#">Wakita</a></li>
                        <li>SKU: 83690/32</li>
                      </ul>
                    </div>
                    {/* .product__info / end */}{/* .product__sidebar */}
                    <div className="product__sidebar">
                      <div className="product__availability">
                        Availability: <span className="text-success">In Stock</span>
                      </div>
                      <div className="product__prices">$1,499.00</div>
                      {/* .product__options */}
                      <form className="product__options">
                        <div className="form-group product__option">
                          <label className="product__option-label">Color</label>
                          <div className="input-radio-color">
                            <div className="input-radio-color__list">
                              <label className="input-radio-color__item input-radio-color__item--white" style={{color: '#fff'}} data-toggle="tooltip" title="White"><input type="radio" name="color" /> <span /></label>
                              <label className="input-radio-color__item" style={{color: '#ffd333'}} data-toggle="tooltip" title="Yellow"><input type="radio" name="color" /> <span /></label>
                              <label className="input-radio-color__item" style={{color: '#ff4040'}} data-toggle="tooltip" title="Red"><input type="radio" name="color" /> <span /></label>
                              <label className="input-radio-color__item input-radio-color__item--disabled" style={{color: '#4080ff'}} data-toggle="tooltip" title="Blue"><input type="radio" name="color" disabled="disabled" />
                                <span /></label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group product__option">
                          <label className="product__option-label">Material</label>
                          <div className="input-radio-label">
                            <div className="input-radio-label__list">
                              <label><input type="radio" name="material" />
                                <span>Metal</span></label>
                              <label><input type="radio" name="material" />
                                <span>Wood</span></label>
                              <label><input type="radio" name="material" disabled="disabled" />
                                <span>Plastic</span></label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group product__option">
                          <label className="product__option-label" htmlFor="product-quantity">Quantity</label>
                          <div className="product__actions">
                            <div className="product__actions-item">
                              <div className="input-number product__quantity">
                                <input id="product-quantity" className="input-number__input form-control form-control-lg" type="number" min={1} defaultValue={1} />
                                <div className="input-number__add" />
                                <div className="input-number__sub" />
                              </div>
                            </div>
                            <div className="product__actions-item product__actions-item--addtocart">
                              <button className="btn btn-primary btn-lg">
                                Add to cart
                              </button>
                              </div>
                              


                              <button type="button" class="btn btn-secondary btn-svg-icon btn-lg" data-toggle="tooltip" title="" data-original-title="Wishlist">
                              
                            <div className="product__actions-item product__actions-item--wishlist">
                                 <AiFillHeart/>
                            </div>
                              </button>

                       
                          </div>
                        </div>
                      </form>
                     </div>
                     <div className="product__footer">
                      <div className="product__tags tags">
                        <div className="tags__list">
                          <a href="#">Mounts</a> <a href="#">Electrodes</a>
                          <a href="#">Chainsaws</a>
                        </div>
                      </div>
                      <div className="product__share-links share-links">
                        <ul className="share-links__list">
                          <li className="share-links__item share-links__item--type--like">
                            <a href="#">Like</a>
                          </li>
                          <li className="share-links__item share-links__item--type--tweet">
                            <a href="#">Tweet</a>
                          </li>
                          <li className="share-links__item share-links__item--type--pin">
                            <a href="#">Pin It</a>
                          </li>
                          <li className="share-links__item share-links__item--type--counter">
                            <a href="#">4K</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-tabs product-tabs--sticky">
                  <div className="product-tabs__list">
                    <div className="product-tabs__list-body">
                      <div className="product-tabs__list-container container">
                        <a  onClick={()=>setContent("description")} className={content=="description"?"product-tabs__item product-tabs__item--active":"product-tabs__item"}>Description</a>
                        <a  onClick={()=>setContent("specification")} className={content=="specification"?"product-tabs__item product-tabs__item--active":"product-tabs__item"}>Specification</a>
                       </div>
                    </div>
                  </div>
                  <div className="product-tabs__content">
                    <div className={content=='description'?"product-tabs__pane product-tabs__pane--active":"product-tabs__pane"} id="tab-description">
                      <div className="typography">
                        <h3>Product Full Description</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Maecenas fermentum, diam non iaculis finibus, ipsum arcu
                          sollicitudin dolor, ut cursus sapien sem sed purus. Donec
                          vitae fringilla tortor, sed fermentum nunc. Suspendisse
                          sodales turpis dolor, at rutrum dolor tristique id.
                          Quisque pellentesque ullamcorper felis, eget gravida mi
                          elementum a. Maecenas consectetur volutpat ante, sit amet
                          molestie urna luctus in. Nulla eget dolor semper urna
                          malesuada dictum. Duis eleifend pellentesque dui et
                          finibus. Pellentesque dapibus dignissim augue. Etiam odio
                          est, sodales ac aliquam id, iaculis eget lacus. Aenean
                          porta, ante vitae suscipit pulvinar, purus dui interdum
                          tellus, sed dapibus mi mauris vitae tellus.
                        </p>
                        <h3>Etiam lacus lacus mollis in mattis</h3>
                        <p>
                          Praesent mattis eget augue ac elementum. Maecenas vel ante
                          ut enim mollis accumsan. Vestibulum vel eros at mi
                          suscipit feugiat. Sed tortor purus, vulputate et eros a,
                          rhoncus laoreet orci. Proin sapien neque, commodo at porta
                          in, vehicula eu elit. Vestibulum ante ipsum primis in
                          faucibus orci luctus et ultrices posuere cubilia Curae;
                          Curabitur porta vulputate augue, at sollicitudin nisl
                          molestie eget.
                        </p>
                        <p>
                          Nunc sollicitudin, nunc id accumsan semper, libero nunc
                          aliquet nulla, nec pretium ipsum risus ac neque. Morbi eu
                          facilisis purus. Quisque mi tortor, cursus in nulla ut,
                          laoreet commodo quam. Pellentesque et ornare sapien. In ac
                          est tempus urna tincidunt finibus. Integer erat ipsum,
                          tristique ac lobortis sit amet, dapibus sit amet purus.
                          Nam sed lorem nisi. Vestibulum ultrices tincidunt turpis,
                          sit amet fringilla odio scelerisque non.
                        </p>
                      </div>
                    </div>
                    <div className={content=='specification'?"product-tabs__pane product-tabs__pane--active":"product-tabs__pane"} id="tab-specification">
                      <div className="spec">
                        <h3 className="spec__header">Specification</h3>
                        <div className="spec__section">
                          <h4 className="spec__section-title">General</h4>
                          <div className="spec__row">
                            <div className="spec__name">Material</div>
                            <div className="spec__value">Aluminium, Plastic</div>
                          </div>
                          <div className="spec__row">
                            <div className="spec__name">Engine Type</div>
                            <div className="spec__value">Brushless</div>
                          </div>
                          <div className="spec__row">
                            <div className="spec__name">Battery Voltage</div>
                            <div className="spec__value">18 V</div>
                          </div>
                          <div className="spec__row">
                            <div className="spec__name">Battery Type</div>
                            <div className="spec__value">Li-lon</div>
                          </div>
                          <div className="spec__row">
                            <div className="spec__name">Number of Speeds</div>
                            <div className="spec__value">2</div>
                          </div>
                          <div className="spec__row">
                            <div className="spec__name">Charge Time</div>
                            <div className="spec__value">1.08 h</div>
                          </div>
                          <div className="spec__row">
                            <div className="spec__name">Weight</div>
                            <div className="spec__value">1.5 kg</div>
                          </div>
                        </div>
                        <div className="spec__section">
                          <h4 className="spec__section-title">Dimensions</h4>
                          <div className="spec__row">
                            <div className="spec__name">Length</div>
                            <div className="spec__value">99 mm</div>
                          </div>
                          <div className="spec__row">
                            <div className="spec__name">Width</div>
                            <div className="spec__value">207 mm</div>
                          </div>
                          <div className="spec__row">
                            <div className="spec__name">Height</div>
                            <div className="spec__value">208 mm</div>
                          </div>
                        </div>
                        <div className="spec__disclaimer">
                          Information on technical characteristics, the delivery
                          set, the country of manufacture and the appearance of the
                          goods is for reference only and is based on the latest
                          information available at the time of publication.
                        </div>
                      </div>
                      </div>
                      







 
                  </div>
                </div>
              </div>
            </div>
































           </div>
        </div>
 
   
        <div className="pswp" tabIndex={-1} role="dialog" aria-hidden="true">
          <div className="pswp__bg" />
          <div className="pswp__scroll-wrap">
            <div className="pswp__container">
              <div className="pswp__item" />
              <div className="pswp__item" />
              <div className="pswp__item" />
            </div>
            <div className="pswp__ui pswp__ui--hidden">
              <div className="pswp__top-bar">
                <div className="pswp__counter" />
                <button className="pswp__button pswp__button--close" title="Close (Esc)" />{/*<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>*/}
                <button className="pswp__button pswp__button--fs" title="Toggle fullscreen" />
                <button className="pswp__button pswp__button--zoom" title="Zoom in/out" />
                <div className="pswp__preloader">
                  <div className="pswp__preloader__icn">
                    <div className="pswp__preloader__cut">
                      <div className="pswp__preloader__donut" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div className="pswp__share-tooltip" />
              </div>
              <button className="pswp__button pswp__button--arrow--left" title="Previous (arrow left)" />
              <button className="pswp__button pswp__button--arrow--right" title="Next (arrow right)" />
              <div className="pswp__caption">
                <div className="pswp__caption__center" />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default index;


 export async function getServerSideProps (context) {
  const idSlug=context.params.id
  return {
    props: {idisi:idSlug}, // will be passed to the page component as props
  }
}
