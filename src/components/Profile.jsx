import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function Profile() {
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
              <h1>My Account</h1>
            </div>
            {/*Breadcrumbs*/}
            <div className="breadcrumbs">
              <a href="index.html" title="Back to the home page">
                Home
              </a>
              <span className="title">
                <i className="icon anm anm-angle-right-l" />
                Pages
              </span>
              <span className="main-title fw-bold">
                <i className="icon anm anm-angle-right-l" />
                My Account
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
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-3 mb-4 mb-lg-0">
          {/* Dashboard sidebar */}
          <div className="dashboard-sidebar bg-block">
            <div className="profile-top text-center mb-4 px-3">
              <div className="profile-image mb-3">
                <img
                  className="rounded-circle blur-up lazyload"
                  data-src="assets/images/users/user-img3.jpg"
                  src="assets/images/users/user-img3.jpg"
                  alt="user"
                  width={130}
                />
              </div>
              <div className="profile-detail">
                <h3 className="mb-1">Jecno Janesen</h3>
                <p className="text-muted">info@example.com</p>
              </div>
            </div>
            <div className="dashboard-tab">
              <ul
                className="nav nav-tabs flex-lg-column border-bottom-0"
                id="top-tab"
                role="tablist"
              >
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#info"
                    className="nav-link active"
                  >
                    Account Info
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#address"
                    className="nav-link"
                  >
                    Address Book
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#orders"
                    className="nav-link"
                  >
                    My Orders
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#orderstracking"
                    className="nav-link"
                  >
                    Orders tracking
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#wishlist"
                    className="nav-link"
                  >
                    My Wishlist
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#payment"
                    className="nav-link"
                  >
                    Saved Cards
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    className="nav-link"
                  >
                    Profile
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#"
                    data-bs-toggle="tab"
                    data-bs-target="#security"
                    className="nav-link"
                  >
                    Settings
                  </a>{" "}
                </li>
                <li className="nav-item">
                  <a href="login.html" className="nav-link">
                    Log Out
                  </a>{" "}
                </li>
              </ul>
            </div>
          </div>
          {/* End Dashboard sidebar */}
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-9">
          <div
            className="dashboard-content tab-content h-100"
            id="top-tabContent"
          >
            {/* Account Info */}
            <div className="tab-pane fade h-100 show active" id="info">
              <div className="account-info h-100">
                <div className="welcome-msg mb-4">
                  <h2>
                    Hello, <span className="text-primary">Jecno Janesen</span>
                  </h2>
                  <p>
                    From your My Account Dashboard you have the ability to view a
                    snapshot of your recent account activity and update your
                    account information. Select a link below to view or edit
                    information.
                  </p>
                </div>
                <div className="row g-3 row-cols-lg-3 row-cols-md-3 row-cols-sm-3 row-cols-1 mb-4">
                  <div className="counter-box">
                    <div className="bg-block d-flex-center flex-nowrap">
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/icons/sale.png"
                        src="assets/images/icons/sale.png"
                        alt="icon"
                        width={64}
                        height={64}
                      />
                      <div className="content">
                        <h3 className="fs-5 mb-1 text-primary">238</h3>
                        <p>Total Order</p>
                      </div>
                    </div>
                  </div>
                  <div className="counter-box">
                    <div className="bg-block d-flex-center flex-nowrap">
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/icons/homework.png"
                        src="assets/images/icons/homework.png"
                        alt="icon"
                        width={64}
                        height={64}
                      />
                      <div className="content">
                        <h3 className="fs-5 mb-1 text-primary">124</h3>
                        <p>Pending Orders</p>
                      </div>
                    </div>
                  </div>
                  <div className="counter-box">
                    <div className="bg-block d-flex-center flex-nowrap">
                      <img
                        className="blur-up lazyload"
                        data-src="assets/images/icons/order.png"
                        src="assets/images/icons/order.png"
                        alt="icon"
                        width={64}
                        height={64}
                      />
                      <div className="content">
                        <h3 className="fs-5 mb-1 text-primary">102</h3>
                        <p>Awaiting Payments</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account-box">
                  <h3 className="mb-3">Account Information</h3>
                  <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                    <div className="box-info mb-4">
                      <div className="box-title d-flex-center">
                        <h4>Contact Information</h4>{" "}
                        <a href="#" className="btn-link ms-auto">
                          Edit
                        </a>
                      </div>
                      <div className="box-content mt-3">
                        <h5>Hema Jecno</h5>
                        <p className="mb-2">info@example.com</p>
                        <p>
                          <a href="#" className="btn-link">
                            Change Password
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="box-info mb-4">
                      <div className="box-title d-flex-center">
                        <h4>Newsletters</h4>{" "}
                        <a href="#" className="btn-link ms-auto">
                          Edit
                        </a>
                      </div>
                      <div className="box-content mt-3">
                        <p>You are currently not subscribed to any newsletter.</p>
                      </div>
                    </div>
                  </div>
                  <div className="box-info mb-4">
                    <div className="box-title d-flex-center">
                      <h4>Address Book</h4>{" "}
                      <a href="#" className="btn-link ms-auto">
                        Edit
                      </a>
                    </div>
                    <div className="row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                      <div className="box-content mt-3">
                        <h5>Default Billing Address</h5>
                        <address className="mb-2">
                          123, The Company Name Inc, <br />
                          Street Road City name, <br />
                          State name and Zip code.
                        </address>
                        <p>
                          <a href="#" className="btn-link">
                            Edit Address
                          </a>
                        </p>
                      </div>
                      <div className="box-content mt-3">
                        <h5>Default Shipping Address</h5>
                        <address className="mb-2">
                          You have not set a default shipping address.
                        </address>
                        <p>
                          <a href="#" className="btn-link">
                            Edit Address
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Account Info */}
            {/* Address Book */}
            <div className="tab-pane fade h-100" id="address">
              <div className="address-card mt-0 h-100">
                <div className="top-sec d-flex-justify-center justify-content-between mb-4">
                  <h2 className="mb-0">Address Book</h2>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addNewModal"
                  >
                    <i className="icon anm anm-plus-r me-1" /> Add New
                  </button>
                  {/* New Address Modal */}
                  <div
                    className="modal fade"
                    id="addNewModal"
                    tabIndex={-1}
                    aria-labelledby="addNewModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h2 className="modal-title" id="addNewModalLabel">
                            Address details
                          </h2>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form
                            className="add-address-from"
                            method="post"
                            action="#"
                          >
                            <div className="form-row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                              <div className="form-group">
                                <label htmlFor="new-name" className="d-none">
                                  Name
                                </label>
                                <input
                                  name="name"
                                  placeholder="Name"
                                  defaultValue=""
                                  id="new-name"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="new-type" className="d-none">
                                  Address type <span className="required">*</span>
                                </label>
                                <select name="new_type_id" id="new-type">
                                  <option value="">Select Address type</option>
                                  <option value="home">Home</option>
                                  <option value="office">Office</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="new-company" className="d-none">
                                  Company
                                </label>
                                <input
                                  name="company"
                                  placeholder="Company"
                                  defaultValue=""
                                  id="new-company"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="new-apartment" className="d-none">
                                  Apartment <span className="required">*</span>
                                </label>
                                <input
                                  name="apartment"
                                  placeholder="Apartment"
                                  defaultValue=""
                                  id="new-apartment"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="new-street-address"
                                  className="d-none"
                                >
                                  Street Address{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  name="street_address"
                                  placeholder="Street Address"
                                  defaultValue=""
                                  id="new-street-address"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="new-city" className="d-none">
                                  City <span className="required">*</span>
                                </label>
                                <input
                                  name="city"
                                  placeholder="City"
                                  defaultValue=""
                                  id="new-city"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="new-postcode" className="d-none">
                                  Post Code <span className="required">*</span>
                                </label>
                                <input
                                  name="postcode"
                                  placeholder="Post Code"
                                  defaultValue=""
                                  id="new-postcode"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="new-telephone" className="d-none">
                                  Telephone <span className="required">*</span>
                                </label>
                                <input
                                  name="telephone"
                                  placeholder="Telephone"
                                  defaultValue=""
                                  id="new-telephone"
                                  type="tel"
                                />
                              </div>
                              <div className="form-group mb-md-0">
                                <label htmlFor="new-zone" className="d-none">
                                  Region / State{" "}
                                  <span className="required">*</span>
                                </label>
                                <select name="new_zone_id" id="new-zone">
                                  <option value="">Select Region / State</option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                </select>
                              </div>
                              <div className="form-group mb-0">
                                <label htmlFor="new-country" className="d-none">
                                  Country <span className="required">*</span>
                                </label>
                                <select name="new_country_id" id="new-country">
                                  <option value="">Select Country</option>
                                  <option value="AI" label="Anguilla">
                                    Anguilla
                                  </option>
                                  <option value="AG" label="Antigua and Barbuda">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="AR" label="Argentina">
                                    Argentina
                                  </option>
                                  <option value="AW" label="Aruba">
                                    Aruba
                                  </option>
                                  <option value="BS" label="Bahamas">
                                    Bahamas
                                  </option>
                                  <option value="BB" label="Barbados">
                                    Barbados
                                  </option>
                                  <option value="BZ" label="Belize">
                                    Belize
                                  </option>
                                  <option value="BM" label="Bermuda">
                                    Bermuda
                                  </option>
                                  <option value="BO" label="Bolivia">
                                    Bolivia
                                  </option>
                                  <option value="BR" label="Brazil">
                                    Brazil
                                  </option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer justify-content-center">
                          <button type="submit" className="btn btn-primary m-0">
                            <span>Add Address</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End New Address Modal */}
                </div>
                <div className="address-book-section">
                  <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                    <div className="address-select-box active">
                      <div className="address-box bg-block">
                        <div className="top d-flex-justify-center justify-content-between mb-3">
                          <h5 className="m-0">Hema Jecno</h5>
                          <span className="product-labels start-auto end-0">
                            <span className="lbl pr-label1">Home</span>
                          </span>
                        </div>
                        <div className="middle">
                          <div className="address mb-2 text-muted">
                            <address className="m-0">
                              123, The Company Name Inc, <br />
                              Street Road City name, <br />
                              State name and Zip code.
                            </address>
                          </div>
                          <div className="number">
                            <p>
                              Mobile:{" "}
                              <a href="tel:401234567890">(+40) 123 456 7890</a>
                            </p>
                          </div>
                        </div>
                        <div className="bottom d-flex-justify-center justify-content-between">
                          <button
                            type="button"
                            className="bottom-btn btn btn-gray btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#addEditModal"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="bottom-btn btn btn-gray btn-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="address-select-box">
                      <div className="address-box bg-block">
                        <div className="top d-flex-justify-center justify-content-between mb-3">
                          <h5 className="m-0">Hema Jecno</h5>
                          <span className="product-labels start-auto end-0">
                            <span className="lbl pr-label4">Office</span>
                          </span>
                        </div>
                        <div className="middle">
                          <div className="address mb-2 text-muted">
                            <address className="m-0">
                              123, The Company Name Inc, <br />
                              Street Road City name, <br />
                              State name and Zip code.
                            </address>
                          </div>
                          <div className="number">
                            <p>
                              Mobile:{" "}
                              <a href="tel:401234567890">(+40) 123 456 7890</a>
                            </p>
                          </div>
                        </div>
                        <div className="bottom d-flex-justify-center justify-content-between">
                          <button
                            type="button"
                            className="bottom-btn btn btn-gray btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#addEditModal"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="bottom-btn btn btn-gray btn-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Edit Address Modal */}
                  <div
                    className="modal fade"
                    id="addEditModal"
                    tabIndex={-1}
                    aria-labelledby="addEditModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h2 className="modal-title" id="addEditModalLabel">
                            Edit Address details
                          </h2>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form
                            className="edit-address-from"
                            method="post"
                            action="#"
                          >
                            <div className="form-row row-cols-lg-2 row-cols-md-2 row-cols-sm-1 row-cols-1">
                              <div className="form-group">
                                <label htmlFor="edit-name" className="d-none">
                                  Name
                                </label>
                                <input
                                  name="name"
                                  placeholder="Name"
                                  defaultValue=""
                                  id="edit-name"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="edit-type" className="d-none">
                                  Address type <span className="required">*</span>
                                </label>
                                <select name="edit_type_id" id="edit-type">
                                  <option value="">Select Address type</option>
                                  <option value="home">Home</option>
                                  <option value="office">Office</option>
                                </select>
                              </div>
                              <div className="form-group">
                                <label htmlFor="edit-company" className="d-none">
                                  Company
                                </label>
                                <input
                                  name="company"
                                  placeholder="Company"
                                  defaultValue=""
                                  id="edit-company"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="edit-apartment"
                                  className="d-none"
                                >
                                  Apartment <span className="required">*</span>
                                </label>
                                <input
                                  name="apartment"
                                  placeholder="Apartment"
                                  defaultValue=""
                                  id="edit-apartment"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="edit-street-address"
                                  className="d-none"
                                >
                                  Street Address{" "}
                                  <span className="required">*</span>
                                </label>
                                <input
                                  name="street_address"
                                  placeholder="Street Address"
                                  defaultValue=""
                                  id="edit-street-address"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="edit-city" className="d-none">
                                  City <span className="required">*</span>
                                </label>
                                <input
                                  name="city"
                                  placeholder="City"
                                  defaultValue=""
                                  id="edit-city"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label htmlFor="edit-postcode" className="d-none">
                                  Post Code <span className="required">*</span>
                                </label>
                                <input
                                  name="postcode"
                                  placeholder="Post Code"
                                  defaultValue=""
                                  id="edit-postcode"
                                  type="text"
                                />
                              </div>
                              <div className="form-group">
                                <label
                                  htmlFor="edit-telephone"
                                  className="d-none"
                                >
                                  Telephone <span className="required">*</span>
                                </label>
                                <input
                                  name="telephone"
                                  placeholder="Telephone"
                                  defaultValue=""
                                  id="edit-telephone"
                                  type="tel"
                                />
                              </div>
                              <div className="form-group mb-md-0">
                                <label htmlFor="edit-zone" className="d-none">
                                  Region / State{" "}
                                  <span className="required">*</span>
                                </label>
                                <select name="edit_zone_id" id="edit-zone">
                                  <option value="">Select Region / State</option>
                                  <option value="AL">Alabama</option>
                                  <option value="AK">Alaska</option>
                                  <option value="AZ">Arizona</option>
                                  <option value="AR">Arkansas</option>
                                  <option value="CA">California</option>
                                  <option value="CO">Colorado</option>
                                  <option value="CT">Connecticut</option>
                                  <option value="DE">Delaware</option>
                                </select>
                              </div>
                              <div className="form-group mb-0">
                                <label htmlFor="edit-country" className="d-none">
                                  Country <span className="required">*</span>
                                </label>
                                <select name="edit_country_id" id="edit-country">
                                  <option value="">Select Country</option>
                                  <option value="AI" label="Anguilla">
                                    Anguilla
                                  </option>
                                  <option value="AG" label="Antigua and Barbuda">
                                    Antigua and Barbuda
                                  </option>
                                  <option value="AR" label="Argentina">
                                    Argentina
                                  </option>
                                  <option value="AW" label="Aruba">
                                    Aruba
                                  </option>
                                  <option value="BS" label="Bahamas">
                                    Bahamas
                                  </option>
                                  <option value="BB" label="Barbados">
                                    Barbados
                                  </option>
                                  <option value="BZ" label="Belize">
                                    Belize
                                  </option>
                                  <option value="BM" label="Bermuda">
                                    Bermuda
                                  </option>
                                  <option value="BO" label="Bolivia">
                                    Bolivia
                                  </option>
                                  <option value="BR" label="Brazil">
                                    Brazil
                                  </option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer justify-content-center">
                          <button type="submit" className="btn btn-primary m-0">
                            <span>Save Address</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Edit Address Modal */}
                </div>
              </div>
            </div>
            {/* End Address Book */}
            {/* My Orders */}
            <div className="tab-pane fade h-100" id="orders">
              <div className="orders-card mt-0 h-100">
                <div className="top-sec d-flex-justify-center justify-content-between mb-4">
                  <h2 className="mb-0">My Orders</h2>
                </div>
                <div className="table-bottom-brd table-responsive">
                  <table className="table align-middle text-center order-table">
                    <thead>
                      <tr className="table-head text-nowrap">
                        <th scope="col">image</th>
                        <th scope="col">Order Id</th>
                        <th scope="col">Product Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">Status</th>
                        <th scope="col">View</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="blur-up lazyload"
                            data-src="assets/images/products/product1-120x170.jpg"
                            src="assets/images/products/product1-120x170.jpg"
                            width={50}
                            alt="product"
                            title="product"
                          />
                        </td>
                        <td>
                          <span className="id">#12301</span>
                        </td>
                        <td>
                          <span className="name">Oxford Cuban Shirt</span>
                        </td>
                        <td>
                          <span className="price fw-500">$99.00</span>
                        </td>
                        <td>
                          <span className="badge rounded-pill bg-success custom-badge">
                            Shipped
                          </span>
                        </td>
                        <td>
                          <a href="product-layout1.html" className="view">
                            <i className="icon anm anm-eye btn-link fs-6" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="blur-up lazyload"
                            data-src="assets/images/products/product2-120x170.jpg"
                            src="assets/images/products/product2-120x170.jpg"
                            width={50}
                            alt="product"
                            title="product"
                          />
                        </td>
                        <td>
                          <span className="id">#12302</span>
                        </td>
                        <td>
                          <span className="name">Cuff Beanie Cap</span>
                        </td>
                        <td>
                          <span className="price fw-500">$128.00</span>
                        </td>
                        <td>
                          <span className="badge rounded-pill bg-danger custom-badge">
                            Pending
                          </span>
                        </td>
                        <td>
                          <a href="product-layout2.html" className="view">
                            <i className="icon anm anm-eye btn-link fs-6" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="blur-up lazyload"
                            data-src="assets/images/products/product3-120x170.jpg"
                            src="assets/images/products/product3-120x170.jpg"
                            width={50}
                            alt="product"
                            title="product"
                          />
                        </td>
                        <td>
                          <span className="id">#12303</span>
                        </td>
                        <td>
                          <span className="name">Flannel Collar Shirt</span>
                        </td>
                        <td>
                          <span className="price fw-500">$114.00</span>
                        </td>
                        <td>
                          <span className="badge rounded-pill bg-dark custom-badge">
                            Processing
                          </span>
                        </td>
                        <td>
                          <a href="product-layout3.html" className="view">
                            <i className="icon anm anm-eye btn-link fs-6" />
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="blur-up lazyload"
                            data-src="assets/images/products/product4-120x170.jpg"
                            src="assets/images/products/product4-120x170.jpg"
                            width={50}
                            alt="product"
                            title="product"
                          />
                        </td>
                        <td>
                          <span className="id">#12304</span>
                        </td>
                        <td>
                          <span className="name">Cotton Hooded Hoodie</span>
                        </td>
                        <td>
                          <span className="price fw-500">$198.00</span>
                        </td>
                        <td>
                          <span className="badge rounded-pill bg-secondary custom-badge">
                            Canceled
                          </span>
                        </td>
                        <td>
                          <a href="product-layout4.html" className="view">
                            <i className="icon anm anm-eye btn-link fs-6" />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End My Orders */}
            {/* Orders tracking */}
            <div className="tab-pane fade h-100" id="orderstracking">
              <div className="orders-card mt-0 h-100">
                <div className="top-sec d-flex-justify-center justify-content-between mb-4">
                  <h2 className="mb-0">Orders tracking</h2>
                </div>
                <form className="orderstracking-from" method="post" action="#">
                  <p className="mb-3">
                    To track your order please enter your OrderID in the box below
                    and press "Track" button. This was given to you on your
                    receipt and in the confirmation email you should have
                    received.
                  </p>
                  <div className="row align-items-center">
                    <div className="form-group col-md-5 col-lg-5">
                      <label htmlFor="orderId" className="d-none">
                        Order ID <span className="required-f">*</span>
                      </label>
                      <input
                        name="orderId"
                        placeholder="Order ID"
                        defaultValue=""
                        id="orderId"
                        type="text"
                        required=""
                      />
                    </div>
                    <div className="form-group col-md-5 col-lg-5">
                      <label htmlFor="billingEmail" className="d-none">
                        Billing email <span className="required-f">*</span>
                      </label>
                      <input
                        name="billingEmail"
                        placeholder="Billing email"
                        defaultValue=""
                        id="billingEmail"
                        type="text"
                        required=""
                      />
                    </div>
                    <div className="form-group col-md-2 col-lg-2">
                      <button type="submit" className="btn rounded w-100">
                        <span>Track</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="row mt-2">
                  <div className="col-sm-12">
                    <h3>Status for order no: 000123</h3>
                    {/* Status Order */}
                    <div className="row mt-3">
                      <div className="col-lg-2 col-md-3 col-sm-4">
                        <div className="product-img mb-3 mb-sm-0">
                          <img
                            className="rounded-0 blur-up lazyload"
                            data-src="assets/images/products/orders-tracking-product.jpg"
                            src="assets/images/products/orders-tracking-product.jpg"
                            alt="product"
                            title=""
                            width={545}
                            height={700}
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-9 col-sm-8">
                        <div className="tracking-detail d-flex-center">
                          <ul>
                            <li>
                              <div className="left">
                                <span>Order name</span>
                              </div>
                              <div className="right">
                                <span>Cuff Beanie Cap</span>
                              </div>
                            </li>
                            <li>
                              <div className="left">
                                <span>customer number</span>
                              </div>
                              <div className="right">
                                <span>000123</span>
                              </div>
                            </li>
                            <li>
                              <div className="left">
                                <span>order date</span>
                              </div>
                              <div className="right">
                                <span>14 Nov 2021</span>
                              </div>
                            </li>
                            <li>
                              <div className="left">
                                <span>Ship Date</span>
                              </div>
                              <div className="right">
                                <span>16 Nov 2021</span>
                              </div>
                            </li>
                            <li>
                              <div className="left">
                                <span>shipping address</span>
                              </div>
                              <div className="right">
                                <span>
                                  55 Gallaxy Enque, 2568 steet, 23568 NY
                                </span>
                              </div>
                            </li>
                            <li>
                              <div className="left">
                                <span>Carrier</span>
                              </div>
                              <div className="right">
                                <span>Ipsum</span>
                              </div>
                            </li>
                            <li>
                              <div className="left">
                                <span>carrier tracking number</span>
                              </div>
                              <div className="right">
                                <span>000123</span>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-12 col-sm-12 mt-4 mt-lg-0">
                        <div className="tracking-map map-section ratio ratio-16x9 h-100">
                          <iframe
                            src="https://www.google.com/maps/embed?pb="
                            allowFullScreen=""
                            height={650}
                          />
                        </div>
                      </div>
                    </div>
                    {/* End Status Order */}
                    {/* Tracking Steps */}
                    <div className="tracking-steps nav mt-5 mb-4 clearfix">
                      <div className="step done">
                        <span>order placed</span>
                      </div>
                      <div className="step done">
                        <span>preparing to ship</span>
                      </div>
                      <div className="step current">
                        <span>shipped</span>
                      </div>
                      <div className="step">
                        <span>delivered</span>
                      </div>
                    </div>
                    {/* End Tracking Steps */}
                    {/* Order Table */}
                    <div className="table-bottom-brd table-responsive">
                      <table className="table align-middle text-center order-table">
                        <thead>
                          <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Description</th>
                            <th scope="col">Location</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>14 May 2023</td>
                            <td>08.00 AM</td>
                            <td>
                              <span className="badge rounded-pill bg-success custom-badge">
                                Shipped
                              </span>
                            </td>
                            <td>Canada</td>
                          </tr>
                          <tr>
                            <td>15 May 2023</td>
                            <td>12.00 AM</td>
                            <td>
                              <span className="badge rounded-pill bg-dark custom-badge">
                                Shipping info received
                              </span>
                            </td>
                            <td>California</td>
                          </tr>
                          <tr>
                            <td>16 May 2023</td>
                            <td>10.00 AM</td>
                            <td>
                              <span className="badge rounded-pill bg-secondary custom-badge">
                                Origin scan
                              </span>
                            </td>
                            <td>Landon</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* End Order Table */}
                  </div>
                </div>
              </div>
            </div>
            {/* End Orders tracking */}
            {/* My Wishlist */}
            <div className="tab-pane fade h-100" id="wishlist">
              <div className="orders-card mt-0 h-100">
                <div className="top-sec d-flex-justify-center justify-content-between mb-4">
                  <h2 className="mb-0">My Wishlist</h2>
                </div>
                <div className="table-bottom-brd table-responsive">
                  <table className="table align-middle text-center order-table">
                    <thead>
                      <tr className="table-head text-nowrap">
                        <th scope="col">Image</th>
                        <th scope="col">Order Id</th>
                        <th scope="col">Product Details</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <img
                            className="blur-up lazyload"
                            data-src="assets/images/products/product1-120x170.jpg"
                            src="assets/images/products/product1-120x170.jpg"
                            width={50}
                            alt="product"
                            title="product"
                          />
                        </td>
                        <td>
                          <span className="id">#12301</span>
                        </td>
                        <td>
                          <span className="name">Oxford Cuban Shirt</span>
                        </td>
                        <td>
                          <span className="price fw-500">$99.00</span>
                        </td>
                        <td>
                          <a
                            href="cart-style1.html"
                            className="btn btn-md text-nowrap"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="blur-up lazyload"
                            data-src="assets/images/products/product2-120x170.jpg"
                            src="assets/images/products/product2-120x170.jpg"
                            width={50}
                            alt="product"
                            title="product"
                          />
                        </td>
                        <td>
                          <span className="id">#12302</span>
                        </td>
                        <td>
                          <span className="name">Cuff Beanie Cap</span>
                        </td>
                        <td>
                          <span className="price fw-500">$128.00</span>
                        </td>
                        <td>
                          <a
                            href="cart-style1.html"
                            className="btn btn-md text-nowrap"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="blur-up lazyload"
                            data-src="assets/images/products/product3-120x170.jpg"
                            src="assets/images/products/product3-120x170.jpg"
                            width={50}
                            alt="product"
                            title="product"
                          />
                        </td>
                        <td>
                          <span className="id">#12303</span>
                        </td>
                        <td>
                          <span className="name">Flannel Collar Shirt</span>
                        </td>
                        <td>
                          <span className="price fw-500">$114.00</span>
                        </td>
                        <td>
                          <a
                            href="cart-style1.html"
                            className="btn btn-md text-nowrap"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <img
                            className="blur-up lazyload"
                            data-src="assets/images/products/product4-120x170.jpg"
                            src="assets/images/products/product4-120x170.jpg"
                            width={50}
                            alt="product"
                            title="product"
                          />
                        </td>
                        <td>
                          <span className="id">#12304</span>
                        </td>
                        <td>
                          <span className="name">Cotton Hooded Hoodie</span>
                        </td>
                        <td>
                          <span className="price fw-500">$198.00</span>
                        </td>
                        <td>
                          <a
                            href="cart-style1.html"
                            className="btn btn-md text-nowrap"
                          >
                            Add to Cart
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* End My Wishlist */}
            {/* Saved Cards */}
            <div className="tab-pane fade h-100" id="payment">
              <div className="banks-card mt-0 h-100">
                <div className="top-sec d-flex-justify-center justify-content-between mb-4">
                  <h2 className="mb-0">Saved Cards</h2>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#addCardModal"
                  >
                    <i className="icon anm anm-plus-r me-1" /> Add New
                  </button>
                  {/* New Card Modal */}
                  <div
                    className="modal fade"
                    id="addCardModal"
                    tabIndex={-1}
                    aria-labelledby="addCardModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h2 className="modal-title" id="addCardModalLabel">
                            Cards details
                          </h2>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form
                            className="add-card-from"
                            method="post"
                            action="#"
                          >
                            <div className="form-row">
                              <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
                                <label htmlFor="card-number" className="d-none">
                                  Card Number
                                </label>
                                <input
                                  name="card-number"
                                  placeholder="Card Number"
                                  defaultValue=""
                                  id="card-number"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                                <label htmlFor="bank-card" className="d-none">
                                  Card <span className="required">*</span>
                                </label>
                                <select id="bank-card" className="form-control">
                                  <option
                                    value={0}
                                    label="Select a card"
                                    selected="selected"
                                  >
                                    Select a card
                                  </option>
                                  <option value="visa">Visa</option>
                                  <option value="mastercard">Mastercard</option>
                                  <option value="american_Express">
                                    American Express
                                  </option>
                                  <option value="discover">Discover</option>
                                </select>
                              </div>
                              <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                                <label htmlFor="cvv-code" className="d-none">
                                  CVV Code <span className="required">*</span>
                                </label>
                                <input
                                  name="cvv-code"
                                  placeholder="CVV Code"
                                  defaultValue=""
                                  id="cvv-code"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 mb-md-0">
                                <label htmlFor="card-month" className="d-none">
                                  Month <span className="required">*</span>
                                </label>
                                <select id="card-month" className="form-control">
                                  <option
                                    value={0}
                                    label="Select a month"
                                    selected="selected"
                                  >
                                    Select a month
                                  </option>
                                  <option value={1}>January</option>
                                  <option value={2}>February</option>
                                  <option value={3}>March</option>
                                  <option value={4}>April</option>
                                  <option value={5}>May</option>
                                  <option value={6}>June</option>
                                  <option value={7}>July</option>
                                  <option value={8}>August</option>
                                  <option value={9}>September</option>
                                  <option value={10}>October</option>
                                  <option value={11}>November</option>
                                  <option value={12}>December</option>
                                </select>
                              </div>
                              <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 mb-0">
                                <label htmlFor="card-year" className="d-none">
                                  Year <span className="required">*</span>
                                </label>
                                <select id="card-year" className="form-control">
                                  <option
                                    value={0}
                                    label="Select a year"
                                    selected="selected"
                                  >
                                    Select a year
                                  </option>
                                  <option value={2019}>2019</option>
                                  <option value={2020}>2020</option>
                                  <option value={2021}>2021</option>
                                  <option value={2023}>2023</option>
                                  <option value={2023}>2023</option>
                                  <option value={2024}>2024</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer justify-content-center">
                          <button type="submit" className="btn btn-primary m-0">
                            <span>Add Card</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End New Card Modal */}
                </div>
                <div className="bank-book-section">
                  <div className="row g-4 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1">
                    <div className="address-select-box active">
                      <div className="address-box bg-block">
                        <div className="top bank-logo d-flex-justify-center justify-content-between mb-3">
                          <img
                            src="assets/images/icons/bank-logo1.png"
                            className="bank-logo"
                            width={40}
                            alt=""
                          />
                          <img
                            src="assets/images/icons/visa-logo.png"
                            className="network-logo"
                            width={50}
                            alt=""
                          />
                        </div>
                        <div className="middle">
                          <div className="card-number mb-3">
                            <h6>Card Number</h6>
                            <p className="text-muted">3742 4545 5400 126</p>
                          </div>
                          <div className="name-validity d-flex-justify-center justify-content-between">
                            <div className="left">
                              <h6>Name on card</h6>
                              <p className="text-muted">Hema Jecno</p>
                            </div>
                            <div className="right">
                              <h6>Validity</h6>
                              <p className="text-muted">XX/XX</p>
                            </div>
                          </div>
                        </div>
                        <div className="bottom d-flex-justify-center justify-content-between">
                          <button
                            type="button"
                            className="bottom-btn btn btn-gray btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#editCardModal"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="bottom-btn btn btn-gray btn-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="address-select-box">
                      <div className="address-box bg-block">
                        <div className="top bank-logo d-flex-justify-center justify-content-between mb-3">
                          <img
                            src="assets/images/icons/bank-logo2.png"
                            className="bank-logo"
                            width={100}
                            alt=""
                          />
                          <img
                            src="assets/images/icons/visa-logo.png"
                            className="network-logo"
                            width={50}
                            alt=""
                          />
                        </div>
                        <div className="middle">
                          <div className="card-number mb-3">
                            <h6>Card Number</h6>
                            <p className="text-muted">3742 4545 5400 126</p>
                          </div>
                          <div className="name-validity d-flex-justify-center justify-content-between">
                            <div className="left">
                              <h6>Name on card</h6>
                              <p className="text-muted">Hema Jecno</p>
                            </div>
                            <div className="right">
                              <h6>Validity</h6>
                              <p className="text-muted">XX/XX</p>
                            </div>
                          </div>
                        </div>
                        <div className="bottom d-flex-justify-center justify-content-between">
                          <button
                            type="button"
                            className="bottom-btn btn btn-gray btn-sm"
                            data-bs-toggle="modal"
                            data-bs-target="#editCardModal"
                          >
                            Edit
                          </button>
                          <button
                            type="button"
                            className="bottom-btn btn btn-gray btn-sm"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Edit Bank card Modal */}
                  <div
                    className="modal fade"
                    id="editCardModal"
                    tabIndex={-1}
                    aria-labelledby="editCardModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog modal-dialog-centered">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h2 className="modal-title" id="editCardModalLabel">
                            Edit Card details
                          </h2>
                          <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          />
                        </div>
                        <div className="modal-body">
                          <form
                            className="add-card-from"
                            method="post"
                            action="#"
                          >
                            <div className="form-row">
                              <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12">
                                <label
                                  htmlFor="editCard-number"
                                  className="d-none"
                                >
                                  Card Number
                                </label>
                                <input
                                  name="editCard-number"
                                  placeholder="Card Number"
                                  defaultValue=""
                                  id="editCard-number"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                                <label htmlFor="editBank-card" className="d-none">
                                  Card <span className="required">*</span>
                                </label>
                                <select
                                  id="editBank-card"
                                  className="form-control"
                                >
                                  <option
                                    value={0}
                                    label="Select a card"
                                    selected="selected"
                                  >
                                    Select a card
                                  </option>
                                  <option value="visa">Visa</option>
                                  <option value="mastercard">Mastercard</option>
                                  <option value="american_Express">
                                    American Express
                                  </option>
                                  <option value="discover">Discover</option>
                                </select>
                              </div>
                              <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                                <label htmlFor="editCvv-code" className="d-none">
                                  CVV Code <span className="required">*</span>
                                </label>
                                <input
                                  name="editCvv-code"
                                  placeholder="CVV Code"
                                  defaultValue=""
                                  id="editCvv-code"
                                  type="text"
                                />
                              </div>
                              <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 mb-md-0">
                                <label
                                  htmlFor="editCard-month"
                                  className="d-none"
                                >
                                  Month <span className="required">*</span>
                                </label>
                                <select
                                  id="editCard-month"
                                  className="form-control"
                                >
                                  <option
                                    value={0}
                                    label="Select a month"
                                    selected="selected"
                                  >
                                    Select a month
                                  </option>
                                  <option value={1}>January</option>
                                  <option value={2}>February</option>
                                  <option value={3}>March</option>
                                  <option value={4}>April</option>
                                  <option value={5}>May</option>
                                  <option value={6}>June</option>
                                  <option value={7}>July</option>
                                  <option value={8}>August</option>
                                  <option value={9}>September</option>
                                  <option value={10}>October</option>
                                  <option value={11}>November</option>
                                  <option value={12}>December</option>
                                </select>
                              </div>
                              <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 mb-0">
                                <label htmlFor="editCard-year" className="d-none">
                                  Year <span className="required">*</span>
                                </label>
                                <select
                                  id="editCard-year"
                                  className="form-control"
                                >
                                  <option
                                    value={0}
                                    label="Select a year"
                                    selected="selected"
                                  >
                                    Select a year
                                  </option>
                                  <option value={2019}>2019</option>
                                  <option value={2020}>2020</option>
                                  <option value={2021}>2021</option>
                                  <option value={2023}>2023</option>
                                  <option value={2023}>2023</option>
                                  <option value={2024}>2024</option>
                                </select>
                              </div>
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer justify-content-center">
                          <button type="submit" className="btn btn-primary m-0">
                            <span>Save Card</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Edit Bank card Modal */}
                </div>
              </div>
            </div>
            {/* End Saved Cards */}
            {/* Profile */}
            <div className="tab-pane fade h-100" id="profile">
              <div className="profile-card mt-0 h-100">
                <div className="top-sec d-flex-justify-center justify-content-between mb-4">
                  <h2 className="mb-0">Profile</h2>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#editProfileModal"
                  >
                    <i className="icon anm anm-plus-r me-1" /> Edit
                  </button>
                </div>
                <div className="profile-book-section mb-4">
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Company name</h6>
                    </div>
                    <div className="right">
                      <p>Fashion Store</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Email address</h6>
                    </div>
                    <div className="right">
                      <p>info@example.com</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Phone number</h6>
                    </div>
                    <div className="right">
                      <p>(+40) 123 456 7890</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">City / State</h6>
                    </div>
                    <div className="right">
                      <p>California, Barbados</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Country / Region</h6>
                    </div>
                    <div className="right">
                      <p>United States Of America</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Street address</h6>
                    </div>
                    <div className="right">
                      <p>The Company Name Inc</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Zip code</h6>
                    </div>
                    <div className="right">
                      <p>2356830</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Category</h6>
                    </div>
                    <div className="right">
                      <p>Clothing</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Year established</h6>
                    </div>
                    <div className="right">
                      <p>2023</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Total employees</h6>
                    </div>
                    <div className="right">
                      <p>58 - 100 People</p>
                    </div>
                  </div>
                </div>
                {/* Edit Profile Modal */}
                <div
                  className="modal fade"
                  id="editProfileModal"
                  tabIndex={-1}
                  aria-labelledby="editProfileModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h2 className="modal-title" id="editProfileModalLabel">
                          Edit Profile details
                        </h2>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <form
                          className="edit-profile-from"
                          method="post"
                          action="#"
                        >
                          <div className="form-row">
                            <div className="form-group col-lg-12 col-md-12 col-sm-12 col-12 mb-4">
                              <div className="profileImg img-thumbnail shadow bg-white rounded-circle d-flex-justify-center position-relative mx-auto">
                                <img
                                  src="assets/images/users/user-img3.jpg"
                                  className="rounded-circle"
                                  alt="profile"
                                  width={200}
                                  height={200}
                                />
                                <div className="thumb-edit">
                                  <label
                                    htmlFor="profileUpload"
                                    className="d-flex-center justify-content-center position-absolute top-0 start-100 translate-middle p-2 rounded-circle shadow btn btn-secondary mt-3"
                                    data-bs-toggle="tooltip"
                                    data-bs-placement="top"
                                    title="Edit"
                                  >
                                    <i className="icon anm anm-pencil-ar an-1x" />
                                  </label>
                                  <input
                                    type="file"
                                    id="profileUpload"
                                    className="image-upload d-none"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="editProfile-Companyname"
                                className="d-none"
                              >
                                Company name
                              </label>
                              <input
                                name="editProfile-Companyname"
                                placeholder="Company name"
                                defaultValue=""
                                id="editProfile-Companyname"
                                type="text"
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="editProfile-Emailaddress"
                                className="d-none"
                              >
                                Email address
                              </label>
                              <input
                                name="editProfile-Emailaddress"
                                placeholder="Email address"
                                defaultValue=""
                                id="editProfile-Emailaddress"
                                type="email"
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="editProfile-Phonenumber"
                                className="d-none"
                              >
                                Phone number
                              </label>
                              <input
                                name="editProfile-Phonenumber"
                                placeholder="Phone number"
                                defaultValue=""
                                id="editProfile-Phonenumber"
                                type="text"
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="editProfile-zone"
                                className="d-none"
                              >
                                City / State <span className="required">*</span>
                              </label>
                              <select
                                name="editProfile_zone_id"
                                id="editProfile-zone"
                              >
                                <option value="">Select Region / State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                              </select>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="editProfile-country"
                                className="d-none"
                              >
                                Country / Region{" "}
                                <span className="required">*</span>
                              </label>
                              <select
                                name="editProfile_country_id"
                                id="editProfile-country"
                              >
                                <option value="">Select Country / Region</option>
                                <option value="AI" label="Anguilla">
                                  Anguilla
                                </option>
                                <option value="AG" label="Antigua and Barbuda">
                                  Antigua and Barbuda
                                </option>
                                <option value="AR" label="Argentina">
                                  Argentina
                                </option>
                                <option value="AW" label="Aruba">
                                  Aruba
                                </option>
                                <option value="BS" label="Bahamas">
                                  Bahamas
                                </option>
                                <option value="BB" label="Barbados">
                                  Barbados
                                </option>
                                <option value="BZ" label="Belize">
                                  Belize
                                </option>
                                <option value="BM" label="Bermuda">
                                  Bermuda
                                </option>
                                <option value="BO" label="Bolivia">
                                  Bolivia
                                </option>
                                <option value="BR" label="Brazil">
                                  Brazil
                                </option>
                              </select>
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="editProfile-Streetaddress"
                                className="d-none"
                              >
                                Street address
                              </label>
                              <input
                                name="editProfile-Streetaddress"
                                placeholder="Street address"
                                defaultValue=""
                                id="editProfile-Streetaddress"
                                type="text"
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="editProfile-Zipcode"
                                className="d-none"
                              >
                                Zip code
                              </label>
                              <input
                                name="editProfile-Zipcode"
                                placeholder="Zip code"
                                defaultValue=""
                                id="editProfile-Zipcode"
                                type="text"
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12">
                              <label
                                htmlFor="editProfile-Category"
                                className="d-none"
                              >
                                Category
                              </label>
                              <input
                                name="editProfile-Category"
                                placeholder="Phone number"
                                defaultValue=""
                                id="editProfile-Category"
                                type="text"
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 mb-md-0">
                              <label
                                htmlFor="editProfile-YearEstablished"
                                className="d-none"
                              >
                                Year Established
                              </label>
                              <input
                                name="editProfile-YearEstablished"
                                placeholder="YearEstablished"
                                defaultValue=""
                                id="editProfile-YearEstablished"
                                type="text"
                              />
                            </div>
                            <div className="form-group col-lg-6 col-md-6 col-sm-12 col-12 mb-0">
                              <label
                                htmlFor="editProfile-TotalEmployees"
                                className="d-none"
                              >
                                Zip code
                              </label>
                              <input
                                name="editProfile-TotalEmployees"
                                placeholder="Zip code"
                                defaultValue=""
                                id="editProfile-TotalEmployees"
                                type="text"
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer justify-content-center">
                        <button type="submit" className="btn btn-primary m-0">
                          <span>Save Profile</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Edit Profile Modal */}
                <div className="top-sec d-flex-justify-center justify-content-between mb-4">
                  <h2 className="mb-0">Login details</h2>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#editLoginModal"
                  >
                    <i className="icon anm anm-plus-r me-1" /> Edit
                  </button>
                </div>
                <div className="profile-login-section">
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Email address</h6>
                    </div>
                    <div className="right">
                      <p>info@example.com</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Phone number</h6>
                    </div>
                    <div className="right">
                      <p>(+40) 123 456 7890</p>
                    </div>
                  </div>
                  <div className="details d-flex align-items-center mb-2">
                    <div className="left">
                      <h6 className="mb-0 body-font fw-500">Password</h6>
                    </div>
                    <div className="right">
                      <p>xxxxxxx</p>
                    </div>
                  </div>
                </div>
                {/* Edit Login details Modal */}
                <div
                  className="modal fade"
                  id="editLoginModal"
                  tabIndex={-1}
                  aria-labelledby="editLoginModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h2 className="modal-title" id="editLoginModalLabel">
                          Edit Login details
                        </h2>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body">
                        <form
                          className="edit-Loginprofile-from"
                          method="post"
                          action="#"
                        >
                          <div className="form-row row-cols-lg-1 row-cols-md-1 row-cols-sm-1 row-cols-1">
                            <div className="form-group">
                              <label
                                htmlFor="editLogin-Emailaddress"
                                className="d-none"
                              >
                                Email address <span className="required">*</span>
                              </label>
                              <input
                                name="editLogin-Emailaddress"
                                placeholder="Email address"
                                defaultValue=""
                                id="editLogin-Emailaddress"
                                type="email"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="editLogin-Phonenumber"
                                className="d-none"
                              >
                                Phone number <span className="required">*</span>
                              </label>
                              <input
                                name="editLogin-Phonenumber"
                                placeholder="Phone number"
                                defaultValue=""
                                id="editLogin-Phonenumber"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="editLogin-Password"
                                className="d-none"
                              >
                                Current Password{" "}
                                <span className="required">*</span>
                              </label>
                              <input
                                name="editLogin-Password"
                                placeholder="Current Password"
                                defaultValue=""
                                id="editLogin-Password"
                                type="password"
                              />
                            </div>
                            <div className="form-group">
                              <label
                                htmlFor="editLogin-NewPassword"
                                className="d-none"
                              >
                                New Password <span className="required">*</span>
                              </label>
                              <input
                                name="editLogin-NewPassword"
                                placeholder="New Password"
                                defaultValue=""
                                id="editLogin-NewPassword"
                                type="password"
                              />
                              <small className="form-text text-muted">
                                Your password must be 8-20 characters long,
                                contain letters and numbers, and must not contain
                                spaces, special characters.
                              </small>
                            </div>
                            <div className="form-group mb-0">
                              <label
                                htmlFor="editLogin-Verify"
                                className="d-none"
                              >
                                Verify <span className="required">*</span>
                              </label>
                              <input
                                name="editLogin-Verify"
                                placeholder="Verify"
                                defaultValue=""
                                id="editLogin-Verify"
                                type="text"
                              />
                              <small className="form-text text-muted">
                                To confirm, type the new password again.
                              </small>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div className="modal-footer justify-content-center">
                        <button type="submit" className="btn btn-primary m-0">
                          <span>Save changes</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Edit Login details Modal */}
              </div>
            </div>
            {/* End Profile */}
            {/* Security */}
            <div className="tab-pane fade h-100" id="security">
              <div className="settings-card mt-0 h-100">
                <div className="dashboard-title d-flex-justify-center justify-content-between mb-4">
                  <h2 className="mb-0">Settings</h2>
                </div>
                <div className="settings-book-section dashboard-detail">
                  <div className="row">
                    <div className="col-12 col-sm-12 col-md-6">
                      <div className="account-setting">
                        <h4 className="mb-3">Notifications</h4>
                        <div className="account-detail form-group">
                          <div className="customCheckbox clearfix mb-2">
                            <input
                              name="NotificationsAC"
                              id="n1"
                              defaultValue={1}
                              defaultChecked="checked"
                              type="checkbox"
                            />
                            <label htmlFor="n1" className="mb-0">
                              Allow Desktop Notifications
                            </label>
                          </div>
                          <div className="customCheckbox clearfix mb-2">
                            <input
                              name="NotificationsAC"
                              id="n2"
                              defaultValue={2}
                              type="checkbox"
                            />
                            <label htmlFor="n2" className="mb-0">
                              Enable Notifications
                            </label>
                          </div>
                          <div className="customCheckbox clearfix mb-2">
                            <input
                              name="NotificationsAC"
                              id="n3"
                              defaultValue={3}
                              type="checkbox"
                            />
                            <label htmlFor="n3" className="mb-0">
                              Get notification for my own activity
                            </label>
                          </div>
                          <div className="customCheckbox clearfix mb-2">
                            <input
                              name="NotificationsAC"
                              id="n4"
                              defaultValue={4}
                              type="checkbox"
                            />
                            <label htmlFor="n4" className="mb-0">
                              Receive offers from our partners
                            </label>
                          </div>
                          <div className="customCheckbox clearfix mb-2">
                            <input
                              name="NotificationsAC"
                              id="n5"
                              defaultValue={5}
                              type="checkbox"
                            />
                            <label htmlFor="n5" className="mb-0">
                              Sign up for our newsletter
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6">
                      <div className="account-setting">
                        <h4 className="mb-3">Deactivate account</h4>
                        <div className="account-detail form-group">
                          <div className="customRadio clearfix mb-2">
                            <input
                              name="DeactivateAC"
                              id="d1"
                              defaultValue={1}
                              defaultChecked="checked"
                              type="radio"
                            />
                            <label htmlFor="d1" className="mb-0">
                              I have a privacy concern
                            </label>
                          </div>
                          <div className="customRadio clearfix mb-2">
                            <input
                              name="DeactivateAC"
                              id="d2"
                              defaultValue={2}
                              type="radio"
                            />
                            <label htmlFor="d2" className="mb-0">
                              This is temporary
                            </label>
                          </div>
                          <div className="customRadio clearfix mb-2">
                            <input
                              name="DeactivateAC"
                              id="d3"
                              defaultValue={3}
                              type="radio"
                            />
                            <label htmlFor="d3" className="mb-0">
                              Other
                            </label>
                          </div>
                          <button type="button" className="btn btn-sm my-2">
                            Deactivate Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="account-setting">
                    <h4 className="mb-3">Delete account</h4>
                    <div className="account-detail form-group">
                      <div className="customRadio clearfix mb-2">
                        <input
                          name="DeleteAC"
                          id="da1"
                          defaultValue={1}
                          defaultChecked="checked"
                          type="radio"
                        />
                        <label htmlFor="da1" className="mb-0">
                          No longer usable
                        </label>
                      </div>
                      <div className="customRadio clearfix mb-2">
                        <input
                          name="DeleteAC"
                          id="da2"
                          defaultValue={2}
                          type="radio"
                        />
                        <label htmlFor="da2" className="mb-0">
                          Want to switch on other account
                        </label>
                      </div>
                      <div className="customRadio clearfix mb-2">
                        <input
                          name="DeleteAC"
                          id="da3"
                          defaultValue={3}
                          type="radio"
                        />
                        <label htmlFor="da3" className="mb-0">
                          Other
                        </label>
                      </div>
                      <button type="button" className="btn btn-sm my-2">
                        Delete Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Security */}
          </div>
        </div>
      </div>
    </div>
    {/*End Main Content*/}
    </div>
    <Footer/>
    </>
  )
}
