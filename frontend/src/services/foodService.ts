import axios from 'axios';
import { FoodType } from '../types';

const baseURL = 'http://localhost:5000';

export const getAllFoods = async (queryParams: { category?: string; query?: string }) => {
  try {
    const response = await axios.get(`${baseURL}/foods`, {
      params: queryParams,
    });
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to fetch foods: ' + error.message);
  }
};

export const getFoodById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/food/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to fetch food by ID: ' + error.message);
  }
};

export const createFood = async (food: FoodType) => {
  try {
    const response = await axios.post(`${baseURL}/food`, food);
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to create food: ' + error.message);
  }
};

export const updateFood = async (id: string, food: FoodType) => {
  try {
    const response = await axios.put(`${baseURL}/food/${id}`, food);
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to update food: ' + error.message);
  }
};

export const deleteFood = async (id: string) => {
  try {
    const response = await axios.delete(`${baseURL}/food/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to delete food: ' + error.message);
  }
};

