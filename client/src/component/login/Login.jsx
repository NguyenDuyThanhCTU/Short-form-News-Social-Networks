import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import InputL from './InputL';
import ButtonL from './ButtonL';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string().required('username cannot be empty'),
      password: Yup.string().required('username cannot be empty'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-16">
      {/* Main background */}
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        ""
        {/* sub background */}
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform skew-y-0 rotate-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <Link to="/">
            <span className="absolute top-4 right-6 text-4xl hover:text-red-600">
              <AiOutlineCloseCircle />
            </span>
          </Link>
          {/* container */}
          <div class="max-w-md mx-auto">
            <div>
              <h1 class="text-3xl font-semibold text-gray-800">Login</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <form class="pt-6 pb-4 mb-4" method="POST" onSubmit={formik.handleSubmit}>
                {/* input email */}
                <InputL
                  id="username"
                  name="Username"
                  getdata={formik.handleChange}
                  getvalue={formik.values.username}
                  value="Enter username ..."
                  // error={formik.errors.username}
                />
                {/* input password */}
                <InputL
                  getdata={formik.handleChange}
                  getvalue={formik.values.password}
                  value="Enter password ..."
                  // error={formik.errors.username}
                  id="password"
                  name="Password"
                />
                {/* Buttons */}
                <div class="flex items-center justify-around mt-6">
                  <ButtonL name={'Sign In'} />
                  <ButtonL name={'Sign Up'} type="signup" />
                </div>
                <a
                  class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-5"
                  href="#"
                >
                  Forgot Password?
                </a>
              </form>
              {/* Description */}
              <div class="pt-4 text-center text-gray-500 text-xs">
                <span>&copy; 2023 Group 2. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
