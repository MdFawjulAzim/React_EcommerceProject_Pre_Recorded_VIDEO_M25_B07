import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductByBrand from "./pages/product-by-brand";
import ProductByCategory from "./pages/product-by-category";
import ProductByKeyword from "./pages/product-by-keyword";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/by-brand/:id" element={<ProductByBrand/>} />
        <Route exact path="/by-category/:id" element={<ProductByCategory/>} />
        <Route exact path="/by-keyword/:keyword" element={<ProductByKeyword/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
