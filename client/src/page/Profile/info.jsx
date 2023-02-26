import { useState } from "react";
import Logo from "../../assets/imgs/FullLogo-white.png";
import { Link } from "react-router-dom";

import DashBoard from "./Dashboard";
import Profile from "./profile";
const NavProfile = (props) => {
  const { setRender } = props;
  // const [isChoose, setChoose] = useState(true);
  // const handleChoose = () => {};
  return (
    <div>
      <div class="flex flex-col  w-60 bg-white shadow-lg relative left-0 top-0 h-screen ml-2">
        <div className="pt-16">
          <div class="flex items-center justify-center h-16 w-full">
            <img class="w-full  " src={Logo} alt="Logo" />
          </div>
          <div class="flex-grow mt-14  overflow-y-auto">
            <nav class="px-4">
              <Link to="/Info/Profile">
                <button
                  // onClick={() => setChoose(true)}
                  class="block py-2.5 px-3 mb-1 w-full text-left rounded-md text-sm font-medium text-gray-700   hover:bg-gray-300"
                >
                  Profile
                </button>
              </Link>
              <Link to="Info/Dashboard">
                <button
                  // onClick={() => setChoose(false)}
                  class="block py-2.5 px-3 mb-1 w-full text-left rounded-md text-sm font-medium  text-gray-700  hover:bg-gray-300"
                >
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
                <button
                  onClick={() => setRender(true)}
                  class="block py-2.5 px-3 mb-1 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-200"
                >
                  Logout
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      {/* {isChoose ? (
        <>
          <Profile />
        </>
      ) : (
        <>
          <DashBoard />
        </>
      )} */}
    </div>
  );
};
export default NavProfile;
