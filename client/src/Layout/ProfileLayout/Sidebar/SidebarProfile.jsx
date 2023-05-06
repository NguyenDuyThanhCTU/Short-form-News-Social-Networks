import {useState} from 'react'
import Logo from '../../../assets/imgs/FullLogo-white.png'
import {Link} from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'

const SidebarProfile = () => {
  const [Click, setClick] = useState('profile')
  const DefaultStyle =
    'block py-2.5 px-3 mb-1 w-full text-left rounded-md text-sm font-medium  text-gray-700  hover:bg-gray-300'
  const LogoutStyle =
    'block py-2.5 px-3 mb-1 w-full text-left rounded-md text-sm font-medium  text-gray-700  hover:bg-red-300'
  const conClickStyle =
    'block py-2.5 px-3 mb-1 w-full text-left rounded-md text-sm font-medium text-gray-700  bg-gray-300'
  console.log(Click)
  return (
    // <div class=" w-60 bg-white shadow-lg   fixed left-0  z-10 top-16">
    //   <div className="pt-16">

    <nav class=" w-64 bg-white shadow-lg h-screen fixed left-0  z-10 top-0">
      <div class="flex items-center justify-center h-16 w-full pt-24 ">
        <img class="w-full  " src={Logo} alt="Logo" />
      </div>
      <div class="flex-grow mt-16  overflow-y-auto">
        <nav class="px-4">
          <Link to="/profile">
            <button
              class={Click === 'profile' ? conClickStyle : DefaultStyle}
              onClick={() => setClick('profile')}
            >
              Profile
            </button>
          </Link>
          <Link to="/dashboard">
            <button
              class={Click === 'dashboard' ? conClickStyle : DefaultStyle}
              onClick={() => setClick('dashboard')}
            >
              Dashboard
            </button>
          </Link>

          <Link to="/">
            <button class={LogoutStyle}>Back </button>
          </Link>
        </nav>
      </div>
    </nav>

    //   </div>
    // </div>
  )
}
export default SidebarProfile
