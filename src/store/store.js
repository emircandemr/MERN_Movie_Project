import {configureStore} from '@reduxjs/toolkit';

import authReducer from './Slice/auth-slice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});



