import { createSlice } from "@reduxjs/toolkit";


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        token: null,
        userId: null,
        email: null,
        displayName: null,
        photoURL: null,
        error: null,

    },
    reducers: {
    }
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
