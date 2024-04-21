"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Beverage } from "../product/Beverage";

const MenuItem = ({ item, openModal }) => {
  let bgColorClass = "";

  if (item.ItemType === "Beverage") {
    bgColorClass = "bg-teal-200";
  } else if (item.ItemType === "Bakery") {
    bgColorClass = "bg-amber-300";
  } else if (item.ItemType === "Food") {
    bgColorClass = "bg-gray-100";
  }
  return (
    <div>
      <div
        key={item.ID}
        className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative"
      >
        <span
          className={`${bgColorClass} border border-pink-500 rounded-full text-black text-sm poppins px-4 py-1 inline-block mb-4`}
        >
          {item.ItemType}
        </span>
        <Image
          className="w-64 mx-auto transform transition duration-300 hover:scale-105"
          src={`/menu/${item.PictureName}`}
          alt=""
          width={200}
          height={200}
        />

        <div className="flex flex-col items-center my-3 space-y-2">
          <h1 className="text-gray-900 poppins text-xl font-bold">
            {item.ItemName}
          </h1>
          <p className="text-gray-500 poppins text-sm text-center">
            {item.ItemDescription}
          </p>
          <h2 className="text-gray-900 poppins text-lg font-bold">
            {item.ItemPriceLarge} THB
          </h2>

          <label
            htmlFor={`my_modal_${item.ID}`}
            className="btn bg-pink-400 text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:bg-pink-700 hover:scale-105"
            onClick={() => openModal(item)}
          >
            Order Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
