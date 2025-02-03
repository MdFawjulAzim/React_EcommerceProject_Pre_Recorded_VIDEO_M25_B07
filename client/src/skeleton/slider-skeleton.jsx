import React from "react";
import Skeleton from "react-loading-skeleton";
import Lottie from "lottie-react";
import ImagePlaceholder from "../assets/images/image.json";

const SliderSkeleton = () => {
  return (
    <>
      <div className="container-fluid hero-bg d-flex align-items-center py-5">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            {/* Left Side - Skeleton Loader */}
            <div className="col-12 col-md-6 col-lg-5 p-4">
              <Skeleton count={1} height={30} className="mb-3" />
              <Skeleton count={1} height={20} width="80%" className="mb-3" />
              <Skeleton count={4} height={15} className="mb-2" />
              <Skeleton count={1} height={25} width="60%" className="mb-3" />
              <Skeleton count={3} height={15} className="mb-2" />
            </div>

            {/* Right Side - Lottie Animation */}
            <div className="col-12 col-md-6 col-lg-5 text-center">
              <Lottie
                animationData={ImagePlaceholder}
                loop={true}
                className="lottie-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderSkeleton;
