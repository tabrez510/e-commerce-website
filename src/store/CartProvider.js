import React, {useState, useContext} from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {


    const [items, setItems] = useState([]);
    const addToCart = (item) => {
        // console.log(item);

        const itemToBeUpdated = items.filter((cart, idx) => {
            if(cart.id === item.id){
                items[idx].quantity = items[idx].quantity + 1;
                return cart;
            }
        });

        if(itemToBeUpdated.length === 0){
            setItems([...items, {...item, quantity: 1}]);
        }
        else {
            setItems(items);
        }
        // console.log(itemToBeUpdated)
    }

    const removeFromCart = (item) => {
        const updatedCart = items.reduce((acc, cart) => {
            if(cart.id === item.id){
                if(item.quantity > 1){
                    acc.push({...cart, quantity: cart.quantity - 1});
                }
            } else {
                acc.push(cart);
            }
            return acc;
        }, []);
        setItems(updatedCart);
    }

    const cartContext = {
        items: items,
        addToCart: addToCart,
        removeFromCart: removeFromCart
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;