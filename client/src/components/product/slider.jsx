import React from "react";
import ProductStore from "../../store/ProductStore";
import SliderSkeleton from './../../skeleton/slider-skeleton';

const Slider = () => {
  const { SliderList } = ProductStore();

  if (SliderList === null){
    return <SliderSkeleton/>
  }else{
    return (
      <div>Slider</div>
    )
  }
};

export default Slider;
