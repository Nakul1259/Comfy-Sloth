import React from "react";
import { formatPrice, getUniqueValues } from "../utils/Helpers";
import "./filters.css";
import { FaCheck } from "react-icons/fa";
import Search from "./Search";
import { useFilterContext } from "../context/FilterContext";

function Filters() {
  // const {categories} = getUniqueValues()
  // console.log(categories);

  const {
    filters: {
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    clearFilters,
    all_products,
  } = useFilterContext();

  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");

  console.log(categories);
  return (
    <div className="content">
      <Search className="search-comp" />

      <div className="form-control">
        <h3>Category</h3>
        <div>
          {categories.map((c, index) => {
            return (
              <button
                key={index}
                onClick={updateFilters}
                type="button"
                name="category" 
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      <div className="form-control">
        <h3>Company</h3>
        <div>
          <select
            name="company"
            className="company"
            onChange={updateFilters}
            value={company}
          >
            {companies.map((c, index) => {
              return (
                <option key={index} value={c}>
                  {c}
                </option>
              );
            })}
          </select>
          {/* <option value="all">all</option>
            <option value="marcos">marcos</option>
            <option value="liddy">liddy</option>
            <option value="ikea">ikea</option>
            <option value="caressa">caressa</option> */}
        </div>
      </div>

      <div className="form-control">
        <h3>Colors</h3>
        <div className="colors">
          {colors.map((c, index) => {
            if (c === "all") {
              return (
                <button
                  key={index}
                  style={{ marginRight: "7px" }}
                  name="color"
                  data-color="all"
                  className="all-btn active"
                  onClick={updateFilters}
                >
                  all
                </button>
              );
            }

            return (
              <button
                key={index}
                style={{ background: c }}
                className="color-btn active"
                name="color"
                onClick={updateFilters}
                data-color={c}
              >
                {color === c ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div className="form-control">
        <h3>Price</h3>
        <p className="price">{formatPrice(price)}</p>
        <input
          type="range"
          name="price"
          onChange={updateFilters}
          max={max_price}
          min={min_price}
          value={price}
        />
      </div>
      <div className="form-control">
        <div className="free-shipping">
          <span>Free Shipping</span>
          <input
            type="checkbox"
            name="shipping"
            id="shipping"
            onChange={updateFilters}
            checked={shipping}
          />
        </div>
      </div>
      <div className="form-control">
        <button className="filter-btn" onClick={clearFilters}>
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default Filters;
