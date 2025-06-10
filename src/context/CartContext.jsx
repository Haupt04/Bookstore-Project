import { createContext, useContext, useState } from "react";



const CartContext = createContext()

export const useCart = () => useContext(CartContext);

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (book) => {
        setCartItems(prev => {
            const existing = prev.find(item => item.id === book.id);
            if (existing){
                return prev.map(item => item.id === book.id ? {...item, quantity: item.quantity + 1} : item);
            }
            return [...prev, {...book, quantity: 1}]
        })
    }

    const removeFromCart = (id) => {
        setCartItems(prev => prev.flatMap(item => {
            if (item.id === id){
                if (item.quantity > 1){
                    return [{...item, quantity: item.quantity - 1}]
                } else {
                    return []
                }
            }
            return [item]
        })
    );
    }

    const clearCart = () => setCartItems([]);

    return (
        <CartContext.Provider value={{cartItems, addToCart, removeFromCart, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}