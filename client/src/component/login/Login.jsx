import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import InputL from "./InputL";
import ButtonL from "./ButtonL";
import { useFormik } from "formik";
import * as Yup from "yup";
import { login } from "../../redux/apiRequest";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const res = useSelector((state) => state.Auth.Login.currentUser);
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("username cannot be empty"),
      password: Yup.string().required("password cannot be empty"),
    }),
    onSubmit: (values) => {
      const user = values;
      login(user, dispatch, navigate);
      console.log(user);
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-16">
      {/* Main background */}
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        ""
        {/* sub background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform skew-y-0 rotate-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
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
              <form className="pt-6 pb-4 mb-4" method="POST" onSubmit={formik.handleSubmit}>
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
                  <ButtonL name={"Sign In"} />
                  <ButtonL name={"Sign Up"} type="signup" />
                </div>
                <a
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-5"
                  href="/"
                >
                  Forgot Password?
                </a>
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
  );
};

export default Login;
