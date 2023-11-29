import {configureStore} from "@reduxjs/toolkit";
import productDetails from "../productDetails/productDetails";
import allProducsDetailsSlice from "../productDetails/allProducsDetailsSlice";

export const store = configureStore({
  reducer:{
    app:productDetails,
    products:allProducsDetailsSlice
  }
})