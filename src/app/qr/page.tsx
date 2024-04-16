"use client";
import React, { use, useContext, useEffect, useState } from "react";
import QRCode from "qrcode.react";
import {cust} from "../page";
import Order from "../components/Order";
import { useRouter } from "next/navigation";
const generatePayload = require("promptpay-qr");
import { ord } from "../summary/page";
export default function Qr() {
  // const [mobileNum, setMobileNum] = '000-000-0000'
  // const [IDCard, setIDCard] = '0-0000-00000-00-0'
  const router = useRouter()
  // console.log(ord.computeTotalPrice())
  const qrPayload = ord.pay();
  console.log("ord pay ", ord.pay())
  const [qrCode, setQrCode] = useState(qrPayload);


    // console.log("1 qr",qrCode)
    

  const handleSendToKitchen = () => {
    // const receipt = new Receipt(1, 1, "Table 1", "John Doe", 50);
    // receipt.sendToKitchen();
    router.push("/summary")
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <h1>QR Code Generator</h1>
      <div className="roundContainer">
        <QRCode
          style={{ display: "flex", justifyContent: "center" }}
          value={qrCode}
        />
      </div>
      <button
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        onClick={handleSendToKitchen}
      >
        Finish
      </button>
    </div>
  );
}
