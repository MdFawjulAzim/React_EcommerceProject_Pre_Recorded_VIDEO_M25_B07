import React from "react";
import FeatureStore from "../../store/FeatureStore";
import FeaturesSkeleton from './../../skeleton/features-skeleton';

const Features = () => {
    const { FeatureList } = FeatureStore();

    if (FeatureList === null){
        return <FeaturesSkeleton/>
      }else{
        return (
          <div>FeatureList</div>
        )
      }
};

export default Features;
