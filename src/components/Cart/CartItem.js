import { Image, Form, Button } from "react-bootstrap";

const CartItem = (props) => {
    const quanityChangeHandler = (event) =>{
        console.log(event.target.value);
    }
  return (
    <tr key={props.cart.title}>
      <td>
        <Image
          src={props.cart.imageUrl}
          fluid
          rounded
          style={{ maxHeight: "2rem", objectFit: "cover" }}
        />
        <span className="ms-2">{props.cart.title}</span>
      </td>
      <td>{props.cart.price}</td>
      <td className="d-flex flex-row justify-content-between align-items-center">
        <Form.Control
          size="sm"
          type="number"
          value={props.cart.quantity}
          onChange={quanityChangeHandler}
          style={{ maxWidth: "3rem" }}
        />
        <Button variant="danger" size="sm">
          REMOVE
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
