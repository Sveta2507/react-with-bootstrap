import { createStore, combineReducers } from "redux";
import pexelReducer from "./reducers/pexelReducer";

const rootReducer = combineReducers({
  gallery: pexelReducer,
});
const preState = "window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()";
const store = createStore(rootReducer, preState);

export default store;
