import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Home from './Home/Home'
import VideoCard from './VideoCard/VideoCard'
import axios from 'axios'
import {useEffect, useState} from 'react'
import {FaSpinner} from 'react-icons/fa'

function DefaultLayout({children}) {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    async function fetchPost() {
      const response = await axios.get('http://localhost:8080/posts')
      setPosts(response.data)
      setIsLoading(false)
    }

    fetchPost()
  }, [])

  if (isLoading) {
    return (
      <>
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
      </>
    )
  }

  return (
    <div>
      <Header />
      <div className="flex gap-6 md:gap-20 mt-16">
        <div className="h-[92vh] overflow-hidden x1:hover:overflow-auto">
          <Sidebar />
        </div>
        {children && <div>{children}</div>}
        <div className="flex flex-col gap-10 videos h-full w-2/3">
          {posts.map((video) => (
            <VideoCard video={video} key={video.id} />
          ))}
          {/* <VideoCard /> */}
        </div>
      </div>
    </div>
  )
}

export default DefaultLayout
