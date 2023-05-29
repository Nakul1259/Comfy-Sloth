import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "./SingleProduct.css";
import { single_product_url } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useCart } from "./UseCart";
import { useProductsContext } from "../context/ProductContext";
import { useCartContext } from "../context/CartContext";
import Location from "./Location";
const url = single_product_url;

function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function SingleProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  // const { data } = useFetch(`${url}${id}`);
  const { addToCart } = useCartContext();


  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    getSingleProduct,
  } = useProductsContext();



  useEffect(() => {
    getSingleProduct(`${url}${id}`);
  }, [id]);

  console.log(product);



  const [amount, setAmount] = useState(1);
  

  const increaseAmount = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount + 1;
      if (tempAmount > stock) {
        tempAmount = stock;
      }
      return tempAmount;
    });
  };

  const decreaseAmount = () => {
    setAmount((prevAmount) => {
      let tempAmount = prevAmount - 1;
      if (tempAmount < 1) {
        tempAmount = 1;
      }
      return tempAmount;
    });
  };

  const { handleAddToCart } = useCart(); // use handleAddToCart her
  if (loading) {
    return <h1 className="loading"></h1>;
  }

  // if (!data || !data.images || !data.images.length) {
  //   return null;
  // }

  if (!product || !product.images || !product.images.length) {
    return null;
  }
  const {
    id: sku,
    name,
    description,
    category,
    company,
    price,
    title,
    stock,
    images,
  } = product;

  // console.log(data);

  // setCount(stock)

  const { url: imageUrl } = product.images[0];
  // console.log(imageUrl);
  // const imageURL = data.images.url

  return (
    <>
    <Location title={name} product />
    <div className="single-products">
      <Link to="/products">
        <button className="btn sp-btn">back to products</button>
      </Link>

      <div className="single-product">
        <img src={imageUrl} />
        <div className="single-product-desc">
          <h1 className="title">{name}</h1>
          <span className="price">${addCommas((price / 100).toFixed(2))}</span>
          <p>{description}</p>
          <div className="other-details">
            <span className="info" style={{ textTransform: "capitalize" }}>
              <strong>Available :</strong>{" "}
              {stock > 0 ? "in stock" : "out of stock"}
            </span>
            <span className="info">
              <strong>SKU :</strong> {sku}
            </span>
            <span className="info" style={{ textTransform: "capitalize" }}>
              <strong>Brand :</strong> {company}
            </span>
          </div>
          <hr />
          {stock > 0 && (
            <>
              <div className="btn-container">
                <button className="minus" onClick={() => decreaseAmount()}>
                  <FaMinus />
                </button>
                <h1 className="num">{amount}</h1>
                <button className="plus" onClick={() => increaseAmount()}>
                  <FaPlus />
                </button>
              </div>
              <Link to='/cart'>
              <button
                className="btn"
                onClick={() => addToCart(id, product, amount)}
              >
                Add to Cart
              </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
    </>
  );
}

export default SingleProduct;
