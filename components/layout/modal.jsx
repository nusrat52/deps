import React from 'react'

function Modal() {
  return (
    <div id="quickview-modal" className="modal fade show" tabIndex="-1" role="dialog" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="quickview">
<button className="quickview__close" type="button">
<svg width="20px" height="20px">
  <use xlinkHref="images/sprite.svg#cross-20" />
</svg>
</button>
<div className="product product--layout--quickview" data-layout="quickview">
<div className="product__content">{/* .product__gallery */} <div className="product__gallery">
    <div className="product-gallery">
      <div className="product-gallery__featured">
        <button className="product-gallery__zoom">
          <svg width="24px" height="24px">
            <use xlinkHref="images/sprite.svg#zoom-in-24" />
          </svg>
        </button>
        <div className="owl-carousel owl-loaded owl-drag" id="product-image">
          <div className="owl-stage-outer">
            <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '2430px'}}>
              <div className="owl-item active" style={{width: '486px'}}>
                <div className="product-image product-image--location--gallery">{/* The data-width and data-height attributes must contain the size of a larger version of the product image. If you do not know the image size, you can remove the data-width and data-height attribute, in which case the width and height will be obtained from the naturalWidth and naturalHeight property of img.product-image__img. */} <a href="images/products/product-16.jpg" data-width={700} data-height={700} className="product-image__body" target="_blank">
                    <img className="product-image__img" src="images/products/product-16.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="owl-item" style={{width: '486px'}}>
                <div className="product-image product-image--location--gallery">{/* The data-width and data-height attributes must contain the size of a larger version of the product image. If you do not know the image size, you can remove the data-width and data-height attribute, in which case the width and height will be obtained from the naturalWidth and naturalHeight property of img.product-image__img. */} <a href="images/products/product-16-1.jpg" data-width={700} data-height={700} className="product-image__body" target="_blank">
                    <img className="product-image__img" src="images/products/product-16-1.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="owl-item" style={{width: '486px'}}>
                <div className="product-image product-image--location--gallery">{/* The data-width and data-height attributes must contain the size of a larger version of the product image. If you do not know the image size, you can remove the data-width and data-height attribute, in which case the width and height will be obtained from the naturalWidth and naturalHeight property of img.product-image__img. */} <a href="images/products/product-16-2.jpg" data-width={700} data-height={700} className="product-image__body" target="_blank">
                    <img className="product-image__img" src="images/products/product-16-2.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="owl-item" style={{width: '486px'}}>
                <div className="product-image product-image--location--gallery">{/* The data-width and data-height attributes must contain the size of a larger version of the product image. If you do not know the image size, you can remove the data-width and data-height attribute, in which case the width and height will be obtained from the naturalWidth and naturalHeight property of img.product-image__img. */} <a href="images/products/product-16-3.jpg" data-width={700} data-height={700} className="product-image__body" target="_blank">
                    <img className="product-image__img" src="images/products/product-16-3.jpg" alt="" />
                  </a>
                </div>
              </div>
              <div className="owl-item" style={{width: '486px'}}>
                <div className="product-image product-image--location--gallery">{/* The data-width and data-height attributes must contain the size of a larger version of the product image. If you do not know the image size, you can remove the data-width and data-height attribute, in which case the width and height will be obtained from the naturalWidth and naturalHeight property of img.product-image__img. */} <a href="images/products/product-16-4.jpg" data-width={700} data-height={700} className="product-image__body" target="_blank">
                    <img className="product-image__img" src="images/products/product-16-4.jpg" alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots disabled" />
        </div>
      </div>
      <div className="product-gallery__carousel">
        <div className="owl-carousel owl-loaded owl-drag" id="product-carousel">
          <div className="owl-stage-outer">
            <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '500px'}}>
              <div className="owl-item active" style={{width: '90px', marginRight: '10px'}}>
                <a href="images/products/product-16.jpg" className="product-image product-gallery__carousel-item product-gallery__carousel-item--active">
                  <div className="product-image__body">
                    <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="owl-item active" style={{width: '90px', marginRight: '10px'}}>
                <a href="images/products/product-16-1.jpg" className="product-image product-gallery__carousel-item">
                  <div className="product-image__body">
                    <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16-1.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="owl-item active" style={{width: '90px', marginRight: '10px'}}>
                <a href="images/products/product-16-2.jpg" className="product-image product-gallery__carousel-item">
                  <div className="product-image__body">
                    <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16-2.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="owl-item active" style={{width: '90px', marginRight: '10px'}}>
                <a href="images/products/product-16-3.jpg" className="product-image product-gallery__carousel-item">
                  <div className="product-image__body">
                    <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16-3.jpg" alt="" />
                  </div>
                </a>
              </div>
              <div className="owl-item active" style={{width: '90px', marginRight: '10px'}}>
                <a href="images/products/product-16-4.jpg" className="product-image product-gallery__carousel-item">
                  <div className="product-image__body">
                    <img className="product-image__img product-gallery__carousel-image" src="images/products/product-16-4.jpg" alt="" />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="owl-nav disabled">
            <button type="button" role="presentation" className="owl-prev">
              <span aria-label="Previous">‹</span>
            </button>
            <button type="button" role="presentation" className="owl-next">
              <span aria-label="Next">›</span>
            </button>
          </div>
          <div className="owl-dots disabled" />
        </div>
      </div>
    </div>
  </div>{/* .product__gallery / end */}{/* .product__info */} <div className="product__info">
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
    <h1 className="product__name">Brandix Screwdriver SCREW1500ACC</h1>
    <div className="product__rating">
      <div className="product__rating-stars">
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
          </div>
        </div>
      </div>
      <div className="product__rating-legend">
        <a href>7 Reviews</a>
        <span>/</span>
        <a href>Write A Review</a>
      </div>
    </div>
    <div className="product__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare, mi in ornare elementum, libero nibh lacinia urna, quis convallis lorem erat at purus. Maecenas eu varius nisi.</div>
    <ul className="product__features">
      <li>Speed: 750 RPM</li>
      <li>Power Source: Cordless-Electric</li>
      <li>Battery Cell Type: Lithium</li>
      <li>Voltage: 20 Volts</li>
      <li>Battery Capacity: 2 Ah</li>
    </ul>
    <ul className="product__meta">
      <li className="product__meta-availability">Availability: <span className="text-success">In Stock</span>
      </li>
      <li>Brand: <a href>Wakita</a>
      </li>
      <li>SKU: 83690/32</li>
    </ul>
  </div>{/* .product__info / end */}{/* .product__sidebar */} <div className="product__sidebar">
    <div className="product__availability">Availability: <span className="text-success">In Stock</span>
    </div>
    <div className="product__prices">$1,499.00</div>{/* .product__options */} <form className="product__options">
      <div className="form-group product__option">
        <label className="product__option-label">Color</label>
        <div className="input-radio-color">
          <div className="input-radio-color__list">
            <label className="input-radio-color__item input-radio-color__item--white" style={{color: '#fff'}} data-toggle="tooltip" title="White">
              <input type="radio" name="color" />
              <span />
            </label>
            <label className="input-radio-color__item" style={{color: '#ffd333'}} data-toggle="tooltip" title="Yellow">
              <input type="radio" name="color" />
              <span />
            </label>
            <label className="input-radio-color__item" style={{color: '#ff4040'}} data-toggle="tooltip" title="Red">
              <input type="radio" name="color" />
              <span />
            </label>
            <label className="input-radio-color__item input-radio-color__item--disabled" style={{color: '#4080ff'}} data-toggle="tooltip" title="Blue">
              <input type="radio" name="color" disabled="disabled" />
              <span />
            </label>
          </div>
        </div>
      </div>
      <div className="form-group product__option">
        <label className="product__option-label">Material</label>
        <div className="input-radio-label">
          <div className="input-radio-label__list">
            <label>
              <input type="radio" name="material" />
              <span>Metal</span>
            </label>
            <label>
              <input type="radio" name="material" />
              <span>Wood</span>
            </label>
            <label>
              <input type="radio" name="material" disabled="disabled" />
              <span>Plastic</span>
            </label>
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
            <button className="btn btn-primary btn-lg">Add to cart</button>
          </div>
          <div className="product__actions-item product__actions-item--wishlist">
            <button type="button" className="btn btn-secondary btn-svg-icon btn-lg" data-toggle="tooltip" title="Wishlist">
              <svg width="16px" height="16px">
                <use xlinkHref="images/sprite.svg#wishlist-16" />
              </svg>
            </button>
          </div>
          <div className="product__actions-item product__actions-item--compare">
            <button type="button" className="btn btn-secondary btn-svg-icon btn-lg" data-toggle="tooltip" title="Compare">
              <svg width="16px" height="16px">
                <use xlinkHref="images/sprite.svg#compare-16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </form>{/* .product__options / end */}
  </div>{/* .product__end */} <div className="product__footer">
    <div className="product__tags tags">
      <div className="tags__list">
        <a href>Mounts</a>
        <a href>Electrodes</a>
        <a href>Chainsaws</a>
      </div>
    </div>
    <div className="product__share-links share-links">
      <ul className="share-links__list">
        <li className="share-links__item share-links__item--type--like">
          <a href>Like</a>
        </li>
        <li className="share-links__item share-links__item--type--tweet">
          <a href>Tweet</a>
        </li>
        <li className="share-links__item share-links__item--type--pin">
          <a href>Pin It</a>
        </li>
        <li className="share-links__item share-links__item--type--counter">
          <a href>4K</a>
        </li>
      </ul>
    </div>
  </div>
</div>
</div>
</div>

        
        
      </div>
    </div>
  </div>

  )
}

export default Modal