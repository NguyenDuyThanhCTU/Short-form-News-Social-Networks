import {useSelector} from 'react-redux'
import {ProfileType} from '../../assets/utils/ProfileType'
import {useState} from 'react'
import {FiEdit} from 'react-icons/fi'
import {VscChromeClose} from 'react-icons/vsc'
import HandleUpload from '../../config/aws.config'

function Profile({setEdit}) {
  const idUser = useSelector((state) => state.Auth.login.currentUser._id)
  const DefaultStyle =
    'bg-white rounded-lg shadow-lg px-8  h-screen  py-6 ml-64 relative'
  const EditStyle =
    'bg-white rounded-lg shadow-lg w-full h-full  h-screen   relative'
  const EditStyle1 = 'px-8 py-6'
  const user = useSelector((state) => state.Auth.login.currentUser)
  const [isEdit, setIsEdit] = useState(false)
  const [EditName, setEditName] = useState(false)
  const [ImageAsset, setImageAsset] = useState(null)
  const [isImage, setIsImage] = useState(null)

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
    setEditName(false)
  }

  function handleSave() {
    const bucketName = 'avatar-sn'
    const objectKeyVideo = `avatar_${idUser}`
    const filetype = isImage.type
    const finalData = HandleUpload(
      bucketName,
      objectKeyVideo,
      isImage,
      filetype
    )
    console.log(finalData)
    // setTimeout(() => {

    // }, 5000)
  }

  return (
    <div class={isEdit ? EditStyle : DefaultStyle}>
      {isEdit && (
        <div className="absolute bg-slate-400 bg-opacity-70 w-full h-full flex justify-center items-center z-[1]">
          <div className=" w-[40%] h-[80%] bg-white rounded-xl">
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
                      src={isImage ? ImageAsset : user.avatar}
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

              <div className="relative left-[280px] inline-block font-semibold">
                {' '}
                {user.name}{' '}
                {!EditName && (
                  <button
                    onClick={() => setEditName(true)}
                    className="inline-block ml-1 hover:text-red-500 "
                  >
                    <FiEdit />
                  </button>
                )}
              </div>

              {EditName && (
                <input className=" relative block  mt-2 border-[0.5px] border-solid border-[rgba(104,111,145,0.2)] left-[200px] w-[360px] rounded-[4px] bg-[rgba(22,24,35,0.06)] font-[16px] text-[rgb(22,24,35)] leading-[24px] outline-none p-3 resize-none" />
              )}
            </div>

            {/* Bio */}
            <div className="w-full my-2  border-b-[0.5px] border-solid border-[rgba(22,24,35,.2)] ">
              <h3 class="font-semibold text-[18px] leading-6 w-56 pl-6 pt-2">
                Bio:
              </h3>
              {/* <div className="ml-2 bg-slate-300 flex  h-[200px] rounded-md w-full"> */}
              <textarea className="  relative mb-[37px] border-[0.5px] border-solid border-[rgba(104,111,145,0.2)] left-[160px] w-[460px] rounded-[4px] bg-[rgba(22,24,35,0.06)] font-[16px] text-[rgb(22,24,35)] leading-[24px] outline-none h-[100px]  resize-none" />
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
      </div>
    </div>
  )
}

export default Profile
