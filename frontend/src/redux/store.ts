import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './foodSlice';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const store = configureStore({
  reducer: {
    food: foodReducer,
    user: userReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export type RootState = ReturnType<typeof store.getState>; 
export type DispatchType = typeof store.dispatch;

export default store;
