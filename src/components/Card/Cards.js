import { Container, Row, Card, Col, Button } from "react-bootstrap";
import CardItem from "./CardItem";

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
const Cards = () => {
  return (
    <Container className="mt-3 d-flex flex-column align-items-center">
      <Row xs={1} md={2} className="justify-content-center g-4">
        {productsArr.map((product, idx) => (
          <Col key={idx} className="d-flex justify-content-center">
            <Card className="shadow" style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src={product.imageUrl}
                style={{ objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="mt-4 d-flex flex-row justify-content-between align-items-center">
                  <span>${product.price}</span>
                  <Button variant="primary">ADD TO CART</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
