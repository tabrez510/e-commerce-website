import React from "react";

const CartContext = React.createContext({
    items: [],
    addToCart: () => {},
    addToCartWithQuantity: () => {},
    removeFromCart: () => {}
});

export default CartContext;