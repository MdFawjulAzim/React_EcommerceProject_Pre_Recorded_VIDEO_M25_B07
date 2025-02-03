import React, { useState, useCallback } from "react";
import ProductImages from "./ProductImages.jsx";
import ProductStore from "../../store/ProductStore.js";
import DetailsSkeleton from "../../skeleton/details-skeleton.jsx";
import parse from "html-react-parser";
import Reviews from "./reviews.jsx";
import CartStore from "../../store/CartStore.js";
import toast from "react-hot-toast";
import CartSubmitButton from "../cart/CartSubmitButton.jsx";
import WishStore from "../../store/WishStore.js";
import WishSubmitButton from "../wish/WishSubmitButton.jsx";

const Details = () => {
  const { Details } = ProductStore();
  const [quantity, setQuantity] = useState(1);
  const { CartFormChange, CartForm, CartSaveRequest, CartListRequest } = CartStore();
  const { WishListRequest, WishSaveRequest } = WishStore();

  const incrementQuantity = useCallback(() => {
    setQuantity((prev) => prev + 1);
  }, []);

  const decrementQuantity = useCallback(() => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  }, [quantity]);

  const handleAddWish = useCallback(
    async (productID) => {
      const res = await WishSaveRequest(productID);
      if (res) {
        toast.success("Wish Item Added Successfully");
        await WishListRequest();
      }
    },
    [WishSaveRequest, WishListRequest]
  );

  const handleAddCart = useCallback(
    async (productID) => {
      const res = await CartSaveRequest(CartForm, productID, quantity);
      if (res) {
        toast.success("Cart Item Added Successfully");
        await CartListRequest();
      }
    },
    [CartForm, quantity, CartSaveRequest, CartListRequest]
  );

  if (Details === null) {
    return <DetailsSkeleton />;
  }

  const product = Details[0];

  if (!product) {
    return <div>No product details available.</div>;
  }

  return (
    <div className="container mt-2">
      <div className="row">
        {/* Product Images */}
        <div className="col-12 col-md-7 p-3">
          <ProductImages />
        </div>

        {/* Product Details */}
        <div className="col-12 col-md-5 p-3">
          <h4 className="fs-3 fs-md-2">{product.title}</h4>
          <p className="text-muted bodySmal my-1">
            Category: {product.category?.categoryName}
          </p>
          <p className="text-muted bodySmal my-1">
            Brand: {product.brand?.brandName}
          </p>
          <p className="bodySmal mb-2 mt-1">{product.shortDes}</p>
          {product.discount ? (
            <span>
              <strike className="text-secondary">${product.price}</strike> ${product.discountPrice}
            </span>
          ) : (
            <span>${product.price}</span>
          )}

          {/* Size, Color, Quantity, and Buttons */}
          <div className="row">
            <div className="col-12 col-md-4 p-2">
              <label className="bodySmal">Size</label>
              <select
                value={CartForm.size}
                onChange={(e) => CartFormChange("size", e.target.value)}
                className="form-control my-2 form-select"
              >
                <option value="">Size</option>
                {product.details?.size?.split(",").map((size, index) => (
                  <option key={index}>{size}</option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-4 p-2">
              <label className="bodySmal">Color</label>
              <select
                value={CartForm.color}
                onChange={(e) => CartFormChange("color", e.target.value)}
                className="form-control my-2 form-select"
              >
                <option value="">Color</option>
                {product.details?.color?.split(",").map((color, index) => (
                  <option key={index}>{color}</option>
                ))}
              </select>
            </div>
            <div className="col-12 col-md-4 p-2">
              <label className="bodySmal">Quantity</label>
              <div className="input-group my-2">
                <button
                  onClick={decrementQuantity}
                  className="btn btn-outline-secondary"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <input
                  value={quantity}
                  type="text"
                  className="form-control bg-light text-center"
                  readOnly
                />
                <button
                  onClick={incrementQuantity}
                  className="btn btn-outline-secondary"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>
            <div className="col-12 col-md-6 p-2">
              <CartSubmitButton
                onClick={() => handleAddCart(product._id)}
                className="btn w-100 btn-success"
                text="Add to Cart"
              />
            </div>
            <div className="col-12 col-md-6 p-2">
              <WishSubmitButton
                onClick={() => handleAddWish(product._id)}
                className="btn w-100 btn-success"
                text="Add to Wish"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Tabs for Specifications and Reviews */}
      <div className="row mt-3">
        <ul className="nav nav-tabs" id="myTab" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="Speci-tab"
              data-bs-toggle="tab"
              data-bs-target="#Speci-tab-pane"
              type="button"
              role="tab"
              aria-controls="Speci-tab-pane"
              aria-selected="true"
            >
              Specifications
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="Review-tab"
              data-bs-toggle="tab"
              data-bs-target="#Review-tab-pane"
              type="button"
              role="tab"
              aria-controls="Review-tab-pane"
              aria-selected="false"
            >
              Review
            </button>
          </li>
        </ul>
        <div className="tab-content" id="myTabContent">
          <div
            className="tab-pane fade show active"
            id="Speci-tab-pane"
            role="tabpanel"
            aria-labelledby="Speci-tab"
            tabIndex="0"
          >
            {parse(product.details?.des || "")}
          </div>
          <div
            className="tab-pane fade"
            id="Review-tab-pane"
            role="tabpanel"
            aria-labelledby="Review-tab"
            tabIndex="0"
          >
            <Reviews />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;