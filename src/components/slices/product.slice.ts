import {createSlice} from "@reduxjs/toolkit";
// API.
import {getProducts} from "./../api/index.api";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: []
    },
    reducers:{ 
        get_products: (state, action) => {
          state.products = action.payload
        }
    }
})

export const {get_products} = productsSlice.actions

// Slice/Selector functions
export const productListSelector = (state:any) => state.products

export function fetchProducts(){
    return async (dispatch: any) => {
        getProducts().then(result => {
            const {data} = result
            console.log("Products - <GridComponent/>")
            console.log(data)
            dispatch(get_products(data))
        })
    }
}

export default productsSlice.reducer;