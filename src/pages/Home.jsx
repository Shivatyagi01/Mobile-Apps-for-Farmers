import React from "react";

const Home = () => {
    return (
        <div>
            <div id="homeCarousel" className="carousel slide mb-4" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/1200x400/?farm" className="d-block w-100" alt="Farm" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1200x400/?market" className="d-block w-100" alt="Market" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/1200x400/?vegetables" className="d-block w-100" alt="Vegetables" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <h3 className="text-primary mb-4">Latest Products</h3>
            <div className="row">
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img src="https://source.unsplash.com/300x300/?carrots" className="card-img-top" alt="Carrots" />
                        <div className="card-body">
                            <h5 className="card-title">Fresh Carrots</h5>
                            <p className="card-text">Crunchy and sweet, perfect for snacks.</p>
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img src="https://source.unsplash.com/300x300/?tomatoes" className="card-img-top" alt="Tomatoes" />
                        <div className="card-body">
                            <h5 className="card-title">Ripe Tomatoes</h5>
                            <p className="card-text">Juicy and fresh, directly from farms.</p>
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card shadow-sm">
                        <img src="https://source.unsplash.com/300x300/?potatoes" className="card-img-top" alt="Potatoes" />
                        <div className="card-body">
                            <h5 className="card-title">Golden Potatoes</h5>
                            <p className="card-text">Ideal for cooking and baking.</p>
                            <button className="btn btn-primary">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light p-4 mt-5 rounded">
                <h5>Contact Us</h5>
                <p>Email: support@farmconnect.com</p>
                <p>Phone: +1 234 567 890</p>
            </div>
        </div>
    );
};

export default Home;