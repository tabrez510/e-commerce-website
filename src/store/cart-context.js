import React from "react";

const CartContext = React.createContext({
    items: [],
    addToCart: () => {},
    removeFromCart: () => {}
});

export default CartContext;