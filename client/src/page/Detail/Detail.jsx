import React, {useEffect, useState} from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import {VideoCardType} from '../../assets/utils/VideoCardType'
import {GoVerified} from 'react-icons/go'
import {Link, useNavigate, useParams} from 'react-router-dom'
import LikeButton from '../../component/LikeButton/LikeButton'
import News from '../../component/News/News'
import axios from 'axios'
import {FaSpinner} from 'react-icons/fa'

function Detail() {
  const {id} = useParams()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [DetailPost, setDetailPost] = useState([])

  useEffect(() => {
    async function fetchDetailPost() {
      const res = await axios.get(`http://localhost:8080/post/${id}`)
      setDetailPost(res.data)
      setIsLoading(false)
    }
    fetchDetailPost()
  }, [])

  const handleGoback = () => {
    navigate(-1)
  }

  if (isLoading) {
    return (
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
    )
  }

  return (
    <>
      {DetailPost && (
        <div className="flex w-full absolute left-0 top-0 bg-white flex-wrap lg:flex-nowrap">
          <div className="relative flex-2 w-[1000px] lg:w-9/12 flex justify-center items-center bg-blurred-img bg-no-repeat bg-cover bg-center">
            <div className="opacity-90 absolute top-6 left-2 lg:left-6 flex gap-6 z-50">
              <p
                className="cursor-pointer "
                onClick={() => {
                  handleGoback()
                }}
              >
                <MdOutlineCancel className="text-white text-[35px] hover:text-black hover:opacity-90" />
              </p>
            </div>
            <div className="relative">
              <div className="lg:h-[100vh] h-[60vh]">
                <News />
              </div>
            </div>
          </div>
          <div className="relative w-[1000px] md:w-[900px] lg:w-[700px]">
            <div className="lg:mt-12 mt-10">
              <Link href={`/profile/${VideoCardType[0].postedBy._id}`}>
                <div className="flex gap-4 mb-4 bg-white w-full pl-10 cursor-pointer">
                  <img
                    width={60}
                    height={60}
                    alt="user-profile"
                    className="rounded-full"
                    src={DetailPost.user.avatar}
                  />
                  <div>
                    <div className=" text-xl font-bold lowercase tracking-wider flex gap-2 items-center ">
                      {DetailPost.user.name.replace(/\s+/g, '')}
                      <GoVerified className="text-blue-400 text-xl" />
                    </div>
                    <p className="text-md">@{DetailPost.user.username}</p>
                  </div>
                </div>
              </Link>
              <div className="px-10">
                <p className=" text-md text-gray-600">
                  {VideoCardType[0].caption.text}
                </p>
              </div>
              <div className="mt-10 px-10">
                {/* {userProfile && ( */}
                <LikeButton
                // likes={VideoCardType[0].likes}
                // flex="flex"
                // handleLike={() => handleLike(true)}
                // handleDislike={() => handleLike(false)}
                />
                {/* )}  */}
              </div>
              {/* <Comments
                  comment={comment}
                  setComment={setComment}
                  addComment={addComment}
                  comments={VideoCardType[0].comments}
                  isPostingComment={isPostingComment}
                />  */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Detail
