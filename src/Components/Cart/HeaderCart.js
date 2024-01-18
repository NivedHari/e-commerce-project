import { Button } from "react-bootstrap";
import CartContext from "../store/cart-context";
import { useContext } from "react";

const HeaderCart = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <Button variant="light" onClick={props.onClick} className="p-1 m-1" style={{ width: "150px", height: "30px", lineHeight: "20px" }}>
      <div>
        CART <p className="badge bg-dark">{numberOfCartItems}</p>
      </div>
    </Button>
  );
};

export default HeaderCart;
