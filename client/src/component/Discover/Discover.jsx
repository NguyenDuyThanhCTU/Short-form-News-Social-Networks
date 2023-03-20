import React, {useEffect, useState} from 'react'
import {topics} from '../../assets/utils/constants'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Discover() {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('http://localhost:8080/allTopic/')
      .then((res) => setData(res.data))
      .catch((err) => console.log('Failed to get data from server', err))
  }, [])

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
        {data.map((item) => (
          <Link to={`/?topic=${item.name}`} key={item.name}>
            <div
              className={
                selectedIdx === item.name ? activeTopicStyle : topicStyle
              }
              onClick={() => setSelectedIdx(item.name)}
            >
              <span
                dangerouslySetInnerHTML={{__html: item.icon}}
                className="font-bold text-2xl xl:text-md "
              ></span>
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
