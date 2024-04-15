
"use client";
import React, { useEffect, useState } from "react";


const MenuItem = ({ item }) => {
    const [selectedSize, setSelectedSize] = useState('Large');
    const [sweetLevel, setSweetLevel] = useState('Normal');

    const handleSizeChange = (size) => {
        setSelectedSize(size);
    };

    const handleSweetLevelChange = (level) => {
        setSweetLevel(level);
    };

    return (
        <div>

            <div key={item.ID} className="bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                <span className="bg-red-100 border border-red-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">
                    {item.ItemType}
                </span>
                <img
                    className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                    src={item.PictureName}
                    alt=""
                />
                <div className="flex flex-col items-center my-3 space-y-2">
                    <h1 className="text-gray-900 poppins text-lg">{item.ItemName}</h1>
                    <p className="text-gray-500 poppins text-sm text-center">{item.ItemDescription}</p>
                    <h2 className="text-gray-900 poppins text-2xl font-bold">{item[`ItemPrice${selectedSize}`]}</h2>

                    <label
                        htmlFor={`my_modal_${item.ID}`}
                        className="btn bg-primary text-white px-8 py-2 focus:outline-none poppins rounded-full mt-24 transform transition duration-300 hover:scale-105"
                    >
                        Order Now
                    </label>


                    <input type="checkbox" id={`my_modal_${item.ID}`} className="modal-toggle" />
                    <div className="modal inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50" role="dialog">
                        {/* Modal content */}
                        <div className="modal-box bg-white border border-gray-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative">
                            <img
                                className="w-64 mx-auto transform transition duration-300 hover:scale-105"
                                src={item.PictureName}
                                alt=""
                            />
                            <h1 className="text-gray-900 poppins text-lg">{item.ItemName}</h1>
                            <p className="text-gray-500 poppins text-sm text-center">{item.ItemDescription}</p>


                            {item.ItemType === 'Beverage' && (
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


                            <h2 className="text-gray-900 poppins text-2xl font-bold justify-self-end">{item[`ItemPrice${selectedSize}`]}</h2>
                            <div className="modal-action">
                                <label htmlFor={`my_modal_${item.ID}`} className="btn">
                                    Add To Cart
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default MenuItem;
