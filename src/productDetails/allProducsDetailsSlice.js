import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const getLLProducts = createAsyncThunk("getallProduct", async( rejectWithValue)=>{
    let link = "http://localhost:5000/api/product/getallproduct";

  
    const response = await fetch(link)
    // console.log("this is response product ", response)
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return rejectWithValue(error)
    }
});


const AllproductDetails = createSlice({
    name:"AllproductDetails",
    initialState: {
        Allproducts:[],
        loading:false,
        error:null,
    },

    extraReducers:{
        //For all product
        [getLLProducts .pending]:(state)=>{
            state.loading=true;
        },
        [getLLProducts .fulfilled]:(state, action)=>{
            state.loading=false;
            state.Allproducts = action.payload
        },
        [getLLProducts .rejected]:(state, action)=>{
            state.loading=false;
            state.Allproducts=action.payload.message;
        },
    }
})

export default AllproductDetails.reducer;