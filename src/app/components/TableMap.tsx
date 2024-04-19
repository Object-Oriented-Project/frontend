"use client";
import React, { useState } from "react";

function TableMap({ onTableClick }) {
  const [selectedTable, setSelectedTable] = useState(null);

  const handleTableClick = (tableId) => {
    setSelectedTable(tableId === selectedTable ? null : tableId);
    onTableClick(tableId);
  };

  return (
    <div className=" bg-[#ebe2db] w-80 h-52 mb-4 flex flex-row rounded-xl">
      <style>
        {`
                    .btn:focus {
                        background-color: black;
                        color: white;
                    }
                `}
      </style>
      {/* Pink section */}
      <div className="bg-[#ebe2db] w-3/4 flex flex-col m-3">
        {/* Row 1 */}
        <div className="flex">
          <button
            onClick={() => handleTableClick("A1")}
            className="btn bg-[#c62d70] hover:bg-[#5a213e] text-white border-black font-bold py-2 px-4 rounded mr-4 mb-4"
            autoFocus={selectedTable === "A1"}
          >
            A1
          </button>
          <button
            onClick={() => handleTableClick("A3")}
            className="btn bg-[#c62d70] hover:bg-[#5a213e] text-white  border-black font-bold py-2 px-4 rounded mr-4 mb-4"
            autoFocus={selectedTable === "A3"}
          >
            A3
          </button>
        </div>
        {/* Row 2 */}
        <div className="flex">
          <button
            onClick={() => handleTableClick("C1")}
            className="btn btn-circle bg-[#c62d70] hover:bg-[#5a213e] text-white  border-black font-bold mr-5"
            autoFocus={selectedTable === "C1"}
          >
            C1
          </button>
          <button
            onClick={() => handleTableClick("A2")}
            className="btn bg-[#c62d70] hover:bg-[#5a213e] text-white  border-black font-bold py-2 px-4 rounded mr-4 "
            autoFocus={selectedTable === "A2"}
          >
            A2
          </button>
        </div>
        <div className="flex ">
          <button
            onClick={() => handleTableClick("B2")}
            className="btn bg-[#c62d70] hover:bg-[#5a213e] text-white  border-black font-bold py-2 px-4 rounded mr-4 flex-auto mt-4"
            autoFocus={selectedTable === "B2"}
          >
            B2
          </button>
        </div>
      </div>
      {/* Orange section */}
      <div className="bg-[#ebe2db] w-1/4 pt-4  flex flex-col justify-between rounded-xl">
        {/* B1 button */}
        <button
          onClick={() => handleTableClick("B1")}
          className="btn bg-[#c62d70] hover:bg-[#5a213e] text-white  border-black font-bold py-2 px-4 rounded mr-4 self-stretch h-40"
          autoFocus={selectedTable === "B1"}
        >
          B1
        </button>
      </div>
    </div>
  );
}

export default TableMap;
