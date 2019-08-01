const initialState = {
  cart: []
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      let elementExists = state.cart.find(item => {
        return item.id === action.data.id;
      });
      if (elementExists) {
        elementExists.quantity += 1;
        return {
          ...state,
          cart: [...state.cart]
        };
      }
      return {
        ...state,
        cart: [...state.cart, { ...action.data, quantity: 1 }]
      };

    default:
      return state;
  }
};

export default CartReducer;

// TODO: if element exists increment quantity else add element to cart
