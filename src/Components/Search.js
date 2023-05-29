import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context";



function Search() {

    const  {handleSearch, handleSubmit, search} =useGlobalContext();

  return (
    <div className="filter-items">
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" value={search} onChange= {handleSearch} />
      </form>
    </div>
  );
}

export default Search;
