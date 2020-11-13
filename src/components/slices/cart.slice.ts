import {createSlice, Dispatch} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart_items: []
    },
    reducers: {
       get_cart_items(state:any, action:any) {
           state.cart_items = action.payload
       } 
    }
})