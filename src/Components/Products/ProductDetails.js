import { useParams } from "react-router-dom";
import { productArray } from "./ProductArray";
import { Container, Button, Card } from "react-bootstrap";

const ProductDetails = (props) => {
  const { productId } = useParams();
  console.log(productId);
  const productsArr = productArray;

  const product = productsArr.find((elem) => elem.title === productId);
  console.log(product);
  return (
    <>
      <h1 className="mb-4 mt-5 my-6 p-4 bg-light shadow text-center">
        {product.title}
      </h1>
      <Container className="my-5 d-flex justify-content-evenly">
        <section className="mb-4 my-4">
          <Card.Img
            variant="top"
            src={product.imageUrl}
            style={{
              animation: "enlargeAndMove 2s ease-in-out infinite alternate",
              transformOrigin: "center",
            }}
            className="imageStyle rounded"
          />
          <section className=" mt-4 mb-4">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              style={{
                animation: "enlargeAndMove 2s ease-in-out infinite alternate",
                transformOrigin: "center",
              }}
              className="imageStyle rounded"
            />
          </section>
          <section className="mb-4">
            <Card.Img
              variant="top"
              src={product.imageUrl}
              style={{
                animation: "enlargeAndMove 2s ease-in-out infinite alternate",
                transformOrigin: "center",
              }}
              className="imageStyle rounded"
            />
          </section>
        </section>
        <section className="mb-4 my-4">
          <h3 className="mb-4 my-4 p-4 bg-light shadow">Product Description</h3>
          <ul className="mb-4 my-4 p-4 bg-light shadow">
            <li>Some more Description</li>
          </ul>
          <div>
            <h3 className="p-3 bg-info shadow rounded">
              Price: ${product.price}
            </h3>
            <section className="d-flex gap-2 my-4">
              <Button variant="primary">Add to Cart</Button>
              <Button variant="success">Buy Now</Button>
            </section>
            <section className="mb-4 my-4 p-4 bg-light shadow">
              <h3>User Reviews</h3>
              <div className="mb-3">
                <h4>User</h4>
                <p>Very good !</p>
              </div>
              <div className="mb-3">
                <h4>Another User</h4>
                <p>Beautiful</p>
              </div>
              <div className="mb-3">
                <h4>Some User</h4>
                <p>Good!</p>
              </div>
              <div className="mb-3">
                <h4>Another User</h4>
                <p>Liked It..!</p>
              </div>
            </section>
          </div>
        </section>
      </Container>
      <Container></Container>
    </>
  );
};

export default ProductDetails;
