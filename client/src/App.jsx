import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductByBrand from "./pages/product-by-brand";
import ProductByCategory from "./pages/product-by-category";
import ProductByKeyword from "./pages/product-by-keyword";
import ProductDetails from "./pages/product-details";
import AboutPage from "./pages/about-page";
import RefundPage from './pages/refund-page';
import PrivacyPage from './pages/privacy-page';
import TermsPage from './pages/terms-page';
import HowToBuyPage from './pages/how-to-buy-page';
import ContactPage from './pages/contact-page';
import ComplainPage from './pages/complain-page';
import LoginPage from "./pages/login-page";
import OtpPage from "./pages/otp-page";
import ProfilePage from "./pages/profile-page";
import CartPage from "./pages/cart-page";
import WishPage from "./pages/wish-page";
import OrderPage from "./pages/order-page";
import InvoicePage from "./pages/invoice-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route exact path="/by-brand/:id" element={<ProductByBrand/>} />
        <Route exact path="/by-category/:id" element={<ProductByCategory/>} />
        <Route exact path="/by-keyword/:keyword" element={<ProductByKeyword/>} />
        <Route exact path="/details/:id" element={<ProductDetails/>} />

        <Route exact path="/about" element={<AboutPage/>} />
        <Route exact path="/refund" element={<RefundPage/>} />
        <Route exact path="/privacy" element={<PrivacyPage/>} />
        <Route exact path="/terms" element={<TermsPage/>} />
        <Route exact path="/how-to-buy" element={<HowToBuyPage/>} />
        <Route exact path="/contact" element={<ContactPage/>} />
        <Route exact path="/complain" element={<ComplainPage/>} />
        <Route exact path="/profile" element={<ProfilePage/>} />

        <Route exact path="/login" element={<LoginPage/>} />
        <Route exact path="/otp" element={<OtpPage/>} />

        <Route exact path="/cart" element={<CartPage/>} />
        <Route exact path="/wish" element={<WishPage/>} />

        <Route exact path="/orders" element={<OrderPage/>} />

        <Route path="/invoice/:id" element={<InvoicePage/>}/>







      </Routes>
    </BrowserRouter>
  );
};

export default App;
