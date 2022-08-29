import React, { useState } from "react";
import Layout from "../../components/layout/layout";
import { useRouter } from "next/router";
import Image from "next/image";
import Detailed from "../../components/detailed";
import { AiFillHeart, AiOutlineRight } from "react-icons/ai";
import * as Agent from "../../api/agent";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { getAllPostIds } from "../../lib/posts";
import {
  addProduct,
  deleteProduct,
  decreaseItem,
  increaseItem,
  addWishlist,
  deleteWishlist
} from "../../store/actions";

import Head from "next/head";
import { detailedTransfer } from "../../translate";
function index ({ data }) {
   const [content, setContent] = useState("description");
  const router = useRouter();
  const { bucket } = useSelector((state) => state);

  const dispatch = useDispatch();

  const addToDispatch = (object) => {
    dispatch(addProduct(object));
  };

  const deleteToDispatch = (id) => {
    dispatch(deleteProduct(id));
  };
  const checkIfInBucket = (id) => {
    const inBucket = bucket.find((buck) => buck.id == id);
     if (inBucket) {
      return true;
    }
    return false;
  };
  const increase = (id) => {
    dispatch(increaseItem(id));
  };

  const decrease = (id) => {
    dispatch(decreaseItem(id));
  };

  const deleteItem = (id) => {
    dispatch(deleteProduct(id));
  };
  const { wishlistReducer } = useSelector((state) => state);

  const checkIfInWishlist = (id) => {
    const inWish = wishlistReducer.find((obj) => obj.id == id);
    if (inWish) return true;

    return false;
  };

  const bucketObject = bucket.find((buck) => buck.id == data?.uniq_id);

  const total = bucket?.reduce((currentValue, currentIndex) => {
    return (currentValue =
      currentValue + currentIndex.price * currentIndex.count);
  }, 0);
  return (
    <div>
      {data && (
        <Head>
          <meta charset="utf-8" />
          <meta
            name="description"
            content={
              data[`name_${router.locale}`] +
              "," +
              data.category[`name_${router.locale}`] +
              "," +
              data?.subcategory[`name_${router.locale}`] +
              "," +
              data?.altcategory[`name_${router.locale}`]
            }
          />
          <meta
            name="google-site-verification"
            content="+nxGUDJ4QpAZ5l9Bsjdi102tLVC21AIh5d1Nl23908vVuFHs34="
          />
          <title>{data[`name_${router.locale}`]}</title>
          <meta name="robots" content="noindex,nofollow" />
        </Head>
      )}

      <div className="site">
        {data && (
          <div className="site__body">
            <div className="page-header">
              <div className="page-header__container container">
                <div className="page-header__breadcrumb">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                        <AiOutlineRight />
                      </li>

                      <li className="breadcrumb-item">
                        <a href="#">{data.category.slug}</a>
                        <AiOutlineRight />
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        {data[`name_${router.locale}`]}
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="block">
              <div className="container">
                <div
                  className="product product--layout--standard"
                  data-layout="standard"
                >
                  <div className="product__content">
                    <div className="product__gallery">
                      <Detailed images={data.images} />
                    </div>

                    <div className="product__info product__info_sp">
                      <div className="product__wishlist-compare">
                        <button
                          type="button"
                          className="btn btn-sm btn-light btn-svg-icon"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Wishlist"
                        >
                          <svg width="16px" height="16px">
                            <use xlinkHref="images/sprite.svg#wishlist-16" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-light btn-svg-icon"
                          data-toggle="tooltip"
                          data-placement="right"
                          title="Compare"
                        >
                          <svg width="16px" height="16px">
                            <use xlinkHref="images/sprite.svg#compare-16" />
                          </svg>
                        </button>
                      </div>
                      <h1 className="product__name">{data[`name_${router.locale}`]}</h1>

                      <div className="product__description">
                        {data.description[0]?.description &&
                          data.description[0].description}
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
                          Availability:{" "}
                          <span className="text-success">In Stock</span>
                        </li>
                        <li>
                          {detailedTransfer["Manifacturer"][router.locale]} :{" "}
                          <a>{data.manufacturer}</a>
                        </li>
                        <li>
                        Code :
                          <a>{data.code}</a>
                           </li>
                      </ul>
                    </div>
                    <div className="product__sidebar">
                      <div className="product__availability">
                        Availability:{" "}
                        <span className="text-success">In Stock</span>
                      </div>
                      <div className="product__prices">{data.price}</div>
                      <form className="product__options">
                        <div className="d-flex">
                
                          <div className="form-group product__option  mr-2">
                            <label className="product__option-label">
                              Model
                            </label>
                            <div className="input-radio-label">
                              <div className="input-radio-label__list">
                                <label>
                                  <input type="radio" name="material" />
                                  <span>{data.model}</span>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div className="form-group product__option">
                            <label className="product__option-label">
                              {detailedTransfer["WEIGHT"][router.locale]}
                            </label>
                            <div className="input-radio-label">
                              <div className="input-radio-label__list">
                                <label>
                                  <input type="radio" name="material" />
                                  <span>{data.weight}</span>
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="form-group product__option">
                          {checkIfInBucket(data.uniq_id) && (
                            <label
                              className="product__option-label"
                              htmlFor="product-quantity"
                            >
                              {detailedTransfer["QUANTITY"][router.locale]}
                            </label>
                          )}
                          <div className="product__actions">
                            <div className="product__actions-item">
                              {checkIfInBucket(data.uniq_id) && (
                                <div className="input-number product__quantity">
                                  <input
                                    id="product-quantity"
                                    className="input-number__input form-control form-control-lg"
                                    type="number"
                                    value={bucketObject?.count}
                                  />
                                  <div
                                    onClick={() => increase(data.uniq_id)}
                                    className="input-number__add"
                                  />
                                  <div
                                    onClick={() => decrease(data.uniq_id)}
                                    className="input-number__sub"
                                  />
                                </div>
                              )}
                            </div>
                            <div className="product__actions-item product__actions-item--addtocart">
                              {checkIfInBucket(data.uniq_id) && (
                                <button
                                  onClick={() => deleteToDispatch(data.uniq_id)}
                                  className="btn btn-danger btn-lg"
                                  type="button"
                                >
                                   {detailedTransfer["delete"][router.locale]}
                                </button>
                              )}
                              {!checkIfInBucket(data.uniq_id) && (
                                <button
                                  onClick={() =>
                                    addToDispatch({
                                      title: data[`name_${router.locale}`],
                                      price: data.price,
                                      count: 1,
                                      image: data.images[0].image,
                                      id: data.uniq_id,
                                      category: data.category.slug,
                                      slug:data.slug
                                    })
                                  }
                                  className="btn btn-success btn-lg"
                                >
                                  Add to cart
                                </button>
                              )}
                            </div>

                            {!checkIfInWishlist(data.uniq_id) && (
                              <button
                                onClick={() =>
                                  dispatch(
                                    addWishlist({
                                      id: data.uniq_id,
                                      category: data.category.slug,
                                      title: data[`name_${router.locale}`],
                                      image: data.images[0].image,
                                      slug:data.slug
                                    })
                                  )
                                }
                                className="btn btn-secondary btn-svg-icon btn-lg"
                                type="button"
                              >
                                <AiFillHeart />
                              </button>
                            )}
                            {checkIfInWishlist(data.uniq_id) && (
                              <button
                                onClick={() =>
                                  dispatch(deleteWishlist(data.uniq_id))
                                }
                                className="btn btn-secondary btn-svg-icon btn-lg"
                                type="button"
                              >
                                <AiFillHeart className="text-danger" />
                                <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                              </button>
                            )}

                            {/* <button
                            type="button"
                            className="btn btn-secondary btn-svg-icon btn-lg"
                      
                          >
                            <div className="product__actions-item product__actions-item--wishlist">
                              <AiFillHeart />
                            </div>
                            </button> */}
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="product__footer">
                      <div className="product__tags tags"></div>
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
                        <a
                          onClick={() => setContent("description")}
                          className={
                            content == "description"
                              ? "product-tabs__item product-tabs__item--active"
                              : "product-tabs__item"
                          }
                        >
                          {detailedTransfer["Description"][router.locale]}
                        </a>
                        <a
                          onClick={() => setContent("specification")}
                          className={
                            content == "specification"
                              ? "product-tabs__item product-tabs__item--active"
                              : "product-tabs__item"
                          }
                        >
                          {detailedTransfer["Specification"][router.locale]}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="product-tabs__content">
                    <div
                      className={
                        content == "description"
                          ? "product-tabs__pane product-tabs__pane--active"
                          : "product-tabs__pane"
                      }
                      id="tab-description"
                    >
                      {data.description && [].map((description, index) => (
                        <div key={index} className="typography">
                          <h3>{description[`name_${router.locale}`]}</h3>
                          <p>{description[`description_${router.locale}`]}</p>
                        </div>
                      ))}
                    </div>
                    <div
                      className={
                        content == "specification"
                          ? "product-tabs__pane product-tabs__pane--active"
                          : "product-tabs__pane"
                      }
                      id="tab-specification"
                    >
                      <div className="spec">
                        <h3 className="spec__header">
                          {detailedTransfer["Specification"][router.locale]}
                        </h3>
                        <div className="spec__section">
                          <h4 className="spec__section-title">General</h4>
                          <div className="spec__row">
                            <div className="spec__name">Material</div>
                            <div className="spec__value">
                              Aluminium, Plastic
                            </div>
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
                          set, the country of manufacture and the appearance of
                          the goods is for reference only and is based on the
                          latest information available at the time of
                          publication.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
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
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              />
              {/*<button class="pswp__button pswp__button&#45;&#45;share" title="Share"></button>*/}
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              />
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              />
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
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            />
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            />
            <div className="pswp__caption">
              <div className="pswp__caption__center" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

export async function getStaticProps (context) {
  
  const idSlugArrLengtf = context.params.id.split("-").length;

const detaildedData=await Agent.general.getProductBySlug(context.params.id)
  
  

  return {
    props: { data: detaildedData?detaildedData:null },
  };
}

export async function getStaticPaths() {
  const productsResponse = await Agent.general.getWholeProducts();
  const path = productsResponse.map((product) => {
    return {
      params: {
        id: product.slug.replace(/#| /g,'-'),
        catalog: `${product.category.slug.replace(/#| /g,'-')}`
      },
    };
  });

   
  return {
    paths: path,
    fallback: true
  };
}
