"use client";
import React, {useState } from "react";
import QRCode from "qrcode.react";
import { cust } from "../page";
import { useRouter } from "next/navigation";
import { ord } from "../page";
import { tableNo } from "../select-table/page";
import Receipt from "../components/Receipt";

export let receipt: Receipt;

export default function Qr() {

  const router = useRouter();
  const qrPayload = ord.pay();
  console.log("ord pay ", ord.pay());
  const [qrCode, setQrCode] = useState(qrPayload);

  const handleSendToKitchen = () => {
    receipt = new Receipt(
      ord.getOID(),
      ord.getUID(),
      tableNo,
      cust.getName(),
      "ONGOING",
      ord,
    );
    receipt.sendToKitchen();
    router.push("/summary");
  };
  return (
    <div className=" min-h-screen bg-gradient-to-b from-[#ffeaea] to-[#ffcccc] from-30% py-6 ">
      <img
        className="grid justify-self-center mx-auto w-auto h-auto w-42  md:w-52 md:h-32 lg:w-64 lg:h-42"
        src="/asset/logo-moving.gif"
        alt="logo"
      />

      <div className="rounded-3xl border-2 bg-white border-gray-200 p-4  px-10 lg:p-8 mx-80  max-lg:max-w-lg max-lg:mx-auto gap-y-4">
        <h2 className="title font-manrope font-bold text-3xl leading-10 pt-2 text-center text-black break-normal">
          Pay Now with QR Code
        </h2>
        <div className="  flex flex-col items-center pb-12 ">
          <div className="roundContainer justify-center p-10">
            <QRCode value={qrCode} />
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

          <button
            className="btn bg-gray-200 mt-4 px-12 py-3 hover:bg-black hover:text-white transition transform duration-900  hover:shadow-xl hover:scale-105 "
            onClick={() => {
              router.push("/select-table");
            }}
          >
            {" "}
            Back for More?{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
