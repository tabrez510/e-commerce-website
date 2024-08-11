import React, {useContext} from "react";
import { Col, Card, Button } from "react-bootstrap";
import CartContext from "../../store/cart-context";

const CardItem = (props) => {

    const cartCtx = useContext(CartContext);
    const addToCart = () => {
        console.log(props.product);
        cartCtx.addToCart(props.product);
        console.log(cartCtx.items);
    }
    return(
        <Col key={props.product.id} className="d-flex justify-content-center">
            <Card className="shadow" style={{ width: "20rem" }}>
              <Card.Img
                variant="top"
                src={props.product.imageUrl}
                style={{ objectFit: "contain" }}
              />
              <Card.Body>
                <Card.Title>{props.product.title}</Card.Title>
                <Card.Text className="mt-4 d-flex flex-row justify-content-between align-items-center">
                  <span>${props.product.price}</span>
                  <Button variant="primary" onClick={addToCart}>ADD TO CART</Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    )
}

export default CardItem;