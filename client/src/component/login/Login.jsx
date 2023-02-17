
const Login = () => {
    return (
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
  <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    <div class="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform skew-y-0 rotate-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
      <div class="max-w-md mx-auto">
        <div>
          <h1 class="text-3xl font-semibold text-gray-800">Login</h1>
        </div>
        <div class="divide-y divide-gray-200">
          <form class="pt-6 pb-8 mb-4">
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                Email
              </label>
              <input class="border rounded-lg px-3 py-2 w-full" id="email" type="email" required />
            </div>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                Password
              </label>
              <input class="border rounded-lg px-3 py-2 w-full" id="password" type="password" required />
            </div>
            <div class="flex items-center justify-between mt-6">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Sign In
              </button>
              <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                Forgot Password?
              </a>
            </div>
          </form>
          <div class="pt-4 text-center text-gray-500 text-xs">
            <span>&copy; 2023 Company Name. All rights reserved.</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


    )
}

export default Login