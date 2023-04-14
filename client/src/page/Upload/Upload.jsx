import React, {useEffect, useState} from 'react'
import {FaCloudUploadAlt} from 'react-icons/fa'
import {useDispatch, useSelector} from 'react-redux'
import option1 from '../../assets/imgs/2.jpg'
import option2 from '../../assets/imgs/3.jpg'
import option3 from '../../assets/imgs/4.jpg'
import option4 from '../../assets/imgs/5.jpg'
import option5 from '../../assets/imgs/6.jpg'
import {NewsUp} from '../../redux/NewsSlice'
import Post from '../Post/Post'
import {TbPlayerTrackNext} from 'react-icons/tb'

function Upload() {
  const [title, setTitle] = useState('')
  const [introduction, setIntroduction] = useState('')
  const [body, setBody] = useState('')
  const [hashtag, setHashtag] = useState('')
  const [conclusion, setConclusion] = useState('')
  const [errorUp, setErrorUp] = useState(false)
  const [option, setOption] = useState(0)
  const [isContinue, setIsContinue] = useState(true)
  const [isImage, setIsImage] = useState(null)
  const [isPreview, setIsPreview] = useState(false)
  const [isNext, setIsNext] = useState(false)
  const DataNews = useSelector((state) => state.News)

  const isSelect = 'absolute inset-0 bg-black  opacity-75 transition-opacity'
  const notSelect =
    'absolute inset-0 bg-black opacity-0 hover:opacity-25 transition-opacity'
  const displayImg = 'relative border-gray-500 border-[1px]'
  const dispatch = useDispatch()

  const uploadImage = async (e) => {
    const selectImage = e.target.files[0]
    const filetypes = ['image/jpeg', 'image/jpg', 'image/png']

    if (filetypes.includes(selectImage.type)) {
      setErrorUp(false)
      setIsImage(selectImage)
    } else {
      setErrorUp(true)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newsletter = {
      title: title,
      introduction: introduction,
      body: body,
      hashtag: hashtag,
      conclusion: conclusion,
      image: '',
      option: option,
    }
    dispatch(NewsUp(newsletter))
    setIsNext(true)
    console.log(newsletter)
  }

  return (
    <div className="flex w-full h-full absolute left-0 top-[60px] lg:top-[70px] mb-10 pt-10 lg:pt-10 bg-white justify-center ">
      {isContinue ? (
        <div className="flex flex-wrap bg-white w-full">
          {isPreview ? (
            <div className="basis-2/3 flex flex-wrap pl-10">
              <div className="pl-1 flex flex-wrap w-[1228px] h-[930px] bg-white">
                <div class="flex flex-col h-screen">
                  <nav class="flex justify-between items-center bg-gray-800 text-white p-4">
                    <div class="text-xl font-bold">{DataNews.title}</div>
                    <div>
                      <a href="#" class="mx-2 hover:text-gray-300">
                        Home
                      </a>
                      <a href="#" class="mx-2 hover:text-gray-300">
                        Categories
                      </a>
                      <a href="#" class="mx-2 hover:text-gray-300">
                        Contact Us
                      </a>
                    </div>
                  </nav>
                  <div class="flex flex-1">
                    <div class="w-1/4 bg-gray-100 p-4">
                      <h3 class="text-lg font-bold mb-4">Conclusion</h3>
                      <ul>
                        <li class="mb-2">
                          <a href="#">Politics</a>
                        </li>
                        <li class="mb-2">
                          <a href="#">Sports</a>
                        </li>
                        <li class="mb-2">
                          <a href="#">Business</a>
                        </li>
                        <li class="mb-2">
                          <a href="#">Technology</a>
                        </li>
                        <li class="mb-2">
                          <a href="#">Entertainment</a>
                        </li>
                      </ul>
                    </div>
                    <div class="flex-1 p-4">
                      <h2 class="text-xl font-bold mb-4">
                        {DataNews.introduction}
                      </h2>
                      <div class="border-b border-gray-300 mb-4 pb-4">
                        <h3 class="text-lg font-bold mb-2">
                          <a href="#">Lorem ipsum dolor sit amet</a>
                        </h3>
                        <p class="text-gray-700 text-sm mb-2">
                          By John Doe | March 27, 2023
                        </p>
                        <p class="text-gray-700">{DataNews.body}</p>
                      </div>
                    </div>
                    <div>
                      <img
                        class="mx-auto rounded-lg shadow-lg"
                        src={DataNews.image}
                      />
                    </div>
                  </div>
                  <footer class="bg-gray-800 text-white p-4">
                    <div class="flex justify-center">
                      <p>&copy; 2023 My E-Newspaper</p>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          ) : (
            <div className="basis-2/3 flex flex-wrap pl-10">
              <div className="w-full pb-5">
                <p className="text-center text-5xl font-bold text-gray-800 leading-tight tracking-tight">
                  Select Display Layout
                </p>
              </div>
              <div className=" flex flex-wrap " y>
                {' '}
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
            </div>
          )}

          <div class="h-[56rem] basis-1/3 w-full max-w-md mx-auto mt-16px p-6 rounded-lg shadow-xl  bg-white">
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
                  {isNext ? (
                    <button
                      onClick={() => setIsContinue(false)}
                      class="bg-blue-300 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Next
                      <TbPlayerTrackNext className="text-red ml-2 inline-block" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Submit
                    </button>
                  )}

                  <button
                    type="submit"
                    onClick={() => setIsPreview(true)}
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
        <Post image={isImage} />
      )}
    </div>
  )
}

export default Upload
