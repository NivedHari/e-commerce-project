import { Button } from "react-bootstrap";


const HeaderCart = (props) => {
  const total = 69;
  return (
    <Button variant="light" onClick={props.onClick}>
    <div>CART</div>
    </Button>
  );
};

export default HeaderCart;
