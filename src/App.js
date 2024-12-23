// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Products from './components/ProductList/ProductList';
import AddProduct from './components/AddProductForm/AddProductForm';
import Cart from './components/Cart/Cart';
import Signup from './components/Signup/Signup';
import Login from './components/Login/Login';
import Checkout from './components/Checkout/Checkout';
import OrderHistory from './components/OrderHistory/OrderHistory';
import Profile from './components/Profile/Profile';
// Dashboard
import AdminDashboard from './components/Backend/AdminDashboard/AdminDashboard';
import AuthRoute from './components/AuthRoute';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Organic Apples', price: 100, quantity: 2 },
    { id: 2, name: 'Tomatoes', price: 50, quantity: 3 },
  ]);
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
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        {/* Protect Admin Dashboard and Profile with AuthRoute */}
        <Route path="/admin-dashboard" element={
          <ProtectedRoute isAuthenticated={user?.isAuthenticated} isAdmin={user?.isAdmin}>
            <AdminDashboard />
          </ProtectedRoute>
        } />
        <Route path="/profile" element={
          <ProtectedRoute isAuthenticated={user?.isAuthenticated}>
            <Profile />
          </ProtectedRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;