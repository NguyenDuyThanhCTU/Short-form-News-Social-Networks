import React, {useState} from 'react'
import {FaCloudUploadAlt} from 'react-icons/fa'

function Upload() {
  const [isLoading, setIsLoading] = useState(false)
  const [videoAsset, setvideoAsset] = useState(false)
  const [ErrorUpload, setErrorUpload] = useState(false)

  const uploadVideo = async (e) => {
    const SelectedFile = e.target.files[0]
    const fileTyes = ['video/mp4', 'video/webm', 'video/ogg']

    if (fileTyes.includes(SelectedFile.type)) {
      console.log('upload here')
    } else {
      setIsLoading(false)
      setErrorUpload(true)
    }
  }

  return (
    <div className="flex w-full h-full ">
      <div className=" bg-white rounded-lg xl:h-[80vh] flex gap-6 flex-wrap justify-center items-center p-14 pt-6">
        <div>
          <div>
            <p className="text-2xl font-bold">Upload Video</p>
            <p className="text-md text-gray-400 mt-1">
              Post a video to your account
            </p>
          </div>
          <div className=" border-dashed rounded-xl border-4 border-gray-200 flex flex-col justify-center items-center  outline-none mt-10 w-[260px] h-[458px] p-10 cursor-pointer hover:border-red-300 hover:bg-gray-100">
            {isLoading ? (
              <div>
                <p>Loading...</p>
              </div>
            ) : (
              <div>
                {videoAsset ? (
                  <div></div>
                ) : (
                  <label className="cursor-pointer">
                    <div className="flex flex-col items-center justify-center h-full">
                      <div className="flex flex-col justify-center items-center">
                        <p className="font-bold text-xl">
                          <FaCloudUploadAlt className="text-gray-300 text-6xl" />
                        </p>
                        <p className="text-xl font-semibold">
                          Select video to upload
                        </p>
                      </div>
                      <p className="text-gray-400 text-center mt-10 text-sm leading-10">
                        MP4 or WebM or ogg <br />
                        720x1280 resolution or higher <br />
                        Up to 10 minutes <br />
                        Less than 2 GB
                      </p>
                      <p className="bg-[#F51997] text-center mt-8 rounded text-white text-md font-medium p-2 w-52 outline-none">
                        Select file
                      </p>
                    </div>
                    <input
                      type="file"
                      name="upload-video"
                      onChange={(e) => uploadVideo(e)}
                      className="w-0 h-0"
                    />
                  </label>
                )}
              </div>
            )}
          </div>
          {ErrorUpload && (
            <p className="text-center text-xl text-red-400 font-semibold mt-4 w-[260px]">
              Please select an video file (mp4 or webm or ogg)
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Upload
