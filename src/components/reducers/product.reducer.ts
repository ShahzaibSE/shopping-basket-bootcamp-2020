import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        value:{id:1, name: "Shahzaib Noor"}
    },
    reducers:{ 
        getProducts: (state:any, action:any) => (state)
    }
})

export default productsSlice;