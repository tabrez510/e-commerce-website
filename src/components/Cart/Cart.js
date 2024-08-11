import React, { useContext } from "react";
import { Table, Modal, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";


const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartElements = cartCtx.items;
  let totalAmount = cartElements.reduce((acc, cart) => {
    acc = acc + Number(cart.quantity)*Number(cart.price);
    return acc;
  }, 0)
  return (
    <Modal show={props.show} onHide={props.onClose}>
      <Modal.Header closeButton>
        <Modal.Title>CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Table responsive>
          <thead>
            <tr className="border-bottom border-black">
              <th>ITEM</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            {cartElements.map((cart) => {
              return <CartItem key={cart.id} cart={cart} />;
            })}
            <tr>
              <td></td>
              <td></td>
              <td>
                <h5>Total: <span>{totalAmount}</span></h5>
              </td>
            </tr>
          </tbody>
        </Table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary">PURCHAGE</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
