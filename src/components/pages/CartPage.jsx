import React from 'react'
import { useCart } from '../../context/CartContext'
import '../../index.css'

const CartPage = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const total = cartItems.reduce((sum,item) => sum + item.price * item.quantity, 0)

  return (
    <div className='cart-container'>
        <h1>Your Cart</h1>
        {cartItems.length === 0 ? (<p className='empty'>Your cart is empty</p>): (
            <>
                <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        <img src={item.cover} alt={item.title} className='cart-cover' />
                        <div className='cart-buying'>
                             <p>{item.title}</p> 
                            <p>Quantity: {item.quantity} </p>
                            <p>R{item.price.toFixed(2)} each </p>
                        </div>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
                </ul>
                <p><strong>Total:</strong> R{total.toFixed(2)}</p>
                <button onClick={clearCart} className='clear-cart'>Clear Cart</button>
                <button onClick={() => console.log('Proceed to Payment')} className='payment-cart'>Proceed to Payment</button>
            </>
        )}
    </div>
  )
}

export default CartPage