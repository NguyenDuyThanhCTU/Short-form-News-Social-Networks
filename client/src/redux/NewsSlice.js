import {createSlice} from '@reduxjs/toolkit'

const NewsSlice = createSlice({
  name: 'News',
  initialState: {
    title: '',
    introduction: '',
    body: '',
    hashtag: '',
    conclusion: '',
    image: null,
    option: '',
    video: '',
    caption: '',
    topic: '',
  },
  reducers: {
    NewsUp: (state, action) => {
      state.title = action.payload.title
      state.introduction = action.payload.introduction
      state.body = action.payload.body
      state.hashtag = action.payload.hashtag
      state.conclusion = action.payload.conclusion
      state.image = action.payload.image
      state.option = action.payload.option
    },
    NewsPost: (state, action) => {
      state.topic = action.payload.topic
      state.video = action.payload.video
      state.caption = action.payload.caption
    },
  },
})

export default NewsSlice.reducer
export const {NewsUp, NewsPost} = NewsSlice.actions
