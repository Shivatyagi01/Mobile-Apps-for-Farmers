import 'bootstrap/dist/css/bootstrap.css'; import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [user, setUser] = useState(null); // User state for authentication

  return (
    <Router>
      <Navbar user={user} setUser={setUser} />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="/profile"
            element={
              user ? <Profile user={user} /> : <Navigate to="/register" />
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;