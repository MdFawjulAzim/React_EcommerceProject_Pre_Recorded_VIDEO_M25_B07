import React from 'react'
import ProductStore from '../../store/ProductStore';
import CategoriesSkeleton from './../../skeleton/categories-skeleton';

const Categories = () => {
  const { CategoryList } = ProductStore();

  if (CategoryList === null){
    return <CategoriesSkeleton/>
  }else{
    return (
      <div>Brands</div>
    )
  }
}

export default Categories