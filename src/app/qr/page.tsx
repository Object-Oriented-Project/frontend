"use client";
import React, { use, useContext, useEffect, useState } from "react";
import QRCode from "qrcode.react";
import { cust } from "../page";
import Order from "../components/Order";
import { useRouter } from "next/navigation";
const generatePayload = require("promptpay-qr");
import { ord } from "../page";
import { tableNo } from "../select-table/page";
import Image from "next/image";


import Receipt from "../components/Receipt";
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
      const receipt = new Receipt(ord.getOID(), ord.getUID(), tableNo, cust.getName(), "ONGOING",ord)
    console.log("OID : ", ord.getOID())
      receipt.sendToKitchen()

  };
  return (
    <div className=" min-h-screen bg-gradient-to-b from-[#ffeaea] to-[#ffcccc] from-20% py-6 ">
      <Image
        className="grid justify-self-center mx-auto"
        src="/asset/logo-moving.gif"
        alt="logo"
        width={250}
        height={150}
      // className="rounded-lg"
      />

      <div className="rounded-3xl border-2 bg-white border-gray-200 p-4  px-10 lg:p-8 mx-80  max-lg:max-w-lg max-lg:mx-auto gap-y-4">


        <h2 className="title font-manrope font-bold text-3xl leading-10 pt-2 text-center text-black break-normal">
          Pay Now with QR Code
        </h2>
        <div className="  flex flex-col items-center pb-12 ">
          <div className="roundContainer justify-center p-10">
            <QRCode   value={qrCode}/>
          </div>
          <button
            className=" inline-block cursor-pointer rounded-md bg-gray-800 px-12 py-3 text-center text-sm font-semibold uppercase text-white transition transform duration-700 hover:shadow-xl hover:scale-105 ease-in-out"
            onClick={() => {
              handleSendToKitchen();
              router.push("/summary");
          }}
            
          >
            Payment Successful!
          </button>
        </div>
      </div>
    </div>
  );
}
