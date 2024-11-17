// src/components/AuthRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const AuthRoute = ({ element, isAuthenticated, ...rest }) => {
    return (
        <Route
            {...rest}
            element={isAuthenticated ? element : <Navigate to="/login" />} // Redirect to login if not authenticated
        />
    );
};

export default AuthRoute;