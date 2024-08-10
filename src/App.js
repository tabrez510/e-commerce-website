import React, {useState} from "react";
import Header from "./components/Layouts/Header";
import Cards from "./components/Card/Cards";
import Cart from "./components/Cart/Cart";

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Header onShow={handleShow}/>
      <Cart show={show} onShow={handleShow} onClose={handleClose}/>
      <Cards />
    </>
  );
}

export default App;
