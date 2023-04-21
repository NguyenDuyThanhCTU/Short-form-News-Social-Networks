import axios from 'axios'

import {
  LoginError,
  LoginStart,
  LoginSucces,
  RegisterError,
  RegisterStart,
  RegisterSuccess,
} from './AuSlice'

import {PostStart, PostSuccess, PostError} from './NewsSlice'

const register = async (user, dispatch, navigate) => {
  dispatch(RegisterStart())
  try {
    const res = await axios.post('http://localhost:8080/signup/', user)
    dispatch(RegisterSuccess(res.data))
    navigate('/login')
  } catch (error) {
    dispatch(RegisterError())
  }
}

const login = async (user, dispatch, navigate) => {
  dispatch(LoginStart())
  try {
    const res = await axios.post('http://localhost:8080/login/', user)
    dispatch(LoginSucces(res.data))
    navigate('/')
  } catch (error) {
    dispatch(LoginError())
  }
}

const PostNews = async (news, dispatch, navigate) => {
  dispatch(PostStart())
  console.log(news)
  try {
    const res = await axios.post('http://localhost:8080/video/upload', news)
    dispatch(PostSuccess(res.data))
    // navigate('/')
  } catch (err) {
    dispatch(PostError())
  }
}

export {register, login, PostNews}
