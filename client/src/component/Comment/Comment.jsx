import React, {useState} from 'react'
import {FaCommentDots} from 'react-icons/fa'
import {useSelector} from 'react-redux'
import {FaTelegramPlane} from 'react-icons/fa'
import {Link, useNavigate} from 'react-router-dom'
import {GoVerified} from 'react-icons/go'
import axios from 'axios'

function Comment(data) {
  const [comment, setComment] = useState('')
  const navigate = useNavigate()
  const postId = data.data._id
  const CommentData = data.data.comment.comment_list

  const profileId = useSelector(
    (state) => state.Auth.login.currentUser?.account?.profile?._id || null
  )

  const handleComment = async () => {
    if (profileId == null) {
      navigate('/login')
    } else {
      const dataReq = {
        body: comment,
        profile: profileId,
      }

      axios
        .post(`http://localhost:8080/comment/${postId}`, dataReq)
        .then((response) => {
          navigate('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  console.log(CommentData)
  return (
    <div className="border-t-2 border-gray-200 pt-4 px-10 mt-4 bg-[#F8F8F8] border-b-2 lg:pb-0 pb-[100px]">
      {' '}
      <div className="overflow-scroll lg:h-[457px]">
        {' '}
        {CommentData.length > 1 ? (
          CommentData.slice(1).map((comment) => (
            <>
              {' '}
              <div className=" p-2 items-center">
                <Link href={`/profile/`}>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12">
                      <img
                        width={48}
                        height={48}
                        className="rounded-full cursor-pointer"
                        src={comment.commentedBy.avatar}
                        alt="user-profile"
                        layout="responsive"
                      />
                    </div>

                    <p className="flex cursor-pointer gap-1 items-center text-[18px] font-bold leading-6 text-primary">
                      {comment.commentedBy.name}
                      <GoVerified className="text-blue-400" />
                    </p>
                  </div>
                </Link>
                <div>
                  <p className="-mt-5 ml-16 text-[16px] mr-8">{comment.body}</p>
                </div>
              </div>
            </>
          ))
        ) : (
          <div className="flex flex-col justify-center items-center h-full w-full">
            <p className="text-8xl">
              <FaCommentDots />
            </p>
            <p className="text-2xl text-center">
              Chưa có bình luận nào! Hãy là người đầu tiên thêm nhận xét.
            </p>
          </div>
        )}
      </div>
      <div className="absolute bottom-0 left-0  pb-6 px-2 md:px-10 ">
        <div className="flex gap-4">
          <input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="bg-primary px-6 py-4 text-md font-medium border-2 w-[250px] md:w-[700px] lg:w-[350px] border-gray-100 focus:outline-none focus:border-2 focus:border-gray-300 flex-1 rounded-lg"
            placeholder="Add comment.."
          />
          <button
            className="text-md text-gray-400 hover:bg-red-300 w-16 flex justify-center items-center hover:text-white border-2 rounded-lg"
            onClick={() => handleComment()}
          >
            <FaTelegramPlane className="text-center text-3xl" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comment
