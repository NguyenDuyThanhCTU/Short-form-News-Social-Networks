import React, {useRef, useState} from 'react'
import {Link} from 'react-router-dom'
import {GoVerified} from 'react-icons/go'
import {HiVolumeUp, HiVolumeOff} from 'react-icons/hi'
import {BsFillPlayFill, BsFillPauseFill} from 'react-icons/bs'

function VideoCard({video}) {
  const [isHover, setHover] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="flex flex-col border-b-2 border-gray-200 pb-6">
      <div>
        <div className="flex gap-3 px-2 pt-2 cursor-pointer font-semibold rounded">
          <div className="md:w-16 md:h-16 w-10 h-10">
            <Link to="/">
              <>
                <img
                  width={62}
                  height={62}
                  className="rounded-full"
                  src={video.profile.avatar}
                  alt="profile Photo"
                  layout="reponsive"
                />
              </>
            </Link>
          </div>
          <div>
            <Link to="/">
              <div className="   gap-2 block">
                <p className="flex gap-2 items-center md:text-sm font-bold text-primary">
                  {video.profile.name.replace(/\s+/g, '')}
                  <GoVerified className="text-blue-400 text-sm" />
                </p>
                <p className="capitalize font-medium text-xs text-gray-500 hidden mt-2 md:block">
                  @{video.profile.account.username}
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="lg:ml-20 mb-5">{video.title}</div>
      <div className="lg:ml-20 flex gap-4 relative">
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          className="rounded-3xl "
        >
          <Link to={`/post/${video._id}`}>
            <video
              ref={videoRef}
              loop
              muted={isMuted}
              className="lg:w[600px] h-[300px] md:h-[400px] lg:h-[530px] w-full rounded-2xl cursor-pointer bg-gray-100"
              src={video.video}
            ></video>
          </Link>
          {isHover && (
            <div className="absolute bottom-6 cursor-pointer left-8 md:left-14 lg:left-0 flex gap-10 lg:justify-between w-[100px] md:w-[50px] p-3">
              {playing ? (
                <button onClick={onVideoPress}>
                  {' '}
                  <BsFillPauseFill className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button onClick={onVideoPress}>
                  <BsFillPlayFill className="text-black text-2xl lg:text-4xl" />
                </button>
              )}{' '}
              {isMuted ? (
                <button
                  onClick={() => {
                    setIsMuted(false)
                  }}
                >
                  {' '}
                  <HiVolumeOff className="text-black text-2xl lg:text-4xl" />
                </button>
              ) : (
                <button
                  onClick={() => {
                    setIsMuted(true)
                  }}
                >
                  <HiVolumeUp className="text-black text-2xl lg:text-4xl" />
                </button>
              )}{' '}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default VideoCard
