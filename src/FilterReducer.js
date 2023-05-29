const filter_reducer = (state, action) => {
  if (action.type === "LOAD_PRODUCTS") {
    let maxPrice = action.payload.map((p) => p.price);
    maxPrice = Math.max(...maxPrice);
    console.log(maxPrice);

    return {
      ...state,
      all_products: [...action.payload],
      filtered_products: [...action.payload],
      filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
    };
  }

  if (action.type === "UPDATE_FILTERS") {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  if (action.type === "FILTER_PRODUCTS") {
    const { all_products } = state;
    const { category, company, color, price, shipping } = state.filters;

    //we start by making fresh copy of all products
    //category
    let tempProducts = [...all_products];
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }

    //company
    if (company !== "all") {
      tempProducts = tempProducts.filter(
        (product) => product.company === company
      );
    }

    if (color !== "all") {
      tempProducts = tempProducts.filter((product) => {
        return product.colors.find((c) => c === color);
      });
    }

    //price
    tempProducts = tempProducts.filter((product) => product.price <= price);

    //shipping
    if (shipping) {
      tempProducts = tempProducts.filter(
        (product) => product.shipping === true
      );
    }

    return { ...state, filtered_products: tempProducts };
  }
  if(action.type === 'CLEAR_FILTERS'){
    return{
      ...state,
      filters: {
        ...state.filters,
        category: "all",
        company: "all",
        color: "all", 
        price: state.filters.max_price,
        shipping: false,
      },
      
    }
  }

  throw new Error(`NO MATCHING "${action.type}" - action-type`);
};

export default filter_reducer;
