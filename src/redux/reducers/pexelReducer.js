import { getQuery } from "../actions/pexelActions";
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  gallery: [],
  query: "",
};

const pexelReducer = createReducer(initialState.query, {
  [getQuery]: (state, action) => {
    return action.payload;
  },
});

export default pexelReducer;
