import {configureStore} from "@reduxjs/toolkit";
import productDetails from "../productDetails/productDetails";

export const store = configureStore({
  reducer:{
    app:productDetails,
  }
})