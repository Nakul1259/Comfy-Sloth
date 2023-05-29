import React, { useState } from "react";
import bc from "../images/hero-bcg.jpeg";
import bcc from "../images/hero-bcg-2.jpeg";
import "./Home.css";
import { services } from "../utils/constants";
import { Link } from "react-router-dom";
import example from "./example"; 
import { FaSearch } from "react-icons/fa";
import useFetch from "./fetchItem";

const url = "https://course-api.com/react-store-products";


function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Home() {
  const { loading, error, data } = useFetch(url);

  return (
    <main>
      <section className="shop">
        <article className="content">
          <h1>
            Design Your <br /> comfort zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
            recusandae nisi perferendis dicta sunt architecto impedit
            necessitatibus cumque dolorem accusamus! Modi dicta deserunt earum
            voluptatem!
          </p>
          <button className="btn">shop now</button>
        </article>
        <article className="img-container">
          <img src={bc} alt="" className="main-img" />
          <img src={bcc} alt="" className="remain-img" />
        </article>
      </section>

      <section className="featured-products">
        <h1>Featured Products</h1>
        <div className="underline"></div>
        <div className="products">
          {data.slice(0,3).map((items) => {
            const {id, name, price, image} = items;
            return (
          <div key={id} className="product">
            <img
              src={image}
              alt=""
            />
              <Link to={`./products/${id}`} className="link">
                  <FaSearch className="search-icon" />
                </Link>
            <div className="description">
              <p>{name}</p>
              <span>${addCommas((price/100).toFixed(2))}</span>
            </div>
          </div>
            )
          })}
        </div>

        <Link to='./products'><button className="btn product-btn">All Products</button></Link>
      </section>

      <section className="furniture">
        <div className="furniture-desc">
          <h1>
            Custom Furniture <br /> Built only for you
          </h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
            pariatur sunt eos doloremque accusantium veniam dolorem ipsam,
            nostrum necessitatibus numquam?
          </span>
        </div>
        <article className="function">
          {services.map((item) => {
            const { id, icon, title, text } = item;
            return (
              <div key={id} className="service">
                <div className="icon">
                  <span>{icon}</span>
                </div>
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            );
          })}
        </article>
      </section>
      <article className="newsletter">
        <h1>Join our newsletter and get 20% off</h1>
        <div className="newsletter-info">
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
            saepe quo molestiae unde dolore ab, ea esse similique ex! Quidem!
            dolore ab, ea esse similique ex! Quidem!
          </span>
          <form className="contact-form form-width">
            <input type="text" placeholder="Enter Email" />
            <button className="subs">Subscribe</button>
          </form>
        </div>
      </article>
    </main>
  );
}

export default Home;
