import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './AuSlice'
import NewsSlice from './NewsSlice'
const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    News: NewsSlice,
  },
})

export default store
