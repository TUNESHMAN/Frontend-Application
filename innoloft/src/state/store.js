import thunk from "redux-thunk";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import productReducer from "./reducers/productReducer";
// import formulaReducer from "./reducers/formulaReducer";

const mainReducer = combineReducers({
product: productReducer,
 
});

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
    : (n) => n;
const store = createStore(
  mainReducer,
  {},
  compose(applyMiddleware(thunk /* ,etc , other middlewares */), devTools)
);

export default store;
