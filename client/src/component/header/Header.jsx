import React from "react";
import Logo from "../assets/imgs/Logo.png"
import {BsSearch} from "react-icons/bs"
import {AiOutlinePlus} from "react-icons/ai"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className=" h-16 flex justify-around bg-black items-center w-full fixed" >
      <div className=" text-white flex flex-row items-center w-1/2 px-6 justify-between ">

        {/* Logo */}
        <div className="h-16  w-52 relative m-0">
          <Link to="/"><img src={Logo} alt="logo" className ="h-full w-52 absolute right-0"/> </Link>
        </div>

        {/* Search Bar */}
        <div className="relative min-w-min px-2 bg-black">
          <from className="flex flex-row bg-slate-100 rounded-3xl h-12 justify-center items-center w-96">
          <input className="bg-slate-100 h-9 w-72 text-black outline-none" placeholder="Search news" />
            <span className="w-0.5 h-7 bg-black mx-3"></span>
            <button><BsSearch className="text-black text-4xl"/></button>
          </from>
        </div>

        {/* Right header */}
        <div className="flex justify-start">
          <div className="bg-blackl flex items-center h-11 w-60 justify-between">
            <div className="border-solid border-black ">
              <a className="flex items-center text-black bg-white  h-8 w-28 rounded-sm justify-around"  href="">
                <AiOutlinePlus className="text-2xl"/>
              <Link to= "Login">
                <span className="text-xl mr-2">Tải lên</span>
              </Link>
              </a>
            </div>
            <Link to= "/auth/Login">
              <button className="bg-red-600  h-8  w-28 rounded-sm text-base" >Đăng nhập</button>
            </Link>
           </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
