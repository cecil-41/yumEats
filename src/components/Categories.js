import React from "react";
import { categories } from "../data/data";

export default function Categories() {
  return (
    <div className="max-w[1520px] m-auto px-2 py-2">
      <h1 className="text-orange-500 font-bold text-3xl text-center py-3">
        Trending Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-12 py-2">
        {categories.map((item) => (
          <div
            className="p-2 flex justify-center hover:scale-105 duration-300"
            key={item.id}
          >
            <img
              className="object-cover rounded-xl w-40 h-40 cursor-pointer shadow-xl"
              src={item.picture}
              alt={item.title}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
