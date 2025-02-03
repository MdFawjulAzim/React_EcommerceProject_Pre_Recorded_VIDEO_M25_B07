import React, { useEffect } from "react";
import logo from "../../assets/images/plainb-logo.svg";
import { Link, useNavigate } from "react-router-dom";
import ProductStore from "../../store/ProductStore";
import UserStore from "../../store/UserStore";
import UserSubmitButton from "../user/UserSubmitButton";
import CartStore from "../../store/CartStore";
import WishStore from "../../store/WishStore";

const AppNavBar = () => {
  const navigate = useNavigate();
  const { SetSearchKeyword, SearchKeyword } = ProductStore();
  const { isLogin, UserLogoutRequest } = UserStore();
  const { CartCount, CartListRequest } = CartStore();
  const { WishCount, WishListRequest } = WishStore();

  const onLogout = async () => {
    let res = await UserLogoutRequest();
    sessionStorage.clear();
    localStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    (async () => {
      if (isLogin()) {
        await CartListRequest();
        await WishListRequest();
      }
    })();
  }, []);
  return (
    <>
      {/* Top Contact Section */}
      <div className="container-fluid text-white p-2 bg-success">
        <div className="container">
          <div className="row justify-content-between">
            {/* Left Side - Contact Information */}
            <div className="col-md-6">
              <span className="f-12">
                <i className="bi bi-envelope"></i> mdfawjulazim@gmail.com
              </span>
              <span className="f-12 mx-2">
                <i className="bi bi-envelope"></i> 01644213617
              </span>
            </div>
            {/* Right Side - Social Media Icons */}
            <div className="col-md-6">
              <span className="float-md-end float-start">
                <span className="bodySmal mx-2">
                  <i className="bi bi-whatsapp"></i>
                </span>
                <span className="bodySmal mx-2">
                  <i className="bi bi-youtube"></i>
                </span>
                <span className="bodySmal">
                  <i className="bi bi-facebook"></i>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar Section */}
      <nav className="navbar sticky-top bg-white navbar-expand-lg navbar-light py-3">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img className="img-fluid" src={logo} alt="Logo" width="50px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#nav06"
            aria-controls="nav06"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Menu */}
          <div className="collapse navbar-collapse" id="nav06">
            <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
              <li className="nav-item me-4">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="nav-item me-4">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Navbar Right Section */}
          <div className="d-lg-flex justify-content-end align-items-center">
            {/* Search Bar */}
            <div className="input-group mb-2 mb-lg-0">
              <input
                value={SearchKeyword}
                onChange={(e) => SetSearchKeyword(e.target.value)}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Link
                to={
                  SearchKeyword.length > 0
                    ? `/by-keyword/${SearchKeyword}`
                    : "/"
                }
                className="btn btn-outline-dark"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ width: 24, height: 24 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </Link>
            </div>

            {/* Cart Icon */}
            <Link to="/cart" className="btn ms-2 btn-light position-relative">
              <i className="bi text-dark bi-bag"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
                {CartCount}
              </span>
            </Link>

            {/* Wishlist Icon */}
            <Link
              to="/wish"
              className="btn ms-2 btn-light d-flex position-relative"
            >
              <i className="bi text-dark bi-heart"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
                {WishCount}
              </span>
            </Link>

            {/* Order Link */}
            <Link to="/orders" className="btn ms-4 btn-light position-relative">
              <i className="bi text-dark bi-truck"></i> Order
            </Link>

            {/* User Authentication Links */}
            {isLogin() ? (
              <>
                <UserSubmitButton
                  onClick={onLogout}
                  text="Logout"
                  className="btn ms-3 btn-success d-flex"
                />
                <Link to="/profile" className="btn ms-3 btn-success d-flex">
                  Profile
                </Link>
              </>
            ) : (
              <Link to="/login" className="btn ms-3 btn-success d-flex">
                Login
              </Link>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default AppNavBar;
