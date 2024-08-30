import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function About() {
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
              <h1>About Us Style1</h1>
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
                About Us Style1
              </span>
            </div>
            {/*End Breadcrumbs*/}
          </div>
        </div>
      </div>
    </div>
    {/*End Page Header*/}
    {/*Main Content*/}
    {/* Destination section */}
    <div className="destination-section section pt-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="about-images mb-4 mb-md-0">
              <div className="row g-3">
                <img
                  className="rounded-0 blur-up lazyload"
                  data-src="assets/images/about/about3.jpg"
                  src="assets/images/about/about3.jpg"
                  alt="about"
                  width={700}
                  height={827}
                />
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div className="about-details px-50 py-5">
              <p className="text-muted fs-6 mb-3">Standard Works</p>
              <h2 className="fs-4 mb-4">Largest Online Fashion destination</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, even slightly believable.
              </p>
              <p>
                Internet tend to repeat predefined chunks as necessary, making
                this the first true generator on the Internet. It uses a
                dictionary.
              </p>
              <a href="shop-right-sidebar.html" className="btn btn-lg mt-md-2">
                Explore Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Destination section */}
    {/* Service section */}
    <div className="service-section section section-color-light">
      <div className="container">
        <div className="service-info row col-row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 text-center">
          <div className="service-wrap col-item">
            <div className="service-icon mb-3">
              <i className="icon anm anm-chat text-primary fs-2" />
            </div>
            <div className="service-content">
              <h3 className="fs-6 mb-1 text-uppercase">Customer Servcies</h3>
              <span className="text-muted">Top notch customer service.</span>
            </div>
          </div>
          <div className="service-wrap col-item">
            <div className="service-icon mb-3">
              <i className="icon anm anm-truck-line text-primary fs-2" />
            </div>
            <div className="service-content">
              <h3 className="fs-6 mb-1 text-uppercase">Pickup At Any Store</h3>
              <span className="text-muted">
                Free shipping on orders over $65.
              </span>
            </div>
          </div>
          <div className="service-wrap col-item">
            <div className="service-icon mb-3">
              <i className="icon anm anm-credit-card-l text-primary fs-2" />
            </div>
            <div className="service-content">
              <h3 className="fs-6 mb-1 text-uppercase">Secured Payment</h3>
              <span className="text-muted">
                We accept all major credit cards.
              </span>
            </div>
          </div>
          <div className="service-wrap col-item">
            <div className="service-icon mb-3">
              <i className="icon anm anm-vh-bus-l text-primary fs-2" />
            </div>
            <div className="service-content">
              <h3 className="fs-6 mb-1 text-uppercase">Free Returns</h3>
              <span className="text-muted">30-days free return policy.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Service section */}
    {/* Destination section */}
    <div className="destination-section section pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="about-details px-50 py-5">
              <h2 className="fs-4 mb-3">We unleash your business potential.</h2>
              <p>
                Through strategy, design, and planning we build brand identities
                that connect with your template. We then fine-tune a marketing
                plan that allows us to laser focus.
              </p>
              <p>Digital solutions for your online business.</p>
              <a href="#" className="btn btn-lg mt-md-2">
                Discover Now
              </a>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div className="about-images mt-4 mt-md-0">
              <div className="row g-3">
                <img
                  className="rounded-0 blur-up lazyload"
                  data-src="assets/images/about/about1.jpg"
                  src="assets/images/about/about1.jpg"
                  alt="about"
                  width={700}
                  height={827}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Destination section */}
    {/*Meet Our Team section*/}
    <div className="team-section section">
      <div className="container">
        <div className="section-header">
          <p className="mb-2 mt-0">Dreams and teams work together</p>
          <h2>Our Amazing Team</h2>
        </div>
        <div className="team-items row col-row row-cols-lg-4 row-cols-md-4 row-cols-sm-2 row-cols-2 text-center">
          <div className="team-item col-item">
            <div className="team-img zoom-scal rounded-0">
              <img
                className="rounded-0 blur-up lazyload w-100"
                data-src="assets/images/about/about-team1.jpg"
                src="assets/images/about/about-team1.jpg"
                alt="team"
                width={350}
                height={350}
              />
              <ul className="list-inline social-icons d-flex-justify-center">
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Facebook"
                  >
                    <i className="icon anm anm-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="icon anm anm-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Pinterest"
                  >
                    <i className="icon anm anm-pinterest-p" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i className="icon anm anm-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-bio pt-3">
              <h3 className="mb-2">Bruce Sutton</h3>
              <p>CEO - Founder</p>
            </div>
          </div>
          <div className="team-item col-item">
            <div className="team-img zoom-scal rounded-0">
              <img
                className="rounded-0 blur-up lazyload w-100"
                data-src="assets/images/about/about-team2.jpg"
                src="assets/images/about/about-team2.jpg"
                alt="team"
                width={350}
                height={350}
              />
              <ul className="list-inline social-icons d-flex-justify-center">
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Facebook"
                  >
                    <i className="icon anm anm-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="icon anm anm-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Pinterest"
                  >
                    <i className="icon anm anm-pinterest-p" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i className="icon anm anm-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-bio pt-3">
              <h3 className="mb-2">Ellen Thornton</h3>
              <p>Products Manager</p>
            </div>
          </div>
          <div className="team-item col-item">
            <div className="team-img zoom-scal rounded-0">
              <img
                className="rounded-0 blur-up lazyload w-100"
                data-src="assets/images/about/about-team3.jpg"
                src="assets/images/about/about-team3.jpg"
                alt="team"
                width={350}
                height={350}
              />
              <ul className="list-inline social-icons d-flex-justify-center">
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Facebook"
                  >
                    <i className="icon anm anm-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="icon anm anm-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Pinterest"
                  >
                    <i className="icon anm anm-pinterest-p" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i className="icon anm anm-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-bio pt-3">
              <h3 className="mb-2">Lisa John</h3>
              <p>Marketing</p>
            </div>
          </div>
          <div className="team-item col-item">
            <div className="team-img zoom-scal rounded-0">
              <img
                className="rounded-0 blur-up lazyload w-100"
                data-src="assets/images/about/about-team4.jpg"
                src="assets/images/about/about-team4.jpg"
                alt="team"
                width={350}
                height={350}
              />
              <ul className="list-inline social-icons d-flex-justify-center">
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Facebook"
                  >
                    <i className="icon anm anm-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Twitter"
                  >
                    <i className="icon anm anm-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Pinterest"
                  >
                    <i className="icon anm anm-pinterest-p" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="clr-none"
                    href="#"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Instagram"
                  >
                    <i className="icon anm anm-linkedin-in" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="team-bio pt-3">
              <h3 className="mb-2">Jackly Smith</h3>
              <p>Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*End Meet Our Team section*/}
    {/* Popular Brands */}
    <div className="featured-brands-logo section section-color-light">
      <div className="container">
        <div className="brands-list">
          <div className="brands-row logo-bar logo-slider-6items gp10 arwOut5">
            <div className="brands-logo">
              <a
                href="shop-right-sidebar.html"
                className="zoom-scal zoom-scal-nopb rounded-0"
              >
                <img
                  className="rounded-0 blur-up lazyload"
                  src="assets/images/logo/brandlogo1.png"
                  alt="Brand Logo"
                  title=""
                  width={194}
                  height={97}
                />
              </a>
            </div>
            <div className="brands-logo">
              <a
                href="shop-right-sidebar.html"
                className="zoom-scal zoom-scal-nopb rounded-0"
              >
                <img
                  className="rounded-0 blur-up lazyload"
                  src="assets/images/logo/brandlogo2.png"
                  alt="Brand Logo"
                  title=""
                  width={194}
                  height={97}
                />
              </a>
            </div>
            <div className="brands-logo">
              <a
                href="shop-right-sidebar.html"
                className="zoom-scal zoom-scal-nopb rounded-0"
              >
                <img
                  className="rounded-0 blur-up lazyload"
                  src="assets/images/logo/brandlogo3.png"
                  alt="Brand Logo"
                  title=""
                  width={194}
                  height={97}
                />
              </a>
            </div>
            <div className="brands-logo">
              <a
                href="shop-right-sidebar.html"
                className="zoom-scal zoom-scal-nopb rounded-0"
              >
                <img
                  className="rounded-0 blur-up lazyload"
                  src="assets/images/logo/brandlogo4.png"
                  alt="Brand Logo"
                  title=""
                  width={194}
                  height={97}
                />
              </a>
            </div>
            <div className="brands-logo">
              <a
                href="shop-right-sidebar.html"
                className="zoom-scal zoom-scal-nopb rounded-0"
              >
                <img
                  className="rounded-0 blur-up lazyload"
                  src="assets/images/logo/brandlogo5.png"
                  alt="Brand Logo"
                  title=""
                  width={194}
                  height={97}
                />
              </a>
            </div>
            <div className="brands-logo">
              <a
                href="shop-right-sidebar.html"
                className="zoom-scal zoom-scal-nopb rounded-0"
              >
                <img
                  className="rounded-0 blur-up lazyload"
                  src="assets/images/logo/brandlogo6.png"
                  alt="Brand Logo"
                  title=""
                  width={194}
                  height={97}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End Popular Brands */}
    {/*Testimonial Section*/}
    <section className="section testimonial-slider style1 pb-0">
      <div className="container">
        <div className="section-header">
          <p className="mb-2 mt-0">Happy Customer</p>
          <h2>Testimonials</h2>
        </div>
        <div className="testimonial-wraper">
          {/*Testimonial Slider Items*/}
          <div className="testimonial-slider-3items gp15 slick-arrow-dots arwOut5">
            <div className="testimonial-slide rounded-3">
              <div className="testimonial-content text-center">
                <div className="quote-icon mb-3 mb-lg-4">
                  <img
                    className="blur-up lazyload mx-auto"
                    data-src="assets/images/icons/demo1-quote-icon.png"
                    src="assets/images/icons/demo1-quote-icon.png"
                    alt="icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="content">
                  <div className="text mb-2">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text 1500s.
                    </p>
                  </div>
                  <div className="product-review my-3">
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <span className="caption hidden ms-1">24 Reviews</span>
                  </div>
                </div>
                <div className="auhimg d-flex-justify-center text-left">
                  <div className="image">
                    <img
                      className="rounded-circle blur-up lazyload"
                      data-src="assets/images/users/testimonial1-65x.jpg"
                      src="assets/images/users/testimonial1-65x.jpg"
                      alt="quotes"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="auhtext ms-3">
                    <h5 className="authour mb-1">John Doe</h5>
                    <p className="text-muted">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-slide rounded-3">
              <div className="testimonial-content text-center">
                <div className="quote-icon mb-3 mb-lg-4">
                  <img
                    className="blur-up lazyload mx-auto"
                    data-src="assets/images/icons/demo1-quote-icon.png"
                    src="assets/images/icons/demo1-quote-icon.png"
                    alt="icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="content">
                  <div className="text mb-2">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text 1500s.
                    </p>
                  </div>
                  <div className="product-review my-3">
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star-o" />
                    <span className="caption hidden ms-1">15 Reviews</span>
                  </div>
                </div>
                <div className="auhimg d-flex-justify-center text-left">
                  <div className="image">
                    <img
                      className="rounded-circle blur-up lazyload"
                      data-src="assets/images/users/testimonial2-65x.jpg"
                      src="assets/images/users/testimonial2-65x.jpg"
                      alt="quotes"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="auhtext ms-3">
                    <h5 className="authour mb-1">Jessica Doe</h5>
                    <p className="text-muted">Marketing</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-slide rounded-3">
              <div className="testimonial-content text-center">
                <div className="quote-icon mb-3 mb-lg-4">
                  <img
                    className="blur-up lazyload mx-auto"
                    data-src="assets/images/icons/demo1-quote-icon.png"
                    src="assets/images/icons/demo1-quote-icon.png"
                    alt="icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="content">
                  <div className="text mb-2">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text 1500s.
                    </p>
                  </div>
                  <div className="product-review my-3">
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star-o" />
                    <i className="icon anm anm-star-o" />
                    <span className="caption hidden ms-1">17 Reviews</span>
                  </div>
                </div>
                <div className="auhimg d-flex-justify-center text-left">
                  <div className="image">
                    <img
                      className="rounded-circle blur-up lazyload"
                      data-src="assets/images/users/testimonial3-65x.jpg"
                      src="assets/images/users/testimonial3-65x.jpg"
                      alt="quotes"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="auhtext ms-3">
                    <h5 className="authour mb-1">Rick Edward</h5>
                    <p className="text-muted">Developer</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial-slide rounded-3">
              <div className="testimonial-content text-center">
                <div className="quote-icon mb-3 mb-lg-4">
                  <img
                    className="blur-up lazyload mx-auto"
                    data-src="assets/images/icons/demo1-quote-icon.png"
                    src="assets/images/icons/demo1-quote-icon.png"
                    alt="icon"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="content">
                  <div className="text mb-2">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text 1500s.
                    </p>
                  </div>
                  <div className="product-review my-3">
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star" />
                    <i className="icon anm anm-star-o" />
                    <i className="icon anm anm-star-o" />
                    <i className="icon anm anm-star-o" />
                    <span className="caption hidden ms-1">29 Reviews</span>
                  </div>
                </div>
                <div className="auhimg d-flex-justify-center text-left">
                  <div className="image">
                    <img
                      className="rounded-circle blur-up lazyload"
                      data-src="assets/images/users/testimonial4-65x.jpg"
                      src="assets/images/users/testimonial4-65x.jpg"
                      alt="quotes"
                      width={65}
                      height={65}
                    />
                  </div>
                  <div className="auhtext ms-3">
                    <h5 className="authour mb-1">Happy Buyer</h5>
                    <p className="text-muted">Designer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Testimonial Slider Items*/}
        </div>
      </div>
    </section>
    {/*End Testimonial section*/}
    {/*End Main Content*/}
    </div>
    <Footer/>
    </>
  )
}
