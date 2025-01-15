import React from "react";

const Profile = ({ user }) => {
    return (
        <div>
            <h2>Profile</h2>
            <img src="profile-pic.jpg" alt="Profile" className="rounded-circle mb-3" />
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Address: {user.address}</p>

            {/* Past Orders Section */}
            <div className="card mt-4">
                <div className="card-header">
                    <h3>Past Orders</h3>
                </div>
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">Order #1 - Product A - $10</li>
                        <li className="list-group-item">Order #2 - Product B - $20</li>
                        <li className="list-group-item">Order #3 - Product C - $30</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profile;