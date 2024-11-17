// src/components/OrderHistory.js
import React from 'react';

const OrderHistory = () => {
    const orders = [
        {
            id: 1,
            items: ['Organic Apples', 'Tomatoes'],
            totalPrice: 350,
            date: '2024-11-12',
        },
        {
            id: 2,
            items: ['Carrots', 'Potatoes'],
            totalPrice: 250,
            date: '2024-11-10',
        },
    ];

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Order History</h1>
            {orders.map((order) => (
                <div key={order.id} style={styles.orderItem}>
                    <h3>Order #{order.id} - {order.date}</h3>
                    <p><strong>Items:</strong> {order.items.join(', ')}</p>
                    <p><strong>Total Price:</strong> ₹{order.totalPrice}</p>
                </div>
            ))}
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
    orderItem: {
        padding: '1rem',
        borderBottom: '1px solid #ccc',
        marginBottom: '1rem',
    },
};

export default OrderHistory;