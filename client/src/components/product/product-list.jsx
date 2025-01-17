import React from "react";
import ProductStore from "../../store/ProductStore";
import StarRatings from "react-star-ratings/build/star-ratings.js";
import { Link } from "react-router-dom";
import ProductsSkeleton from "./../../skeleton/products-skeleton";

const ProductList = () => {
  const { ListProduct } = ProductStore();

  return (
    <>
      <div className="container mt-2">
        <div className="row">
          {/* Sidebar Section */}
          <div className="col-md-3 p-2">
            <div className="card vh-100 p-3 shadow-sm">
              {/* Brand Filter */}
              <label className="form-label mt-3">Brands</label>
              <select className="form-control form-select">
                <option value="">Choose Brand</option>
              </select>

              {/* Category Filter */}
              <label className="form-label mt-3">Categories</label>
              <select className="form-control form-select">
                <option value="">Choose Category</option>
              </select>

              {/* Maximum Price Filter */}
              <label className="form-label mt-3">Maximum Price ${`{}`}</label>
              <input
                min={0}
                max={1000000}
                step={1000}
                type="range"
                className="form-range"
              />

              {/* Minimum Price Filter */}
              <label className="form-label mt-3">Minimum Price ${`{}`}</label>
              <input
                min={0}
                max={1000000}
                step={1000}
                type="range"
                className="form-range"
              />
            </div>
          </div>

          {/* Product List Section */}
          <div className="col-md-9 p-2">
            <div className="container">
              <div className="row">
                {ListProduct === null ? (
                  <ProductsSkeleton />
                ) : (
                  <div className="container">
                    <div className="row">
                      {ListProduct.map((item, index) => {
                        let price = (
                          <p className="bodyMedium  text-dark my-1">
                            Price: ${item["price"]}
                          </p>
                        );
                        if (item["discount"] === true) {
                          price = (
                            <p className="bodyMedium  text-dark my-1">
                              Price: <strike>${item["price"]}</strike> $
                              {item["discountPrice"]}
                            </p>
                          );
                        }

                        return (
                          <div
                            key={index}
                            className="col-md-3 p-2 col-lg-3 col-sm-6 col-12"
                          >
                            <Link
                              to={`/ProductDetails/${item["_id"]}`}
                              className="card shadow-sm h-100 rounded-3 bg-white"
                            >
                              <img
                                className="w-100 rounded-top-2"
                                alt="image"
                                src={item["image"]}
                              />
                              <div className="card-body">
                                <p className="bodySmal text-secondary my-1">
                                  {item["title"]}
                                </p>
                                {price}
                                <StarRatings
                                  rating={parseFloat(item["star"])}
                                  starRatedColor="red"
                                  starDimension="15px"
                                  starSpacing="2px"
                                />
                              </div>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
