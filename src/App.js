import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
// import Header from "./components/Layouts/Header";
// import Cards from "./components/Card/Cards";
// import Cart from "./components/Cart/Cart";
// import CartProvider from "./store/CartProvider";

function App() {
  
  return (
    // <CartProvider>
    //   <Header onShow={handleShow}/>
    //   <Cart show={show} onShow={handleShow} onClose={handleClose}/>
    //   <Cards />
    // </ CartProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
