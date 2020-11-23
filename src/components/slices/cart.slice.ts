import {createSlice, Dispatch} from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart_items: [],
        isCheckout: false
    },
    reducers: {
       get_cart_items(state:any, action:any) {
           state.cart_items = action.payload
       },
       add_cart_items: (state:any, action:any)=>{
           state.cart_items = [action.payload, ...state.cart_items]
       },
       remove_cart_items: (state:any, action:any)=>{
        state.cart_items.filter( (cart_item:any) => cart_item.id !== action.payload)
       },
       cart_checkout: (state:any) => {
           state.cart_items = []
           state.isCheckout = true
       }
    //    add_cart_items: (state, action) => {
    //     return state.cart_items.map((cart_item:any) => {
    //       if (cart_item.id !== action.payload.id) {
    //         return cart_item
    //       }
  
    //       return {
    //         ...cart_item,
    //         added: true
    //       }
    //     })
    //   },
    //   remove_cart_item: (state, action) => {
    //     return state.cart_items.map((cart_item:any) => {
    //       if (cart_item.id !== action.payload.id) {
    //         return cart_item
    //       }
  
    //       return {
    //         ...cart_item,
    //         added: false
    //       }
    //     })
    //   }
    }
})

// Actions.
export const {get_cart_items, add_cart_items, remove_cart_items, cart_checkout} = cartSlice.actions

// Selector.
export const cartItemsSelector = (state:any) => (state.cart_items)

export default cartSlice.reducer