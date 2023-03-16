import Logo from '../../../assets/imgs/FullLogo-white.png';
import { Link } from 'react-router-dom';

const SidebarProfile = () => {
  return (
    // <div class=" w-60 bg-white shadow-lg   fixed left-0  z-10 top-16">
    //   <div className="pt-16">
    <nav class=" w-64 bg-white shadow-lg h-screen fixed left-0  z-10 top-0">
      <div class="flex items-center justify-center h-16 w-full pt-24">
        <img class="w-full  " src={Logo} alt="Logo" />
      </div>
      <div class="flex-grow mt-14  overflow-y-auto">
        <nav class="px-4">
          <Link to="/profile">
            <button class="block py-2.5 px-3 mb-1 w-full text-left rounded-md text-sm font-medium text-gray-700   hover:bg-gray-300">
              Profile
            </button>
          </Link>
          <Link to="/dashboard">
            <button class="block py-2.5 px-3 mb-1 w-full text-left rounded-md text-sm font-medium  text-gray-700  hover:bg-gray-300">
              Dashboard
            </button>
          </Link>
          <a
            href="#"
            class="block py-2.5 px-3 mb-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Discover
          </a>
          <a
            href="#"
            class="block py-2.5 px-3 mb-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Inbox
          </a>
          <a
            href="#"
            class="block py-2.5 px-3 mb-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Profile
          </a>
          <a
            href="#"
            class="block py-2.5 px-3 mb-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            Settings
          </a>
          <Link to="/">
            <button class="block py-2.5 px-3 mb-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200">
              Logout
            </button>
          </Link>
        </nav>
      </div>
    </nav>

    //   </div>
    // </div>
  );
};
export default SidebarProfile;
