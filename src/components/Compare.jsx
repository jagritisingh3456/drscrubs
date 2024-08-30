import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Compare() {
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
            <h1>Compare Style1</h1>
          </div>
          {/*Breadcrumbs*/}
          <div className="breadcrumbs">
            <a href="index.html" title="Back to the home page">
              Home
            </a>
            <span className="main-title">
              <i className="icon anm anm-angle-right-l" />
              Compare Style1
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
    <div
      className="alert alert-success py-2 alert-dismissible fade show cart-alert"
      role="alert"
    >
      There are <span className="text-primary fw-600">4</span> products in this
      Compare list
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      />
    </div>
    {/*Compare*/}
    <div className="table-wrapper mt-4 compare-table table-responsive">
      <form action="#" method="post">
        <table className="table table-bordered align-middle">
          <tbody>
            <tr>
              <th className="name">Products</th>
              <td className="item-row">
                <div className="product-image position-relative">
                  <button
                    type="button"
                    className="btn remove-icon close-btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Remove"
                  >
                    <i className="icon anm anm-times-r" />
                  </button>
                  <div className="product-labels">
                    <span className="lbl on-sale">10% Off</span>
                  </div>
                  <img
                    className="image rounded-0 blur-up lazyload"
                    data-src="assets/images/products/product1.jpg"
                    src="assets/images/products/product1.jpg"
                    alt="Product"
                    title="Product"
                    width={625}
                    height={808}
                  />
                  <button
                    type="button"
                    className="btn btn-light quick-view-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#quickview_modal"
                  >
                    <i className="icon anm anm-search-plus-l" />
                  </button>
                </div>
                <div className="product-name mt-3">
                  <a href="product-layout1.html">Oxford Cuban Shirt</a>
                </div>
                <div className="product-price fw-500">
                  <span className="old-price">$110.00</span>
                  <span className="price">$99.00</span>
                </div>
              </td>
              <td className="item-row">
                <div className="product-image position-relative">
                  <button
                    type="button"
                    className="btn remove-icon close-btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Remove"
                  >
                    <i className="icon anm anm-times-r" />
                  </button>
                  <div className="product-labels">
                    <span className="lbl on-sale">20% Off</span>
                  </div>
                  <img
                    className="image rounded-0 blur-up lazyload"
                    data-src="assets/images/products/product2.jpg"
                    src="assets/images/products/product2.jpg"
                    alt="Product"
                    title="Product"
                    width={625}
                    height={808}
                  />
                  <button
                    type="button"
                    className="btn btn-light quick-view-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#quickview_modal"
                  >
                    <i className="icon anm anm-search-plus-l" />
                  </button>
                </div>
                <div className="product-name mt-3">
                  <a href="product-layout1.html">Cuff Beanie Cap</a>
                </div>
                <div className="product-price fw-500">
                  <span className="old-price">$120.00</span>
                  <span className="price">$99.00</span>
                </div>
              </td>
              <td className="item-row">
                <div className="product-image position-relative">
                  <button
                    type="button"
                    className="btn remove-icon close-btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Remove"
                  >
                    <i className="icon anm anm-times-r" />
                  </button>
                  <div className="product-labels">
                    <span className="lbl on-sale">30% Off</span>
                  </div>
                  <img
                    className="image rounded-0 blur-up lazyload"
                    data-src="assets/images/products/product3.jpg"
                    src="assets/images/products/product3.jpg"
                    alt="Product"
                    title="Product"
                    width={625}
                    height={808}
                  />
                  <button
                    type="button"
                    className="btn btn-light quick-view-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#quickview_modal"
                  >
                    <i className="icon anm anm-search-plus-l" />
                  </button>
                </div>
                <div className="product-name mt-3">
                  <a href="product-layout1.html">Flannel Collar Shirt</a>
                </div>
                <div className="product-price fw-500">
                  <span className="old-price">$130.00</span>
                  <span className="price">$99.00</span>
                </div>
              </td>
              <td className="item-row">
                <div className="product-image position-relative">
                  <button
                    type="button"
                    className="btn remove-icon close-btn"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Remove"
                  >
                    <i className="icon anm anm-times-r" />
                  </button>
                  <div className="product-labels">
                    <span className="lbl on-sale">40% Off</span>
                  </div>
                  <img
                    className="image rounded-0 blur-up lazyload"
                    data-src="assets/images/products/product4.jpg"
                    src="assets/images/products/product4.jpg"
                    alt="Product"
                    title="Product"
                    width={625}
                    height={808}
                  />
                  <button
                    type="button"
                    className="btn btn-light quick-view-modal"
                    data-bs-toggle="modal"
                    data-bs-target="#quickview_modal"
                  >
                    <i className="icon anm anm-search-plus-l" />
                  </button>
                </div>
                <div className="product-name mt-3">
                  <a href="product-layout1.html">Cotton Hooded Hoodie</a>
                </div>
                <div className="product-price fw-500">
                  <span className="old-price">$140.00</span>
                  <span className="price">$99.00</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className="name" />
              <td className="text-in-stock fw-500">
                <a href="cart-style1.html" className="add-to-cart btn">
                  Add to Cart
                </a>
              </td>
              <td className="text-in-stock fw-500">
                <a href="cart-style1.html" className="add-to-cart btn">
                  Add to Cart
                </a>
              </td>
              <td className="text-out-stock fw-500">
                <button type="button" className="add-to-cart btn soldOutBtn">
                  Out Of stock
                </button>
              </td>
              <td className="text-in-stock fw-500">
                <a href="cart-style1.html" className="add-to-cart btn">
                  Add to Cart
                </a>
              </td>
            </tr>
            <tr>
              <th className="name">Availability</th>
              <td className="text-in-stock fw-500">
                <p>In stock</p>
              </td>
              <td className="text-in-stock fw-500">
                <p>In stock</p>
              </td>
              <td className="text-out-stock fw-500">
                <p>Out Of stock</p>
              </td>
              <td className="text-in-stock fw-500">
                <p>In stock</p>
              </td>
            </tr>
            <tr>
              <th className="name">Ratings &amp; Reviews</th>
              <td className="item-row">
                <div className="product-review d-flex-justify-center mt-0">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star-o" />
                  <span className="caption text-muted ms-1">(16 Reviews)</span>
                </div>
              </td>
              <td className="item-row">
                <div className="product-review d-flex-justify-center mt-0">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star-o" />
                  <i className="icon anm anm-star-o" />
                  <span className="caption text-muted ms-1">(24 Reviews)</span>
                </div>
              </td>
              <td className="item-row">
                <div className="product-review d-flex-justify-center mt-0">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <span className="caption text-muted ms-1">(31 Reviews)</span>
                </div>
              </td>
              <td className="item-row">
                <div className="product-review d-flex-justify-center mt-0">
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star" />
                  <i className="icon anm anm-star-o" />
                  <i className="icon anm anm-star-o" />
                  <i className="icon anm anm-star-o" />
                  <span className="caption text-muted ms-1">(11 Reviews)</span>
                </div>
              </td>
            </tr>
            <tr>
              <th className="name">SKU</th>
              <td className="item-row">DP987654</td>
              <td className="item-row">DP987655</td>
              <td className="item-row">DP987656</td>
              <td className="item-row">DP987657</td>
            </tr>
            <tr>
              <th className="name">Brand</th>
              <td className="item-row">Fashion</td>
              <td className="item-row">Shoes</td>
              <td className="item-row">Bags</td>
              <td className="item-row">Electronic</td>
            </tr>
            <tr>
              <th className="name">Color</th>
              <td className="item-row">Blue, Yellow, Marron</td>
              <td className="item-row">Brown, Gray, Golden</td>
              <td className="item-row">Khaki, Orange, Black</td>
              <td className="item-row">Green, Red, Pink</td>
            </tr>
            <tr>
              <th className="name">Size</th>
              <td className="item-row">XL, XXL</td>
              <td className="item-row">M, XL</td>
              <td className="item-row">S, L</td>
              <td className="item-row">XS, M</td>
            </tr>
            <tr>
              <th className="name">Description</th>
              <td className="item-row">
                <ul className="list-styled text-left">
                  <li>If you are going to use passage</li>
                  <li>Combined with handful model</li>
                  <li>Always free from repetition</li>
                </ul>
              </td>
              <td className="item-row">
                <ul className="list-styled text-left">
                  <li>If you are going to use passage</li>
                  <li>Combined with handful model</li>
                  <li>Always free from repetition</li>
                </ul>
              </td>
              <td className="item-row">
                <ul className="list-styled text-left">
                  <li>If you are going to use passage</li>
                  <li>Combined with handful model</li>
                  <li>Always free from repetition</li>
                </ul>
              </td>
              <td className="item-row">
                <ul className="list-styled text-left">
                  <li>If you are going to use passage</li>
                  <li>Combined with handful model</li>
                  <li>Always free from repetition</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
    {/*End Compare*/}
  </div>
  {/*End Main Content*/}
    </div>
    <Footer/>
    </>
  )
}
