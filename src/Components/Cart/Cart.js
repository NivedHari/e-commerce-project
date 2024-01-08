import { Button } from "react-bootstrap";
import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler =(id) => {
    cartCtx.removeItem(id);
  }
  const cartItemAddHandler =(item) => {
    cartCtx.addItem({...item, amount: 1});
  }

  const cartItems = (
    <tr>
      {cartCtx.items.map((item) => (
        <CartItem
      key={item.id}
      title={item.title}
      price={item.price}
      amount={item.amount}
      imageUrl={item.imageUrl} 
      onRemove={cartItemRemoveHandler.bind(null, item.id)}
      onAdd={cartItemAddHandler.bind(null, item)}
    />
      ))}
    </tr>
  );

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <Table hover>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <button onClick={props.onClick}>x</button>
            </tr>
          </thead>
          <tbody >
            {cartItems}
          </tbody>
        </Table>
      </div>
      <div className="text-right">
        <strong>Total : </strong>
        <span>{totalAmount}</span>
      </div>

      <div className="text-center">
        <Button variant="primary">PURCHASE</Button>
      </div>
    </Container>
  );
};

export default Cart;