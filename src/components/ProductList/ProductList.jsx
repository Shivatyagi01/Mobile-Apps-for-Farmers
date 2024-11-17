// src/components/ProductList.jsx
import React, { useState, useEffect } from 'react';

const ProductList = () => {
    // Sample data for demonstration; replace with API calls or database fetches in real implementation.
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Simulated fetching data
        const sampleProducts = [
            {
                id: 1,
                name: 'Organic Apples',
                price: '₹100/kg',
                description: 'Freshly picked organic apples from local farms.',
            },
            {
                id: 2,
                name: 'Tomatoes',
                price: '₹50/kg',
                description: 'Ripe and juicy farm-grown tomatoes.',
            },
            {
                id: 3,
                name: 'Carrots',
                price: '₹40/kg',
                description: 'Crunchy and sweet carrots grown organically.',
            },
        ];
        setProducts(sampleProducts);
    }, []);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Available Products</h1>
            <div style={styles.productGrid}>
                {products.map((product) => (
                    <div key={product.id} style={styles.card}>
                        <h3 style={styles.cardTitle}>{product.name}</h3>
                        <p style={styles.cardDescription}>{product.description}</p>
                        <p style={styles.cardPrice}>{product.price}</p>
                        <button style={styles.button}>Buy Now</button>
                    </div>
                ))}
            </div>
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
    productGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1rem',
    },
    card: {
        padding: '1rem',
        border: '1px solid #ccc',
        borderRadius: '8px',
        textAlign: 'center',
    },
    cardTitle: {
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
    },
    cardDescription: {
        fontSize: '0.9rem',
        marginBottom: '0.5rem',
    },
    cardPrice: {
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    button: {
        padding: '0.5rem 1rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default ProductList;