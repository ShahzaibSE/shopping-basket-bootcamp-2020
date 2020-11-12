import {configureStore} from "@reduxjs/toolkit"
// Reducer.
import productsSlice from "../components/reducers/product.reducer";

export default configureStore({
    reducer: {
      products: productsSlice,
    },
  });