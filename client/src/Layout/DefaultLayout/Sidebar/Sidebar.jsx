import {useState} from 'react'
import {ImCancelCircle} from 'react-icons/im'
import {AiOutlineMenu} from 'react-icons/ai'
import {AiFillHome} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import Button from '../../../component/Button/Button'
import Discover from '../../../component/Discover/Discover'
const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true)
  const userProfile = false
  const normalLink =
    'flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold rounded'

  return (
    <div>
      <div
        className="block xl:hidden m-2 ml-4 mt-3 text-xl"
        onClick={() => setShowSidebar((prev) => !prev)}
      >
        {showSidebar ? <ImCancelCircle /> : <AiOutlineMenu />}
      </div>
      <div>
        {showSidebar && (
          <div className="xl:w-400 w-20 flex flex-col justify-start mb-10 border-r-2 border-gray-100 xl:border-0 p-3 ">
            <div className="xl:border-b-2 border-gray-200 xl:pb-4">
              <Link to="/">
                <div className={normalLink}>
                  <p className="text-2x1">
                    <AiFillHome />
                  </p>
                  <span className="capitalize text-xl hidden xl:block">
                    For you
                  </span>
                </div>
              </Link>
            </div>
            {!userProfile && (
              <div className="px-2 py-4 hidden xl:block">
                <p className="text-gray-400 ">
                  Đăng nhập để yêu thích & bình luận
                </p>
                <div className="w-full">
                  <Button
                    style="bg-white text-lg text-red-500 border-[1px] border-red-500 font-semibold px-6 py-3 rounded-md w-full outline-none mt-8 inline-block text-center hover:text-white hover:bg-red-500"
                    to="/login"
                  >
                    Log In
                  </Button>
                </div>
              </div>
            )}
            <Discover />
          </div>
        )}
      </div>
    </div>
  )
}

export default Sidebar
