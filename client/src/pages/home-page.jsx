import React, { useEffect } from "react";
import Layout from "./../components/layout/layout";
import ProductStore from "../store/ProductStore";
import FeatureStore from "../store/FeatureStore";
import Brands from "../components/product/brands";
import Slider from "./../components/product/slider";
import Features from "../components/features/features";
import Products from "../components/product/products";
import Categories from "../components/product/categories";

const HomePage = () => {
  const {
    BrandListRequest,
    CategoryListRequest,
    SliderListRequest,
    ListByRemarkRequest,
  } = ProductStore();
  const { FeatureListRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await SliderListRequest();
      await FeatureListRequest();
      await CategoryListRequest();
      await ListByRemarkRequest("new");
      await BrandListRequest();
    })();
  }, []);
  return (
    <Layout>
      <Slider />
      <Features />
      <Categories />
      <Products />
      <Brands />
    </Layout>
  );
};

export default HomePage;
