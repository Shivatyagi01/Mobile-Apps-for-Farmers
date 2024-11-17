// src/components/Checkout.js
import React, { useState } from 'react';

const Checkout = ({ cartItems }) => {
    const [shippingDetails, setShippingDetails] = useState({
        name: '',
        address: '',
        phone: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setShippingDetails({
            ...shippingDetails,
            [name]: value,
        });
    };

    // Calculate total price
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate the checkout process (send data to a backend in a real-world scenario)
        alert('Order placed successfully!');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Checkout</h1>
            <div style={styles.cartSummary}>
                <h2>Order Summary</h2>
                {cartItems.map((item) => (
                    <div key={item.id} style={styles.cartItem}>
                        <p>{item.name} x {item.quantity}</p>
                        <p>₹{item.price * item.quantity}</p>
                    </div>
                ))}
                <h3 style={styles.totalPrice}>Total Price: ₹{totalPrice}</h3>
            </div>

            <form onSubmit={handleSubmit} style={styles.form}>
                <h2>Shipping Details</h2>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={shippingDetails.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="address" style={styles.label}>Address</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={shippingDetails.address}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="phone" style={styles.label}>Phone Number</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={shippingDetails.phone}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Place Order</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    cartSummary: {
        marginBottom: '2rem',
    },
    cartItem: {
        padding: '0.5rem',
        borderBottom: '1px solid #ccc',
    },
    totalPrice: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
    },
    formGroup: {
        marginBottom: '1rem',
    },
    label: {
        marginBottom: '0.5rem',
        fontWeight: 'bold',
    },
    input: {
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
    },
    button: {
        padding: '0.7rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Checkout;