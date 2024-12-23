// src/components/Signup.js
import React, { useState } from 'react';

const Signup = ({ onSignup }) => {
    const [userDetails, setUserDetails] = useState({
        username: '',
        password: '',
        isAdmin: false,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSignup(userDetails); // Send user details to the parent component
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Signup</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="username" style={styles.label}>Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={userDetails.username}
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
                        value={userDetails.password}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="isAdmin" style={styles.label}>Admin (for admin signup)</label>
                    <input
                        type="checkbox"
                        id="isAdmin"
                        name="isAdmin"
                        checked={userDetails.isAdmin}
                        onChange={(e) => setUserDetails({ ...userDetails, isAdmin: e.target.checked })}
                    />
                </div>
                <button type="submit" style={styles.button}>Signup</button>
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

export default Signup;