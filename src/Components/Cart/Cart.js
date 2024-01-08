import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  return (
    <section>
      <div className="container h-100 py-5">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="h5">
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
                      title={item.title}
                      price={item.price}
                      amount={item.amount}
                      imageUrl={item.imageUrl}
                      onRemove={() => cartItemRemoveHandler(item.id)}
                      onAdd={() => cartItemAddHandler(item)}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
