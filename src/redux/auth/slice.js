import { createSlice } from '@reduxjs/toolkit';
import { register } from './operations';
import { logIn } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};


const authSlice = createSlice({
    name: 'auth',
    initialState,
    
    extraReducers: {
        [register.fulfilled](state, action) {
            console.log(action)
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        [register.rejected]() {
            console.log("rejected in slice")
        },
        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
    }

});

export const authReducer = authSlice.reducer;