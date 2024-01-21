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

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${baseURL}/users`);
    return response.data;
  } catch (error) {
    console.error('Kullanıcıları getirme işlemi sırasında bir hata oluştu:', error);
    throw error;
  }
};

export const createUser = async (user: UserType) => {
  try {
    const response = await axios.post(`${baseURL}/user`, user);
    return response.data;
  } catch (error) {
    console.error('Kullanıcı oluşturma işlemi sırasında bir hata oluştu:', error);
    throw error;
  }
}

export const updateUser = async (id: string, user: UserType) => {
  try {
    const response = await axios.put(`${baseURL}/user/${id}`, user);
    return response.data;
  } catch (error) {
    console.error('Kullanıcı güncelleme işlemi sırasında bir hata oluştu:', error);
    throw error;
  }
}

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${baseURL}/user/${id}`);
    return response.data;
  } catch (error) {
    console.error('Kullanıcı getirme işlemi sırasında bir hata oluştu:', error);
    throw error;
  }
}

export const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(`${baseURL}/user/${id}`);
    return response.data;
  } catch (error) {
    console.error('Kullanıcı silme işlemi sırasında bir hata oluştu:', error);
    throw error;
  }
}
