"use client";
import React, { useState } from "react";

const Modal = ({ item, closeModal }) => {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [sweetLevel, setSweetLevel] = useState("Normal");
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleSweetLevelChange = (level) => {
    setSweetLevel(level);
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };




  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50" role="dialog">
      <div className="modal-box bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-10 rounded-lg relative">
        <img
          className="w-64 mx-auto transform transition duration-300 hover:scale-105"
          src={`/menu/${item.PictureName}`}
          alt=""
        />
        <h1 className="text-gray-900 poppins text-lg">{item.ItemName}</h1>
        <p className="text-gray-500 poppins text-sm ">{item.ItemDescription}</p>

        {item.ItemType === "Beverage" && (
          <div>
            <div className="form-control mb-4">
              <label className="label cursor-pointer">
                <span className="label-text font-md">Select Size:</span>
                <select
                  value={selectedSize}
                  onChange={(e) => handleSizeChange(e.target.value)}
                  className="select select-bordered w-full"
                >
                  <option value="Small">Small</option>
                  <option value="Medium">Medium</option>
                  <option value="Large">Large</option>
                </select>
              </label>
            </div>

            <div>
              <div className="form-control mb-4">
                <label className="label cursor-pointer">
                  <span className="label-text font-md">Select Sweet Level:</span>
                  <select
                    value={sweetLevel}
                    onChange={(e) => handleSweetLevelChange(e.target.value)}
                    className="select select-bordered w-full border border-gray-300 rounded-lg"
                  >
                    <option value="Extra Sweet">Extra sweet 120%</option>
                    <option value="Normal">Normal 100%</option>
                    <option value="Less Sweet">Less Sweet 75%</option>
                    <option value="Half Sweet">Half Sweet 50%</option>
                    <option value="Quarter Sweet">Quarter Sweet 25%</option>
                    <option value="No Sweet">No Sweet 0%</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        )}



        <h2 className="text-gray-900 poppins text-2xl font-bold justify-self-end">{item[`ItemPrice${selectedSize}`]} THB</h2>

        {/* add and remove item number*/}
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center gap-4">
            <button
              onClick={handleDecrement}
              className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 9.5H14.25"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <input
              type="text"
              id="number"
              className="border border-gray-200 rounded-full w-10 aspect-square outline-none text-gray-900 font-semibold text-sm py-1.5 px-3 bg-gray-100 text-center"
              value={quantity}
              readOnly
            />
            <button
              onClick={handleIncrement}
              className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300"
            >
              <svg
                className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.75 9.5H14.25M9 14.75V4.25"
                  stroke=""
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>



        <div className="modal-action">
          <label htmlFor={`my_modal_${item.ID}`} className="btn bg-pink-400">
            Add To Cart
          </label>
        </div>



        <button className="absolute top-0 right-0 m-4" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;