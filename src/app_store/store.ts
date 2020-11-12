import {configureStore} from "@reduxjs/toolkit"
// Reducer.
import productsSlice from "../components/slices/product.slice";

export default configureStore({
    reducer: { // Here we have our reducers.
      products: productsSlice,
    },
  });