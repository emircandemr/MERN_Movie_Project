import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user : JSON.parse(sessionStorage.getItem('user')) || false,
    },
    reducers: {
        loginReducer : (state, action) => {
            state.user = action.payload;
            sessionStorage.setItem('user', JSON.stringify(action.payload));
            console.log(state.user)
        },
        logoutReducer : (state) => {
            state.user = false;
            sessionStorage.removeItem('user');
        },
    }
});

export const { loginReducer,logoutReducer} = authSlice.actions;

export default authSlice.reducer;
