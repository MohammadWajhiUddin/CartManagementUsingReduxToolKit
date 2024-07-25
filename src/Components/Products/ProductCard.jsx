import React from "react";
import "./ProductCard.css";
import { useDispatch, useSelector } from "react-redux";
import { addNewProductToCart } from "../../Store/Slices/AddProductSlice";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.ProductSliceInStore.ProductArray);

  const handleAddProductToCart = (product) => {
    console.log("called");
    dispatch(addNewProductToCart(product));
  };

  const inCart = cart.find((item) => item.id === product?.id);
  let path = "CartData"

  return (
    <div className="product-card ">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price}</p>
      </div>

      {inCart ? (
        <button
          style={{ width: "100%", backgroundColor: "black", borderRadius: 10 }}
          onClick={() => navigate("/CartData")}
        >
          <p style={{ fontSize: 14, color: "white" }}>Already In cart</p>
        </button>
      ) : (
        <button
          style={{ width: "100%", backgroundColor: "white", borderRadius: 10 }}
          onClick={() => handleAddProductToCart(product)}
        >
          <p style={{ fontSize: 14, color: "black" }}>Add To Cart</p>
        </button>
      )}
    </div>
  );
};

export default ProductCard;
