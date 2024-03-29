import Head from "next/head";
import react, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import {
  addProduct,
  deleteProduct,
  addWishlist,
  deleteWishlist,
} from "../store/actions";
import { useRouter } from "next/router";
import Link from "next/link";
import * as Agent from "../api/agent";
import { homepageTranslate, dashboardTranslate } from "../translate";
import { AiFillHeart } from "react-icons/ai";
import {
  MobileLogo,
  } from "../static/svg/svg1";


 const Carousel = dynamic(() => import("../components/main/carousel"), {
  ssr: false,
});
const FeaturedProducts = dynamic(
  () => import("../components/main/featuredProducts"),
  {
    ssr: false,
  }
);

export default function Home() {
  const { bucket, categories } = useSelector((state) => state);
  const [products, setProducts] = useState([]);
  const [cat, setCat] = useState([]);
  const [banners, setBanners] = useState([]);
  const { locale, locales, asPath } = useRouter();




  const { wishlistReducer } = useSelector((state) => state);

  const checkIfInWishlist = (id) => {
    const inWish = wishlistReducer.find((obj) => obj.id == id);
    if (inWish) return true;

    return false;
  };
  useEffect(() => {
    setCat(categories);
  }, [categories]);

  useEffect(() => {
    const getBannerData = async () => {
      const banners = await Agent.general.getBanners();
      setBanners(banners);
    };
    getBannerData();
  }, []);

  const dispatch = useDispatch();

  const addToDispatch = (object) => {
    dispatch(addProduct(object));
  };

  const deleteToDispatch = (id) => {
    dispatch(deleteProduct(id));
  };

  useEffect(() => {
    const featuredPrTaker = async () => {
      const featuredResponse = await Agent.general.bestsellerProduct();
      setProducts(featuredResponse);
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
const router=useRouter()
  return (
    <div>
      <Head>
        <title>I-link</title>
        <meta name="description" content="I-link" />
        <link rel="icon" href="images/ilink-logo.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="site">
        <div className="site__body">
          <Carousel />
          <div className="block block-features block-features--layout--classic">
            <div className="container">
              <div className="block-features__list">
                <div className="block-features__item">
                  <div className="block-features__icon">
                    <svg width="48px" height="48px">
                      <use xlinkHref="images/sprite.svg#fi-free-delivery-48"></use>
                    </svg>
                  </div>
                  <div className="block-features__content">
                    <div className="block-features__title">
                      {homepageTranslate["freeShipping"][locale]}
                    </div>
                    <div className="block-features__subtitle">
                      {" "}
                      {homepageTranslate["fof"][locale]}{" "}
                    </div>
                  </div>
                </div>
                <div className="block-features__divider"></div>
                <div className="block-features__item">
                  <div className="block-features__icon">
                    <svg width="48px" height="48px">
                      <use xlinkHref="images/sprite.svg#fi-24-hours-48"></use>
                    </svg>
                  </div>
                  <div className="block-features__content">
                    <div className="block-features__title">
                      {homepageTranslate["support"][locale]}
                    </div>
                    <div className="block-features__subtitle">
                      {" "}
                      {homepageTranslate["cua"][locale]}{" "}
                    </div>
                  </div>
                </div>
                <div className="block-features__divider"></div>
                <div className="block-features__item">
                  <div className="block-features__icon">
                    <svg width="48px" height="48px">
                      <use xlinkHref="images/sprite.svg#fi-payment-security-48"></use>
                    </svg>
                  </div>
                  <div className="block-features__content">
                    <div className="block-features__title">
                      {homepageTranslate["safety"][locale]}
                    </div>
                    <div className="block-features__subtitle">
                      {" "}
                      {homepageTranslate["osp"][locale]}{" "}
                    </div>
                  </div>
                </div>
                <div className="block-features__divider"></div>
                <div className="block-features__item">
                  <div className="block-features__icon">
                    <svg width="48px" height="48px">
                      <use xlinkHref="images/sprite.svg#fi-tag-48"></use>
                    </svg>
                  </div>
                  <div className="block-features__content">
                    <div className="block-features__title">
                      {homepageTranslate["hotOffers"][locale]}
                    </div>
                    <div className="block-features__subtitle">
                      {" "}
                      {homepageTranslate["dut"][locale]}{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FeaturedProducts />
 
          {  banners && banners[0] && <div className="block block-banner">
              <div className="container">
                <a href="#" className="block-banner__body">
                  <div
                    className="block-banner__image block-banner__image--desktop"
                    style={{
                      backgroundImage: `url(https://api.i-link.az/api/getImage/${banners[0].image})`,
                    }}
                  ></div>
                  <div
                    className="block-banner__image block-banner__image--mobile"
                    style={{
                      backgroundImage: `url(https://api.i-link.az/api/getImage/${banners[0].mobile_image})`,
                    }}
                  ></div>
                  <div className="block-banner__title">
                    {" "}
                    {
                      JSON.parse(banners[0].title)[router.locale]
                    } <br className="block-banner__mobile-br" />{" "}
                  </div>
                  <div className="block-banner__text">
                    {JSON.parse(banners[0].description)[router.locale]}{" "}
                  </div>
                  <div className="block-banner__button"></div>
                </a>
              </div>
            </div>}
 
          <div
            className="block block-products block-products--layout--large-first"
            data-mobile-grid-columns="2"
          >
            <div className="container">
              <div className="block-header">
                <h3 className="block-header__title">
                  {homepageTranslate["Bestsellers"][locale]}
                </h3>
                <div className="block-header__divider"></div>
              </div>

              <div className="block-products__body">
                {products[0] && (
                  <div className="block-products__featured">
                    <div className="block-products__featured-item">
                      <div className="product-card product-card--hidden-actions">
                        <div className="product-card__image product-image">
                          <a className="product-image__body pointer">
                            <Link
                              href={`/${products[0].category.slug.replace(/#| /g,'-')}/${products[0].slug.replace(/#| /g,'-')}`}
                            >
                              <img
                                className="product-image__img"
                                src={"https://api.i-link.az/api/getImage/public/uploads/products/"+products[0].images[0].image}
                                alt=""
                              />
                            </Link>
                          </a>
                        </div>
                        <div className="product-card__info">
                          <div className="product-card__name">
                            <a href="product.html"> {products[0][`name_${router.locale}`]} </a>
                          </div>
                          <div className="product-card__rating"></div>
                        </div>
                        <div className="product-card__actions">
                          <div className="product-card__availability">
                             Availability:{" "}
                            <span className="text-success">In Stock</span>
                          </div>
                          <div className="product-card__prices">
                            {products[0].price} AZN
                          </div>
                          <div className="product-card__buttons">
                            {checkIfInBucket(products[0].uniq_id) && (
                              <button
                                onClick={() => deleteToDispatch(products[0].uniq_id)}
                                className="btn btn-danger product-card__addtocart"
                                type="button"
                              >
                                {" "}
                                {homepageTranslate["deletefromCard"][locale]}
                              </button>
                            )}
                            {!checkIfInBucket(products[0].uniq_id) && (
                              <button
                                onClick={() =>
                                  addToDispatch({
                                    title: products[0][`title_${router.locale}`],
                                    price: products[0].price,
                                    count: 1,
                                    image: products[0].images[0].image,
                                    id: products[0].uniq_id,
                                    category: products[0].category.slug,
                                    slug:products[0].slug
                                  })
                                }
                                className="btn btn-success product-card__addtocart"
                                type="button"
                              >
                                {" "}
                                {homepageTranslate["addToCard"][locale]}{" "}
                              </button>
                            )}
                            <button
                              className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                              type="button"
                            >
                              {" "}
                              {homepageTranslate["addToCard"][locale]}{" "}
                            </button>


                            {!checkIfInWishlist(products[0].uniq_id) && (
                        <button onClick={() =>
                          dispatch(
                            addWishlist({
                              id: products[0].uniq_id,
                              category: products[0].category.slug,
                              title: products[0][`title_${router.locale}`],
                              image: products[0].images[0].image,
                              slug:products[0].slug
                            })
                          )
                        }
                          className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                          type="button"
                        >
                          <svg
                            
                            width="16px"
                            height="16px"
                          >
                            <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                          </svg>

                          <span className="fake-svg-icon fake-svg-icon--wishlist-16"></span>
                        </button>
                      )}

                      {checkIfInWishlist(products[0].uniq_id) && (
                        <button onClick={() => dispatch(deleteWishlist(products[0].uniq_id))}
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
                  </div>
                )}
 
                <div className="block-products__list w-100">
                  {products.slice(1, 8).map((product, index) => {
                    if (index > 0 ) {
                      return (
                        <div key={index} className="block-products__list-item">
                          <div className="product-card product-card--hidden-actions">
                            <div className="product-card__image product-image">
                              <a className="product-image__body pointer">
                                <Link
                                  href={`/${product.category.slug.replace(/#| /g,'-')}/${product.slug.replace(/#| /g,'-')}`}
                                >
                                  <img
                                    className="product-image__img"
                                    src={"https://api.i-link.az/api/getImage/public/uploads/products/"+product.images[0].image}
                                    alt=""
                                  />
                                </Link>
                              </a>
                            </div>
                            <div className="product-card__info">
                              <div className="product-card__name">
                                <a>{product[`name_${router.locale}`]} </a>
                              </div>
 
                              <div className="product-card__rating">
                                <div className="product-card__rating-stars">
                                  <div className="rating">
                                    <div className="rating__body">
                                      <div className="rating__star rating__star--only-edge rating__star--active">
                                        <div className="rating__fill">
                                          <div className="fake-svg-icon"></div>
                                        </div>
                                        <div className="rating__stroke">
                                          <div className="fake-svg-icon"></div>
                                        </div>
                                      </div>

                                      <div className="rating__star rating__star--only-edge rating__star--active">
                                        <div className="rating__fill">
                                          <div className="fake-svg-icon"></div>
                                        </div>
                                        <div className="rating__stroke">
                                          <div className="fake-svg-icon"></div>
                                        </div>
                                      </div>

                                      <div className="rating__star rating__star--only-edge rating__star--active">
                                        <div className="rating__fill">
                                          <div className="fake-svg-icon"></div>
                                        </div>
                                        <div className="rating__stroke">
                                          <div className="fake-svg-icon"></div>
                                        </div>
                                      </div>

                                      <div className="rating__star rating__star--only-edge rating__star--active">
                                        <div className="rating__fill">
                                          <div className="fake-svg-icon"></div>
                                        </div>
                                        <div className="rating__stroke">
                                          <div className="fake-svg-icon"></div>
                                        </div>
                                      </div>

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
                                    onClick={() => deleteToDispatch(product.uniq_id)}
                                    className="btn btn-danger product-card__addtocart"
                                    type="button"
                                  >
                                    {" "}
                                    {
                                      homepageTranslate["deletefromCard"][
                                        locale
                                      ]
                                    }
                                  </button>
                                )}
                                {!checkIfInBucket(product.uniq_id) && (
                                  <button
                                    onClick={() =>
                                      addToDispatch({
                                        title: product[`title_${router.locale}`],
                                        price: product.price,
                                        count: 1,
                                        image: product.images[0].image,
                                        id: product.uniq_id,
                                        category: product.category.slug,
                                        slug:product.slug
                                      })
                                    }
                                    className="btn btn-success product-card__addtocart"
                                    type="button"
                                  >
                                    {" "}
                                    {
                                      homepageTranslate["addToCard"][locale]
                                    }{" "}
                                  </button>
                                )}

                                <button
                                  className="btn btn-secondary product-card__addtocart product-card__addtocart--list"
                                  type="button"
                                >
                                  {" "}
                                  {homepageTranslate["addToCard"][locale]}{" "}
                                </button>
                                {!checkIfInWishlist(product.uniq_id) && (
                        <button onClick={() =>
                          dispatch(
                            addWishlist({
                              id: product.uniq_id,
                              category: product.category.slug,
                              title: product[`title_${router.locale}`],
                              image: product.images[0].image,
                              slug:product.slug
                            })
                          )
                        }
                          className="btn btn-light btn-svg-icon btn-svg-icon--fake-svg product-card__wishlist"
                          type="button"
                        >
                          <svg
                            
                            width="16px"
                            height="16px"
                          >
                            <use xlinkHref="images/sprite.svg#wishlist-16"></use>
                          </svg>

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
                      );
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="block block--highlighted block-categories block-categories--layout--classic">
            <div className="container">
              <div className="block-header">
                <h3 className="block-header__title">
                  {homepageTranslate["PopularCategories"][locale]}
                </h3>
                <div className="block-header__divider"></div>
              </div>

              <div className="block-categories__list">
 
                {cat.map((cate, index) => (
                  <div
                    key={index}
                    className="block-categories__item category-card category-card--layout--classic"
                  >
                    <div className="category-card__body">
                      <div className="category-card__content">
                        <div className="category-card__name">
                          <Link href={`/${cate.slug.replace(/#| /g, "-")}`}>{cate[`name_${router.locale}`]}</Link>
                        </div>
                        {cate.subcategory && (
                          <ul className="category-card__links">
                            {cate.subcategory.map((child, index) => (
                              <li key={index}>
                                <Link
                                  href={`/filter/child-${child.uniq_id}/${child.slug.replace(/#| /g,'-')}`}
                                >
                                  {child[`name_${router.locale}`]}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}

                        <div className="category-card__products">
                          {" "}
                          572 Products{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pswp" tabIndex="-1" role="dialog" aria-hidden="true">
        <div className="pswp__bg"></div>
        <div className="pswp__scroll-wrap">
          <div className="pswp__container">
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
            <div className="pswp__item"></div>
          </div>
          <div className="pswp__ui pswp__ui--hidden">
            <div className="pswp__top-bar">
              <div className="pswp__counter"></div>
              <button
                className="pswp__button pswp__button--close"
                title="Close (Esc)"
              ></button>
              <button
                className="pswp__button pswp__button--fs"
                title="Toggle fullscreen"
              ></button>
              <button
                className="pswp__button pswp__button--zoom"
                title="Zoom in/out"
              ></button>
              <div className="pswp__preloader">
                <div className="pswp__preloader__icn">
                  <div className="pswp__preloader__cut">
                    <div className="pswp__preloader__donut"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
              <div className="pswp__share-tooltip"></div>
            </div>
            <button
              className="pswp__button pswp__button--arrow--left"
              title="Previous (arrow left)"
            ></button>
            <button
              className="pswp__button pswp__button--arrow--right"
              title="Next (arrow right)"
            ></button>
            <div className="pswp__caption">
              <div className="pswp__caption__center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
