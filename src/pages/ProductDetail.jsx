import React from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();

    // Replace with actual product data fetch based on ID
    const product = {
        id,
        name: "Fresh Organic Apples",
        description: "Crisp, juicy organic apples sourced directly from farms.",
        price: "₹150/kg",
        image: "https://source.unsplash.com/600x400/?apples"
    };

    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} className="img-fluid rounded shadow" />
                </div>
                <div className="col-md-6">
                    <h2 className="fw-bold text-primary">{product.name}</h2>
                    <p className="text-muted">{product.description}</p>
                    <h4 className="text-success fw-bold">{product.price}</h4>
                    <button className="btn btn-primary mt-3">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;