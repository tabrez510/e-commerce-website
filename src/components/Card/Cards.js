import { Container, Row, Card, Col, Button } from "react-bootstrap";

import CardItem from "./CardItem";

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
const Cards = () => {

  return (
    <Container className="mt-3 d-flex flex-column align-items-center">
      <Row xs={1} md={2} className="justify-content-center g-4">
        {productsArr.map((product) => {
          return <CardItem key={product.id} product={product} />
        })}
      </Row>
    </Container>
  );
};

export default Cards;
