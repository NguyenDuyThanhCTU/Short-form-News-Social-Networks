import React, { useState } from 'react';
import Logo from '../../../assets/imgs/Logo.png';
import avt from '../../../assets/imgs/1.jpg';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { SlSettings } from 'react-icons/sl';
import { HiLogout } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';

function Header() {
  const user = useSelector((state) => state.Auth.login.currentUser);
  const [isSetting, setSetting] = useState(false);

  return (
    <header className=" h-16 flex justify-center bg-black items-center w-full fixed top-0 left-0 right-0 z-50">
      <div className=" text-white flex flex-row items-center w-2/3 px-6 justify-between ">
        {/* Logo */}
        <div className="h-16  w-52 relative m-0">
          <Link to="/">
            <img src={Logo} alt="logo" className="h-full w-52 absolute right-0" />
          </Link>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-min px-2 bg-black">
          <form className="flex flex-row bg-slate-100 rounded-3xl h-12 justify-center items-center w-96">
            <input
              className="bg-slate-100 h-9 w-72 text-black outline-none"
              placeholder="Search news"
            />
            <span className="w-0.5 h-7 bg-black mx-3"></span>
            <button>
              <BsSearch className="text-black text-4xl" />
            </button>
          </form>
        </div>

        {/* Right header */}
        <div className="flex justify-start w-80">
          <div className="bg-blackl flex items-center h-11  justify-evenly relative w-full">
            {user ? (
              <>
                <p className=" font-ShantellSans">Hi, {user.username}</p>
                <div>
                  <button className="h-9 w-9" onClick={() => setSetting(!isSetting)}>
                    <img className=" h-full w-full rounded-3xl" src={avt} alt="avt" />
                  </button>
                </div>

                {isSetting ? (
                  <div class="bg-slate-100  absolute top-14 -right-6" role="none">
                    {/* <!-- Profile --> */}
                    <a
                      href="#"
                      class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      tabindex="-1"
                    >
                      <CgProfile className="text-2xl mr-1" />
                      View Profile
                    </a>
                    {/* <!-- Settings  --> */}
                    <a
                      href="#"
                      class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                      role="menuitem"
                      tabindex="-1"
                    >
                      <SlSettings className="text-2xl mr-1 " />
                      Settings
                    </a>

                    {/* <!-- Logout  --> */}
                    <a
                      href="#"
                      class="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-900"
                      role="menuitem"
                      tabindex="-1"
                    >
                      <HiLogout className="text-2xl mr-1" />
                      Logout
                    </a>
                  </div>
                ) : null}
              </>
            ) : (
              <>
                <div className="border-solid border-black ">
                  <Link to="/auth/Login">
                    <p className="flex items-center text-black bg-white  h-8 w-28 rounded-sm justify-around">
                      <AiOutlinePlus className="text-2xl" />
                      <span className="text-xl mr-2">Tải lên</span>
                    </p>
                  </Link>
                </div>
                <Link to="/auth/Login">
                  <button className="bg-red-600  h-8  w-28 rounded-sm text-base">Đăng nhập</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
