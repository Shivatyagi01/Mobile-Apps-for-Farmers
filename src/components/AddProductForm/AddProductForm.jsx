// src/components/AddProduct.js
import React, { useState } from 'react';

const AddProductForm = () => {
    const [product, setProduct] = useState({
        name: '',
        price: '',
        description: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you'd typically send the product data to your backend or update state.
        console.log('Product added:', product);
        alert('Product added successfully!');
        setProduct({ name: '', price: '', description: '' }); // Reset the form
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Add New Product</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="name">Product Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="price">Price (e.g., ₹100/kg)</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label style={styles.label} htmlFor="description">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={product.description}
                        onChange={handleChange}
                        style={styles.textarea}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Add Product</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '600px',
        margin: '0 auto',
    },
    heading: {
        fontSize: '1.8rem',
        marginBottom: '1rem',
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
    textarea: {
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        width: '100%',
        minHeight: '80px',
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

export default AddProductForm;