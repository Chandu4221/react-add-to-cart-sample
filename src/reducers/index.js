import { combineReducers } from "redux";
import UsersReducer from "./UsersReducer";
import CartReducer from "./CartReducer";

const RootReducer = combineReducers({
  UsersReducer,
  CartReducer
});

export default RootReducer;
