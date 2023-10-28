import { configureStore } from '@reduxjs/toolkit';
import foodReducer from './foodSlice';
import userReducer from './userSlice';

const store = configureStore({
  reducer: {
    food: foodReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>; 

export type DispatchType = typeof store.dispatch;

export default store;
