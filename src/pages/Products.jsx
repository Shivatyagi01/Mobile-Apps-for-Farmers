import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
    const productList = [
        {
            id: 1,
            name: "Fresh Organic Apples",
            description: "Crisp, juicy organic apples sourced directly from farms.",
            price: "₹150/kg",
            image: "https://source.unsplash.com/300x300/?apples"
        },
        {
            id: 2,
            name: "Ripe Mangoes",
            description: "Sweet and juicy mangoes, perfect for desserts.",
            price: "₹200/kg",
            image: "https://source.unsplash.com/300x300/?mangoes"
        },
        {
            id: 3,
            name: "Fresh Bananas",
            description: "High-energy bananas, ideal for snacks and shakes.",
            price: "₹50/dozen",
            image: "https://source.unsplash.com/300x300/?bananas"
        }
    ];

    return (
        <div className="row">
            {productList.map((product) => (
                <div className="col-md-4 mb-4" key={product.id}>
                    <div className="card shadow-sm">
                        <img src={product.image} className="card-img-top" alt={product.name} />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.description}</p>
                            <h6 className="text-success">{product.price}</h6>
                            <Link to={`/products/${product.id}`} className="btn btn-primary">
                                View Details
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products;