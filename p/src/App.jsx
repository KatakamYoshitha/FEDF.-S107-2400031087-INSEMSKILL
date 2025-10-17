import React, { useState } from "react";
import "./App.css"; // we'll style it next

const ProductPopup = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "KL University Hoodie",
      price: "₹999",
      shortDesc: "Comfortable cotton hoodie with university logo.",
      longDesc:
        "This high-quality hoodie is made from 100% cotton and features the official KL University logo. Perfect for casual wear and college events!",
      image: "src/KL.jpg"

    },
    {
      id: 2,
      name: "KLU Water Bottle",
      price: "₹299",
      shortDesc: "Eco-friendly stainless steel bottle.",
      longDesc:
        "Keep your beverages hot or cold for hours with this double-wall stainless steel bottle. Engraved with the KL University emblem.",
      image: "src/bottle.jpg.png",
    },
    {
      id: 3,
      name: "KLU Notebook",
      price: "₹199",
      shortDesc: "Stylish spiral notebook for students.",
      longDesc:
        "A durable spiral notebook with 200 ruled pages and a soft-touch cover featuring the KL University crest. Great for taking notes in class.",
      image: "src/no.jpg.png",
    },
  ];

  // State for popup visibility and selected product
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="product-container">
      <h2>KL University Online Store</h2>
      <div className="product-list">
        {products.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => setSelectedProduct(p)}
          >
            <h3>{p.name}</h3>
            <p>{p.price}</p>
            <p>{p.shortDesc}</p>
          </div>
        ))}
      </div>

      {/* Pop-up Overlay */}
      {selectedProduct && (
        <div className="popup-overlay" onClick={() => setSelectedProduct(null)}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <img src={selectedProduct.image} alt={selectedProduct.name} />
            <h3>{selectedProduct.name}</h3>
            <p><strong>Price:</strong> {selectedProduct.price}</p>
            <p>{selectedProduct.longDesc}</p>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPopup;
