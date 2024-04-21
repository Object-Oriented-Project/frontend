"use client";
import React, { useState } from "react";
import TableMap from "../components/TableMap";
import { useRouter } from "next/navigation";
export let tableNo: string;
import Image from "next/image";

export default function SelectTable() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedTable, setSelectedTable] = useState(null);
  const router = useRouter();

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const handleTableClick = (tableId) => {
    setSelectedTable(tableId);
  };

  const handleNextButtonClick = () => {
    if (selectedOption == "sitIn" && selectedTable) {
      console.log("Selected option:", selectedOption);
      console.log("Selected table:", selectedTable);
      tableNo = selectedTable;
      router.push("/qr"); // Redirect to /qr page
    } else if (selectedOption === "takeHome") {
      tableNo = "-";
      router.push("/qr"); // Redirect to /qr page
    } else {
      console.warn("Option and table must be selected");
    }
  };

  return (

    <div className="min-h-screen bg-gradient-to-b from-[#ffeaea] to-[#ffcccc] from-20% py-6  ">
      <Image
        className="grid justify-self-center mx-auto w-auto h-auto"
        src="/asset/logo-moving.gif"
        alt="logo"
        width={150}
        height={100}
        priority={false}
        // className="rounded-lg"
      />

      <div className="rounded-3xl border-2 bg-white border-gray-200 p-4  px-10 mb-24 lg:p-8 mx-80  max-lg:max-w-lg max-lg:mx-auto gap-y-4">
        <h2 className="title font-manrope font-bold text-3xl leading-10 mb-8 pt-2 text-center text-black break-normal">
          Where will you enjoy your Cafka magic?
        </h2>

        <div className="rounded-3xl border-2 border-gray-200  p-4 ps-10 lg:p-8 flex flex-row mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 transition transform duration-700 hover:shadow-xl hover:scale-105">
          <input
            type="checkbox"
            checked={selectedOption === "takeHome"}
            onChange={() => handleCheckboxChange("takeHome")}
            className="checkbox"
          />
          <h2 className="ms-6 font-manrope font-bold text-2xl">Grab & Go</h2>
        </div>
        <div className="rounded-3xl border-2 border-gray-200 p-4 ps-10 lg:p-8 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4 transition transform duration-700 hover:shadow-xl hover:scale-105">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <input
                type="checkbox"
                checked={selectedOption === "sitIn"}
                onChange={() => handleCheckboxChange("sitIn")}
                className="checkbox"
              />
              <h2 className="ms-6 font-manrope font-bold text-2xl lg:ml-6">
                Stay & Savor
              </h2>
            </div>
            {selectedOption === "sitIn" && (
              <div className="mt-6 lg:mt-12 flex justify-center">
                <TableMap onTableClick={handleTableClick} />
              </div>
            )}
          </div>
        </div>
        <div className="grid place-content-center grid-flow-col gap-36 ">
          <div
            className="btn bg-gray-200 hover:bg-black hover:text-white transition transform duration-900  hover:shadow-xl hover:scale-105 "
            onClick={() => {
              router.push("/cart");
            }}
          >
            {" "}
            Back for More?{" "}
          </div>
          <div
            className="btn bg-[#c62d70] hover:bg-black text-white transition transform duration-900  hover:shadow-xl hover:scale-105"
            onClick={handleNextButtonClick}
          >
            Unlock the Flavor!
          </div>
        </div>
      </div>
    </div>
  );
}
