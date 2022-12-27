import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user : JSON.parse(localStorage.getItem('user')) || false,
        // isAuth : JSON.parse(localStorage.getItem('user')) ? true : false
    },
    reducers: {
        loginReducer : (state, action) => {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
            console.log(state.user)
        },
        logoutReducer : (state) => {
            state.user = false;
            localStorage.removeItem('user');
        },
    }
});

export const { loginReducer,logoutReducer} = authSlice.actions;

export default authSlice.reducer;
