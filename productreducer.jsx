const initialState = {
    products: [],
    cart: [],
  };
  
  const productreducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload };
      case 'ADD_TO_CART':
        return { ...state, cart: [...state.cart, action.payload] };
      default:
        return state;
    }
  };
  
  export default productreducer;
  