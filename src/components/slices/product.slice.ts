import {createSlice, Dispatch} from "@reduxjs/toolkit";
// API.
import {getProducts} from "./../api/index.api";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers:{ 
        get_products: (state, action)=>{
          state.products = action.payload
        }
    }
})

export const {get_products} = productsSlice.actions

// Slice/Selector functions
export const productListSelector = (state:any) => state.products

export function fetchProducts(){
    return async (dispatch:Dispatch) => {
    
        try {
          const response = await fetch('/basket/items')
          const data = await response.json()
    
          dispatch(get_products(data))
        } catch (error) {
          throw new Error("500 Internal server error.")
        }
      }
}

export default productsSlice.reducer;