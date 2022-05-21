



import React, { Component } from "react";
import Slider from "react-slick";
 
function SampleNextArrow (props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={'SampleNextArrow'}
      onClick={onClick}
      >
    <button className="block-header__arrow block-header__arrow--right" type="button">
      <svg width="7px" height="11px">
        <use xlinkHref="images/sprite.svg#arrow-rounded-right-7x11"></use>
      </svg>
    </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={'SamplePrevArrow'}
      onClick={onClick}
     >
<button className="block-header__arrow block-header__arrow--left" type="button">
                    <svg width="7px" height="11px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-left-7x11"></use>
                    </svg>
                  </button>
    </div>
  );
}
 
export default class Responsive extends Component {
  
  render () {
    const mockArray = [1, 2, 3, 4, 5, 6, 7, 8]

    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      nextArrow: <SampleNextArrow/>,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="container">

<div className="block block-products-carousel" data-layout="grid-4" data-mobile-grid-columns="2">
               <div className="block-header">
                <h3 className="block-header__title">Featured Products</h3>
                <div className="block-header__divider"></div>
                <ul className="block-header__groups-list">
                  <li>
                    <button type="button" className="block-header__group block-header__group--active"> All </button>
                  </li>
                  <li>
                    <button type="button" className="block-header__group"> Power Tools </button>
                  </li>
                  <li>
                    <button type="button" className="block-header__group"> Hand Tools </button>
                  </li>
                  <li>
                    <button type="button" className="block-header__group"> Plumbing </button>
                  </li>
                </ul>
                <div className="block-header__arrows-list">
                  <button className="block-header__arrow block-header__arrow--left invisible" type="button">
                    <svg width="7px" height="11px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-left-7x11"></use>
                    </svg>
                  </button>
                  <button className="block-header__arrow block-header__arrow--right invisible" type="button">
                    <svg width="7px" height="11px">
                      <use xlinkHref="images/sprite.svg#arrow-rounded-right-7x11"></use>
                    </svg>
                  </button>
               </div>
 
              </div>
            </div>
         <Slider {...settings}>
                       {
                      mockArray.map((item, index)=> <div key={index} className="crouselWrapper">  <div className="block-products__list-item block-products__list-item_sp">
                      <div className="product-card product-card--hidden-actions">
                        <button className="product-card__quickview" type="button">
                          <svg width="16px" height="16px">
                            <use xlinkHref="images/sprite.svg#quickview-16"></use>
                          </svg>
                          <span className="fake-svg-icon"></span>
                        </button>
                        <div className="product-card__badges-list">
                          <div className="product-card__badge product-card__badge--hot"> Hot </div>
                        </div>
                        <div className="product-card__image product-image">
                          <a href="product.html" className="product-image__body">
                            <img className="product-image__img" src="images/products/product-2.jpg" alt="" />
                          </a>
                        </div>
                        <div className="product-card__info">
                          <div className="product-card__name">
                            <a href="product.html"> Undefined Tool IRadix DPS3000SY 2700 Watts </a>
                          </div>
                          <div className="product-card__rating">
                            <div className="product-card__rating-stars">
                              <div className="rating">
                                <div className="rating__body">
                                  <svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                  </div>
                                  <svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                  </div>
                                  <svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                  </div>
                                  <svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                  </div>
                                  <svg className="rating__star rating__star--active" width="13px" height="12px">
                                    <g className="rating__fill">
                                      <use xlinkHref="images/sprite.svg#star-normal"></use>
                                    </g>
                                    <g className="rating__stroke">
                                      <use xlinkHref="images/sprite.svg#star-normal-stroke"></use>
                                    </g>
                                  </svg>
                                  <div className="rating__star rating__star--only-edge rating__star--active">
                                    <div className="rating__fill">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                    <div className="rating__stroke">
                                      <div className="fake-svg-icon"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="product-card__rating-legend"> 11 Reviews </div>
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
                          <div className="product-card__availability"> Availability:{" "} <span className="text-success">In Stock</span>
                          </div>
                          <div className="product-card__prices">$1,019.00</div>
                          <div className="product-card__buttons">
                            <button className="btn btn-primary product-card__addtocart" type="button"> Add To Cart </button>
                            <button className="btn btn-secondary product-card__addtocart product-card__addtocart--list" type="button"> Add To Cart </button>
                            <button className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist" type="button">
                              <svg width="16px" height="16px">
                                <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                              </svg>
                              <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                            </button>
                        
                          </div>
                        </div>
                      </div>
                      </div>
                      </div>)
               }
        </Slider>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}