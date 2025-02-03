import React from "react";
import ProductStore from "../../store/ProductStore";
import SliderSkeleton from "../../skeleton/slider-skeleton";
import { Link } from "react-router-dom";

const Slider = () => {
  const { SliderList } = ProductStore();

  // Show skeleton loader if SliderList is null
  if (!SliderList) {
    return <SliderSkeleton />;
  }

  return (
    <div className="carousel-container">
      <div
        id="carouselExampleDark"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {SliderList.map((item, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel Inner */}
        <div className="carousel-inner">
          {SliderList.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              data-bs-interval="5000"
            >
              <div className="container">
                <div className="row align-items-center justify-content-center">
                  {/* Left Side - Text */}
                  <div className="col-lg-6 col-md-6 col-12 text-center text-md-start px-4">
                    <h1 className="carousel-title">{item.title}</h1>
                    <p className="carousel-description">{item.des}</p>
                    <Link
                      to={`/details/${item.productID}`}
                      className="btn btn-success carousel-btn"
                    >
                      Buy Now
                    </Link>
                  </div>

                  {/* Right Side - Image */}
                  <div className="col-lg-6 col-md-6 col-12 text-center">
                    <img
                      src={item.image}
                      alt="product"
                      className="carousel-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
