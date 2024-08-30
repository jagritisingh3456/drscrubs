import React from 'react'
import Header from './Header';
import Footer from './Footer'
export default function Login() {
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
            <h1>Login</h1>
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
              Login
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
    <div className="login-register pt-2">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3">
          <div className="inner h-100">
            <form method="post" action="#" className="customer-form">
              <h2 className="text-center fs-4 mb-3">Registered Customers</h2>
              <p className="text-center mb-4">
                If you have an account with us, please log in.
              </p>
              <div className="form-row">
                <div className="form-group col-12">
                  <label htmlFor="CustomerEmail" className="d-none">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="customer[email]"
                    placeholder="Email"
                    id="CustomerEmail"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className="form-group col-12">
                  <label htmlFor="CustomerPassword" className="d-none">
                    Password <span className="required">*</span>
                  </label>
                  <input
                    type="password"
                    name="customer[password]"
                    placeholder="Password"
                    id="CustomerPassword"
                    defaultValue=""
                    required=""
                  />
                </div>
                <div className="form-group col-12">
                  <div className="login-remember-forgot d-flex justify-content-between align-items-center">
                    <div className="remember-check customCheckbox">
                      <input
                        id="remember"
                        name="remember"
                        type="checkbox"
                        defaultValue="remember"
                        required=""
                      />
                      <label htmlFor="remember"> Remember me</label>
                    </div>
                    <a href="forgotPassword">Forgot your password?</a>
                  </div>
                </div>
                <div className="form-group col-12 mb-0">
                  <input
                    type="submit"
                    className="btn btn-primary btn-lg w-100"
                    defaultValue="Sign In"
                  />
                </div>
              </div>
              <div className="login-divide">
                <span className="login-divide-text">OR</span>
              </div>
              <p className="text-center fs-6 text-muted mb-3">
                Sign in with social account
              </p>
              <div className="login-social d-flex-justify-center">
                <a
                  className="social-link facebook rounded-5 d-flex-justify-center"
                  href="#"
                >
                  <i className="icon anm anm-facebook-f me-2" /> Facebook
                </a>
                <a
                  className="social-link google rounded-5 d-flex-justify-center"
                  href="#"
                >
                  <i className="icon anm anm-google-plus-g me-2" /> Google
                </a>
                <a
                  className="social-link twitter rounded-5 d-flex-justify-center"
                  href="#"
                >
                  <i className="icon anm anm-twitter me-2" /> Twitter
                </a>
              </div>
              <div className="login-signup-text mt-4 mb-2 fs-6 text-center text-muted">
                Don,t have an account?{" "}
                <a href="register" className="btn-link">
                  Sign up now
                </a>
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
