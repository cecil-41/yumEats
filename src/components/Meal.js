import React, { useState } from "react";
import { mealData } from "../data/data";
import { BsArrowRight } from "react-icons/bs";

export default function Meal() {
  const [food, setFood] = useState(mealData);

  const filterCat = (category) => {
    const filteredFood = mealData.filter((item) => item.category === category);
    setFood(filteredFood.length ? filteredFood : mealData);
  };

  return (
    <div className="max-w[1520px] m-auto px-2 py-2 mt-3">
      <h1 className="text-orange-500 font-bold text-3xl text-center py-2">
        Our Meal
      </h1>
      <div className="flex flex-col lg:flex-row justify-center mx-2 my-3">
        <div className="flex justify-center md:justify-center ">
          <button
            className="me-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => setFood(mealData)}
            aria-label="Show all meals"
          >
            All
          </button>
          <button
            className="me-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => filterCat("burger")}
            aria-label="Show burgers"
          >
            Burger
          </button>
          <button
            className="me-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => filterCat("chicken")}
            aria-label="Show chicken dishes"
          >
            Chicken
          </button>
          <button
            className="me-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => filterCat("drink")}
            aria-label="Show drinks"
          >
            Drinks
          </button>
          <button
            className="me-1 border-orange-500 bg-orange-500 text-white hover:bg-orange-600"
            onClick={() => filterCat("pizza")}
            aria-label="Show pizzas"
          >
            Pizza
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 xl:grid-cols-4 gap-3">
        {food.map((item) => (
          <div
            key={item.id}
            className="border-none hover:scale-105 duration-300"
          >
            <img
              src={item.picture}
              alt={item.title}
              className="rounded-lg w-full h-[200px] object-cover cursor-pointer"
            />
            <div className="flex justify-between py-2 px-2">
              <p className="font-semibold">{item.title}</p>
              <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8">
                {item.price}
              </p>
            </div>
            <div className="pl-2 py-4 -mt-6">
              <p className="flex items-center text-orange-700 cursor-pointer">
                View More <BsArrowRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
