// src/components/Cart.js
import React, { useState } from 'react';

const Cart = () => {
    // Sample cart data; in a real app, this would be managed with global state or fetched from a database.
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: 'Organic Apples',
            price: 100,
            quantity: 2,
        },
        {
            id: 2,
            name: 'Tomatoes',
            price: 50,
            quantity: 3,
        },
    ]);

    // Function to handle removing an item from the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    // Function to update quantity of an item
    const updateQuantity = (id, quantity) => {
        setCartItems(cartItems.map(item =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        ));
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p style={styles.emptyMessage}>Your cart is empty!</p>
            ) : (
                <div>
                    {cartItems.map((item) => (
                        <div key={item.id} style={styles.cartItem}>
                            <h3 style={styles.itemName}>{item.name}</h3>
                            <p>Price: ₹{item.price} per unit</p>
                            <p>Total: ₹{item.price * item.quantity}</p>
                            <div style={styles.quantityContainer}>
                                <label htmlFor={`quantity-${item.id}`} style={styles.label}>Quantity:</label>
                                <input
                                    type="number"
                                    id={`quantity-${item.id}`}
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value, 10))}
                                    min="1"
                                    style={styles.input}
                                />
                            </div>
                            <button onClick={() => removeItem(item.id)} style={styles.removeButton}>
                                Remove
                            </button>
                        </div>
                    ))}
                    <h2 style={styles.totalPrice}>Total Price: ₹{totalPrice}</h2>
                </div>
            )}
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
    },
    heading: {
        fontSize: '1.8rem',
        marginBottom: '1rem',
    },
    emptyMessage: {
        fontStyle: 'italic',
    },
    cartItem: {
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
    },
    itemName: {
        fontSize: '1.2rem',
    },
    quantityContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '0.5rem',
        marginBottom: '0.5rem',
    },
    label: {
        marginRight: '0.5rem',
    },
    input: {
        width: '50px',
        padding: '0.3rem',
        marginRight: '1rem',
    },
    removeButton: {
        padding: '0.5rem',
        backgroundColor: '#FF6347',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    totalPrice: {
        marginTop: '1rem',
        fontSize: '1.5rem',
    },
};

export default Cart;