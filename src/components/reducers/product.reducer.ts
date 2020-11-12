import {createSlice} from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {},
    reducers:{ 
        getProducts: (state:any) => {
            state.value = {id:1, name:"Shahzaib"}
            return state 
        }
    }
})

export default productsSlice.reducer;