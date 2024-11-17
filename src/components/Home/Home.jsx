// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Welcome to Farmer Market App</h1>
            <p style={styles.text}>
                Connect directly with local farmers to buy fresh produce and support sustainable agriculture. Farmers can easily list their products, while consumers can shop fresh and healthy produce with ease!
            </p>
            <div style={styles.buttons}>
                <Link to="/products" style={styles.button}>
                    Browse Products
                </Link>
                <Link to="/add-product" style={styles.button}>
                    Start Selling
                </Link>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        textAlign: 'center',
    },
    heading: {
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    text: {
        fontSize: '1rem',
        marginBottom: '1.5rem',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '1rem',
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        textDecoration: 'none',
        borderRadius: '5px',
    },
};

export default Home;