import React, {useState} from 'react'
import {MdFavorite} from 'react-icons/md'

function LikeButton() {
  const [alreadyLiked, setAlreadyLiked] = useState(false)
  return (
    <div className="flex gap-6">
      <div className="mt-4 flex flex-col justify-center items-center cursor-pointer">
        {alreadyLiked ? (
          <div
            className="bg-primary rounded-full p-2 md:p-4 text-[#F51997] "
            onClick={() => setAlreadyLiked(false)}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div
            className="bg-primary rounded-full p-2 md:p-4 "
            onClick={() => setAlreadyLiked(true)}
          >
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold ">1</p>
      </div>
    </div>
  )
}

export default LikeButton
