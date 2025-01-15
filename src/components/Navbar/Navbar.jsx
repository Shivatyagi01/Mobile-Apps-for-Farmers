import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <Link className="navbar-brand" to="/">Logo</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
                        {user && <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>}
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {user ? (
                            <li className="nav-item">
                                <button className="btn btn-link nav-link" onClick={() => setUser(null)}>Logout</button>
                            </li>
                        ) : (
                            <>
                                <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="/register">Signup</Link></li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;