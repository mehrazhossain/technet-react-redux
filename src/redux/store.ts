import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducers from './features/products/productSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
