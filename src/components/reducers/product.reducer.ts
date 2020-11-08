import {createSlice} from "@reduxjs/toolkit";

const productsReducer = createSlice({
    name: "products",
    initialState: {},
    reducers:{ 
        getProducts: (state:any, action:any) => (state)
    }
})

export default productsReducer;