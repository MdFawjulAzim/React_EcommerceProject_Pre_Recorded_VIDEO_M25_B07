import React from 'react'
import ProductStore from '../../store/ProductStore';
import BrandsSkeleton from './../../skeleton/brands-skeleton';

const Brands = () => {
  const { BrandList } = ProductStore();

  if (BrandList === null){
    return <BrandsSkeleton/>
  }else{
    return (
      <div>Brands</div>
    )
  }

  
}

export default Brands