// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home'; // Import Home component
import Products from './components/ProductList/ProductList'; // Example: Replace with your actual component
import AddProduct from './components/AddProductForm/AddProductForm'; // Example: Replace with your actual component
import Cart from './components/Cart/Cart'; // Example: Replace with your actual component
import Signup from './components/Signup/Signup'; // Import Signup component
import Login from './components/Login/Login'; // Import Login component
function App() {
  const [user, setUser] = useState(null);

  const handleSignup = (userData) => {
    setUser(userData);
  };

  const handleLogin = (credentials) => {
    if (user && credentials.username === user.username && credentials.password === user.password) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
}

export default App;