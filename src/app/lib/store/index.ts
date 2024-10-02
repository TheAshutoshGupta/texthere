import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import authReducer from './slices/authSlice';

// Create the Redux store
const makeStore = () =>
  configureStore({
    reducer: {
      auth: authReducer, // Add the auth reducer to handle login state
    },
  });

export const wrapper = createWrapper(makeStore);
