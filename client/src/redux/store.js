import configureStore from '@reduxjs/toolkit';
import AuthSlice from './AuSlice';

const store = configureStore({
  reducer: {
    Auth: AuthSlice,
  },
});

export default store;
