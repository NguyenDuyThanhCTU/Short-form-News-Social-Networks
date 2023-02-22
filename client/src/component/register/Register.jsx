import { useFormik } from "formik";
import InputR from "./InputR";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { register } from "../../redux/apiRequest";
import { useDispatch } from "react-redux";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const Formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required("username cannot be empty")
        .min(5, "username must be 5 characters or more"),
      email: Yup.string()
        .required("")
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "please enter a valid email address"),
      password: Yup.string()
        .required("")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "password is minimum 8 characters, at least one letter and one number",
        ),
      confirmPassword: Yup.string()
        .required("")
        .oneOf([Yup.ref("password"), null], "password not match"),
    }),
    onSubmit: (values) => {
      const user = values;
      delete user.confirmPassword;
      register(user, dispatch, navigate);
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-200 py-8 px-4 shadow sm:rounded-lg sm:px-10 relative">
          <Link to="/">
            <span className="absolute top-4 right-4 text-4xl hover:text-red-600">
              <AiOutlineCloseCircle />
            </span>
          </Link>

          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-8 mb-8 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
          </div>
          <form className="space-y-6" action="#" method="POST" onSubmit={Formik.handleSubmit}>
            <InputR
              id={"username"}
              name={"Name"}
              getdata={Formik.handleChange}
              getvalue={Formik.values.username}
              error={Formik.errors.username}
            />

            <InputR
              id={"email"}
              name={"Email Adress"}
              getdata={Formik.handleChange}
              getvalue={Formik.values.email}
              error={Formik.errors.email}
            />

            <InputR
              id={"password"}
              name={"Password"}
              getdata={Formik.handleChange}
              getvalue={Formik.values.password}
              error={Formik.errors.password}
            />

            <InputR
              id={"confirmPassword"}
              name={"Confirm Password"}
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
