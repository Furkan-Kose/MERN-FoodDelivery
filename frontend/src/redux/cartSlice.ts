import { createSlice } from "@reduxjs/toolkit";
import { FoodType } from "../types";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    foods: [] as FoodType[],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addFoodToCart: (state, action) => {
      const { food, quantity } = action.payload;
      state.quantity += quantity;
      const existingFood = state.foods.find((item) => item._id === food._id);
      if (existingFood) {
        existingFood.quantity += quantity;
      } else {
        state.foods.push({ ...food, quantity });
      }
      state.totalPrice += food.price * quantity;
    },
    
    removeFoodFromCart: (state, action) => {
      const { id, quantity } = action.payload;
      const foodIndex = state.foods.findIndex(food => food._id === id);
      if (foodIndex !== -1) {
        const food = state.foods[foodIndex];
        state.quantity -= quantity;
        state.totalPrice -= food.price * quantity;
        if (food.quantity === quantity) {
          state.foods.splice(foodIndex, 1);
        } else {
          food.quantity -= quantity;
        }
      }
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const food = state.foods.find(food => food._id === id);
      if (food) {
        state.totalPrice += (quantity - food.quantity) * food.price;
        food.quantity = quantity;
      }
    },

    
  }
});

export const { addFoodToCart, removeFoodFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
