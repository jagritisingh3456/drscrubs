import React from 'react';
import Slider from 'react-slick';
import './Home.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CategorySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="collection-slider-5items gp15 arwOut5 hov-arrow">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="category-item zoomscal-hov">
          <a href="shop-left-sidebar.html" className="category-link clr-none">
            <div className="zoom-scal zoom-scal-nopb rounded-3">
              <img
                className="blur-up lazyload"
                data-src="assets/images/collection/sub-collection1.jpg"
                src="assets/images/collection/sub-collection1.jpg"
                alt="Men's Jakets"
                title="Men's Jakets"
                width={365}
                height={365}
                margin={20}
              />
            </div>
            <div className="details mt-3 text-center">
              <h4 className="category-title mb-0">Men's Jackets</h4>
              <p className="counts">20 Products</p>
            </div>
          </a>
        </div>

        {/* Second Slide */}
        <div className="category-item zoomscal-hov">
          <a href="shop-left-sidebar.html" className="category-link clr-none">
            <div className="zoom-scal zoom-scal-nopb rounded-3">
              <img
                className="blur-up lazyload"
                data-src="assets/images/collection/sub-collection3.jpg"
                src="assets/images/collection/sub-collection3.jpg"
                alt="Tops"
                title="Tops"
                width={365}
                height={365}
              />
            </div>
            <div className="details mt-3 text-center">
              <h4 className="category-title mb-0">Tops</h4>
              <p className="counts">13 Products</p>
            </div>
          </a>
        </div>

        {/* Third Slide */}
        <div className="category-item zoomscal-hov">
          <a href="shop-left-sidebar.html" className="category-link clr-none">
            <div className="zoom-scal zoom-scal-nopb rounded-3">
              <img
                className="blur-up lazyload"
                data-src="assets/images/collection/sub-collection5.jpg"
                src="assets/images/collection/sub-collection5.jpg"
                alt="T-Shirts"
                title="T-Shirts"
                width={365}
                height={365}
              />
            </div>
            <div className="details mt-3 text-center">
              <h4 className="category-title mb-0">T-Shirts</h4>
              <p className="counts">18 Products</p>
            </div>
          </a>
        </div>

        {/* Fourth Slide */}
        <div className="category-item zoomscal-hov">
          <a href="shop-left-sidebar.html" className="category-link clr-none">
            <div className="zoom-scal zoom-scal-nopb rounded-3">
              <img
                className="blur-up lazyload"
                data-src="assets/images/collection/sub-collection6.jpg"
                src="assets/images/collection/sub-collection6.jpg"
                alt="Shoes"
                title="Shoes"
                width={365}
                height={365}
              />
            </div>
            <div className="details mt-3 text-center">
              <h4 className="category-title mb-0">Shoes</h4>
              <p className="counts">11 Products</p>
            </div>
          </a>
        </div>

        {/* Fifth Slide */}
        <div className="category-item zoomscal-hov">
          <a href="shop-left-sidebar.html" className="category-link clr-none">
            <div className="zoom-scal zoom-scal-nopb rounded-3">
              <img
                className="blur-up lazyload"
                data-src="assets/images/collection/sub-collection9.jpg"
                src="assets/images/collection/sub-collection9.jpg"
                alt="Shorts"
                title="Shorts"
                width={365}
                height={365}
              />
            </div>
            <div className="details mt-3 text-center">
              <h4 className="category-title mb-0">Shorts</h4>
              <p className="counts">28 Products</p>
            </div>
          </a>
        </div>

        {/* Add more slides as needed */}

      </Slider>
    </div>
  );
};

export default CategorySlider;
