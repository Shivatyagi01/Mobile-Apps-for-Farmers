// src/components/Profile.js
import React, { useState } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        address: '123 Main Street, City, Country',
        phone: '9876543210',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({
            ...profile,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Profile updated successfully!');
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Profile</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                    <label htmlFor="name" style={styles.label}>Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={profile.name}
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
                        value={profile.address}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <div style={styles.formGroup}>
                    <label htmlFor="phone" style={styles.label}>Phone</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        style={styles.input}
                        required
                    />
                </div>
                <button type="submit" style={styles.button}>Update Profile</button>
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

export default Profile;