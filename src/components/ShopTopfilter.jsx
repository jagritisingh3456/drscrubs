import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function ShopTopfilter() {
  return (
    <>
    <Header/>

    <div id="page-content">
  {/*Page Header*/}
  <div className="page-header text-center">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
          <div className="page-title">
            <h1>Shop Top Filter</h1>
          </div>
          {/*Breadcrumbs*/}
          <div className="breadcrumbs">
            <a href="index.html" title="Back to the home page">
              Home
            </a>
            <span className="title">
              <i className="icon anm anm-angle-right-l" />
              Shop
            </span>
            <span className="main-title">
              <i className="icon anm anm-angle-right-l" />
              Shop Top Filter
            </span>
          </div>
          {/*End Breadcrumbs*/}
        </div>
      </div>
    </div>
  </div>
  {/*End Page Header*/}
  {/*Main Content*/}
  <div className="container">
    {/*Collection top filters*/}
    <div className="collection-top-filters filterbar">
      <div className="closeFilter d-block d-lg-none">
        <i className="icon anm anm-times-r" />
      </div>
      <div className="filters-toolbar-wrapper sidebar-tags m-0 d-flex-center">
        <label className="flby mb-3 m-lg-0 d-none d-lg-inline-flex">
          Filter By
        </label>
        <form className="d-flex-wrap" action="#" method="post">
          <div className="btn-group filterBox filter-widget filter-categories">
            <button
              type="button"
              className="flTtl dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categories{" "}
              <span className="count-bubble text-center rounded-circle" />
            </button>
            <div className="filterDD dropdown-menu">
              <div className="bxTtl d-none d-lg-flex justify-content-between">
                <span className="selected">0 Selected</span>
                <a href="#" className="reset text-link">
                  Reset
                </a>
              </div>
              <div className="swacth-list categories clearfix">
                <ul className="sidebar-categories scrollspy morelist clearfix">
                  <li className="lvl1 sub-level more-item">
                    <a href="#;" className="site-nav">
                      Clothing
                    </a>
                    <ul className="sublinks">
                      <li className="lvl2 sub-level sub-sub-level">
                        <a href="#;" className="site-nav">
                          Men
                        </a>
                        <ul className="sublinks">
                          <li className="lvl3">
                            <a href="#" className="site-nav">
                              Shirt <span className="count">(25)</span>
                            </a>
                          </li>
                          <li className="lvl3">
                            <a href="#" className="site-nav">
                              Jeans <span className="count">(6)</span>
                            </a>
                          </li>
                          <li className="lvl3">
                            <a href="#" className="site-nav">
                              Shoes <span className="count">(9)</span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Women <span className="count">(14)</span>
                        </a>
                      </li>
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Child <span className="count">(26)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="lvl1 sub-level more-item">
                    <a href="#;" className="site-nav">
                      Jewellery
                    </a>
                    <ul className="sublinks">
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Ring <span className="count">(12)</span>
                        </a>
                      </li>
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Neckalses <span className="count">(15)</span>
                        </a>
                      </li>
                      <li className="lvl2">
                        <a href="#" className="site-nav">
                          Eaarings <span className="count">(18)</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="lvl1 more-item">
                    <a href="#" className="site-nav">
                      Accessories <span className="count">(14)</span>
                    </a>
                  </li>
                  <li className="lvl1 more-item">
                    <a href="#" className="site-nav">
                      Shoes <span className="count">(18)</span>
                    </a>
                  </li>
                  <li className="lvl1 more-item">
                    <a href="#" className="site-nav">
                      Electronic <span className="count">(22)</span>
                    </a>
                  </li>
                  <li className="lvl1 more-item">
                    <a href="#" className="site-nav">
                      Cosmetics <span className="count">(27)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn-group filterBox filter-widget filter-color">
            <button
              type="button"
              className="flTtl dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Color{" "}
              <span className="count-bubble text-center rounded-circle">1</span>
            </button>
            <div className="filterDD dropdown-menu">
              <div className="bxTtl d-none d-lg-flex justify-content-between">
                <span className="selected">1 Selected</span>
                <a href="#" className="reset text-link">
                  Reset
                </a>
              </div>
              <div className="filter-color swacth-list clearfix">
                <ul className="swatches d-flex-center clearfix pt-0">
                  <li className="swatch large radius available active">
                    <img
                      src="assets/images/products/swatches/blue-red.jpg"
                      alt="image"
                      width={70}
                      height={70}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Blue"
                    />
                  </li>
                  <li className="swatch large radius available">
                    <img
                      src="assets/images/products/swatches/blue-red.jpg"
                      alt="image"
                      width={70}
                      height={70}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Black"
                    />
                  </li>
                  <li className="swatch large radius available">
                    <img
                      src="assets/images/products/swatches/blue-red.jpg"
                      alt="image"
                      width={70}
                      height={70}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Pink"
                    />
                  </li>
                  <li className="swatch large radius available">
                    <img
                      src="assets/images/products/swatches/blue-red.jpg"
                      alt="image"
                      width={70}
                      height={70}
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Red"
                    />
                  </li>
                  <li className="swatch large radius available black">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Black"
                    />
                  </li>
                  <li className="swatch large radius available red">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Red"
                    />
                  </li>
                  <li className="swatch large radius available blue">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Blue"
                    />
                  </li>
                  <li className="swatch large radius available pink">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Pink"
                    />
                  </li>
                  <li className="swatch large radius available gray">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Gray"
                    />
                  </li>
                  <li className="swatch large radius available green">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Green"
                    />
                  </li>
                  <li className="swatch large radius available orange">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Orange"
                    />
                  </li>
                  <li className="swatch large radius soldout yellow">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Yellow"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn-group filterBox filter-widget filter-size">
            <button
              type="button"
              className="flTtl dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Size
              <span className="count-bubble text-center rounded-circle" />
            </button>
            <div className="filterDD dropdown-menu">
              <div className="bxTtl d-none d-lg-flex justify-content-between">
                <span className="selected">0 Selected</span>
                <a href="#" className="reset text-link">
                  Reset
                </a>
              </div>
              <div className="filter-size swacth-list clearfix">
                <ul className="size-swatches d-flex-center clearfix">
                  <li className="swatch large radius soldout">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="XS"
                    >
                      XS
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="S"
                    >
                      S
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="M"
                    >
                      M
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="L"
                    >
                      L
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="X"
                    >
                      X
                    </span>
                  </li>
                  <li className="swatch large radius available active">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="XL"
                    >
                      XL
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="XLL"
                    >
                      XLL
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="XXL"
                    >
                      XXL
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={25}
                    >
                      25
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={35}
                    >
                      35
                    </span>
                  </li>
                  <li className="swatch large radius available">
                    <span
                      className="swatchLbl"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title={40}
                    >
                      40
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn-group filterBox filter-widget filter-type">
            <button
              type="button"
              className="flTtl dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Product type
              <span className="count-bubble text-center rounded-circle" />
            </button>
            <div className="filterDD dropdown-menu">
              <div className="bxTtl d-none d-lg-flex justify-content-between">
                <span className="selected">0 Selected</span>
                <a href="#" className="reset text-link">
                  Reset
                </a>
              </div>
              <div className="swacth-list clearfix">
                <ul className="clearfix">
                  <li>
                    <input
                      type="checkbox"
                      defaultValue="fashion"
                      id="fashion"
                    />
                    <label htmlFor="fashion">
                      <span />
                      Fashion
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultValue="electronic"
                      id="electronic"
                    />
                    <label htmlFor="electronic">
                      <span />
                      Electronic
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" defaultValue="shoes" id="shoes" />
                    <label htmlFor="shoes">
                      <span />
                      Shoes
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn-group filterBox filter-widget filter-brands">
            <button
              type="button"
              className="flTtl dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Brands
              <span className="count-bubble text-center rounded-circle" />
            </button>
            <div className="filterDD dropdown-menu">
              <div className="bxTtl d-none d-lg-flex justify-content-between">
                <span className="selected">0 Selected</span>
                <a href="#" className="reset text-link">
                  Reset
                </a>
              </div>
              <div className="swacth-list clearfix">
                <ul className="clearfix">
                  <li>
                    <input type="checkbox" defaultValue="avone" id="avone" />
                    <label htmlFor="avone">
                      <span />
                      Avone
                    </label>
                  </li>
                  <li>
                    <input type="checkbox" defaultValue="diva" id="diva" />
                    <label htmlFor="diva">
                      <span />
                      Diva
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultValue="optimal"
                      id="optimal"
                    />
                    <label htmlFor="optimal">
                      <span />
                      Optimal
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn-group filterBox filter-widget filter-availability">
            <button
              type="button"
              className="flTtl dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Availability
              <span className="count-bubble text-center rounded-circle" />
            </button>
            <div className="filterDD dropdown-menu">
              <div className="bxTtl d-none d-lg-flex justify-content-between">
                <span className="selected">0 Selected</span>
                <a href="#" className="reset text-link">
                  Reset
                </a>
              </div>
              <div className="swacth-list clearfix">
                <ul className="clearfix">
                  <li>
                    <input
                      type="checkbox"
                      defaultValue="instock"
                      id="instock"
                    />
                    <label htmlFor="instock">
                      <span />
                      In stock
                    </label>
                  </li>
                  <li>
                    <input
                      type="checkbox"
                      defaultValue="outofstock"
                      id="outofstock"
                    />
                    <label htmlFor="outofstock">
                      <span />
                      Out of stock
                    </label>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="btn-group filterBox filter-widget filter-price">
            <button
              type="button"
              className="flTtl dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Price
              <span className="count-bubble text-center rounded-circle" />
            </button>
            <div className="filterDD dropdown-menu">
              <div className="bxTtl d-none d-lg-flex justify-content-between">
                <span className="selected">The highest price is $599.00</span>
                <a href="#" className="reset text-link">
                  Reset
                </a>
              </div>
              <div className="swacth-list clearfix">
                <div className="price-filter">
                  <div id="slider-range" className="mt-2" />
                  <div className="row">
                    <div className="col-6">
                      <input id="amount" type="text" />
                    </div>
                    <div className="col-6 text-right">
                      <button className="btn btn-sm">filter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-group filterBox filter-widget filter-tags">
            <button
              type="button"
              className="flTtl dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Product Tags
              <span className="count-bubble text-center rounded-circle" />
            </button>
            <div className="filterDD dropdown-menu">
              <div className="bxTtl d-none d-lg-flex justify-content-between">
                <span className="selected">0 Selected</span>
                <a href="#" className="reset text-link">
                  Reset
                </a>
              </div>
              <div className="swacth-list clearfix">
                <ul className="tags-list product-tags d-flex-wrap clearfix">
                  <li className="item active">
                    <a className="rounded-5" href="#">
                      Women
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      Shoes
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      Beauty
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      Accessories
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      $100 - $400
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      Above $800
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      Black
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      Blue
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      Red
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      M
                    </a>
                  </li>
                  <li className="item">
                    <a className="rounded-5" href="#">
                      XS
                    </a>
                  </li>
                </ul>
                <span className="btn btn-sm brd-link btnview">View all</span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
    {/*End Collection top filters*/}
    {/*Active Filters*/}
    <div className="top-tags mb-4">
      <ul className="items tags-list d-flex-center">
        <li className="item">
          <a href="#;" className="rounded-5">
            <span className="filter-value">Women</span>
            <i className="icon anm anm-times-r" />
          </a>
        </li>
        <li className="item">
          <a href="#;" className="rounded-5">
            <span className="filter-value">Blue</span>
            <i className="icon anm anm-times-r" />
          </a>
        </li>
        <li className="item">
          <a href="#;" className="rounded-5">
            <span className="filter-value">XL</span>
            <i className="icon anm anm-times-r" />
          </a>
        </li>
        <li className="item">
          <a href="#;" className="btn btn-sm brd-link ms-1 mt-0">
            Clear All
          </a>
        </li>
      </ul>
    </div>
    {/*End Active Filters*/}
    {/*Toolbar*/}
    <div className="toolbar toolbar-wrapper shop-toolbar">
      <div className="row align-items-center">
        <div className="col-4 col-sm-2 col-md-4 col-lg-4 text-left filters-toolbar-item d-flex order-1 order-sm-0">
          <button
            type="button"
            className="btn btn-filter icon anm anm-sliders-hr d-inline-flex d-lg-none me-2 me-lg-3"
          >
            <span className="d-none">Filter</span>
          </button>
          <div className="filters-item d-flex align-items-center">
            <label className="mb-0 me-2 d-none d-lg-inline-block">
              View as:
            </label>
            <div className="grid-options view-mode d-flex">
              <a className="icon-mode mode-list d-block" data-col={1} />
              <a className="icon-mode mode-grid grid-2 d-block" data-col={2} />
              <a
                className="icon-mode mode-grid grid-3 d-md-block"
                data-col={3}
              />
              <a
                className="icon-mode mode-grid grid-4 d-lg-block active"
                data-col={4}
              />
              <a
                className="icon-mode mode-grid grid-5 d-xl-block"
                data-col={5}
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-center product-count order-0 order-md-1 mb-3 mb-sm-0">
          <span className="toolbar-product-count">Showing: 15 products</span>
        </div>
        <div className="col-8 col-sm-6 col-md-4 col-lg-4 text-right filters-toolbar-item d-flex justify-content-end order-2 order-sm-2">
          <div className="filters-item d-flex align-items-center">
            <label
              htmlFor="ShowBy"
              className="mb-0 me-2 text-nowrap d-none d-sm-inline-flex"
            >
              Show:
            </label>
            <select name="ShowBy" id="ShowBy" className="filters-toolbar-show">
              <option value="title-ascending" selected="selected">
                10
              </option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>30</option>
            </select>
          </div>
          <div className="filters-item d-flex align-items-center ms-2 ms-lg-3">
            <label htmlFor="SortBy" className="mb-0 me-2 text-nowrap d-none">
              Sort by:
            </label>
            <select name="SortBy" id="SortBy" className="filters-toolbar-sort">
              <option value="featured" selected="selected">
                Featured
              </option>
              <option value="best-selling">Best selling</option>
              <option value="title-ascending">Alphabetically, A-Z</option>
              <option value="title-descending">Alphabetically, Z-A</option>
              <option value="price-ascending">Price, low to high</option>
              <option value="price-descending">Price, high to low</option>
              <option value="created-ascending">Date, old to new</option>
              <option value="created-descending">Date, new to old</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    {/*End Toolbar*/}
    {/*Product Infinite*/}
    <div className="product-four-loadmore">
      {/*Product Grid*/}
      <div className="grid-products grid-view-items">
        <div className="row col-row product-options row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2">
          <div className="item col-item">
            <div className="product-box">
              {/* Start Product Image */}
              <div className="product-image">
                {/* Start Product Image */}
                <a
                  href="product-layout1.html"
                  className="product-img rounded-0"
                >
                  <img
                    className="rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Tops</div>
                {/*End Product Vendor*/}
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
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                        alt="img"
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
                        alt="img"
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
                        alt="img"
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
                        alt="img"
                        width={625}
                        height={808}
                      />
                    </span>
                  </li>
                </ul>
                {/* End Variant */}
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#quickshop-modal"
                        className="btn btn-md quick-shop quick-shop-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#quickshop_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Quick Shop</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
                    data-src="assets/images/products/product2.jpg"
                    src="assets/images/products/product2.jpg"
                    alt="Product"
                    title="Product"
                    width={625}
                    height={808}
                  />
                  {/* End Image */}
                  {/* Hover Image */}
                  <img
                    className="hover rounded-0 blur-up lazyload"
                    data-src="assets/images/products/product2-1.jpg"
                    src="assets/images/products/product2-1.jpg"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Clothing</div>
                {/*End Product Vendor*/}
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
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                        alt="img"
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
                        alt="img"
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
                        alt="img"
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
                        alt="img"
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
                        alt="img"
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
                        alt="img"
                        width={625}
                        height={808}
                      />
                    </span>
                  </li>
                </ul>
                {/* End Variant */}
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#quickshop-modal"
                        className="btn btn-md quick-shop quick-shop-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#quickshop_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Select Options</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
                  <span className="lbl pr-label3">Trending</span>
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Footwear</div>
                {/*End Product Vendor*/}
                {/* Product Name */}
                <div className="product-name">
                  <a href="product-layout1.html">Flannel Collar Shirt</a>
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
                  <span className="caption hidden ms-1">10 Reviews</span>
                </div>
                {/* End Product Review */}
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
                      Sold:<strong className="text-primary ms-1">34</strong>
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Sunglasses</div>
                {/*End Product Vendor*/}
                {/* Product Name */}
                <div className="product-name">
                  <a href="product-layout1.html">Cotton Hooded Hoodie</a>
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
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Fashion</div>
                {/*End Product Vendor*/}
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
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Shoes</div>
                {/*End Product Vendor*/}
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
                  <span className="caption hidden ms-1">15 Reviews</span>
                </div>
                {/* End Product Review */}
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal soldOutBtn disabled"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Out Of stock</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Bags</div>
                {/*End Product Vendor*/}
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
                  <span className="caption hidden ms-1">11 Reviews</span>
                </div>
                {/* End Product Review */}
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Electronic</div>
                {/*End Product Vendor*/}
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
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Tools &amp; Parts</div>
                {/*End Product Vendor*/}
                {/* Product Name */}
                <div className="product-name">
                  <a href="product-layout1.html">Men's Cheater Jacket</a>
                </div>
                {/* End Product Name */}
                {/* Product Price */}
                <div className="product-price">
                  <span className="price">$99.00</span>
                </div>
                {/* End Product Price */}
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
                {/* Product Review */}
                <div className="product-review">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star-o" />
                  <i className="icon anm anm-star-o" />
                  <span className="caption hidden ms-1">19 Reviews</span>
                </div>
                {/* End Product Review */}
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Jewelry</div>
                {/*End Product Vendor*/}
                {/* Product Name */}
                <div className="product-name">
                  <a href="product-layout1.html">Casual Mustard Shirt</a>
                </div>
                {/* End Product Name */}
                {/* Product Price */}
                <div className="product-price">
                  <span className="price">$167.00</span>
                </div>
                {/* End Product Price */}
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Jeans</div>
                {/*End Product Vendor*/}
                {/* Product Name */}
                <div className="product-name">
                  <a href="product-layout1.html">Sleeve Round T-Shirt</a>
                </div>
                {/* End Product Name */}
                {/* Product Price */}
                <div className="product-price">
                  <span className="price">$154.00</span>
                </div>
                {/* End Product Price */}
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
                {/* Product Review */}
                <div className="product-review">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star-o" />
                  <span className="caption hidden ms-1">19 Reviews</span>
                </div>
                {/* End Product Review */}
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">T-Shirt</div>
                {/*End Product Vendor*/}
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
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
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
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Mens</div>
                {/*End Product Vendor*/}
                {/* Product Name */}
                <div className="product-name">
                  <a href="product-layout1.html">Cotton Casual Tshirt</a>
                </div>
                {/* End Product Name */}
                {/* Product Price */}
                <div className="product-price">
                  <span className="price">$167.00</span>
                </div>
                {/* End Product Price */}
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
                {/* Product Review */}
                <div className="product-review">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star-o" />
                  <i className="icon anm anm-star-o" />
                  <i className="icon anm anm-star-o" />
                  <span className="caption hidden ms-1">13 Reviews</span>
                </div>
                {/* End Product Review */}
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Sneakers</div>
                {/*End Product Vendor*/}
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
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
                {/* Product Review */}
                <div className="product-review">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star-o" />
                  <span className="caption hidden ms-1">20 Reviews</span>
                </div>
                {/* End Product Review */}
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
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
                  className="product-img rounded-0"
                >
                  {/* Image */}
                  <img
                    className="primary rounded-0 blur-up lazyload"
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
                    className="hover rounded-0 blur-up lazyload"
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
              <div className="product-details text-center">
                {/*Product Vendor*/}
                <div className="product-vendor">Dress</div>
                {/*End Product Vendor*/}
                {/* Product Name */}
                <div className="product-name">
                  <a href="product-layout1.html">Straight Fit Trousers</a>
                </div>
                {/* End Product Name */}
                {/* Product Price */}
                <div className="product-price">
                  <span className="price">$122.00</span>
                </div>
                {/* End Product Price */}
                {/*Sort Description*/}
                <p className="sort-desc hidden">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage...
                </p>
                {/*End Sort Description*/}
                {/* Product Review */}
                <div className="product-review">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star-o" />
                  <i className="icon anm anm-star-o" />
                  <span className="caption hidden ms-1">11 Reviews</span>
                </div>
                {/* End Product Review */}
                {/* Product Button */}
                <div className="button-action hidden">
                  <div className="addtocart-btn">
                    <form className="addtocart" action="#" method="post">
                      <a
                        href="#addtocart-modal"
                        className="btn btn-md add-to-cart-modal"
                        data-bs-toggle="modal"
                        data-bs-target="#addtocart_modal"
                      >
                        <i className="icon anm anm-cart-l me-2" />
                        <span className="text">Add to Cart</span>
                      </a>
                    </form>
                  </div>
                </div>
                {/* End Product Button */}
              </div>
              {/* End product details */}
            </div>
          </div>
        </div>
      </div>
      {/*End Product Grid*/}
      {/*Load More Button*/}
      <div className="infinitpaginOuter text-center mt-5">
        <div className="infiniteload">
          <a href="#" className="btn btn-xl loadMore4">
            Load More
          </a>
        </div>
      </div>
      {/*End Load More Button*/}
    </div>
    {/*End Product Infinite*/}
  </div>
  {/*End Main Content*/}
    </div>

    <Footer/>
    </>
  )
}
