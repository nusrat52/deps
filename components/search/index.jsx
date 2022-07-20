import React, { useState, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
import { useRouter } from "next/router";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Link from "next/link";
import { addProduct, deleteProduct } from "../../store/actions";
import { useDispatch, useSelector } from "react-redux";
import * as Agent from "../../api/agent";


 
function Index() {
  const params = useRouter();
  const dispatch = useDispatch();
  const {bucket} = useSelector((state) => state);
   const { id } = params.query;

  const [products, setProducts] = useState([]);

  const addToDispatch = (object) => {
    dispatch(addProduct(object));
  };

 
  const deleteToDispatch = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    const getSearch = async () => {
      const searchResponse = await Agent.general.search(id);
      setProducts(searchResponse.results);
    };
    if (id) {
      getSearch();
    }
  }, [params.query]);

  
 
  const checkIfInBucket = (id) => {
    const inBucket = bucket.find((buck) => buck.id == id)
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
                  <AiOutlineRight className="profileWrapperIcon" />
                </li>
                
                <li className="breadcrumb-item active" aria-current="page">
                  Search
                </li>
              </ol>
            </nav>
          </div>
          <div className="page-header__title">
            <h1>{id} </h1>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="shop-layout shop-layout--sidebar--start">
          <div className="shop-layout__content shop-layout__content__sp">
            <div className="block">
              <div className="products-view">
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
                        className="products-list__item products-list__item__sp"
                      >
                        <div className="product-card product-card--hidden-actions">
                          <div className="product-card__image product-image">
                            <a className="product-image__body pointer">
                              <Link href={`/${product.category1.title}/${product.title}-${product.id}`}>
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
                      <a
                        className="page-link page-link--with-arrow"
                        href="#"
                        aria-label="Previous"
                      >
                        <svg
                          className="page-link__arrow page-link__arrow--left"
                          aria-hidden="true"
                          width="8px"
                          height="13px"
                        >
                          <use xlinkHref="images/sprite.svg#arrow-rounded-left-8x13" />
                        </svg>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item active">
                      <a className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a
                        className="page-link page-link--with-arrow"
                        href="#"
                        aria-label="Next"
                      >
                        <svg
                          className="page-link__arrow page-link__arrow--right"
                          aria-hidden="true"
                          width="8px"
                          height="13px"
                        >
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
  );
}

export default Index;
