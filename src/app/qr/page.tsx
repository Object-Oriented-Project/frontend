'use client'
import React, { use, useEffect, useState } from "react";
import QRCode from "qrcode.react";
import {Receipt} from "../components/Receipt";
const generatePayload = require("promptpay-qr");

export default function Qr() {
    // const [mobileNum, setMobileNum] = '000-000-0000' 
    // const [IDCard, setIDCard] = '0-0000-00000-00-0'
    const amount = 13
    const [ promtPayNum, setPromtPayNum ] = useState("1-1008-01474-58-0");
    const [ qrCode, setQrCode ] = useState(generatePayload(promtPayNum, { amount }));
    const handleSendToKitchen = () => {
        const receipt = new Receipt(1, 1, 'Table 1', 'John Doe', 50);
        receipt.sendToKitchen();
    }
    return (
        <div>
        <h1>QR Code Generator</h1>
        
        <div className="roundContainer">
            <QRCode style={{display: "flex", justifyContent: "center" }}value={qrCode}/>
        </div>
        <div> {amount} Baht </div>
        <button
        className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
        onClick={handleSendToKitchen}>
        Finish
        </button>
        </div>
    );
}