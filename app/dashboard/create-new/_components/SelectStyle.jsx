"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

function SelectStyle({onUserSelect}) {
  const [selectedOption, setSelectedOption] = useState();
  const styleOptions = [
    {
      name: "Realistic",
      image: "/realistic.jpg",
    },
    {
      name: "Cartoon",
      image: "/cartoon.jpg",
    },
    {
      name: "Comic",
      image: "/comic.jpg",
    },
    {
      name: "WaterColor",
      image: "/watercolor.jpg",
    },
    {
      name: "gta",
      image: "/gta.jpg",
    },
  ];
  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-violet-700">Style</h2>
      <p className="text-gray-500">Select your video style</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5 mt-3">
        {styleOptions.map((item, index) => (
          <div
            className={`relative hover:scale-105 transition-all cursor-pointer rounded-xl ${
              selectedOption == item.name && "border-4 border-violet-700"
            }`}
          >
            <Image
              src={item.image}
              height={100}
              width={100}
              alt="image"
              className="h-48 w-full object-cover rounded-lg"
              onClick={() => {
                setSelectedOption(item.name)
                onUserSelect(item.name,'imageStyle')
                
              }}
            />
            <h2 className="absolute p-1 text-white bg-black bottom-0 w-full text-center rounded-b-lg ">
              {item.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SelectStyle;
