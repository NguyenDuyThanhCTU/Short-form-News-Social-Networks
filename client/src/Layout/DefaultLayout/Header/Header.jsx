import React, {useState} from 'react'
import Tippy from '@tippyjs/react/headless'
// =====
import Logo from '../../../assets/imgs/FullLogo-black.png'
import avt from '../../../assets/imgs/1.jpg'
import {BsSearch} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {CgProfile} from 'react-icons/cg'
import {SlSettings} from 'react-icons/sl'
import {HiLogout} from 'react-icons/hi'
import {AiOutlinePlus} from 'react-icons/ai'

// =====

import WrapperAccount from '../../../component/Wrapper/Wrapper'
import AccountItem from '../../../component/AccoutItem/AccountItem'
import Button from '../../../component/Button/Button'
import Input from '../../../component/Input/Input'

function Header() {
  const user = useSelector((state) => state.Auth.login.currentUser)

  const [searchResult, setSearchResult] = useState('')

  return (
    <header className=" h-16 flex justify-center bg-black items-center w-full fixed top-0 left-0 right-0 z-50">
      <div className=" text-white flex flex-row items-center w-2/3 px-6 justify-between ">
        {/* Logo */}
        <div className="h-16  w-52 relative m-0">
          <Link to="/">
            <img
              src={Logo}
              alt="logo"
              className="h-full min-w-[13rem] absolute right-0"
            />
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
                <WrapperAccount style="rounded-lg shadow-[lgba(0, 0, 0, 0.12) 0px 2px 12px] bg-white">
                  <AccountItem />
                  <AccountItem />
                </WrapperAccount>
              </div>
            )}
          >
            <form className="flex flex-row bg-slate-100 rounded-3xl h-12 justify-center items-center w-96">
              <Input
                style="bg-slate-100 h-9 w-72 text-black outline-none"
                setData={setSearchResult}
                text="Search news"
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
                  {/* <p className=" font-ShantellSans">Hi, {user.username}</p> */}
                  <Button
                    to="/upload"
                    style="inline-flex hover:bg-gray-200  items-center px-4 py-2 bg-white rounded-md font-medium text-black shadow-sm "
                  >
                    <AiOutlinePlus className="text-2xl mr-1 " />
                    Upload
                  </Button>

                  <div class="group">
                    <div>
                      <img
                        className=" h-9 min-w-[2.25rem] rounded-3xl"
                        src={user.avatar}
                        alt="avt"
                      />
                    </div>
                    <div className="hidden group-hover:block">
                      <div
                        class="bg-slate-100 shadow-md absolute top-10 right-6"
                        role="none"
                      >
                        <div className="bg-black h-2"></div>

                        {/* <!-- Profile --> */}
                        <Button
                          to={`/profile/${user._id}`}
                          style="select-none flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 w-full"
                        >
                          <CgProfile className="text-2xl mr-1" />
                          <p> View Profile</p>
                        </Button>
                        {/* <!-- Settings  --> */}
                        <Button
                          to="/setting"
                          style="select-none flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-300 hover:text-gray-900 w-full"
                        >
                          <SlSettings className="text-2xl mr-1 " />
                          Settings
                        </Button>

                        {/* <!-- Logout  --> */}
                        <Button
                          to="/login"
                          style=" select-none flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-100 hover:text-red-900"
                        >
                          <HiLogout className="text-2xl mr-1" />
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <Button
                  to="/login"
                  style="select-none border-solid border-black flex items-center text-black bg-white  h-8 w-28 rounded-sm justify-around"
                >
                  <AiOutlinePlus className="text-2xl" />
                  <span className="text-xl mr-2">Tải lên</span>
                </Button>
                <Button
                  to="/login"
                  style="select-none border-solid border-black flex items-center text-white bg-red-500  h-8 w-28 rounded-sm justify-around"
                >
                  Đăng nhập
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
