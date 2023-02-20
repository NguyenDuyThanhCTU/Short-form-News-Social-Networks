import { useFormik } from 'formik';
import InputR from './InputR';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Register = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('username cannot be empty')
        .min(5, 'username must be 5 characters or more'),
      email: Yup.string()
        .required('email cannot be empty')
        .matches(
          /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/,
          'please enter a valid email address',
        ),
      password: Yup.string()
        .required('password cannot be empty')
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          'password is minimum 8 characters, at least one letter and one number',
        ),
      confirmPassword: Yup.string()
        .required('password not match')
        .oneOf([Yup.ref('password'), null], 'password not match'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div class="bg-slate-200 py-8 px-4 shadow sm:rounded-lg sm:px-10 relative">
          <Link to="/">
            <span className="absolute top-4 right-4 text-4xl hover:text-red-600">
              <AiOutlineCloseCircle />
            </span>
          </Link>

          <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 class="mt-8 mb-8 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
          </div>
          <form class="space-y-6" action="#" method="POST" onSubmit={formik.handleSubmit}>
            <InputR
              id={'name'}
              name={'Name'}
              getdata={formik.handleChange}
              getvalue={formik.values.name}
              error={formik.errors.name}
            />

            <InputR
              id={'email'}
              name={'Email Adress'}
              getdata={formik.handleChange}
              getvalue={formik.values.email}
              error={formik.errors.email}
            />

            <InputR
              id={'password'}
              name={'Password'}
              getdata={formik.handleChange}
              getvalue={formik.values.password}
              error={formik.errors.password}
            />

            <InputR
              id={'confirmPassword'}
              name={'Confirm Password'}
              getdata={formik.handleChange}
              getvalue={formik.values.confirmPassword}
              error={formik.errors.confirmPassword}
            />
            <div>
              <button
                type="submit"
                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mt-12"
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
