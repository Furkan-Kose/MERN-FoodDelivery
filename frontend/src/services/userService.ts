import axios from 'axios';
import {UserType} from "../types"

const baseURL = 'http://localhost:5015';

export const register = async (userData: UserType) => {
  try {
    const response = await axios.post(`${baseURL}/api/Users/registration`, userData);
    return response.data;
  } catch (error) {
    console.error('Kayıt işlemi sırasında bir hata oluştu:', error);
    throw error; 
  }
};

export const login = async (userData: UserType) => {
  try {
    const response = await axios.post(`${baseURL}/api/Users/login`, userData);
    return response.data;
  } catch (error) {
    console.error('Giriş işlemi sırasında bir hata oluştu:', error);
    throw error;
  }
}


