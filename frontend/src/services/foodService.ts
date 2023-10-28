import axios from 'axios';

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

export const getFoodById = async (id: number) => {
  try {
    const response = await axios.get(`${baseURL}/food/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error('Failed to fetch food by ID: ' + error.message);
  }
};
