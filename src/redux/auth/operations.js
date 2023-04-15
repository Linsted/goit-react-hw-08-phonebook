import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// Utility to add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
    async (credentials, thunkAPI) => {
      
        console.log(credentials);

      try {
       
      const res = await axios.post('/users/signup', credentials);
      // After successful registration, add the token to the HTTP header
          setAuthHeader(res.data.token);
          
      return res.data;
      } catch (error) {
          console.log( "Operations catch" ,"Помилка " , error )
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
    async (credentials, thunkAPI) => {
      
        console.log(credentials)
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
        setAuthHeader(res.data.token);
        console.log(res.data)
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});