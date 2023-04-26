import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./products/Products";
import Cart from "./cart/Cart";
import SingleProduct from "./singleproduct/SingleProduct";
import "./GlobalStyle.css"
import Header from "./components/header/Header";
import CheckoutSuccess from "./components/checkout/CheckoutSuccess";
const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/checkout-success" element={<CheckoutSuccess />} />
        <Route path="/" element={<Products />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
