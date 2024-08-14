import React, { useContext, useState } from "react";
import CartContext from "../store/cart-context";
// import CartProvider from "../store/CartProvider";
import Cart from "../components/Cart/Cart";
import { useParams } from "react-router-dom";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Layouts/Header";
import Footer from "../components/Layouts/Footer";

const productsArr = [
  {
    id: "p1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const ProductDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const params = useParams();
  const id = params.productId;
  const product = productsArr.filter((item) => item.id === id);
  const cartCtx = useContext(CartContext);
  const addToCart = () => {
    console.log(product[0]);
    cartCtx.addToCart(product[0]);
  };
  return (
    <>
      <Header onShow={handleShow} />
      <Cart show={show} onShow={handleShow} onClose={handleClose} />
      <Container className="mt-5 pt-md-2">
        <Row>
          <Carousel
            interval={1000}
            className="col-md-6"
            style={{ width: "400px", height: "400px" }}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product[0].imageUrl}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product[0].imageUrl}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={product[0].imageUrl}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Col className="col-md-6 ms-md-5 d-flex flex-column justify-content-around">
            <h1>{product[0].title}</h1>
            <h3>Price: {product[0].price}</h3>
            <Button variant="outline-primary">BUY NOW</Button>
            <Button variant="primary" onClick={addToCart}>
              ADD TO CART
            </Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default ProductDetails;
