import React, { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
// =====
import Logo from '../../../assets/imgs/FullLogo-black.png';
import avt from '../../../assets/imgs/1.jpg';
import { BsSearch } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CgProfile } from 'react-icons/cg';
import { SlSettings } from 'react-icons/sl';
import { HiLogout } from 'react-icons/hi';
import { AiOutlinePlus } from 'react-icons/ai';

// =====

import WrapperAccount from '../../../SearchResult/Wrapper';
import AccountItem from '../../../SearchResult/AccountItem';

function Header() {
  const user = useSelector((state) => state.Auth.login.currentUser);
  // const user = 'thanh';
  const [isSetting, setSetting] = useState(false);
  const [searchResult, setSearchResult] = useState('');

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
          <Tippy
            visible={searchResult.length > 0}
            interactive
            placement="bottom-start"
            render={(attrs) => (
              <div className="w-96" tabIndex="-1" {...attrs}>
                <WrapperAccount>
                  <AccountItem />
                  <AccountItem />
                </WrapperAccount>
              </div>
            )}
          >
            <form className="flex flex-row bg-slate-100 rounded-3xl h-12 justify-center items-center w-96">
              <input
                className="bg-slate-100 h-9 w-72 text-black outline-none"
                onChange={(e) => setSearchResult(e.target.value)}
                placeholder="Search news"
              />

              <span className="w-0.5 h-7 bg-black mx-3"></span>

              <button>
                <BsSearch className="text-black text-3xl" />
              </button>
            </form>
          </Tippy>
        </div>

        {/* Right header */}
        <div className="flex justify-start w-80">
          <div className="bg-blackl flex items-center h-11  justify-evenly relative w-full">
            {user ? (
              <div className="w-full">
                <div className="flex justify-around items-center w-full">
                  <p className=" font-ShantellSans">Hi, {user.username}</p>
                  <div class="group">
                    <button className="h-9 w-9" onClick={() => setSetting(!isSetting)}>
                      <img className=" h-full w-full rounded-3xl" src={avt} alt="avt" />
                    </button>

                    <div className="hidden group-hover:block">
                      <div class="bg-slate-100 shadow-md absolute top-10 right-6" role="none">
                        <div className="bg-black h-2"></div>

                        {/* <!-- Profile --> */}
                        <Link to="/profile">
                          <button
                            class=" flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 w-full"
                            role="menuitem"
                            tabindex="-1"
                          >
                            <CgProfile className="text-2xl mr-1" />
                            View Profile
                          </button>
                        </Link>
                        {/* <!-- Settings  --> */}
                        <Link to="/setting">
                          <button
                            class="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 w-full"
                            role="menuitem"
                            tabindex="-1"
                          >
                            <SlSettings className="text-2xl mr-1 " />
                            Settings
                          </button>
                        </Link>

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
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className="border-solid border-black ">
                  <Link to="/login">
                    <p className="flex items-center text-black bg-white  h-8 w-28 rounded-sm justify-around">
                      <AiOutlinePlus className="text-2xl" />
                      <span className="text-xl mr-2">T???i l??n</span>
                    </p>
                  </Link>
                </div>
                <Link to="/login">
                  <button className="bg-red-600  h-8  w-28 rounded-sm text-base">????ng nh???p</button>
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
