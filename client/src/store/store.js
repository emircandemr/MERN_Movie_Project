import {configureStore} from '@reduxjs/toolkit';

import authReducer from './Slice/auth-slice';
import movieReducer from './Slice/movie-slice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        movie: movieReducer,
    }
});



