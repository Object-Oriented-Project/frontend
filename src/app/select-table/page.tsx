"use client";
import React, { useState } from "react";
import TableMap from "../components/TableMap";
import { useRouter } from "next/navigation";
import Receipt from "../components/Receipt";
import {ord} from "../cart/page";
import { cust } from "../page";
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
    if (selectedOption && selectedTable) {
      console.log("Selected option:", selectedOption);
      console.log("Selected table:", selectedTable);
      new Receipt(ord.getOID(), ord.getUID(), selectedTable, cust.getName(), "ONGOING").sendToKitchen();
      router.push("/qr"); // Redirect to /qr page
    } else {
      console.warn("Option and table must be selected");
    }
  };

  return (
    <div className="flex flex-col bg-orange-200">
      <div className="container max-w-xl bg-slate-100 rounded-xl ">
        Selected Table
      </div>
      <div>
        <div>Take Home</div>
        <input
          type="checkbox"
          checked={selectedOption === "takeHome"}
          onChange={() => handleCheckboxChange("takeHome")}
          className="checkbox"
        />
      </div>
      <div>
        <div>Sit In</div>
        <input
          type="checkbox"
          checked={selectedOption === "sitIn"}
          onChange={() => handleCheckboxChange("sitIn")}
          className="checkbox"
        />
      </div>
      {selectedOption === "sitIn" && (
        <TableMap onTableClick={handleTableClick} />
      )}
      <div>
        <div className="btn btn-success" onClick={handleNextButtonClick}>
          Next
        </div>
      </div>
      <div>
        <div className="btn btn-error" onClick={() => {router.push('/cart')}}> back </div>
      </div>
    </div>
  );
}
