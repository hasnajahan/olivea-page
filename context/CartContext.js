import { createContext, useState } from "react";

export const CartContext = createContext();

export default function Cartprovider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart((previousCart) => {
            const alreadyAdded = previousCart.some(
                (item) => item.id === product.id
            );

            if (alreadyAdded) {
                return previousCart;
            }

            return [...previousCart, product];
        });
    }

    function removeFromCart(id) {
        setCart((previousCart) =>
            previousCart.filter((item) => item.id !== id)
        );
    }

    return (
        <CartContext.Provider
            value={{ cart, setCart, addToCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    );
}