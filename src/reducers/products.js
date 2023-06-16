
import { ADD_NEW_PRODUCT, FETCH_PPRODUCTS_BY_USER, FETCH_PRODUCT, UPDATE_CLIENT, DELETE_CLIENT, START_LOADING, END_LOADING } from '../actions/constants'

const products = (state = { isLoading: true, products: [] }, action) => {
    switch (action.type) {
      case START_LOADING:
        return { ...state, isLoading: true };
      case END_LOADING:
        return { ...state, isLoading: false };
      case FETCH_PPRODUCTS_BY_USER:
        return { ...state, products: action.payload };

      case FETCH_PRODUCT:
        return { ...state, products: action.payload };
      case ADD_NEW_PRODUCT:
        return { ...state, products: [...state.products, action.payload] };
        case UPDATE_CLIENT:
        return { ...state, products: state.products.map((product) => (product._id === action.payload._id ? action.payload : product)) };
      case DELETE_CLIENT:
        return { ...state, products: state.products.filter((product) => product._id !== action.payload) };
      default:
        return state;
    }
  };

  export default products
