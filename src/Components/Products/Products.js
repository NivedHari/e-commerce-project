import Button from "react-bootstrap/Button";
import CartContext from "../store/cart-context";
import { useContext } from "react";
import Heading from "../Heading/Heading";
import Footer from "../Layout/Footer";

const productsArr = [
  {
    id: "n1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },
  {
    id: "n2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },
  {
    id: "n3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },
  {
    id: "n4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (product) => {
    cartCtx.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      amount: 1,
    });
    console.log(cartCtx.items);
  };

  return (
    <>
      <Heading />
      <div className="container">
        <h2 className="text-center mt-4 mb-4">Colours</h2>
        <div className="row justify-content-center">
          {productsArr.map((product, index) => (
            <div
              className="col-5 mb-4 mt-4 d-flex justify-content-center"
              key={index}
            >
              <div className="card border-0 position-relative">
                <h4 className="card-title text-center mb-3">{product.title}</h4>
                <div className="bg-image hover-zoom">
                  <img
                    src={product.imageUrl}
                    className="card-img-top"
                    alt={product.title}
                    style={{
                      height: "250px",
                      width: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-muted">${product.price}</span>
                    <Button
                      onClick={() => addToCartHandler(product)}
                      variant="primary"
                    >
                      ADD TO CART
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center m-4">
          <Button variant="secondary">See the Cart</Button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
