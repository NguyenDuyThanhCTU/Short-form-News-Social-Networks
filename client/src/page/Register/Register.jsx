import {useFormik} from 'formik'
import InputR from './InputR'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import {register} from '../../redux/apiRequest'
import {useDispatch} from 'react-redux'

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

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
      register(user, dispatch, navigate)
    },
  })

  return (
    <div className=" z-[100] bg-gray-900 bg-opacity-75  w-full h-full absolute top-0 bottom-0 right-0 left-0 pt-12">
      <div className="min-h-screen  flex flex-col justify-center sm:py-16">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 w-[450px] ">
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
                getdata={Formik.handleChange}
                getvalue={Formik.values.password}
                error={Formik.errors.password}
              />

              <InputR
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
                <p className="text-gray-600 text-center">
                  Forgot your password?{' '}
                  <Link to="/forgot">
                    <a href="#" className="text-indigo-500 font-bold">
                      here
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
