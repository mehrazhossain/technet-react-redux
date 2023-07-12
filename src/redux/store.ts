import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import productReducers from './features/products/productSlice';
import { api } from './api/apiSlice';
import userReducers from './features/user/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducers,
    user: userReducers,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
