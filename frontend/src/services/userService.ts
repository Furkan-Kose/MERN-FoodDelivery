import axios from 'axios';
import {UserType} from "../types"

const baseURL = 'http://localhost:5000';

export const register = async (userData: UserType) => {
  try {
    const response = await axios.post(`${baseURL}/register`, userData);
    return response.data;
  } catch (error) {
    console.error('Kayıt işlemi sırasında bir hata oluştu:', error);
    throw error; 
  }
};

export const login = async (userData: UserType) => {
  try {
    const response = await axios.post(`${baseURL}/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Giriş işlemi sırasında bir hata oluştu:', error);
    throw error;
  }
}


