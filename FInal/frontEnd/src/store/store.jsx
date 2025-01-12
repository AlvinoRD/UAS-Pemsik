import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.jsx';
import articlesReducer from "./articleSlice.jsx";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        articles: articlesReducer
    }
});