import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  isAuthenticated: false, // To track if the user is logged in
  user: null, // Store user details when logged in
  token: null, // Store JWT or token if needed
};

// Create a slice for authentication
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set login state
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    // Action to set logout state
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
    },
  },
});

// Export the actions to use them in components
export const { login, logout } = authSlice.actions;

// Export the reducer
export default authSlice.reducer;
