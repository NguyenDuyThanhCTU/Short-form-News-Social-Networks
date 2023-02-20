import { createSlice } from '@reduxjs/toolkit';

const AuthSlice = createSlice({
  name: 'Auth',
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    RegisterStart: (state) => {
      state.register.isFetching = true;
    },
    RegisterError: (state) => {
      state.register.error = true;
      state.register.isFetching = false;
    },
    RegisterSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.currentUser = action.payload;
      state.register.error = true;
    },
  },
});

export const { RegisterStart, RegisterError, RegisterSuccess } = AuthSlice.actions;
export default AuthSlice.reducer;
