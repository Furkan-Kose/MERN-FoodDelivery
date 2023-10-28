import axios from 'axios';

const baseURL = 'http://localhost:5015';

export const getAllFoods = async () => {
  try {
    const response = await axios.get(`${baseURL}/foods`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getFoodById = async (id: number) => {
  try {
    const response = await axios.get(`${baseURL}/food/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
