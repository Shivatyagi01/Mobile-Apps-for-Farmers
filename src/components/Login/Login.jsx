// src/components/Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials((prevCreds) => ({
            ...prevCreds,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder logic for login validation
        onLogin(credentials);
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Login</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="username" style={styles.label}>Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={credentials.username}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="password" style={styles.label}>Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
};

const styles = {
    container: {
        padding: '2rem',
        maxWidth: '400px',
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
    button: {
        padding: '0.7rem',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
};

export default Login;