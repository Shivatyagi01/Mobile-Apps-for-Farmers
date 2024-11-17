// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            <div style={styles.brand}>
                <Link to="/" style={styles.link}>Farmer Market</Link>
            </div>
            <div style={styles.navLinks}>
                <Link to="/" style={styles.link}>Home</Link>
                <Link to="/products" style={styles.link}>Products</Link>
                <Link to="/add-product" style={styles.link}>Add Product</Link>
                <Link to="/cart" style={styles.link}>Cart</Link>
                <Link to="/signup" style={styles.link}>Signup</Link>
                <Link to="/login" style={styles.link}>Login</Link>
            </div >
        </nav >
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        backgroundColor: '#4CAF50',
        color: 'white'
    },
    brand: {
        fontWeight: 'bold',
        fontSize: '1.5rem'
    },
    navLinks: {
        display: 'flex',
        gap: '1rem'
    },
    link: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: '500'
    }
};

export default Navbar;