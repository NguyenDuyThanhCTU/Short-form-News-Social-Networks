import axios from 'axios'

import {
  LoginError,
  LoginStart,
  LoginSucces,
  RegisterError,
  RegisterStart,
  RegisterSuccess,
} from './AuSlice'

const register = async (user, dispatch, navigate) => {
  dispatch(RegisterStart())
  try {
    const res = await axios.post('http://localhost:8080/register/', user)
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

export {register, login}
