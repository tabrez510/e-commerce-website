import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addToCartWithQuantity = (item) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.reduce((acc, cart) => {
        if (item.id === cart.id) {
          acc.push(item);
        } else {
          acc.push(cart);
        }
        return acc;
      }, []);

      return updatedItems;
    });
  };

  const addToCart = (item) => {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (itemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[itemIndex] = {
          ...updatedItems[itemIndex],
          quantity: updatedItems[itemIndex].quantity + 1,
        };
        return updatedItems;
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setItems((prevItems) => {
        const updatedCart = prevItems.reduce((acc, cart) => {
          if (cart.id !== item.id) {
            acc.push(cart);
          }
          return acc;
        }, []);
        return updatedCart;
    })
  };

  const cartContext = {
    items: items,
    addToCart: addToCart,
    addToCartWithQuantity: addToCartWithQuantity,
    removeFromCart: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
