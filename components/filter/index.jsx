import React, { useState, useEffect } from "react";
import { AiOutlineRight, AiFillHeart } from "react-icons/ai";
import SearchDropdown from "./searchDropdown";
import ReactRange from "./range";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  addProduct,
  deleteProduct,
  addWishlist,
  deleteWishlist,
} from "../../store/actions";
import * as Agent from "../../api/agent";
import { useSelector, useDispatch } from "react-redux";
import { AiOutlineHeart } from "react-icons/ai";
import { filterCategoriya } from "../../translate";

function Index() {
  const params = useRouter();
  const dispatch = useDispatch();
  const { bucket, wishlistReducer } = useSelector((state) => state);

  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [values, setValues] = React.useState([0, 10000]);

  const categories = useSelector((state) => state.categories);
  const getProducts = async (slug, id) => {
    let dataforproducts;
    if (slug == "child") {
      dataforproducts = await Agent.general.getProductsBychild({
        subcategory: id,
        min_price: values[0],
        max_price: values[1],
      });
    } else if (slug == "sub") {
      dataforproducts = await Agent.general.getproductsBySub({
        altcategory: id,
        min_price: values[0],
        max_price: values[1],
      });
    }

    setProducts(dataforproducts.data);
  };

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (params.query.filterCat) {
        const cate = params.query.filterCat.split("-")[1];
        const cateSluf = params.query.filterCat.split("-")[0];

        getProducts(cateSluf, cate);
      }
    }, 750);

    return () => {
      clearTimeout(timer);
    };
  }, [params.query, values]);

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

  const checkIfInWishlist = (id) => {
    const inWish = wishlistReducer.find((obj) => obj.id == id);
    if (inWish) return true;

    return false;
  };
  return (
    <div className="site__body">
      <div className="page-header">
        <div className="page-header__container container">
          <div className="page-header__breadcrumb">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a className="pointer">Home</a>
                  <AiOutlineRight className="profileWrapperIcon" />
                </li>

                <li className="breadcrumb-item active" aria-current="page">
                  {filterCategoriya["search"][params.locale]}
                </li>
              </ol>
            </nav>
          </div>
          <div className="page-header__title">
            <h1>{params.query.filter} </h1>
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
                  <div className="block-sidebar__title">
                    {" "}
                    {filterCategoriya["Filters"][params.locale]}{" "}
                  </div>
                  <button className="block-sidebar__close" type="button">
                    <svg width="20px" height="20px">
                      <use xlinkHref="images/sprite.svg#cross-20" />
                    </svg>
                  </button>
                </div>
                <div className="block-sidebar__item">
                  <div
                    className="widget-filters widget widget-filters--offcanvas--mobile"
                    data-collapse
                    data-collapse-opened-class="filter--opened"
                  >
                    <h4 className="widget-filters__title widget__title">
                      {" "}
                      {filterCategoriya["Filters"][params.locale]}{" "}
                    </h4>
                    <div className="widget-filters__list">
                      {categories.map((category) => (
                        <SearchDropdown key={category.uniq_id} category={category} />
                      ))}
                      <div className="widget-filters__item">
                        <div
                          className="filter filter--opened"
                          data-collapse-item
                        >
                          <button
                            type="button"
                            className="filter__title filter__title__mb"
                            data-collapse-trigger
                          >
                            {" "}
                            {filterCategoriya["Price"][params.locale]}{" "}
                            <svg
                              className="filter__arrow"
                              width="12px"
                              height="7px"
                            >
                              <use xlinkHref="images/sprite.svg#arrow-rounded-down-12x7" />
                            </svg>
                          </button>
                          <div className="filter__body" data-collapse-content>
                            <div className="filter__container">
                              <ReactRange
                                values={values}
                                setValues={setValues}
                              />

                              <div className="filter-price__title">
                                {" "}
                                {filterCategoriya["Price"][params.locale]}:{" "}
                                {values[0]} AZN{" "}
                                <span className="filter-price__min-value" /> -
                                {values[1]} AZN{" "}
                                <span className="filter-price__max-value" />
                              </div>
                            </div>
                          </div>
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
                        <svg
                          className="filters-button__icon"
                          width="16px"
                          height="16px"
                        >
                          <use xlinkHref="images/sprite.svg#filters-16" />
                        </svg>
                        <span className="filters-button__title">
                          {filterCategoriya["Filters"][params.locale]}
                        </span>
                        <span className="filters-button__counter">3</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div
                  className="products-view__list products-list"
                  data-layout="grid-3-sidebar"
                  data-with-features="false"
                  data-mobile-grid-columns={2}
                >
                  <div className="products-list__body">
                    {products.map((product, index) => (
                      <div
                        key={index}
                        className="products-list__item products-list__item__sp products-list__item__sp_3x"
                      >
                        <div className="product-card product-card--hidden-actions">
                          <div className="product-card__image product-image">
                            <a className="product-image__body pointer">
                              <Link
                                href={`/${product.category.slug.replace(
                                  /#| /g,
                                  "-"
                                )}/${product.slug.replace(/#| /g, "-")}`}
                              >
                                <img
                                  className="product-image__img"
                                  src={
                                    "https://api.i-link.az/api/getImage/public/uploads/products/" +
                                    product.images[0].image
                                  }
                                  alt=""
                                />
                              </Link>
                            </a>
                          </div>
                          <div className="product-card__info">
                            <div className="product-card__name">
                              <a>{product[`name_${params.locale}`]} </a>
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
                              {checkIfInBucket(product.uniq_id) && (
                                <button
                                  onClick={() =>
                                    deleteToDispatch(product.uniq_id)
                                  }
                                  className="btn btn-danger product-card__addtocart"
                                  type="button"
                                >
                                  {" "}
                                  {
                                    filterCategoriya["delete"][params.locale]
                                  }{" "}
                                </button>
                              )}
                              {!checkIfInBucket(product.uniq_id) && (
                                <button
                                  onClick={() =>
                                    addToDispatch({
                                      title: product[`name_${params.locale}`],
                                      price: product.price,
                                      category: product.slug,
                                      count: 1,
                                      image: product.images[0],
                                      id: product.uniq_id,
                                      slug: product.slug,
                                    })
                                  }
                                  className="btn btn-success product-card__addtocart"
                                  type="button"
                                >
                                  {" "}
                                  {filterCategoriya["add"][params.locale]}
                                </button>
                              )}
                       
                      {!checkIfInWishlist(product.uniq_id) && (
                        <button onClick={() =>
                          dispatch(
                            addWishlist({
                              id: product.uniq_id,
                              category: 'product.category.slug',
                              title: product[`name_${params.locale}`],
                              image: product.images[0].path,
                              slug:product.slug.replace(/#| /g,'-')
                            })
                          )
                        }
                          className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                          type="button"
                        >
                     <AiOutlineHeart
                                  style={{ width: "25px", height: "25px" }}
                                />

                          <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                        </button>
                      )}

                      {checkIfInWishlist(product.uniq_id) && (
                        <button onClick={() => dispatch(deleteWishlist(product.uniq_id))}
                          className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                          type="button"
                        >
                          <AiFillHeart
                          
                            className="text-danger"
                          />

                          <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                        </button>
                      )}
                              


                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="products-view__pagination"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
