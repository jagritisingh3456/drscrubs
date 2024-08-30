import React from 'react'
import Header from './Header'
import Footer from './Footer'
export default function forgotpassword() {
  return (
    <>
    <Header/>
    <div id="page-content">
  {/*Page Header*/}
  <div className="page-header">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-between align-items-center">
          <div className="page-title">
            <h1>Forgot Password</h1>
          </div>
          {/*Breadcrumbs*/}
          <div className="breadcrumbs">
            <a href="index.html" title="Back to the home page">
              Home
            </a>
            <span className="title">
              <i className="icon anm anm-angle-right-l" />
              My Account
            </span>
            <span className="main-title fw-bold">
              <i className="icon anm anm-angle-right-l" />
              Forgot Password
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
    <div className="login-register">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="inner h-100">
            <form method="post" action="#" className="customer-form">
              <h2 className="text-center fs-4 mb-3">Forgot Password</h2>
              <p className="text-center mb-4">
                Please enter your email address below. You will receive a link
                to reset your password.
              </p>
              <div className="form-row">
                <div className="form-group col-12 mb-4">
                  <label htmlFor="CustomerEmail" className="d-none">
                    Enter your email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="customer[email]"
                    placeholder="Enter your email"
                    id="CustomerEmail"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className="form-group col-12 mb-0">
                  <div className="login-remember-forgot d-flex justify-content-between align-items-center">
                    <input
                      type="submit"
                      className="btn btn-primary btn-lg"
                      defaultValue="Password Reset"
                    />
                    <a
                      href="login.html"
                      className="d-flex-justify-center btn-link"
                    >
                      <i className="icon anm anm-angle-left-r me-2" /> Back to
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
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
