import React, {useContext} from "react";
import CartContext from "../../store/cart-context";
import { Image, Form, Button } from "react-bootstrap";

const CartItem = (props) => {
    const cartCtx = useContext(CartContext);
    const quanityChangeHandler = (event) =>{
        if(Number(event.target.value) >= 0){
            cartCtx.addToCartWithQuantity({...props.cart, quantity: Number(event.target.value)});
            console.log(cartCtx.items);
        }
        
    }
    const removeFromCart = () => {
        cartCtx.removeFromCart(props.cart);
    }

    let cartTitle = props.cart.title;
    if(cartTitle.length>5){
        cartTitle = cartTitle.slice(0, 5) + '...';
    }
  return (
    <tr>
      <td>
        <Image
          src={props.cart.imageUrl}
          fluid
          rounded
          style={{ maxHeight: "2rem", objectFit: "cover" }}
        />
        <span className="ms-2">{cartTitle}</span>
      </td>
      <td>{props.cart.price}</td>
      <td className="d-flex flex-row justify-content-between align-items-center">
        <Form.Control
          size="sm"
          type="number"
          defaultValue={props.cart.quantity}
          onChange={quanityChangeHandler}
          style={{ width: "3rem" }}
        />
        <Button variant="danger" size="sm" onClick={removeFromCart}>
          REMOVE
        </Button>
      </td>
    </tr>
  );
};

export default CartItem;
