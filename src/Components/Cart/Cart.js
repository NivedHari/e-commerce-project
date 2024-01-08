import { Button } from "react-bootstrap";
import React from "react";
import { Container, Table } from "react-bootstrap";

const Cart = () => {
  const cartElements = [
    {
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <Table hover>
          <thead>
            <tr>
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>-</th>
            </tr>
          </thead>
          <tbody>
            {cartElements.map((item) => (
              <tr key={item.title}>
                <td className="d-flex">
                  <img
                    src={item.imageUrl}
                    alt="Albums"
                    width="50"
                    height="50"
                  />
                  {item.title}
                </td>
                <td>${item.price}</td>
                <td>1</td>

                <td>
                  <button className="btn btn-danger">REMOVE</button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="text-right">
        <strong>Total</strong>
      </div>

      {/* Purchase Button */}
      <div className="text-center">
        <Button variant="primary">PURCHASE</Button>
      </div>
    </Container>
  );
};

export default Cart;
