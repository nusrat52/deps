import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import * as Agent from "../../api/agent";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../store/actions";
import Link from "next/link";




function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div className={"SampleNextArrow"} onClick={onClick}>
      <button
        className="block-header__arrow block-header__arrow--right"
        type="button"
      >
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
    <div className={"SamplePrevArrow"} onClick={onClick}>
      <button
        className="block-header__arrow block-header__arrow--left"
        type="button"
      >
        <svg width="7px" height="11px">
          <use xlinkHref="images/sprite.svg#arrow-rounded-left-7x11"></use>
        </svg>
      </button>
    </div>
  );
}

const Responsive = () => {

  
  const dispatch = useDispatch();
  const { bucket } = useSelector((state) => state);
  const mockArray = [];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [products, setProducts] = useState([]);

  const addToDispatch = (object) => {
    dispatch(addProduct(object));
  };

  const deleteToDispatch = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    const featuredPrTaker = async () => {
      const featuredResponse = await Agent.general.featuredProducts();
      setProducts(featuredResponse.results);
    };
    featuredPrTaker();
  }, []);

  const checkIfInBucket = (id) => {
    const inBucket = bucket.find((buck) => buck.id == id);
    if (inBucket) {
      return true;
    }
    return false;
  };

   return (
    <div className="container">
      <div
        className="block block-products-carousel"
        data-layout="grid-4"
        data-mobile-grid-columns="2"
      >
        <div className="block-header">
          <h3 className="block-header__title">Featured Products</h3>
          <div className="block-header__divider"></div>

          <div className="block-header__arrows-list">
            <button
              className="block-header__arrow block-header__arrow--left invisible"
              type="button"
            >
              <svg width="7px" height="11px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-left-7x11"></use>
              </svg>
            </button>
            <button
              className="block-header__arrow block-header__arrow--right invisible"
              type="button"
            >
              <svg width="7px" height="11px">
                <use xlinkHref="images/sprite.svg#arrow-rounded-right-7x11"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="crouselWrapper">
            {" "}
            <div className="block-products__list-item block-products__list-item_sp">
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
                    <a href="product.html">{product.title} </a>
                  </div>
                </div>
                <div className="product-card__actions">
                  <div className="product-card__availability">
                    {" "}
                    Availability: <span className="text-success">In Stock</span>
                  </div>
                  <div className="product-card__prices">
                    {product.price} AZN
                  </div>
                  <div className="product-card__buttons">
                    {checkIfInBucket(product.id) && (
                      <button
                        onClick={() => deleteToDispatch(product.id)}
                        className="btn btn-danger product-card__addtocart"
                        type="button"
                      >
                        {" "}
                        Delete from Cart{" "}
                      </button>
                    )}
                    {!checkIfInBucket(product.id) && (
                      <button
                        onClick={() =>
                          addToDispatch({
                            title: product.title,
                            price: product.price,
                            count: 1,
                            image: product.images[0].image,
                            id: product.id,
                          })
                        }
                        className="btn btn-success product-card__addtocart"
                        type="button"
                      >
                        {" "}
                        Add from Cart{" "}
                      </button>
                    )}
                    <button
                      className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                      type="button"
                    >
                      {" "}
                      Add To Cart{" "}
                    </button>
                    <button
                      className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                      type="button"
                    >
                      <svg width="16px" height="16px">
                        <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                      </svg>
                      <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <br />
      <br />
      <br />
       <br />
    </div>
  );
};

export default Responsive;
