import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer, registerReducer } from "./reducer";
const rootReducer = combineReducers({
  registerReducer: registerReducer,
  loginReducer: loginReducer,
});
export const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__())
);
