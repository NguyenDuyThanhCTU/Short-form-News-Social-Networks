import {useSelector} from 'react-redux'
import {ProfileType} from '../../assets/utils/ProfileType'
import {useEffect, useState} from 'react'
import {FiEdit} from 'react-icons/fi'
import {VscChromeClose} from 'react-icons/vsc'
import HandleUpload from '../../config/aws.config'
import axios from 'axios'
import {Navigate} from 'react-router-dom'
import {FaSpinner} from 'react-icons/fa'

function Profile({setEdit}) {
  const idUser = useSelector((state) => state.Auth.login.currentUser._id)
  const Token = useSelector((state) => state.Auth.login.currentUser.accessToken)

  const DefaultStyle =
    'bg-white rounded-lg shadow-lg px-8  h-screen  py-6 ml-64 relative'
  const EditStyle =
    'bg-white rounded-lg shadow-lg w-full h-full  h-screen   relative'
  const EditStyle1 = 'px-8 py-6'
  const [isEdit, setIsEdit] = useState(false)
  const [Data, setData] = useState(null)
  const [Name, setName] = useState('')
  const [Bio, setBio] = useState('')
  const [ImageAsset, setImageAsset] = useState(null)
  const [isImage, setIsImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isUpdating, setIsUpdating] = useState(true)

  const handleUploadAvt = (e) => {
    const selectImg = e.target.files[0]
    const filetypes = ['image/jpeg', 'image/jpg', 'image/png']
    if (filetypes.includes(selectImg.type)) {
      setImageAsset(URL.createObjectURL(selectImg))
      setIsImage(selectImg)
    } else {
    }
  }

  function handleEdit() {
    setIsEdit(true)
    setEdit(false)
  }

  function handleExit() {
    setEdit(true)
    setIsEdit(false)
  }

  async function handleSave() {
    setIsUpdating(false)
    try {
      const bucketName = 'avatar-sn'
      const objectKeyVideo = `avatar_${idUser}`
      const filetype = isImage.type
      const finalData = await HandleUpload(
        bucketName,
        objectKeyVideo,
        isImage,
        filetype
      )

      const dataUpdatePost = {
        name: Name,
        avatar: finalData,
        bio: Bio,
      }

      const res = await axios.post(
        `http://localhost:8080/profile/update/${idUser}`,
        dataUpdatePost,
        {
          headers: {
            token: `Bearer ${Token}`,
          },
        }
      )
    } catch (error) {
      console.error(error)
    }
    setIsUpdating(true)
    handleExit()
  }

  useEffect(() => {
    async function fetchProfile() {
      const res = await axios.get(`http://localhost:8080/profile/${idUser}`, {
        headers: {
          token: `Bearer ${Token}`,
        },
      })
      setData(res.data)
      setIsLoading(false)
    }
    fetchProfile()
  }, [])

  if (isLoading) {
    return (
      <div class="flex items-center justify-center h-screen">
        <div class="spinner-grow text-primary h-12 w-12 mr-3" role="status">
          <span class="sr-only">Loading...</span>
        </div>
        <div class="text-xl font-bold text-primary">Loading...</div>
      </div>
    )
  }

  console.log(Data.news)
  return (
    <div class={isEdit ? EditStyle : DefaultStyle}>
      {isEdit && (
        <div className="absolute bg-slate-400 bg-opacity-70 w-full h-full flex justify-center items-center z-[1]">
          <div className=" w-[40%] h-[80%] bg-white rounded-xl">
            {!isUpdating && (
              <>
                <div class="fixed top-0 left-0 right-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
                  <div className="fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-75 flex justify-center items-center">
                    <div className="text-xl font-bold text-primary flex flex-col items-center">
                      <FaSpinner className="animate-spin text-2xl text-black " />
                      <div className="text-xl font-bold text-white animate-pulse pt-1">
                        Loading...
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}

            <div className="px-6 pt-6 pb-3 flex justify-between font-sans font-semibold text-[24px] border-b-[0.5px] border-solid border-[rgba(22,24,35,.2)]">
              Edit Profile
              <button onClick={() => handleExit()}>
                <VscChromeClose />
              </button>
            </div>
            <div className="w-full py-4 border-b-[0.5px] border-solid border-[rgba(22,24,35,.2)]">
              <div className="font-semibold text-[18px] leading-6 w-56 pl-6 pt-2">
                Profile photo
              </div>

              <label className="cursor-pointer">
                <div className="group flex justify-center">
                  <div>
                    <img
                      src={isImage ? ImageAsset : Data.avatar}
                      alt="Profile Picture"
                      class="w-20 h-20 rounded-full "
                    />
                  </div>

                  <div className="hidden group-hover:block relative">
                    <div className="bg-[rgba(32,33,36,.6)] absolute  top-[44px] right-[2px] w-[76px]  h-[35px] rounded-bl-[54px] rounded-br-[54px]  flex justify-center items-center">
                      <img
                        className="  bg-no-repeat h-[25px] "
                        src="https://www.gstatic.com/images/icons/material/system/2x/photo_camera_white_24dp.png"
                      />
                    </div>
                  </div>
                </div>
                <input
                  type="file"
                  name="upload-video"
                  onChange={(e) => handleUploadAvt(e)}
                  className="w-0 h-0"
                />
              </label>
            </div>
            <div className="w-full mt-2 h-[100px] border-b-[0.5px] border-solid border-[rgba(22,24,35,.2)]">
              <label className="font-semibold text-[18px] leading-6 w-56 pl-6 pt-2 inline">
                Name
              </label>

              <input
                onChange={(e) => setName(e.target.value)}
                className=" relative block  mt-2 border-[0.5px] border-solid border-[rgba(104,111,145,0.2)] left-[200px] w-[360px] rounded-[4px] bg-[rgba(22,24,35,0.06)] font-[16px] text-[rgb(22,24,35)] leading-[24px] outline-none p-3 resize-none"
              />
            </div>

            {/* Bio */}
            <div className="w-full my-2  border-b-[0.5px] border-solid border-[rgba(22,24,35,.2)] ">
              <h3 class="font-semibold text-[18px] leading-6 w-56 pl-6 pt-2">
                Bio:
              </h3>
              {/* <div className="ml-2 bg-slate-300 flex  h-[200px] rounded-md w-full"> */}
              <textarea
                onChange={(e) => setBio(e.target.value)}
                className="  relative mb-[37px] border-[0.5px] border-solid border-[rgba(104,111,145,0.2)] left-[160px] w-[460px] rounded-[4px] bg-[rgba(22,24,35,0.06)] font-[16px] text-[rgb(22,24,35)] leading-[24px] outline-none h-[100px]  resize-none"
              />

              {/* </div> */}
            </div>

            <div className="flex justify-end mr-10 pt-10">
              {' '}
              <button
                class="select-none border-solid border-black flex items-center text-white bg-red-500 hover:bg-red-600 h-8 w-28 rounded-sm justify-around"
                onClick={() => handleSave()}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <div className={isEdit ? EditStyle1 : null}>
        {' '}
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center">
            <img
              src={Data.avatar}
              alt="Profile Picture"
              class="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h2 class="text-xl font-semibold">{Data.name}</h2>
              <p class="text-gray-600">@{Data.username}</p>
            </div>
          </div>
          <button
            class="bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => handleEdit()}
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
            <p class="text-gray-600">{Data.bio}</p>
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
            {/* {Data.news.map((video) => (
              <video
                key={video._id}
                ref={video.url}
                loop
                className="w-full rounded-lg"
              ></video>
            ))} */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
