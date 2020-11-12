import { getProducts } from '../api/index.api';
import {createSlice} from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "products",
    initialState: {
        value: {}
    },
    reducers:{ 
        get_products: state => {
            state.value = {id:1, name:"Shahzaib"}
            return state
        }
    }
})

export const {get_products} = productsSlice.actions

export default productsSlice.reducer;