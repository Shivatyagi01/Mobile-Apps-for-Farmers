// src/components/AdminDashboard.js
import React, { useState } from 'react';

const AdminDashboard = () => {
    const [products, setProducts] = useState([
        { id: 1, name: 'Organic Apples', price: 100, description: 'Fresh and organic apples from the farm.' },
        { id: 2, name: 'Tomatoes', price: 50, description: 'Fresh tomatoes grown without chemicals.' },
    ]);
    const [newProduct, setNewProduct] = useState({ name: '', price: '', description: '' });

    const handleAddProduct = (e) => {
        e.preventDefault();
        if (newProduct.name && newProduct.price && newProduct.description) {
            const newProductData = {
                id: products.length + 1,
                ...newProduct,
            };
            setProducts([...products, newProductData]);
            setNewProduct({ name: '', price: '', description: '' });
            alert('Product added successfully!');
        } else {
            alert('Please fill in all fields!');
        }
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter((product) => product.id !== id));
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Admin Dashboard</h1>

            <div style={styles.formContainer}>
                <h2>Add New Product</h2>
                <form onSubmit={handleAddProduct} style={styles.form}>
                    <div style={styles.formGroup}>
                        <label htmlFor="name" style={styles.label}>Product Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={newProduct.name}
                            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="price" style={styles.label}>Price</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={newProduct.price}
                            onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                            style={styles.input}
                            required
                        />
                    </div>
                    <div style={styles.formGroup}>
                        <label htmlFor="description" style={styles.label}>Description</label>
                        <textarea
                            id="description"
                            name="description"
                            value={newProduct.description}
                            onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                            style={styles.textarea}
                            required
                        />
                    </div>
                    <button type="submit" style={styles.button}>Add Product</button>
                </form>
            </div>

            <div style={styles.productList}>
                <h2>Manage Products</h2>
                {products.map((product) => (
                    <div key={product.id} style={styles.productItem}>
                        <h3>{product.name}</h3>
                        <p><strong>Price:</strong> ₹{product.price}</p>
                        <p><strong>Description:</strong> {product.description}</p>
                        <button onClick={() => handleDeleteProduct(product.id)} style={styles.deleteButton}>Delete</button>
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
        fontSize: '2rem',
        marginBottom: '1rem',
    },
    formContainer: {
        marginBottom: '2rem',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
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
        height: '100px',
    },
    button: {
        padding: '0.7rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    productList: {
        marginTop: '2rem',
    },
    productItem: {
        padding: '1rem',
        borderBottom: '1px solid #ccc',
    },
    deleteButton: {
        backgroundColor: 'red',
        color: 'white',
        border: 'none',
        padding: '0.5rem 1rem',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default AdminDashboard;