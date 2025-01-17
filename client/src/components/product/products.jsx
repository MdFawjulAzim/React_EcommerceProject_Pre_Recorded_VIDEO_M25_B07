import React from 'react'
import ProductStore from '../../store/ProductStore';
import ProductsSkeleton from './../../skeleton/products-skeleton';

const Products = () => {
  const { ListByRemark } = ProductStore();
  return (
    <div>Products</div>
  )
}

export default Products