import React, { useState } from "react";
import Header from "../components/Layouts/Header";
import CartProvider from "../store/CartProvider";
import Cards from "../components/Card/Cards";
import Cart from "../components/Cart/Cart";
import Footer from "../components/Layouts/Footer";

const Store = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <CartProvider>
        <Header onShow={handleShow} />
        <Cart show={show} onShow={handleShow} onClose={handleClose} />
        <Cards />
      </CartProvider>
      <Footer />
    </>
  );
};

export default Store;
