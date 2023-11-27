import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// read action product
export const getProduct = createAsyncThunk("getallProduct", async(id, {rejectWithValue})=>{
    const response = await fetch("http://localhost:5000/api/product/getallproduct")
    // console.log("this is response product ", response)
    try {
        const result = await response.json()
        return result
    } catch (error) {
        rejectWithValue(error)
    }
})

// read action on single product
export const getSingleProduct = createAsyncThunk("getSingleProduct", async(id, {rejectWithValue})=>{
    const response = await fetch(`http://localhost:5000/api/product/getsingleproduct/${id}`)
    // console.log("this is response product ", response)
    try {
        const result = await response.json()
        return result
    } catch (error) {
        rejectWithValue(error)
    }
})


const productDetails = createSlice({
    name:"productDetails",
    initialState: {
        products:[],
        product:{} ,
        loading:false,
        error:null,
        searchData: [],
    },

    reducers: {
        searchProduct: (state, action) => {
          console.log(action.payload);
          state.searchData = action.payload;
        },
      },

    extraReducers:{
        //For all product
        [getProduct.pending]:(state)=>{
            state.loading=true;
        },
        [getProduct.fulfilled]:(state, action)=>{
            state.loading=false;
            state.products = action.payload;
        },
        [getProduct.rejected]:(state, action)=>{
            state.loading=false;
            state.error=action.payload.message;
        },
        // For the single product
        [getSingleProduct.pending]:(state)=>{
            state.loading=true;
        },
        [getSingleProduct.fulfilled]:(state, action)=>{
            state.loading=false;
            state.product = action.payload;
        },
        [getSingleProduct.rejected]:(state, action)=>{
            state.loading=false;
            state.error=action.payload.message;
        },
    }
})





export default productDetails.reducer;

export const {searchProduct} = productDetails.actions;