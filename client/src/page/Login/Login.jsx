import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import InputL from './InputL'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import Button from '../../component/Button/Button'
import {useState} from 'react'
import axios from 'axios'
import {FaSpinner} from 'react-icons/fa'
import {BsCheck2Circle} from 'react-icons/bs'
import {LoginSucces} from '../../redux/AuSlice'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [Correct, setCorrect] = useState(false)
  const [Uncorrect, setUncorrect] = useState(false)
  const [Loading, setLoading] = useState(false)

  const login = async (user) => {
    try {
      const res = await axios.post('http://localhost:8080/login/', user)
      dispatch(LoginSucces(res.data))
      setLoading(false)
      setCorrect(true)
      setTimeout(() => {
        setLoading(true)
      }, 1000)
      setTimeout(() => {
        navigate('/')
      }, 3000)
    } catch (error) {
      if (error.response && error.response.status !== 200) {
        // console.log('Login error: ', error.response.data)
        setLoading(false)
        setUncorrect(true)
        setTimeout(() => {
          setUncorrect(false)
        }, 2000)
      } else {
        console.log('Unexpected error: ', error)
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('username cannot be empty'),
      password: Yup.string().required('password cannot be empty'),
    }),
    onSubmit: (values) => {
      setLoading(true)

      const user = values
      login(user)
    },
  })

  return (
    <div className="overflow-hidden z-[100] bg-gray-900 bg-opacity-75  w-full h-full absolute top-0 bottom-0 right-0 left-0 pt-12">
      {Uncorrect ? (
        <div
          class=" px-4 py-3 rounded  fixed right-0 top-0 mt-20 transform translate-x-full delay-1000 transition duration-1000"
          role="alert"
        >
          <strong class="font-bold">Login Failed! </strong>
          <span class="block sm:inline">
            Vui lòng kiểm tra lại thông tin đăng nhập của bạn.
          </span>
        </div>
      ) : (
        <div
          className="bg-red-100 border border-red-400 text-red-700 w-1 "
          role="alert"
          style={{transform: 'translateX(0)'}}
        ></div>
      )}
      {Correct ? (
        <div
          class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded  fixed right-0 top-0 mt-20 transform delay-1000 translate-x-full transition duration-1000"
          role="alert"
        >
          <BsCheck2Circle className="inline-block mr-2 text-2xl" />
          <strong class="font-bold">Login Success!</strong>
        </div>
      ) : (
        <div
          className="bg-green-100 border border-green-400 text-green-700 w-1 "
          role="alert"
          style={{transform: 'translateX(0)'}}
        ></div>
      )}

      <div className="min-h-screen  flex flex-col justify-center sm:py-16">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            {Loading && (
              <div class="z-[100] fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center">
                  <div className="text-xl font-bold text-primary flex flex-col items-center">
                    <FaSpinner className="animate-spin text-2xl text-black " />
                    <div className="text-xl font-bold text-white animate-pulse pt-1">
                      Loading...
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Link to="/">
              <span className="absolute top-4 right-6 text-4xl hover:text-red-600">
                <AiOutlineCloseCircle />
              </span>
            </Link>
            {/* container */}
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-3xl font-semibold text-gray-800">Login</h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  className="pt-6 pb-4 mb-4"
                  method="POST"
                  onSubmit={formik.handleSubmit}
                >
                  {/* input email */}
                  <InputL
                    id="username"
                    name="Username"
                    getdata={formik.handleChange}
                    getvalue={formik.values.username}
                    value="Enter username ..."
                    error={formik.errors.username}
                  />
                  {/* input password */}
                  <InputL
                    getdata={formik.handleChange}
                    getvalue={formik.values.password}
                    value="Enter password ..."
                    error={formik.errors.password}
                    id="password"
                    name="Password"
                  />
                  {/* Buttons */}
                  <div className="flex items-center justify-around mt-6">
                    <Button style="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 w-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                      Sign In
                    </Button>
                  </div>
                  <div className="mt-6">
                    <p className="text-gray-600 text-center">
                      Don't have an account?{' '}
                      <Link to="/register">
                        <a href="#" className="text-indigo-500 font-bold">
                          Sign up here
                        </a>
                      </Link>
                    </p>
                    <p className="text-gray-600 text-center">
                      Forgot your password?{' '}
                      <Link to="/losspassword">
                        <a href="#" className="text-indigo-500 font-bold">
                          here
                        </a>
                      </Link>
                    </p>
                  </div>
                </form>
                {/* Description */}
                <div className="pt-4 text-center text-gray-500 text-xs">
                  <span>&copy; 2023 Group 2. All rights reserved.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
