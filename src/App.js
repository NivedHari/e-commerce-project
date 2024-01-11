import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Components/Layout/Header";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./../src/Components/store/CartProvider";
import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
import ContactUs from "./Components/Pages/ContactUs";
import ProductDetails from "./Components/Products/ProductDetails";

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
        <div>
          <Header onClick={cartHandler} />
          <main>
            <Switch>
              <Route path="/about">
              <About /></Route>
              <Route path="/store"><Products/></Route>
              <Route path="/" exact><Home/></Route>
              <Route path="/home"><Home/></Route>
              <Route path="/contactus" exact><ContactUs/></Route>
              <Route path="/products/:productId"><ProductDetails/></Route>
            </Switch>
          </main>
        </div>

        <div style={backdropStyle}></div>
        <div style={cartStyle}>
          {showCart && <Cart onClick={cartHandler} />}
        </div>
      </CartProvider>
    </Router>
  );
};

export default App;
