import {createSlice, Dispatch} from "@reduxjs/toolkit";
// API.
import {getProducts} from "../api/index.api";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        hasError: false,
        hasLoading: false
    },
    reducers:{ 
        get_products_success: (state, action)=>{
          state.products = action.payload
        },
        get_products_error: (state) => {
          state.hasError = true
        }
    }
})

export const {get_products_success, get_products_error} = productsSlice.actions

// Slice/Selector functions
export const productListSelector = (state:any) => state.products

export function fetchProducts(){
    return async (dispatch:Dispatch) => {
        try {
          getProducts().then(result => {
            const {data} = result;
            dispatch(get_products_success(data))
          })
        } catch (error) {
            dispatch(get_products_error())
            throw new Error("Internal server error - 500")
        }
      }
}

export default productsSlice.reducer;