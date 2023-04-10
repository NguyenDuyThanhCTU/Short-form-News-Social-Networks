import {configureStore} from '@reduxjs/toolkit'
import AuthSlice from './AuSlice'
import NewsSlice from './NewsSlice'

const store = configureStore({
  reducer: {
    Auth: AuthSlice,
    News: NewsSlice,
    // PostNews: PostNewsSlice,
    // News1: NewsSlice1,
  },
})

export default store
