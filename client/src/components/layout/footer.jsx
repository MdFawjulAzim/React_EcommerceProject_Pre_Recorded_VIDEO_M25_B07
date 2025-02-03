import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* Main Footer Section */}
        <div className="section-bottom shadow-sm bg-light">
          <div className="container py-5">
            <div className="row text-center text-md-start">
              {/* Legals Section */}
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <h1 className="bodyMedium fs-5 mb-3">Legals</h1>
                <p className="my-2">
                  <Link className="nav-link text-muted hover-primary" to="/about">
                    About
                  </Link>
                </p>
                <p className="my-2">
                  <Link className="nav-link text-muted hover-primary" to="/refund">
                    Refund Policy
                  </Link>
                </p>
                <p className="my-2">
                  <Link className="nav-link text-muted hover-primary" to="/privacy">
                    Privacy Policy
                  </Link>
                </p>
                <p className="my-2">
                  <Link className="nav-link text-muted hover-primary" to="/terms">
                    Terms
                  </Link>
                </p>
              </div>

              {/* Information Section */}
              <div className="col-12 col-md-4 mb-4 mb-md-0">
                <h1 className="bodyMedium fs-5 mb-3">Information</h1>
                <p className="my-2">
                  <Link className="nav-link text-muted hover-primary" to="/how-to-buy">
                    How to Buy
                  </Link>
                </p>
                <p className="my-2">
                  <Link className="nav-link text-muted hover-primary" to="/contact">
                    Contact
                  </Link>
                </p>
                <p className="my-2">
                  <Link className="nav-link text-muted hover-primary" to="/complain">
                    Complain
                  </Link>
                </p>
              </div>

              {/* About Section */}
              <div className="col-12 col-md-4">
                <h1 className="bodyMedium fs-5 mb-3">About</h1>
                <p className="text-muted">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                </p>
                <img
                  className="img-fluid w-75"
                  src="https://www.uiu.ac.bd/wp-content/uploads/2021/02/Card-Logo-Pay-With-01-1.png"
                  alt="Payment Methods"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="bg-dark py-3 text-center">
          <p className="text-white bodySmal mb-0">
            All Rights Reserved Fawjul Azim ❤️✅
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;