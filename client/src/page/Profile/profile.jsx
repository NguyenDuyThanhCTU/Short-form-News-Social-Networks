import {useSelector} from 'react-redux'
import {useEffect, useRef, useState} from 'react'
import {VscChromeClose} from 'react-icons/vsc'
import {deleteFile} from '../../config/aws.config'
import {HandleUpload} from '../../config/aws.config'
import axios from 'axios'
import {FaSpinner} from 'react-icons/fa'

function Profile({setEdit}) {
  const Data = useSelector((state) => state.Auth.login.currentUser.account)
  const Token = useSelector((state) => state.Auth.login.currentUser.accessToken)
  const idProfile = Data.profile._id

  const DefaultStyle =
    'bg-white rounded-lg shadow-lg px-8  h-screen  py-6 ml-64 relative'
  const EditStyle =
    'bg-white rounded-lg shadow-lg w-full h-full  h-screen   relative'
  const EditStyle1 = 'px-8 py-6'
  const [isEdit, setIsEdit] = useState(false)
  // const [Data, setData] = useState(null)
  const [Name, setName] = useState('')
  const [Bio, setBio] = useState('')
  const [ImageAsset, setImageAsset] = useState(null)
  const [isImage, setIsImage] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isFlag, setIsFlag] = useState(false)
  const [isFetch, setIsFetch] = useState(false)
  const [DataFetch, setDataFetch] = useState(null)

  const videoRef = useRef(null)

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
    setIsFlag(true)
    try {
      const bucketName = 'avatar-sn'
      const objectKeyVideo = `avatar_${idProfile}`
      deleteFile(bucketName, objectKeyVideo).then(() => {
        console.log('File deleted successfully')
      })
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

      await axios
        .put(
          `http://localhost:8080/profile/update/${idProfile}`,
          dataUpdatePost
        )
        .then(() => {
          setIsFlag(false)
          setIsFetch(true)
          handleExit()
        })
    } catch (error) {
      console.error(error)
    }
  }
  console.log(DataFetch?.avatar)
  useEffect(() => {
    const handleFetch = async () => {
      const res = await axios.get(
        `http://localhost:8080/profile/6453c7433d9b45ef875e2c16`
      )
      setDataFetch(res.data)
      setIsLoading(false)
    }
    handleFetch()
  }, [isFetch])

  if (isLoading) {
    return (
      <div className="text-xl font-bold text-primary flex flex-col items-center">
        <FaSpinner className="animate-spin text-2xl text-black " />
        <div className="text-xl font-bold text-white animate-pulse pt-1">
          Loading...
        </div>
      </div>
    )
  }

  return (
    <div class={isEdit ? EditStyle : DefaultStyle}>
      {isEdit && (
        <div className="absolute bg-slate-400 bg-opacity-70 w-full h-full flex justify-center items-center z-[1]">
          <div className=" w-[40%] h-[80%] bg-white rounded-xl">
            {isFlag && (
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
                      src={
                        isImage
                          ? ImageAsset
                          : `${DataFetch?.avatar}?${Math.random()}`
                      }
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
              src={`${DataFetch?.avatar}?${Math.random()}`}
              alt="Profile Picture"
              class="w-20 h-20 rounded-full mr-4"
            />
            <div>
              <h2 class="text-xl font-semibold">{DataFetch.name}</h2>
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
            <p class="text-gray-600">{DataFetch.bio}</p>
          </div>
        </div>
        <hr class="my-6" />
        <div class="flex items-center justify-between mb-6">
          <h3 class="text-lg font-semibold">Videos</h3>
          <a href="#" class="text-blue-500 hover:text-blue-600 font-semibold">
            See all
          </a>
        </div>
        <div class="grid grid-cols-3 gap-4 ">
          {/* <div className="grid grid-cols-3 gap-4">
            {Data.news.map((video) => (
              <div class="relative group rounded-lg overflow-hidden">
                <video
                  key={video._id}
                  src={video.url}
                  class="w-full object-cover object-center"
                  // title={video.title}
                ></video>
                <div class="absolute bottom-0 left-0 right-0 flex items-center justify-between px-3 py-2 bg-gray-800 bg-opacity-50 transition-opacity opacity-0 group-hover:opacity-100">
                  <div class="flex items-center space-x-2">
                    <div class="w-8 h-8 rounded-full overflow-hidden">
                      <img
                        src={Data.profile_picture}
                        class="w-full h-full object-cover object-center"
                        alt="Avatar"
                      />
                    </div>
                    <div class="text-sm font-semibold text-white">
                      {Data.username}
                    </div>
                  </div>
                  <div class="text-sm font-semibold text-white">
                    {video.views} views
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
        {/* <div class="grid grid-cols-3 gap-4">
          <div class="relative ">
            {Data.news.map((video) => (
              <video
                key={video._id}
                src={video.url}
                loop
                className="w-full rounded-lg"
              ></video>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Profile
