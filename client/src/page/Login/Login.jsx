import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'
import InputL from './InputL'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import {login} from '../../redux/apiRequest'
import {useDispatch, useSelector} from 'react-redux'
import Button from '../../component/Button/Button'

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const res = useSelector((state) => state.Auth.Login.currentUser);
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
      const user = values
      login(user, dispatch, navigate)
      console.log(user)
    },
  })

  return (
    <div className=" z-[100] bg-gray-900 bg-opacity-75  w-full h-full absolute top-0 bottom-0 right-0 left-0 pt-12">
      <div className="min-h-screen  flex flex-col justify-center sm:py-16">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
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
                      <Link to="/forgot">
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
