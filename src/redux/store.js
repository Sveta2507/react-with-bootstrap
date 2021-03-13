// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import pexelReducer from "./reducers/pexelReducer";

const preState =
  "window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()";

const store = configureStore({
  reducer: {
    query: pexelReducer,
  },
  devTools: preState,
});
// const rootReducer = combineReducers({
//   gallery: pexelReducer,
// });


// const store = configureStore(rootReducer, preState);

export default store;
