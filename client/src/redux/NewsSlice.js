import {createSlice} from '@reduxjs/toolkit'

const NewsSlice = createSlice({
  name: 'News',
  initialState: {
    PostDataReq: {
      title: '',
      introduction: '',
      body: '',
      hashtag: [],
      conclusion: [],
      image: '',
      video: '',
      option: 1,
      caption: '',
      user: '',
      topic: 'development',
    },
    PostDataRes: {
      currentPost: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    NewsUp: (state, action) => {
      state.PostDataReq.title = action.payload.title
      state.PostDataReq.introduction = action.payload.introduction
      state.PostDataReq.body = action.payload.body
      state.PostDataReq.hashtag = action.payload.hashtag
      state.PostDataReq.conclusion = action.payload.conclusion
      state.PostDataReq.image = action.payload.image
      state.PostDataReq.option = action.payload.option
    },
    NewsPost: (state, action) => {
      state.PostDataReq.topic = action.payload.topic
      state.PostDataReq.user = action.payload.user
      state.PostDataReq.video = action.payload.video
      state.PostDataReq.caption = action.payload.caption
    },
    PostStart: (state) => {
      state.PostDataRes.isFetching = true
    },
    PostError: (state) => {
      state.PostDataRes.error = true
    },
    PostSuccess: (state, action) => {
      state.PostDataRes.currentPost = action.payload
    },
  },
})

export default NewsSlice.reducer
export const {NewsUp, NewsPost, PostStart, PostSuccess, PostError} =
  NewsSlice.actions
