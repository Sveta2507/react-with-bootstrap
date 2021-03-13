import { createAction } from "@reduxjs/toolkit";

const getQuery = createAction("GET_QUERY", (query) => {
  return {
    payload: query,
  };
});

export { getQuery };
