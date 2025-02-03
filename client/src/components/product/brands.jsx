import React from "react";
import ProductStore from "../../store/ProductStore";
import BrandsSkeleton from "./../../skeleton/brands-skeleton";
import { Link } from "react-router-dom";

const Brands = () => {
  const { BrandList } = ProductStore();

  if (BrandList === null) {
    return <BrandsSkeleton />;
  } else {
    return (
      <>
        <div className="section">
          <div className="container">
            <div className="row">
              <h1 className="headline-4 text-center my-2 p-0">Top Brands</h1>
              <span className="bodySmal mb-5 text-center">
                Explore a World of Choices Across Our Most Popular <br />
                Shopping Brand
              </span>
              {BrandList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="col-6 col-sm-4 col-md-3 col-lg-2 p-3"
                  >
                    <Link
                      to={`/by-brand/${item["_id"]}`}
                      className="card h-100 rounded-3 shadow-sm bg-light text-decoration-none"
                    >
                      <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
                        <img
                          className="w-75 mb-3"
                          alt="img"
                          src={item["brandImg"]}
                        />
                        <p className="bodySmal">{item["brandName"]}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Brands;
