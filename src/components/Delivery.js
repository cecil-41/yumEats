import React from "react";
import image from "../assets/images/delivery/delivery.svg";

export default function Delivery() {
  return (
    <div className="w-full bg-white py-4 px-4">
      <h3 className="text-orange-500 text-3xl font-bold text-center">
        Quick Delivery App
      </h3>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-full h-auto max-w-[550px] mx-auto my-4"
          src={image}
          alt="Delivery"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold text-3xl">Get The App</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Limitless Convenience On Demand
          </h1>
          <p className="">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
            nemo assumenda tenetur ut nostrum, sunt cupiditate laboriosam
            voluptatibus, temporibus reiciendis voluptates suscipit similique
            cum itaque voluptatum amet ullam labore perferendis.
          </p>
          <button className=" bg-black text-[#00df9a] w-[200px] rounded-md md font-medium my-6 mx-auto md:mx-0">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}
