import React from "react";

export default function NewsLetter() {
  return (
    <div className="max-w-[1520px] mx-auto text-white px-2 py-2 bg-[#24262b]">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="md:col-span-1 my-4">
          <h1>Stay up-to-date with our daily products and news!</h1>
          <p>Sign up to join our newsletter</p>
        </div>

        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Email"
              className="p-3 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium w-[200px] ml-4 my-6 py-3 px-6 border-none">
              Notify Me
            </button>
          </div>
          <p className="text-white">
            We are concerned about the security of your data. Read more{" "}
            <span className=" text-green-700">Privacy Policy</span>
          </p>
        </div>
        <hr className="my-8 bg-gray-700 border-1 dark:bg-gray-700" />
      </div>
    </div>
  );
}
