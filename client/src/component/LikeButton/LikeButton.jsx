import axios from 'axios'
import React, {useState} from 'react'
import {MdFavorite} from 'react-icons/md'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function LikeButton(data) {
  const likeData = data.data.like
  const likeId = likeData.likedBy
  const postId = data.data._id
  let currentState = false

  const profileId = useSelector(
    (state) => state.Auth.login.currentUser?.account?.profile?._id || null
  )

  if (profileId) {
    likeId.forEach((id) => {
      if (id === profileId) {
        currentState = true
      } else {
        currentState = false
      }
    })
  }

  const dataReq = {profile: profileId}
  const handleLike = async () => {
    await axios.post(`http://localhost:8080/like/${postId}`, dataReq)
    setAlreadyLiked(true)
  }

  const handleUnLike = async () => {
    await axios.post(`http://localhost:8080/unlike/${postId}`, dataReq)
    setAlreadyLiked(false)
  }

  const [alreadyLiked, setAlreadyLiked] = useState(currentState ? true : false)
  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {profileId == null ? (
          <Link to="/Login">
            {alreadyLiked ? (
              <div className="bg-primary rounded-full p-2 md:p-4 text-[#F51997] ">
                <MdFavorite className="text-lg md:text-2xl" />
              </div>
            ) : (
              <div className="bg-primary rounded-full p-2 md:p-4 ">
                <MdFavorite className="text-lg md:text-2xl" />
              </div>
            )}
          </Link>
        ) : (
          <>
            {alreadyLiked ? (
              <div
                className="bg-primary rounded-full p-2 md:p-4 text-[#F51997] "
                onClick={() => handleUnLike()}
              >
                <MdFavorite className="text-lg md:text-2xl" />
              </div>
            ) : (
              <div
                className="bg-primary rounded-full p-2 md:p-4 "
                onClick={() => handleLike()}
              >
                <MdFavorite className="text-lg md:text-2xl" />
              </div>
            )}
          </>
        )}

        <p className="text-md font-semibold ">{likeData.likedBy.length}</p>
      </div>
    </div>
  )
}

export default LikeButton
