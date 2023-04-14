import {useSelector} from 'react-redux'
import {ProfileType} from '../../assets/utils/ProfileType'
import {useState} from 'react'

function Profile() {
  const user = useSelector((state) => state.Auth.login.currentUser)
  const [isEdit, setIsEdit] = useState(false)

  return (
    <div class="bg-white rounded-lg shadow-lg px-8  h-screen  py-6 ml-64 ">
      {isEdit ? (
        <>
          {' '}
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <img
                src={user.avatar}
                alt="Profile Picture"
                class="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h2 class="text-xl font-semibold">{user.name}</h2>
                <p class="text-gray-600">@{user.username}</p>
              </div>
            </div>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setIsEdit(true)}
            >
              Edit Profile
            </button>
          </div>
          <hr class="my-6" />
          <div class="flex mb-6">
            <div class="w-2/3">
              <h3 class="text-lg font-semibold mb-2">About Me</h3>
              <p class="text-gray-600">{ProfileType[0].bio}</p>
            </div>
          </div>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => setIsEdit(false)}
          >
            Save Change
          </button>
        </>
      ) : (
        <>
          {' '}
          <div class="flex items-center justify-between mb-6">
            <div class="flex items-center">
              <img
                src={user.avatar}
                alt="Profile Picture"
                class="w-20 h-20 rounded-full mr-4"
              />
              <div>
                <h2 class="text-xl font-semibold">{user.name}</h2>
                <p class="text-gray-600">@{user.username}</p>
              </div>
            </div>
            <button
              class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => setIsEdit(true)}
            >
              Edit Profile
            </button>
          </div>
          <hr class="my-6" />
          <div class="flex mb-6">
            {/* <div class="w-1/3 pr-6">
          <h3 class="text-lg font-semibold mb-2">Stats</h3>
          <p class="text-gray-600">
            <span class="font-bold">Followers:</span> 10,000
          </p>
          <p class="text-gray-600">
            <span class="font-bold">Following:</span> 500
          </p>
          <p class="text-gray-600">
            <span class="font-bold">Likes:</span> 50,000
          </p>
          <p class="text-gray-600">
            <span class="font-bold">Videos:</span> 100
          </p>
        </div> */}
            <div class="w-2/3">
              <h3 class="text-lg font-semibold mb-2">About Me</h3>
              <p class="text-gray-600">{ProfileType[0].bio}</p>
            </div>
          </div>
          <hr class="my-6" />
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-lg font-semibold">Videos</h3>
            <a href="#" class="text-blue-500 hover:text-blue-600 font-semibold">
              See all
            </a>
          </div>
          <div class="grid grid-cols-3 gap-4">
            <div class="relative">
              <img
                src="https://via.placeholder.com/300x400"
                alt="Video Thumbnail"
                class="w-full rounded-lg"
              />
              <span class="absolute top-0 right-0 bg-black text-white p-1 rounded-br-lg">
                0:30
              </span>
            </div>
            <div class="relative">
              <img
                src="https://via.placeholder.com/300x400"
                alt="Video Thumbnail"
                class="w-full rounded-lg"
              />
              <span class="absolute top-0 right-0 bg-black text-white p-1 rounded-br-lg">
                0:45
              </span>
            </div>
            <div class="relative">
              <img
                src="https://via.placeholder.com/300x400"
                alt="Video Thumbnail"
                class="w-full rounded-lg"
              />
              <span class="absolute top-0 right-0 bg-black text-white p-1 rounded-br-lg">
                1:00
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Profile
