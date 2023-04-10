import React, {useState} from 'react'
import {MdOutlineCancel} from 'react-icons/md'
import {VideoCardType} from '../../assets/utils/VideoCardType'
import {GoVerified} from 'react-icons/go'
import {Link, useNavigate} from 'react-router-dom'
import LikeButton from '../../component/LikeButton/LikeButton'
import News from '../../component/News/News'

function Detail() {
  const [post, setPost] = useState('abas')
  const navigate = useNavigate()

  const handleGoback = () => {
    navigate(-1)
  }

  return (
    <>
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
                  src={VideoCardType[0].postedBy.image}
                />
                <div>
                  <div className="text-xl font-bold lowercase tracking-wider flex gap-2 items-center justify-center">
                    {VideoCardType[0].postedBy.userName.replace(/\s+/g, '')}{' '}
                    <GoVerified className="text-blue-400 text-xl" />
                  </div>
                  <p className="text-md"> {VideoCardType[0].postedBy.name}</p>
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
    </>
  )
}

export default Detail
