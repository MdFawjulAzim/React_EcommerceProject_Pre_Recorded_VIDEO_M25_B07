import React from "react";
import ProductStore from "../../store/ProductStore";
import CategoriesSkeleton from "./../../skeleton/categories-skeleton";
import { Link } from "react-router-dom";

const Categories = () => {
  const { CategoryList } = ProductStore();

  if (CategoryList === null) {
    return <CategoriesSkeleton />;
  } else {
    return (
      <>
        <div className="section">
          <div className="container">
            <div className="row">
              <h1 className="headline-4 text-center my-4">Top Categories</h1>
              <p className="bodySmall mb-5 text-center">
                Explore a World of Choices Across Our Most Popular <br />
                Shopping Categories
              </p>

              {CategoryList.map((item, index) => (
                <div
                  key={index}
                  className="col-6 col-sm-4 col-md-3 col-lg-2 p-3"
                >
                  <Link
                    to={`/by-category/${item["_id"]}`}
                    className="card h-100 rounded-3 shadow-sm bg-light text-decoration-none"
                  >
                    <div className="card-body text-center d-flex flex-column align-items-center justify-content-center">
                      <img
                        className="w-75 mb-3"
                        alt={item["categoryName"]}
                        src={item["categoryImg"]}
                      />
                      <p className="bodySmall">{item["categoryName"]}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Categories;
