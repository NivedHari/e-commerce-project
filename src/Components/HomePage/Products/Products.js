import Button from "react-bootstrap/Button";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  return (
    <div className="container">
      <h2 className="text-center mt-4 mb-4">Colours</h2>
      <div className="row justify-content-center">
        {productsArr.map((product, index) => (
          <div
            className="col-5 mb-4 mt-4 d-flex justify-content-center"
            key={index}
          >
            <div>
            <img
                  src={product.imageUrl}
                  className="card-img-top zoom-on-hover"
                  alt={product.title}
                  style={{ height: "250px", objectFit: "cover" }}
                />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-muted">${product.price}</span>
                  <button className="btn btn-primary">ADD TO CART</button>
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
  );
};

export default Products;
