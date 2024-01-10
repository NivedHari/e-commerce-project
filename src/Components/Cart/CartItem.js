import React from "react";
import { Badge } from "react-bootstrap";

const CartItem = (props) => {
  return (
    
    <tr key={props.id}>
      <td className="d-flex">
        <img src={props.imageUrl} alt="Albums" width="50" height="50" />
      </td>
      <td>{props.title}</td>
      <td>${props.price}</td>
      <td><Badge bg="secondary">{props.amount}</Badge></td>
      <td className="text-end">
        <button className="btn btn-sm btn-danger" onClick={props.onRemove}>
          Remove
        </button>
      </td>
    </tr>
  );
};

export default CartItem;