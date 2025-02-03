import React from "react";
import FeatureStore from "../../store/FeatureStore";
import FeaturesSkeleton from "./../../skeleton/features-skeleton";

const Features = () => {
  const { FeatureList } = FeatureStore();

  if (FeatureList === null) {
    return <FeaturesSkeleton />;
  } else {
    return (
      <>
        <div className="container section py-4">
          <div className="row g-4">
            {FeatureList.map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body d-flex align-items-center">
                    <div className="me-3 flex-shrink-0">
                      <img
                        className="rounded-circle border w-100"
                        style={{
                          maxWidth: "60px",
                          height: "60px",
                          objectFit: "cover",
                        }}
                        alt="feature"
                        src={item.img}
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="fw-bold text-dark mb-1">{item.name}</h6>
                      <p className="text-muted small mb-0">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
};

export default Features;
