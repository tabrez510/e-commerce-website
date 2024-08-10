import { Table, Image, Form, Button } from "react-bootstrap";
import CustomModal from "../Modal/Modal";

const cartElements = [
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
  {
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    quantity: 2,
  },
  {
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    quantity: 3,
  },
  {
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    quantity: 1,
  },
];

const Cart = (props) => {
  return (
    <CustomModal {...props}>
      <Table responsive>
        <thead>
          <tr>
            <th>ITEM</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
          </tr>
        </thead>
        <tbody>
          {cartElements.map((cart) => {
            return (
              <tr key={cart.title}>
                <td>
                  <Image
                    src={cart.imageUrl}
                    fluid
                    rounded
                    style={{ maxHeight: "2rem", objectFit: "cover" }}
                  />
                  <span className="ms-2">{cart.title}</span>
                </td>
                <td>{cart.price}</td>
                <td className="d-flex flex-row justify-content-between align-items-center">
                  <Form.Control size="sm" type="number" defaultValue={1} style={{maxWidth: '3rem'}}/>
                  <Button variant="danger" size="sm">
                    REMOVE
                  </Button>
                </td>
              </tr>
            );
          })}
          <tr>
            <td></td>
            <td></td>
            <td>
              <h5>Total: $250</h5>
            </td>
          </tr>
        </tbody>
      </Table>
    </CustomModal>
  );
};

export default Cart;
