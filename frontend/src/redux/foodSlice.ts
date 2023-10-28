import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllFoods, getFoodById } from '../services/foodService';

export const getAllFoodsAsync = createAsyncThunk('food/getAllFoods', async () => {
  return await getAllFoods();
});

export const getFoodByIdAsync = createAsyncThunk('food/getFoodById', async (id: number) => {
  return await getFoodById(id);
});

const foodSlice = createSlice({
  name: 'food',
  initialState: { foods: [], selectedFood: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFoodsAsync.fulfilled, (state, action) => {
        state.foods = action.payload;
      })
      .addCase(getFoodByIdAsync.fulfilled, (state, action) => {
        state.selectedFood = action.payload;
      });
  },
});

export default foodSlice.reducer;
