import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiOutlineUser,
  AiFillHeart,
} from "react-icons/ai";
import { BsFillCartFill, BsTruck } from "react-icons/bs";
import { IoMdWallet, IoMdHelpCircle } from "react-icons/io";

export default function TopNav() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <div className="max-w-[1520px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setSideNav(!sideNav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Yum<span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-orange-700 text-white rounded-full p-2 px-5 font-semibold">
            Free
          </p>
          <p className="p-2 font-semibold">Delivery</p>
        </div>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w[500px]">
        <AiOutlineSearch />
        <input
          className="bg-transparent p-2 w-full focus:outline-none"
          type="text"
          placeholder="search meals"
        />
      </div>

      <button className="bg-orange-700 text-white hidden md:flex items-center py-2 rounded-full">
        <BsFillCartFill size={25} />
        Cart
      </button>
      {sideNav ? (
        <div
          className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"
          onClick={() => setSideNav(!sideNav)}
        ></div>
      ) : (
        ""
      )}

      <div
        className={
          sideNav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setSideNav(!sideNav)}
          size={25}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Yum<span className="text-orange-700 font-semibold">Eats</span>
        </h2>
        <nav>
          <ul className=" flex flex-col p-4 text-gray-900">
            <li className="text-xl py-4 flex">
              <AiOutlineUser
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              My Account
            </li>
            <li className="text-xl py-4 flex">
              <BsTruck
                size={25}
                className="mr-4 text-white bg-black rounded-full px-1"
              />
              Delivery
            </li>
            <li className="text-xl py-4 flex">
              <AiFillHeart
                size={25}
                className="mr-4 text-white bg-black rounded-full px-1"
              />
              My Favourite
            </li>
            <li className="text-xl py-4 flex">
              <IoMdWallet
                size={25}
                className="mr-4 text-white bg-black rounded-full px-1"
              />
              My Wallet
            </li>
            <li className="text-xl py-4 flex">
              <IoMdHelpCircle
                size={25}
                className="mr-4 text-white bg-black rounded-full"
              />
              Help
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
