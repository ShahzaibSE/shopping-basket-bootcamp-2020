import {createSlice, Dispatch} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart_items: []
    },
    reducers: {
       get_cart_items(state:any, action:any) {
           state.cart_items = action.payload
       },
       add_cart_items: (state:any, action:any)=>{
           state.cart_items.push(action.payload)
        //    state.cart_items.map((cart_item:any) => {
        //        if(cart_item)
        //    })
       },
       remove_cart_items: (state:any, action: any)=>{

       }
    }
})

// Actions.
export const {get_cart_items, add_cart_items, remove_cart_items} = cartSlice.actions

// Selector.
export const cartItemsSelector = (state:any) => (state.cart_items)

export default cartSlice.reducer