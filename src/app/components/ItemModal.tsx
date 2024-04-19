"use client";
import React, { useEffect, useState } from "react";
import { ord } from "../page";
import { Beverage } from "./Beverage";
import { Bakery } from "./Bakery";
import { Food } from "./Food";

const Modal = ({ item, closeModal }) => {
  const [selectedSize, setSelectedSize] = useState("Large");
  const [sweetLevel, setSweetLevel] = useState("NORMAL");
  const [quantity, setQuantity] = useState(1);
  const [ketoFlour, setKetoFlour] = useState(false); // State to track checkbox value
  const [spicyLevel, setSpicyLevel] = useState("NORMAL"); // State to track spicy level [0-4
  
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleSweetLevelChange = (level) => {
    setSweetLevel(level);
  };
 const handleSpicyLevel = (level) => {
    setSpicyLevel(level);
 }
  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    console.log("quantity incre ", quantity)
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };
  
  const addToCart = (item) => {
    let finalQuantity = quantity; 
    if (item.ItemType === "Beverage"){
      ord.addProduct(new Beverage(item.ID, item.ItemName, item[`ItemPrice${selectedSize}`], selectedSize, finalQuantity,sweetLevel));
    } else if (item.ItemType === "Bakery") {
      ord.addProduct(new Bakery(item.ID, item.ItemName, item[`ItemPrice${selectedSize}`], selectedSize, finalQuantity, ketoFlour));
    } else { // Food
      ord.addProduct(new Food(item.ID, item.ItemName, item[`ItemPrice${selectedSize}`], selectedSize, finalQuantity, spicyLevel));
    }
    let totalQuantity = 0;
    ord.getProducts().forEach(item => {
        totalQuantity += item.product.getQuantity();
    });
    console.log("Total quantity:", totalQuantity);
  }
 
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50" role="dialog">
      <div className="modal-box bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl scale-105 p-10 rounded-lg relative">
        <img
          className="w-64 mx-auto transform transition duration-300 hover:scale-105"
          src={`/menu/${item.PictureName}`}
          alt=""
        />
        <h1 className="text-gray-900 poppins text-xl font-bold">{item.ItemName}</h1>
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
                    <option value="MORE">Extra sweet 150%</option>
                    <option value="NORMAL">Normal 100%</option>
                    <option value="LESS">Less Sweet 50%</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
        )}

        {item.ItemType === "Food" && (
          
          <div className="form-control mb-4">
            <label className="label cursor-pointer">
              <span className="label-text font-md">Select Spicy Level:</span>
              <select
                value={spicyLevel}
                onChange={(e) => handleSpicyLevel(e.target.value)}
                className="select select-bordered w-full"
              >
                <option value="MORE">Extra Spicy 150%</option>
                <option value="NORMAL">Normal 100%</option>
                <option value="LESS">Less Spicy 50%</option>

              </select>
            </label>
          </div>
        )}

{item.ItemType === "Bakery" && (
          <div className="flex mt-3 mb-3 ">
          <label className="mr-5">Keto flour</label>
          <input 
            type="checkbox" 
            className="checkbox rounded border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
            checked={ketoFlour} 
            onChange={(e) => setKetoFlour(e.target.checked)} // Update ketoFlour state when checkbox is changed
          />
          </div>
        )}

        <h2 className="text-gray-900 poppins text-xl font-bold justify-self-end">{item[`ItemPrice${selectedSize}`]} THB</h2>

        {/* add and remove item number*/}
        <div className="flex justify-center items-center mt-12">
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
          <label htmlFor={`my_modal_${item.ID}`} className="btn bg-pink-400" onClick={() => {addToCart(item) ; console.log(ord.getProducts()); closeModal()}} >
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
