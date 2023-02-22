import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
  name: "Auth",
  initialState: {
    login: {
      currentUser: null,
      isFetching: false,
      error: false,
    },
    register: {
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
    },
    RegisterSuccess: (state, action) => {
      state.register.isFetching = false;
      state.register.error = true;
    },
    LoginStart: (state) => {
      state.login.isFetching = true;
    },
    LoginSucces: (state, action) => {
      state.login.isFetching = false;
      state.login.currentUser = action.payload;
      state.login.error = false;
    },
    LoginError: (state) => {
      state.login.error = true;
    },
  },
});

export const {
  RegisterStart,
  RegisterError,
  RegisterSuccess,
  LoginStart,
  LoginSucces,
  LoginError,
} = AuthSlice.actions;
export default AuthSlice.reducer;
