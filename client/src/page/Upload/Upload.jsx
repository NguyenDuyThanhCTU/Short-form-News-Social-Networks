import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {FaCloudUploadAlt} from 'react-icons/fa'
import {useDispatch} from 'react-redux'
import option1 from '../../assets/imgs/2.jpg'
import option2 from '../../assets/imgs/3.jpg'
import option3 from '../../assets/imgs/4.jpg'
import option4 from '../../assets/imgs/5.jpg'
import option5 from '../../assets/imgs/6.jpg'
import {NewsUp, NewsPost} from '../../redux/NewsSlice'

function Upload() {
  //First UI
  const [title, setTitle] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [body, setBody] = useState('')
  const [hashtag, setHashtag] = useState('')
  const [conclusion, setConclusion] = useState('')
  const [image, setImage] = useState('')
  const [errorUp, setErrorUp] = useState(false)
  const [option, setOption] = useState(0)
  // --

  const [isLoading, setIsLoading] = useState(false)
  const [videoAsset, setvideoAsset] = useState(false)
  const [ErrorUpload, setErrorUpload] = useState(false)
  const [isContinue, setIsContinue] = useState(true)
  const [data, setData] = useState([])
  const [Saving, setSaving] = useState(false)
  const [Caption, setCaption] = useState('')
  const [Topic, setTopic] = useState([])
  const [video, setVideo] = useState('')

  const isSelect = 'absolute inset-0 bg-black  opacity-75 transition-opacity'
  const notSelect =
    'absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity'
  const displayImg = 'relative border-gray-500 border-[1px]'
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    const newsletter = {
      title: title,
      introduction: introduction,
      body: body,
      hashtag: hashtag,
      conclusion: conclusion,
      image: image,
      option: option,
    }
    dispatch(NewsUp(newsletter))
    setIsContinue(false)
  }

  const uploadImage = async (e) => {
    const selectImage = e.target.files[0]
    const filetypes = ['image/jpeg', 'image/jpg', 'image/png']

    if (filetypes.includes(selectImage.type)) {
      setErrorUp(false)
      setImage(selectImage)
    } else {
      setErrorUp(true)
    }
  }

  //Second UI

  const uploadVideo = async (e) => {
    const SelectedFile = e.target.files[0]
    const filetypes = ['video/mp4', 'video/webm', 'video/ogg']

    if (filetypes.includes(SelectedFile.type)) {
      setvideoAsset(URL.createObjectURL(SelectedFile))
      setVideo(SelectedFile)
    } else {
      setIsLoading(false)
      setErrorUpload(true)
    }
  }

  function handleDiscard() {
    setCaption('')
  }

  function handlePost() {
    const dataPost = {
      video: video,
      caption: Caption,
      topic: Topic,
    }
    setSaving(true)
    dispatch(NewsPost(dataPost))
  }

  useEffect(() => {
    axios
      .get('http://localhost:8080/alltopic')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div className="flex w-full h-full absolute left-0 top-[60px] lg:top-[70px] mb-10 pt-10 lg:pt-20 bg-[#F8F8F8] justify-center ">
      {isContinue ? (
        <div className="flex flex-wrap">
          <div className="basis-1/2 flex flex-wrap pt-20 pl-10">
            <div class="w-1/2 p-2">
              <div class={displayImg} onClick={() => setOption(1)}>
                <img src={option1} alt="your-image-alt" class="w-full " />
                {option === 1 ? (
                  <div class={isSelect}></div>
                ) : (
                  <div class={notSelect}></div>
                )}
              </div>
            </div>
            <div class="w-1/2 p-2">
              <div class={displayImg} onClick={() => setOption(2)}>
                <img src={option2} alt="your-image-alt" class="w-full " />
                {option === 2 ? (
                  <div class={isSelect}></div>
                ) : (
                  <div class={notSelect}></div>
                )}
              </div>
            </div>
            <div class="w-1/2 p-2">
              <div class={displayImg} onClick={() => setOption(3)}>
                <img src={option3} alt="your-image-alt" class="w-full " />
                {option === 3 ? (
                  <div class={isSelect}></div>
                ) : (
                  <div class={notSelect}></div>
                )}
              </div>
            </div>
            <div class="w-1/2 p-2">
              <div class={displayImg} onClick={() => setOption(4)}>
                <img src={option4} alt="your-image-alt" class="w-full " />
                {option === 4 ? (
                  <div class={isSelect}></div>
                ) : (
                  <div class={notSelect}></div>
                )}
              </div>
            </div>
            <div class="w-1/2 p-2">
              <div class={displayImg} onClick={() => setOption(5)}>
                <img src={option5} alt="your-image-alt" class="w-full " />
                {option === 5 ? (
                  <div class={isSelect}></div>
                ) : (
                  <div class={notSelect}></div>
                )}
              </div>
            </div>
          </div>

          <div class="basis-1/2 w-full max-w-md mx-auto mt-16px p-6 rounded-lg shadow-xl  bg-white">
            <form onSubmit={handleSubmit}>
              <h2 class="text-2xl font-bold text-gray-700 mb-2 text-center">
                Upload New
              </h2>
              <div className="mt-6">
                <div class="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="name">
                    Title
                  </label>
                  <input
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Title"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                  />
                </div>
                <div className="mb-4">
                  <label class="block text-gray-700 font-bold mb-2" for="name">
                    Introduction
                  </label>
                  <textarea
                    id="introduction"
                    placeholder="Brief summary..."
                    value={introduction}
                    onChange={(e) => setIntroduction(e.target.value)}
                    class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  ></textarea>
                </div>
                <label class="block text-gray-700 font-bold mb-2" for="name">
                  Body
                </label>
                <div className="mb-4">
                  <textarea
                    id="body"
                    placeholder="Body"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  ></textarea>
                </div>
                <label class="block text-gray-700 font-bold mb-2" for="name">
                  Hashtag
                </label>
                <div className="mb-4">
                  <input
                    placeholder="Hashtag"
                    type="text"
                    id="hashtag"
                    value={hashtag}
                    onChange={(e) => setHashtag(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  />
                </div>
                <label class="block text-gray-700 font-bold mb-2" for="name">
                  Conclusion
                </label>
                <div className="mb-4">
                  <textarea
                    placeholder="Conclusion"
                    id="conclusion"
                    value={conclusion}
                    onChange={(e) => setConclusion(e.target.value)}
                    className="w-full p-2 border rounded-lg"
                  ></textarea>
                </div>
                <label className="cursor-pointer">
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-xl">
                        <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                      </p>
                      <p className="text-xl font-semibold">
                        Select Image to upload
                      </p>
                    </div>
                  </div>
                  <input
                    type="file"
                    name="upload-video"
                    onChange={(e) => uploadImage(e)}
                    className="w-0 h-0"
                  />
                </label>
                {errorUp && (
                  <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                    Please select image file (jpg or png)
                  </p>
                )}
                <div className="mb-4 flex justify-around mt-6">
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Submit
                  </button>
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Preview
                  </button>
                  <button
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Discard
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className=" bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6">
          <div>
            <div>
              <p className="text-2xl font-bold">Upload Video</p>
              <p className="text-md text-gray-400 mt-1">
                Post a video to your account
              </p>
            </div>
            <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
              {isLoading ? (
                <div>
                  <p>Loading...</p>
                </div>
              ) : (
                <div>
                  {videoAsset ? (
                    <div>
                      <video
                        src={videoAsset}
                        loop
                        controls
                        className="rounded-r-xl h-[450px] mt-16 bg-black"
                      ></video>
                    </div>
                  ) : (
                    <label className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center h-full">
                        <div className="flex flex-col justify-center items-center">
                          <p className="font-bold text-xl">
                            <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                          </p>
                          <p className="text-xl font-semibold">
                            Select video to upload
                          </p>
                        </div>
                        <p className="text-gray-400 text-center mt-10 text-sm leading-10">
                          MP4 or WebM or ogg <br />
                          720x1280 resolution or higher <br />
                          Up to 10 minutes <br />
                          Less than 2 GB
                        </p>
                        <p className="bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                          Select file
                        </p>
                      </div>
                      <input
                        type="file"
                        name="upload-video"
                        onChange={(e) => uploadVideo(e)}
                        className="w-0 h-0"
                      />
                    </label>
                  )}
                </div>
              )}
            </div>
            {ErrorUpload && (
              <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
                Please select an video file (mp4 or webm or ogg)
              </p>
            )}
          </div>
          <div className="flex flex-col gap-3 pb-10">
            <label className="text-md font-medium ">Caption</label>
            <input
              type="text"
              value={Caption}
              onChange={(e) => setCaption(e.target.value)}
              className="rounded lg:after:w-650 outline-none text-md border-2 border-gray-200 p-2"
            />
            <label className="text-md font-medium ">Choose a topic</label>

            <select
              onChange={(e) => {
                setTopic(e.target.value)
              }}
              className="outline-none lg:w-650 border-2 border-gray-200 text-md capitalize lg:p-4 p-2 rounded cursor-pointer"
            >
              {data.map((item) => (
                <option
                  key={item.name}
                  className=" outline-none capitalize bg-white text-gray-700 text-md p-2 hover:bg-slate-300"
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </select>
            <div className="flex gap-6 mt-10">
              <button
                onClick={handleDiscard}
                type="button"
                className="border-gray-300 border-2 text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                Discard
              </button>
              <button
                //disabled={videoAsset?.url ? false : true}
                onClick={handlePost}
                type="button"
                className="bg-[#F51997] text-white text-md font-medium p-2 rounded w-28 lg:w-44 outline-none"
              >
                {Saving ? 'Posting...' : 'Post'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Upload
