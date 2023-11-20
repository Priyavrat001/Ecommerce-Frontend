import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// read action product
export const getProduct = createAsyncThunk("getallProduct", async(rejectWithValue)=>{
    const response = await fetch("http://localhost:5000/api/product/getallproduct")
    console.log("this is response product from the fetch func", response)
    try {
        const result = await response.json()
        console.log("this is a result",result)
        return result
    } catch (error) {
        rejectWithValue(error)
    }
})



const productDetails = createSlice({
    name:"productDetails",
    initialState: {
        products:[],
        loading:false,
        error:null
    },

    extraReducers:{
        [getProduct.pending]:(state)=>{
            state.loading=true;
        },
        [getProduct.fulfilled]:(state, action)=>{
            state.loading=false;
            state.products.push(action.payload);
        },
        [getProduct.rejected]:(state, action)=>{
            state.loading=false;
            state.products=action.payload.message;
        },
    }
})





export default productDetails.reducer;