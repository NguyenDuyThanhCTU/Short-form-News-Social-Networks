import axios from 'axios'

import {LoginSucces, RegisterSuccess} from './AuSlice'

import {PostStart, PostSuccess, PostError} from './NewsSlice'

const PostNews = async (news, dispatch) => {
  dispatch(PostStart())
  try {
    const res = await axios.post('http://localhost:8080/post/upload', news)
    dispatch(PostSuccess(res.data))
  } catch (err) {
    dispatch(PostError())
  }
}

export {PostNews}
