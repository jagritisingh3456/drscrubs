import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function Wishlist() {
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
            <h1>Wishlist Style1</h1>
          </div>
          {/*Breadcrumbs*/}
          <div className="breadcrumbs">
            <a href="index.html" title="Back to the home page">
              Home
            </a>
            <span className="main-title">
              <i className="icon anm anm-angle-right-l" />
              Wishlist Style1
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
    {/*Toolbar*/}
    <div className="toolbar toolbar-wrapper shop-toolbar">
      <div className="row align-items-center">
        <div className="col-4 col-sm-2 col-md-4 col-lg-4 text-left filters-toolbar-item d-flex order-1 order-sm-0">
          <button type="button" name="add" className="btn btn-secondary">
            <span>All Add to cart</span>
          </button>
        </div>
        <div className="col-12 col-sm-4 col-md-4 col-lg-4 text-center product-count order-0 order-md-1 mb-3 mb-sm-0">
          <span className="toolbar-product-count">Showing: 5 products</span>
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
    {/*Product Grid*/}
    <div className="grid-products grid-view-items">
      <div className="row col-row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-2">
        <div className="item col-item">
          <div className="product-box position-relative">
            <button
              type="button"
              className="btn remove-icon close-btn"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove"
            >
              <i className="icon anm anm-times-r" />
            </button>
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img rounded-0">
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
              {/* Product label */}
              <div className="product-labels">
                <span className="lbl on-sale">Sale</span>
              </div>
              {/* End Product label */}
              {/*Product Button*/}
              <div className="button-set style2">
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
                    data-bs-placement="top"
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
                  data-bs-placement="top"
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
                  data-bs-placement="top"
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
              {/* Product Name */}
              <div className="product-name">
                <a href="product-layout1.html">Cuff Beanie Cap</a>
              </div>
              {/* End Product Name */}
              {/* Product Price */}
              <div className="product-price">
                <span className="price old-price">$115.00</span>
                <span className="price">$99.00</span>
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
              {/* Product Button */}
              <div className="button-action mt-3">
                <div className="addtocart-btn">
                  <form className="addtocart" action="#" method="post">
                    <a
                      href="#addtocart-modal"
                      className="btn btn-md add-to-cart-modal"
                      data-bs-toggle="modal"
                      data-bs-target="#addtocart_modal"
                    >
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
          <div className="product-box position-relative">
            <button
              type="button"
              className="btn remove-icon close-btn"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove"
            >
              <i className="icon anm anm-times-r" />
            </button>
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img rounded-0">
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
              <div className="button-set style2">
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
                    data-bs-placement="top"
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
                  data-bs-placement="top"
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
                  data-bs-placement="top"
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
              {/* Product Button */}
              <div className="button-action mt-3">
                <div className="addtocart-btn">
                  <form className="addtocart" action="#" method="post">
                    <a
                      href="#addtocart-modal"
                      className="btn btn-md add-to-cart-modal"
                      data-bs-toggle="modal"
                      data-bs-target="#addtocart_modal"
                    >
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
          <div className="product-box position-relative">
            <button
              type="button"
              className="btn remove-icon close-btn"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove"
            >
              <i className="icon anm anm-times-r" />
            </button>
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img rounded-0">
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
              <div className="button-set style2">
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
                    data-bs-placement="top"
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
                  data-bs-placement="top"
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
                  data-bs-placement="top"
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
              {/* Product Button */}
              <div className="button-action mt-3">
                <div className="addtocart-btn">
                  <form className="addtocart" action="#" method="post">
                    <a
                      href="#addtocart-modal"
                      className="btn btn-md add-to-cart-modal"
                      data-bs-toggle="modal"
                      data-bs-target="#addtocart_modal"
                    >
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
          <div className="product-box position-relative">
            <button
              type="button"
              className="btn remove-icon close-btn"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove"
            >
              <i className="icon anm anm-times-r" />
            </button>
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img rounded-0">
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
              <div className="button-set style2">
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
                    data-bs-placement="top"
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
                  data-bs-placement="top"
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
                  data-bs-placement="top"
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
              {/* Product Button */}
              <div className="button-action mt-3">
                <div className="addtocart-btn">
                  <form className="addtocart" action="#" method="post">
                    <a
                      href="#addtocart-modal"
                      className="btn btn-md add-to-cart-modal"
                      data-bs-toggle="modal"
                      data-bs-target="#addtocart_modal"
                    >
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
          <div className="product-box position-relative">
            <button
              type="button"
              className="btn remove-icon close-btn"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Remove"
            >
              <i className="icon anm anm-times-r" />
            </button>
            {/* Start Product Image */}
            <div className="product-image">
              {/* Start Product Image */}
              <a href="product-layout1.html" className="product-img rounded-0">
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
              <div className="button-set style2">
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
                    data-bs-placement="top"
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
                  data-bs-placement="top"
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
                  data-bs-placement="top"
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
              {/* Product Button */}
              <div className="button-action mt-3">
                <div className="addtocart-btn">
                  <form className="addtocart" action="#" method="post">
                    <a
                      href="#addtocart-modal"
                      className="btn btn-md add-to-cart-modal soldOutBtn disabled"
                      data-bs-toggle="modal"
                      data-bs-target="#addtocart_modal"
                    >
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
      </div>
      {/* Pagination */}
      <nav className="clearfix pagination-bottom">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#">
              <i className="icon anm anm-angle-left-l" />
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link dot" href="#">
              ...
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              <i className="icon anm anm-angle-right-l" />
            </a>
          </li>
        </ul>
      </nav>
      {/* End Pagination */}
    </div>
    {/*End Product Grid*/}
  </div>
  {/*End Main Content*/}
    </div>
    <Footer/>
    
    </>
  )
}
