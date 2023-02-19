import {AiOutlineCloseCircle} from "react-icons/ai"
import { Link } from "react-router-dom"
const Login = () => {
    return (
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-16">
          {/* Main background */}
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            {/* sub background */}
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform skew-y-0 rotate-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
              <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                <Link to="/"><span className="absolute top-4 right-6 text-4xl hover:text-red-600"> <AiOutlineCloseCircle/></span></Link>
                {/* container */}
                <div class="max-w-md mx-auto">
                  <div>
                    <h1 class="text-3xl font-semibold text-gray-800">Login</h1>
                  </div>
                  <div class="divide-y divide-gray-200">
                    <form class="pt-6 pb-4 mb-4">
                      {/* input email */}
                      <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                          Email
                        </label>
                        <input class="border rounded-lg px-3 py-2 w-full" id="email" type="email" required />
                      </div>
                      {/* input password */}
                      <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                          Password
                        </label>
                        <input class="border rounded-lg px-3 py-2 w-full" id="password" type="password" required />
                      </div>
                      {/* Buttons */}
                      <div class="flex items-center justify-around mt-6">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                          Sign In
                        </button>
                        <Link to="/auth/Register">
                          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Sign Up
                          </button>
                        </Link>
                        
                        
                      </div>
                      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 mt-5" href="#">
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


    )
}

export default Login