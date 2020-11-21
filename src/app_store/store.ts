import {configureStore} from "@reduxjs/toolkit"
// Reducer.
import productsSlice from "../components/slices/product.slice";
import cartSlice from "../components/slices/cart.slice";

export default configureStore({
    reducer: { // Here we have our reducers.
      products: productsSlice,
      cart_items: cartSlice
    },
  });