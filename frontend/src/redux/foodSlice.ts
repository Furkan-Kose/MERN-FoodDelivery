import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as foodService from '../services/foodService'; 

export const getAllFoodsAsync = createAsyncThunk('foods/getAllFoods', async (queryParams: { category?: string; query?: string }) => {
  try {
    return await foodService.getAllFoods(queryParams);
  } catch (error) {
    throw error;
  }
});

export const getFoodByIdAsync = createAsyncThunk('foods/getFoodById', async (foodId: string) => {
  try {
    return await foodService.getFoodById(foodId);
  } catch (error) {
    throw error;
  }
});

const foodSlice = createSlice({
  name: 'foods',
  initialState: { foods: [], food: null, status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllFoodsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllFoodsAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.foods = action.payload;
      })
      .addCase(getAllFoodsAsync.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getFoodByIdAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getFoodByIdAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.food = action.payload;
      })
      .addCase(getFoodByIdAsync.rejected, (state, action: any) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default foodSlice.reducer;
