import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";
import { Button } from "react-bootstrap";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const items = cartCtx.items;
  let totalAmount=0;
  items.forEach((item) => {
    totalAmount += item.amount*item.price;
})

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <section>
      <div className="container h-100 py-5">
        <div className="position-absolute top-0 end-0 m-3">
          <Button onClick={props.onClick} variant="outline-danger">X</Button>
        </div>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="table-responsive">
              <h1>Cart</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th colSpan="2" scope="col" className="h5">
                      ITEM
                    </th>
                    <th scope="col">PRICE</th>
                    <th scope="col">QUANTITY</th>
                  </tr>
                </thead>
                <tbody>
                  {cartCtx.items.map((item) => (
                    
                    <CartItem
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                      imageUrl={item.imageUrl}
                      onRemove={() => cartItemRemoveHandler(item._id)}
                      onAdd={() => cartItemAddHandler(item)}
                    />
                    
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-right">
              <strong>Total : </strong>
              <span><strong>${totalAmount}</strong></span>
            </div>
            <div className="text-center">
              <Button variant="primary">PURCHASE</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
