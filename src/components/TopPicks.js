import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { topPicks } from "../data/data";

export default function TopPicks() {
  return (
    <>
      <h1 className=" text-orange-500 font-bold text-3xl text-center py-2">
        Top Picks
      </h1>
      <div className="hidden lg:flex max-w-[1520px] m-auto px-2 py-2">
        <Splide options={{ perPage: 4, gap:"0.9rem", grag: "free",}}>
          {topPicks.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <div key={item.id} className="rounded-3xl relative">
                  <div className="absolute w-full h-full bg-black/50 rounded-3xl text-white">
                    <h2 className="font-bold py-2 text-orange-400 px-2">{item.title}</h2>{" "}
                    <p className="font-semibold px-2">{item.price}</p>{" "}
                    <button className=" border-stone-300 text-white mx-2 px-2 absolute bottom-4">
                      Add To Cart
                    </button>
                  </div>
                  <img
                    src={item.picture}
                    alt={item.title}
                    className="rounded-3xl w-full h-[180px] object-cover cursor-pointer hover:scale-105 ease-out duration-300"
                  />
                </div>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
}
