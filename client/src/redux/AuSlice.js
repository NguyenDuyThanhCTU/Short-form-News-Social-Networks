import {createSlice} from '@reduxjs/toolkit'

const AuthSlice = createSlice({
  name: 'Auth',
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
    RegisterSuccess: (state, action) => {
      state.register.isFetching = false
      state.register.error = true
    },
    LoginSucces: (state, action) => {
      state.login.isFetching = false
      state.login.currentUser = action.payload
      state.login.error = false
    },

    clearLogin: (state) => {
      state.login.currentUser = null
      state.login.isFetching = false
      state.login.error = false
    },
  },
})

export const {RegisterSuccess, LoginSucces, clearLogin} = AuthSlice.actions
export default AuthSlice.reducer
