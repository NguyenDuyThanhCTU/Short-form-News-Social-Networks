import axios from 'axios'

import {LoginSucces, RegisterSuccess} from './AuSlice'

import {PostStart, PostSuccess, PostError} from './NewsSlice'

const PostNews = async (news, dispatch, navigate) => {
  dispatch(PostStart())
  console.log(news)
  try {
    const res = await axios.post('http://localhost:8080/post/upload', news)
    dispatch(PostSuccess(res.data))
    // navigate('/')
  } catch (err) {
    dispatch(PostError())
  }
}

export {PostNews}
