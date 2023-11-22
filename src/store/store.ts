import { configureStore } from "@reduxjs/toolkit";
import addToCart from "../reducers/addToCart";
import  likeProducts  from "../reducers/likeProduct";

export const store = configureStore({
  reducer: { 
    cart: addToCart,
    like: likeProducts
  },
});