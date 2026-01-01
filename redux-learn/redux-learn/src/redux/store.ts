import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import productReducer from './slice/productSlice';

export const store = configureStore({
  reducer: {
    cart:cartReducer,
    products:productReducer,
  },
});