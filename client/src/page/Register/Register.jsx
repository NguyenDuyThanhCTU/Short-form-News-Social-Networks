import {useFormik} from 'formik'
import InputR from './InputR'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import axios from 'axios'
import {useState} from 'react'
import {BsCheck2Circle} from 'react-icons/bs'
import {FaSpinner} from 'react-icons/fa'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [Correct, setCorrect] = useState(false)
  const [Uncorrect, setUncorrect] = useState(false)
  const [Loading, setLoading] = useState(false)

  const Signup = async (user) => {
    try {
      await axios.post('http://localhost:8080/signup/', user)

      setLoading(false)
      setCorrect(true)
      setTimeout(() => {
        navigate('/')
      }, 2000)
    } catch (error) {
      if (error.response && error.response.status !== 200) {
        setLoading(false)
        setUncorrect(true)
      } else {
        console.log('Unexpected error: ', error)
      }
    }
  }

  const Formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('username cannot be empty')
        .min(5, 'username must be 5 characters or more'),
      email: Yup.string()
        .required('')
        .matches(
          /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          'please enter a valid email address'
        ),
      password: Yup.string()
        .required('')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          'password is minimum 8 characters, at least one letter and one number'
        ),
      confirmPassword: Yup.string()
        .required('')
        .oneOf([Yup.ref('password'), null], 'password not match'),
    }),
    onSubmit: (values) => {
      const user = values
      delete user.confirmPassword
      Signup(user)
    },
  })

  return (
    <div className="overflow-hidden z-[100] bg-gray-900 bg-opacity-75  w-full h-full absolute top-0 bottom-0 right-0 left-0 pt-2">
      {Uncorrect ? (
        <div
          class=" px-4 py-3 rounded  fixed right-0 top-0 mt-20 transform translate-x-full delay-1000 transition duration-1000"
          role="alert"
        >
          <strong class="font-bold">Signup Failed! </strong>
          <span class="block sm:inline">Tài khoản hoặc email đã tồn tại.</span>
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
          <strong class="font-bold">Signup Success!</strong>
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
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-16 w-[450px] ">
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
              <span className="absolute top-4 right-4 text-4xl hover:text-red-600">
                <AiOutlineCloseCircle />
              </span>
            </Link>

            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-8 mb-8 text-center text-3xl font-extrabold text-gray-900">
                Sign Up
              </h2>
            </div>
            <form
              className="space-y-6"
              action="#"
              method="POST"
              onSubmit={Formik.handleSubmit}
            >
              <InputR
                id={'username'}
                name={'Name'}
                getdata={Formik.handleChange}
                getvalue={Formik.values.username}
                error={Formik.errors.username}
              />

              <InputR
                id={'email'}
                name={'Email Adress'}
                getdata={Formik.handleChange}
                getvalue={Formik.values.email}
                error={Formik.errors.email}
              />

              <InputR
                id={'password'}
                name={'Password'}
                type={'password'}
                getdata={Formik.handleChange}
                getvalue={Formik.values.password}
                error={Formik.errors.password}
              />

              <InputR
                type={'password'}
                id={'confirmPassword'}
                name={'Confirm Password'}
                getdata={Formik.handleChange}
                getvalue={Formik.values.confirmPassword}
                error={Formik.errors.confirmPassword}
              />
              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-12"
                >
                  Sign up
                </button>
              </div>
              <div className="mt-6">
                <p className="text-gray-600 text-center">
                  Already have an account?{' '}
                  <Link to="/login">
                    <a href="#" className="text-indigo-500 font-bold">
                      Sign in here
                    </a>
                  </Link>
                </p>
              </div>
            </form>
            <div className="pt-4 text-center text-gray-500 text-xs">
              <span>&copy; 2023 Group 2. All rights reserved.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
