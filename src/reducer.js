export const cartReducer = (state, action) => {
  switch (action.type) {
    case "set_products":
      return {
        ...state,
        products: action.payload,
      };
    case "add_to_cart":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};
