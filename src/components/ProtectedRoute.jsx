// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, isAuthenticated, isAdmin }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    if (isAdmin && !isAuthenticated.isAdmin) {
        return <Navigate to="/" />; // Redirect non-admins from the Admin page
    }

    return children;
};

export default ProtectedRoute;