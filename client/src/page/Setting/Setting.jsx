import {MdOutlineCancel} from 'react-icons/md'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
const Setting = () => {
  const Data = useSelector((state) => state.Auth.login.currentUser.account)
  console.log()
  const navigate = useNavigate()
  const handleExit = () => {
    navigate('/')
  }

  return (
    <div className="overflow-hidden z-[100] bg-gray-900 bg-opacity-75  w-full h-full absolute top-0 bottom-0 right-0 left-0 pt-12">
      <div className="relative">
        <div class="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 absolute left-0 right-0">
          <h1 class="text-3xl font-bold mb-6 h-14 border-b-2 text-center">
            Settings
            <button onClick={() => handleExit()}>
              <MdOutlineCancel className="absolute right-[20px] top-[10px] hover:text-red-500 " />
            </button>
          </h1>

          <div class="mb-8 ml-4">
            <div class=" flex items-center mb-4">
              <div className="absolute right-[100px] top-[80px] ">
                <div>
                  <img
                    src={Data.profile.avatar}
                    alt="Profile Picture"
                    class="w-40 h-40 rounded-full "
                  />
                </div>
              </div>
              <div className="">
                <p class=" text-gray-700 font-bold inline-block mb-2">Name:</p>
                <p class="text-gray-800 mb-2 ml-3 inline-block">
                  {Data.profile.name}
                </p>
              </div>
            </div>

            <div class="flex items-center mb-4">
              <div>
                <p class="inline-block text-gray-700 font-bold mb-2">
                  Username:
                </p>
                <p class="text-gray-800 ml-3 mb-2 inline-block">
                  @{Data.username}
                </p>
              </div>
            </div>
            <div class="flex items-center mb-4">
              <div>
                <p class="block text-gray-700 font-bold mb-2">Email:</p>
                <p class="text-gray-800 mb-2">{Data.profile.email}</p>
              </div>
            </div>
            <div class="flex justify-center mt-12">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                Change Password
              </button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Setting
