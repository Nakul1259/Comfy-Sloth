import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";
// import { useParams } from 'react-router-dom'

function Location({ title, product }) {
  return (
    <div>
      <div className="location">
        <h1>
          <span>
            <Link to="/">Home</Link>
          </span>
          <span>{product && <Link to="/products">/ Products</Link>}</span>
          &nbsp;/ {title}
        </h1>
      </div>
    </div>
  );
}

export default Location;
