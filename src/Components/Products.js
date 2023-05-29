import React from "react";
import Location from "./Location";
import "./Products.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import Filters from "./Filters";
import { useFilterContext } from "../context/FilterContext";


function addCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Products() {
  const { loading, error, data, search } = useGlobalContext();
  // const { products } = useProductsContext();
  const {filtered_products: products} = useFilterContext()

  // console.log(products);

  const filteredData = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <h1 className="loading"></h1>;
  }
  return (
    <>
      <Location title="products" product={products.name} />

      <div className="product-items">
        <div className="filter">
      <Filters />
        </div>

        <div className="products">
          {filteredData.map((product) => {
            const { id, name, price, image } = product;
            return (
              <div key={id} className="product">
                <img src={image} alt="" />
                {/* <a className="link" href={`./products/id:`}>
                 */}
                <Link to={`./${id}`} className="link">
                  <FaSearch className="search-icon" />
                </Link>
                <div className="description">
                  <p>{name}</p>
                  <span>${addCommas((price / 100).toFixed(2))}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Products;
