import React from "react";

import { Button, Modal } from "react-bootstrap";


const CustomModal = (props) => {

  return (
    <Modal show={props.show} onHide={props.onClose} dialogClassName="modal-dialog-left">
      <Modal.Header closeButton>
        <Modal.Title>CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button variant="primary">PURCHASE</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
