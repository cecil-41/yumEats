import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsGithub,
  BsTwitterX,
  BsLinkedin,
} from "react-icons/bs";

export default function Footer() {
  return (
    <div className="max-w-[1520px] m-auto px-2 py-2 bg-[#24262b]">
      <div className="py-16 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
          <h1 className="w-full text-3xl font-bold text-orange-500 py-2">YumEats</h1>
          <p className="text-justify">
            Ut facilisi congue tristique morbi posuere; tortor enim torquent.
            Nulla maximus feugiat a vitae lobortis, facilisis egestas
            ullamcorper cubilia! Morbi pretium lorem iaculis curabitur imperdiet
            adipiscing aliquet lacinia. Eu aptent augue class viverra diam
            curabitur. Commodo eu pretium proin id senectus consequat. 
          </p>

          <div className="flex justify-between md:w-[75%] my-6">
            <BsFacebook size={30} className="cursor-pointer" />
            <BsInstagram size={30} className="cursor-pointer" />
            <BsGithub size={30} className="cursor-pointer" />
            <BsTwitterX size={30} className="cursor-pointer" />
            <BsLinkedin size={30} className="cursor-pointer" />
          </div>
        </div>

        <div className="lg:col-span-2 flex justify-between mt-6">
          <div>
            <h1 className="font-medium text-[#9b9b9b]">Location</h1>
            <ul>
              <li className="py-2 text-sm cursor-pointer">Pretoria</li>
              <li className="py-2 text-sm cursor-pointer">Johannesburg</li>
              <li className="py-2 text-sm cursor-pointer">Cape Town</li>
              <li className="py-2 text-sm cursor-pointer">Nelspruit</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium text-[#9b9b9b]">Location</h1>
            <ul>
              <li className="py-2 text-sm cursor-pointer">Pretoria</li>
              <li className="py-2 text-sm cursor-pointer">Johannesburg</li>
              <li className="py-2 text-sm cursor-pointer">Cape Town</li>
              <li className="py-2 text-sm cursor-pointer">Nelspruit</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium text-[#9b9b9b]">Location</h1>
            <ul>
              <li className="py-2 text-sm cursor-pointer">Pretoria</li>
              <li className="py-2 text-sm cursor-pointer">Johannesburg</li>
              <li className="py-2 text-sm cursor-pointer">Cape Town</li>
              <li className="py-2 text-sm cursor-pointer">Nelspruit</li>
            </ul>
          </div>
          <div>
            <h1 className="font-medium text-[#9b9b9b]">Location</h1>
            <ul>
              <li className="py-2 text-sm cursor-pointer">Pretoria</li>
              <li className="py-2 text-sm cursor-pointer">Johannesburg</li>
              <li className="py-2 text-sm cursor-pointer">Cape Town</li>
              <li className="py-2 text-sm cursor-pointer">Nelspruit</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
