import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { LoginReducer, SignupReducer } from "./auth/authReducer";

const rootReducer = combineReducers({
  postSignUp: SignupReducer,
  postLogin: LoginReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
