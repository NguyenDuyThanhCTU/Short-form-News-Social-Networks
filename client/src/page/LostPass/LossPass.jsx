import {AiOutlineCloseCircle} from 'react-icons/ai'
import {Link, useNavigate} from 'react-router-dom'

import {useFormik} from 'formik'
import * as Yup from 'yup'
import {useDispatch} from 'react-redux'
import Button from '../../component/Button/Button'
import {useState} from 'react'
import axios from 'axios'
import {FaSpinner} from 'react-icons/fa'
import {BsCheck2Circle} from 'react-icons/bs'
import {LoginSucces} from '../../redux/AuSlice'
import {TbPlayerTrackNext} from 'react-icons/tb'
import InputR from './InputR'

const LossPass = () => {
  const navigate = useNavigate()
  const [Correct, setCorrect] = useState(false)
  const [Uncorrect, setUncorrect] = useState(false)
  const [pass, setPass] = useState(false)
  const [isUsername, setIsUsername] = useState('')
  const [Loading, setLoading] = useState(false)

  const checkUsername = async (username) => {
    try {
      await axios.post('http://localhost:8080/account', username)
      setLoading(false)
      setPass(true)
    } catch (error) {
      if (error.response && error.response.status !== 200) {
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

  const changePassword = async (user) => {
    try {
      await axios.post('http://localhost:8080/lostpassword', user)
      setLoading(false)
      setCorrect(true)

      setTimeout(() => {
        navigate('/login')
      }, 2000)
    } catch (error) {
      console.log('Unexpected error: ', error)
    }
  }
  async function handleAccount() {
    await setLoading(true)
    const objUsername = {username: isUsername}
    checkUsername(objUsername)
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
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
      setLoading(true)

      const data = values
      delete data.confirmPassword
      data.username = isUsername
      changePassword(data)

      //   const user = values
      //   login(user)
    },
  })

  return (
    <div className="overflow-hidden z-50 bg-gray-900 bg-opacity-75 fixed top-0 bottom-0 right-0 left-0 pt-12">
      {Uncorrect ? (
        <div
          class=" px-4 py-3 rounded  fixed right-0 top-0 mt-20 transform translate-x-full delay-1000 transition duration-1000"
          role="alert"
        >
          <strong class="font-bold">Failed! </strong>
          <span class="block sm:inline">Tài khoản không đúng.</span>
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
          <strong class="font-bold">Change Password Success!</strong>
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
          <div className="relative min-w-[597px]  px-6 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
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
            <Link
              to="/"
              className="absolute top-4 right-6 text-2xl text-gray-700 hover:text-red-600 transition-colors duration-300"
            >
              <AiOutlineCloseCircle />
            </Link>
            {/* container */}
            <div className="max-w-md mx-auto">
              {pass ? (
                <>
                  <div className="pb-8">
                    <h1 className="text-4xl font-bold text-gray-800">
                      Enter new password
                    </h1>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <form
                      className="pt-6 pb-4 mb-4"
                      method="POST"
                      onSubmit={formik.handleSubmit}
                    >
                      <InputR
                        getdata={formik.handleChange}
                        getvalue={formik.values.password}
                        type={'password'}
                        error={formik.errors.password}
                        id={'password'}
                        name={'New Password'}
                      />

                      <InputR
                        getdata={formik.handleChange}
                        getvalue={formik.values.confirmPassword}
                        type={'password'}
                        id={'confirmPassword'}
                        name={'Confirm New Password'}
                        error={formik.errors.confirmPassword}
                      />

                      <div className="mt-6">
                        <Button style="bg-indigo-500 text-white py-3 px-6 rounded-full hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full">
                          <span className="mr-2">Change password</span>
                        </Button>
                      </div>
                    </form>
                    {/* Description */}
                    <div className="pt-4 text-center text-gray-500 text-xs">
                      <span>&copy; 2023 Group 2. All rights reserved.</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="pb-8">
                    <h1 className="text-4xl font-bold text-gray-800 text-center">
                      Enter your username
                    </h1>
                    <p className="mt-4 text-lg text-gray-500 text-center">
                      To find your account
                    </p>
                  </div>
                  <div className="divide-y divide-gray-200">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Username
                    </label>
                    <input
                      type="username"
                      className="border rounded-lg px-3 py-2 w-full"
                      id="username"
                      // name={id}
                      onChange={(e) => setIsUsername(e.target.value)}
                      placeholder="Enter username ..."
                    />
                    <div className="mt-6">
                      <button
                        className="bg-indigo-500 text-white py-3 px-6 rounded-full hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110 w-full"
                        onClick={() => handleAccount()}
                      >
                        <span className="mr-2">Next</span>
                        <TbPlayerTrackNext className="text-white inline-block" />
                      </button>
                    </div>

                    {/* Description */}
                    <div className="pt-4 text-center text-gray-500 text-xs">
                      <span>&copy; 2023 Group 2. All rights reserved.</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LossPass
