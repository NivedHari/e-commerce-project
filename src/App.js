import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./../src/Components/store/CartProvider";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";

const App = () => {
  const [showCart, setShowCart] = useState(false);

  const cartHandler = () => {
    setShowCart(!showCart);
  };

  const cartStyle = {
    position: "fixed",
    top: "4rem",
    right: showCart ? "0" : "-400px",
    height: "100%",
    width: "400px",
    backgroundColor: "white",
    zIndex: "999",
    transition: "right 0.3s ease-in-out",
  };

  const backdropStyle = {
    display: showCart ? "block" : "none",
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0)",
    zIndex: "998",
  };

  return (
    <Router>
      <CartProvider>
        <Header onClick={cartHandler} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Products />} />
          <Route path="/" element={<Products />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
        
        <div style={backdropStyle}></div>
        <div style={cartStyle}>
          {showCart && <Cart onClick={cartHandler} />}
        </div>
        

      </CartProvider>
    </Router>
  );
};

export default App;
