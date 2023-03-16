import React, {useState} from 'react'
import {topics} from '../../assets/utils/constants'
import {Link} from 'react-router-dom'

function Discover() {
  const activeTopicStyle =
    'xl:border-2 hover:bg-primary xl:border-red-500 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-red-500'
  const topicStyle =
    'xl:border-2 hover:bg-primary xl:border-gray-300 px-3 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-black'
  const [selectedIdx, setSelectedIdx] = useState('')
  return (
    <div className="xl:border-b-2 xl:border-gray-200 pb-6">
      <p className="text-gray-500 font-semibold m-3 mt-4 hidden xl:block">
        Chủ đề phổ biến
      </p>
      <div className="flex gap-3 flex-wrap  ">
        {topics.map((item) => (
          <Link to={`/?topic=${item.name}`} key={item.name}>
            <div
              className={
                selectedIdx === item.name ? activeTopicStyle : topicStyle
              }
              onClick={() => setSelectedIdx(item.name)}
            >
              <span className="font-bold text-2xl xl:text-md ">
                {item.icon}
              </span>
              <span
                className={`font-medium text-md hidden xl:block capitalize`}
              >
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Discover
