import {configureStore} from "@reduxjs/toolkit"
// Reducer.
import productsReducer from "../components/reducers/product.reducer";

export default configureStore({
    reducer: {
      get_products: productsReducer.actions.getProducts,
    },
  });