import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Slider from 'react-slick';
import CategorySlider from './CategorySlider';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home({ slider, spaceBetween, slidesPerView }) {
  console.log(slider);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
            },
        ],
    };
  
  return (
    <>
    <Header/>
    {/* Body Container */}
    <div id="page-content" className="mb-0">
      {/*Home Slideshow*/}
      <section className="slideshow slideshow-wrapper">
        <Slider {...settings}>
            <div className="slide">
            <div className="slideshow-wrap">
                <img
                className="blur-up lazyload"
                src="assets/images/slideshow/demo1-banner1.jpg"
                alt="slideshow"
                title=""
                width={1920}
                height={795}
                />
                <div className="container">
                <div className="slideshow-content slideshow-overlay middle-left">
                    <div className="slideshow-content-in">
                    <div className="wrap-caption animation style1">
                        <p className="ss-small-title">Elegant design</p>
                        <h2 className="ss-mega-title">
                        Making someone feel <br />
                        pretty is an art
                        </h2>
                        <p className="ss-sub-title xs-hide">
                        Perfectly designed to ensures ultimate comfort and style
                        </p>
                        <div className="ss-btnWrap">
                        <a className="btn btn-primary" href="shop-grid-view.html">
                            Shop Women
                        </a>
                        <a className="btn btn-secondary" href="shop-grid-view.html">
                            Shop Men
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="slide">
            <div className="slideshow-wrap">
                <img
                className="blur-up lazyload"
                src="assets/images/slideshow/demo1-banner2.jpg"
                alt="slideshow"
                title=""
                width={1920}
                height={795}
                />
                <div className="container">
                <div className="slideshow-content slideshow-overlay middle-right">
                    <div className="slideshow-content-in">
                    <div className="wrap-caption animation style1">
                        <h2 className="ss-mega-title">
                        Spread Positive <br />
                        Energy With Hema
                        </h2>
                        <p className="ss-sub-title xs-hide">
                        The must-have closet essential women wardrobe for the year
                        </p>
                        <div className="ss-btnWrap d-flex-justify-start">
                        <a className="btn btn-primary" href="shop-grid-view.html">
                            Explore Now!
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="slide">
            <div className="slideshow-wrap">
                <img
                className="blur-up lazyload"
                src="assets/images/slideshow/demo1-banner3.jpg"
                alt="slideshow"
                title=""
                width={1920}
                height={795}
                />
                <div className="container">
                <div className="slideshow-content slideshow-overlay middle-right">
                    <div className="slideshow-content-in">
                    <div className="wrap-caption animation style1">
                        <h2 className="ss-mega-title">
                        Design Your Next <br />
                        Favourite Wear
                        </h2>
                        <p className="ss-sub-title xs-hide">
                        The outfit that blend elegance and style for your casual wear
                        </p>
                        <div className="ss-btnWrap">
                        <a className="btn btn-primary" href="shop-grid-view.html">
                            Shop now
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </Slider>
      </section>
      {/*End Home Slideshow*/}
      {/*Service Section*/}
      <section className="section service-section pb-0">
        <div className="container">
          <div className="service-info row col-row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 text-center">
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-phone-call-l" />
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Call us any time</h3>
                <span className="text-muted">Contact us 24/7 hours a day</span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-truck-l" />
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Pickup At Any Store</h3>
                <span className="text-muted">
                  Free shipping on orders over $65
                </span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-credit-card-l" />
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Secured Payment</h3>
                <span className="text-muted">
                  We accept all major credit cards
                </span>
              </div>
            </div>
            <div className="service-wrap col-item">
              <div className="service-icon mb-3">
                <i className="icon anm anm-redo-l" />
              </div>
              <div className="service-content">
                <h3 className="title mb-2">Free Returns</h3>
                <span className="text-muted">30-days free return policy</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Service Section*/}
      {/*Collection banner*/}
      {/*Popular Categories*/}
      <section className="section collection-slider pb-0">
        <div className="container">
          <div className="section-header">
            <p className="mb-2 mt-0">Shop by category</p>
            <h2>Popular Collections</h2>
          </div>
          <CategorySlider/>
        </div>
      </section>
      {/*End Popular Categories*/}
      {/*Products With Tabs*/}
      <section className="section product-slider tab-slider-product">
        <div className="container">
          <div className="section-header d-none">
            <h2>Special Offers</h2>
            <p>Browse the huge variety of our best seller</p>
          </div>
          <div className="tabs-listing">
            <ul
              className="nav nav-tabs style1 justify-content-center"
              id="productTabs"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link head-font active"
                  id="bestsellers-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#bestsellers"
                  type="button"
                  role="tab"
                  aria-controls="bestsellers"
                  aria-selected="true"
                >
                  Bestseller
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link head-font"
                  id="newarrivals-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#newarrivals"
                  type="button"
                  role="tab"
                  aria-controls="newarrivals"
                  aria-selected="false"
                >
                  New Arrivals
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link head-font"
                  id="toprated-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#toprated"
                  type="button"
                  role="tab"
                  aria-controls="toprated"
                  aria-selected="false"
                >
                  Top Rated
                </button>
              </li>
            </ul>
            <div className="tab-content" id="productTabsContent">
              <div
                className="tab-pane show active"
                id="bestsellers"
                role="tabpanel"
                aria-labelledby="bestsellers-tab"
              >
                {/*Product Grid*/}
                <div className="grid-products grid-view-items">
                  <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            <img
                              className="blur-up lazyload"
                              src="assets/images/products/product1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl on-sale">Sale</span>
                          </div>
                          {/* End Product label */}
                          {/*Countdown Timer*/}
                          <div className="saleTime" data-countdown="2025/01/01" />
                          {/*End Countdown Timer*/}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#quickshop-modal"
                              className="btn-icon addtocart quick-shop-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickshop_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick Shop"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Quick Shop</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Oxford Cuban Shirt</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price old-price">$114.00</span>
                            <span className="price">$99.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">3 Reviews</span>
                          </div>
                          {/* End Product Review */}
                          {/*Color Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Navy"
                              >
                                <img
                                  src="assets/images/products/product1.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Green"
                              >
                                <img
                                  src="assets/images/products/product1-1.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Gray"
                              >
                                <img
                                  src="assets/images/products/product1-2.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Orange"
                              >
                                <img
                                  src="assets/images/products/product1-3.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="blur-up lazyload"
                              data-src="assets/images/products/product2.jpg"
                              src="assets/images/products/product2.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#quickshop-modal"
                              className="btn-icon addtocart quick-shop-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickshop_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Select Options"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Select Options</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Cuff Beanie Cap</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$128.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <span className="caption hidden ms-1">8 Reviews</span>
                          </div>
                          {/* End Product Review */}
                          {/*Color Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Navy"
                              >
                                <img
                                  src="assets/images/products/product2.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Green"
                              >
                                <img
                                  src="assets/images/products/product2-1.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Gray"
                              >
                                <img
                                  src="assets/images/products/product2-2.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Orange"
                              >
                                <img
                                  src="assets/images/products/product2-3.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Yellow"
                              >
                                <img
                                  src="assets/images/products/product2-4.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                            <li className="swatch medium radius">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="Blue"
                              >
                                <img
                                  src="assets/images/products/product2-5.jpg"
                                  alt="product"
                                  width={625}
                                  height={808}
                                />
                              </span>
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product3.jpg"
                              src="assets/images/products/product3.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product3-1.jpg"
                              src="assets/images/products/product3-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl pr-label3">New</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Flannel Collar Shirt
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$99.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              10 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius red">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="red"
                              />
                            </li>
                            <li className="swatch medium radius orange">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="orange"
                              />
                            </li>
                            <li className="swatch medium radius yellow">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="yellow"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product4.jpg"
                              src="assets/images/products/product4.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product4-1.jpg"
                              src="assets/images/products/product4-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl on-sale">50% Off</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                          {/*Product Availability*/}
                          <div className="product-availability rounded-5">
                            <div className="lh-1 d-flex justify-content-between">
                              <div className="text-sold">
                                Sold:
                                <strong className="text-primary ms-1">34</strong>
                              </div>
                              <div className="text-available">
                                Available:
                                <strong className="text-primary ms-1">16</strong>
                              </div>
                            </div>
                            <div className="progress">
                              <div
                                className="progress-bar w-75"
                                role="progressbar"
                                aria-valuenow={75}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                          {/*End Product Availability*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Cotton Hooded Hoodie
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price old-price">$198.00</span>
                            <span className="price">$99.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">0 Reviews</span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius black">
                              <img
                                src="assets/images/products/swatches/blue-red.jpg"
                                alt="image"
                                width={70}
                                height={70}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="black"
                              />
                            </li>
                            <li className="swatch medium radius navy">
                              <img
                                src="assets/images/products/swatches/blue-red.jpg"
                                alt="image"
                                width={70}
                                height={70}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="navy"
                              />
                            </li>
                            <li className="swatch medium radius darkgreen">
                              <img
                                src="assets/images/products/swatches/blue-red.jpg"
                                alt="image"
                                width={70}
                                height={70}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="darkgreen"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product5.jpg"
                              src="assets/images/products/product5.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product5-1.jpg"
                              src="assets/images/products/product5-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl pr-label2">Hot</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Hooded Neck Hoodies</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$39.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">3 Reviews</span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius black">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="black"
                              />
                            </li>
                            <li className="swatch medium radius maroon">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="maroon"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product6.jpg"
                              src="assets/images/products/product6.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product6-1.jpg"
                              src="assets/images/products/product6-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl on-sale">Sold out</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Foldable Duffel Bag</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$299.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              15 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius gray">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="gray"
                              />
                            </li>
                            <li className="swatch medium radius red">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="red"
                              />
                            </li>
                            <li className="swatch medium radius orange">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="orange"
                              />
                            </li>
                            <li className="swatch medium radius yellow">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="yellow"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product7.jpg"
                              src="assets/images/products/product7.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product7-1.jpg"
                              src="assets/images/products/product7-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl pr-label1">Best seller</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">High-Waisted Pant</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$139.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              11 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius black">
                              <img
                                src="assets/images/products/swatches/blue-red.jpg"
                                alt="image"
                                width={70}
                                height={70}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="black"
                              />
                            </li>
                            <li className="swatch medium radius maroon">
                              <img
                                src="assets/images/products/swatches/blue-red.jpg"
                                alt="image"
                                width={70}
                                height={70}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="maroon"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product8.jpg"
                              src="assets/images/products/product8.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product8-1.jpg"
                              src="assets/images/products/product8-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Narror Neck Tie</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$134.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">0 Reviews</span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius black">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="black"
                              />
                            </li>
                            <li className="swatch medium radius navy">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="navy"
                              />
                            </li>
                            <li className="swatch medium radius darkgreen">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="darkgreen"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                  </div>
                  <div className="view-collection text-center mt-4 mt-md-5">
                    <a
                      href="shop-left-sidebar.html"
                      className="btn btn-secondary btn-lg"
                    >
                      View Collection
                    </a>
                  </div>
                </div>
                {/*End Product Grid*/}
              </div>
              <div
                className="tab-pane"
                id="newarrivals"
                role="tabpanel"
                aria-labelledby="newarrivals-tab"
              >
                {/*Product Grid*/}
                <div className="grid-products grid-view-items">
                  <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product8.jpg"
                              src="assets/images/products/product8.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product8-1.jpg"
                              src="assets/images/products/product8-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Narror Neck Tie</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$134.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">0 Reviews</span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius black">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="black"
                              />
                            </li>
                            <li className="swatch medium radius navy">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="navy"
                              />
                            </li>
                            <li className="swatch medium radius darkgreen">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="darkgreen"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product9.jpg"
                              src="assets/images/products/product9.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product9-1.jpg"
                              src="assets/images/products/product9-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl pr-label4">Popular</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Men's Cheater Jacket
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$99.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              19 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product10.jpg"
                              src="assets/images/products/product10.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product10-1.jpg"
                              src="assets/images/products/product10-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Casual Mustard Shirt
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$167.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <span className="caption hidden ms-1">7 Reviews</span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product11.jpg"
                              src="assets/images/products/product11.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product11-1.jpg"
                              src="assets/images/products/product11-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Sleeve Round T-Shirt
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$154.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              19 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product12.jpg"
                              src="assets/images/products/product12.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product12-1.jpg"
                              src="assets/images/products/product12-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Backpack Laptop Bag</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$121.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">6 Reviews</span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product13.jpg"
                              src="assets/images/products/product13.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product13-1.jpg"
                              src="assets/images/products/product13-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Cotton Casual Tshirt
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$167.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              13 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product14.jpg"
                              src="assets/images/products/product14.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product14-1.jpg"
                              src="assets/images/products/product14-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Ankle Casual Pants</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$125.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              20 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product15.jpg"
                              src="assets/images/products/product15.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product15-1.jpg"
                              src="assets/images/products/product15-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Straight Fit Trousers
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$122.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              11 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                  </div>
                  <div className="view-collection text-center mt-4 mt-md-5">
                    <a
                      href="shop-left-sidebar.html"
                      className="btn btn-secondary btn-lg"
                    >
                      View Collection
                    </a>
                  </div>
                </div>
                {/*End Product Grid*/}
              </div>
              <div
                className="tab-pane"
                id="toprated"
                role="tabpanel"
                aria-labelledby="toprated-tab"
              >
                {/*Product Grid*/}
                <div className="grid-products grid-view-items">
                  <div className="row col-row product-options row-cols-xl-4 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product5.jpg"
                              src="assets/images/products/product5.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product5-1.jpg"
                              src="assets/images/products/product5-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl pr-label2">Hot</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Hooded Neck Hoodies</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$39.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">3 Reviews</span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius black">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="black"
                              />
                            </li>
                            <li className="swatch medium radius maroon">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="maroon"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product6.jpg"
                              src="assets/images/products/product6.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product6-1.jpg"
                              src="assets/images/products/product6-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl on-sale">Sold out</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Foldable Duffel Bag</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$299.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              15 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius gray">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="gray"
                              />
                            </li>
                            <li className="swatch medium radius red">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="red"
                              />
                            </li>
                            <li className="swatch medium radius orange">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="orange"
                              />
                            </li>
                            <li className="swatch medium radius yellow">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="yellow"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product7.jpg"
                              src="assets/images/products/product7.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product7-1.jpg"
                              src="assets/images/products/product7-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl pr-label1">Best seller</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">High-Waisted Pant</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$139.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              11 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius black">
                              <img
                                src="assets/images/products/swatches/blue-red.jpg"
                                alt="image"
                                width={70}
                                height={70}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="black"
                              />
                            </li>
                            <li className="swatch medium radius maroon">
                              <img
                                src="assets/images/products/swatches/blue-red.jpg"
                                alt="image"
                                width={70}
                                height={70}
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="maroon"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product8.jpg"
                              src="assets/images/products/product8.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product8-1.jpg"
                              src="assets/images/products/product8-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Narror Neck Tie</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$134.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">0 Reviews</span>
                          </div>
                          {/* End Product Review */}
                          {/* Variant */}
                          <ul className="variants-clr swatches">
                            <li className="swatch medium radius black">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="black"
                              />
                            </li>
                            <li className="swatch medium radius navy">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="navy"
                              />
                            </li>
                            <li className="swatch medium radius darkgreen">
                              <span
                                className="swatchLbl"
                                data-bs-toggle="tooltip"
                                data-bs-placement="top"
                                title="darkgreen"
                              />
                            </li>
                          </ul>
                          {/* End Variant */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product9.jpg"
                              src="assets/images/products/product9.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product9-1.jpg"
                              src="assets/images/products/product9-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/* Product label */}
                          <div className="product-labels">
                            <span className="lbl pr-label4">Popular</span>
                          </div>
                          {/* End Product label */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Men's Cheater Jacket
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$99.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              19 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product10.jpg"
                              src="assets/images/products/product10.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product10-1.jpg"
                              src="assets/images/products/product10-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Casual Mustard Shirt
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$167.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <span className="caption hidden ms-1">7 Reviews</span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product11.jpg"
                              src="assets/images/products/product11.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product11-1.jpg"
                              src="assets/images/products/product11-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">
                              Sleeve Round T-Shirt
                            </a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$154.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">
                              19 Reviews
                            </span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                    <div className="item col-item">
                      <div className="product-box">
                        {/* Start Product Image */}
                        <div className="product-image">
                          {/* Start Product Image */}
                          <a
                            href="product-layout1.html"
                            className="product-img rounded-3"
                          >
                            {/* Image */}
                            <img
                              className="primary blur-up lazyload"
                              data-src="assets/images/products/product12.jpg"
                              src="assets/images/products/product12.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Image */}
                            {/* Hover Image */}
                            <img
                              className="hover blur-up lazyload"
                              data-src="assets/images/products/product12-1.jpg"
                              src="assets/images/products/product12-1.jpg"
                              alt="Product"
                              title="Product"
                              width={625}
                              height={808}
                            />
                            {/* End Hover Image */}
                          </a>
                          {/* End Product Image */}
                          {/*Product Button*/}
                          <div className="button-set style1">
                            {/*Cart Button*/}
                            <a
                              href="#addtocart-modal"
                              className="btn-icon addtocart add-to-cart-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#addtocart_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Add to Cart"
                              >
                                <i className="icon anm anm-cart-l" />
                                <span className="text">Add to Cart</span>
                              </span>
                            </a>
                            {/*End Cart Button*/}
                            {/*Quick View Button*/}
                            <a
                              href="#quickview-modal"
                              className="btn-icon quickview quick-view-modal"
                              data-bs-toggle="modal"
                              data-bs-target="#quickview_modal"
                            >
                              <span
                                className="icon-wrap d-flex-justify-center h-100 w-100"
                                data-bs-toggle="tooltip"
                                data-bs-placement="left"
                                title="Quick View"
                              >
                                <i className="icon anm anm-search-plus-l" />
                                <span className="text">Quick View</span>
                              </span>
                            </a>
                            {/*End Quick View Button*/}
                            {/*Wishlist Button*/}
                            <a
                              href="wishlist-style2.html"
                              className="btn-icon wishlist"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add To Wishlist"
                            >
                              <i className="icon anm anm-heart-l" />
                              <span className="text">Add To Wishlist</span>
                            </a>
                            {/*End Wishlist Button*/}
                            {/*Compare Button*/}
                            <a
                              href="compare-style2.html"
                              className="btn-icon compare"
                              data-bs-toggle="tooltip"
                              data-bs-placement="left"
                              title="Add to Compare"
                            >
                              <i className="icon anm anm-random-r" />
                              <span className="text">Add to Compare</span>
                            </a>
                            {/*End Compare Button*/}
                          </div>
                          {/*End Product Button*/}
                        </div>
                        {/* End Product Image */}
                        {/* Start Product Details */}
                        <div className="product-details">
                          {/* Product Name */}
                          <div className="product-name">
                            <a href="product-layout1.html">Backpack Laptop Bag</a>
                          </div>
                          {/* End Product Name */}
                          {/* Product Price */}
                          <div className="product-price">
                            <span className="price">$121.00</span>
                          </div>
                          {/* End Product Price */}
                          {/* Product Review */}
                          <div className="product-review">
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star" />
                            <i className="icon anm anm-star-o" />
                            <i className="icon anm anm-star-o" />
                            <span className="caption hidden ms-1">6 Reviews</span>
                          </div>
                          {/* End Product Review */}
                        </div>
                        {/* End product details */}
                      </div>
                    </div>
                  </div>
                  <div className="view-collection text-center mt-4 mt-md-5">
                    <a
                      href="shop-left-sidebar.html"
                      className="btn btn-secondary btn-lg"
                    >
                      View Collection
                    </a>
                  </div>
                </div>
                {/*End Product Grid*/}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*End Products With Tabs*/}
      {/*Parallax Banner*/}
      <div className="section parallax-banner-style1 py-0">
        <div className="hero hero-large hero-overlay bg-size">
          <img
            className="bg-img"
            src="assets/images/parallax/demo1-sale-banner.jpg"
            alt="Clearance Sale - Flat 50% Off"
            width={1920}
            height={645}
          />
          <div className="hero-inner d-flex-justify-center">
            <div className="container">
              <div className="wrap-text center text-white">
                <h1 className="hero-title text-white">
                  Clearance Sale - Flat 50% Off
                </h1>
                <p className="hero-subtitle h3 text-white">
                  Sale will end soon in
                </p>
                {/*Countdown Timer*/}
                <div
                  className="hero-saleTime d-flex-center text-center justify-content-center"
                  data-countdown="2028/10/01"
                />
                {/*End Countdown Timer*/}
                <p className="hero-details">
                  Hema Multipurpose Template that will give you and your customers
                  a smooth shopping experience which can be used for various kinds
                  of stores such as fashion.
                </p>
                <a
                  href="shop-left-sidebar.html"
                  className="hero-btn btn btn-light"
                >
                  Shop now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*End Parallax Banner*/}
      
    </div>
    {/* End Body Container */}

    <Footer/>
  </>
  
  )
}
