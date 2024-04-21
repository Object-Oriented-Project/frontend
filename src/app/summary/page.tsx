'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { receipt } from '../qr/page';
export default function Summary() {
    const router = useRouter();

    return (
        <div className="flex flex-col h-screen w-full items-center justify-center bg-gray-600">
            <div className="w-80 rounded bg-cover bg-center bg-no-repeat px-6 pt-8 shadow-lg font-serif" style={{ backgroundImage: 'url(/asset/rcpt.webp)' }}>
                <div className="flex flex-col justify-center items-center gap-2">
                    <h4 className="font-semibold">CAFKA CAFE</h4>
                    <p className="text-xs">Across from The Metamorphosis Apartments</p>
                    <div className="divider divider-neutral m-0 "></div>
                </div>
                {/* Display receipt details */}
                {receipt && (
                    <div className="text-sm  ">
                        <p>Customer Name: {receipt.getReceiptData().customer_name}</p>
                        <p>Order ID: {receipt.getReceiptData().order_id}</p>
                        <p>Table No: {receipt.getReceiptData().order_table}</p>

                    </div>
                )}

                <div className="divider  divider-neutral mt-0 mb-2 "></div>

                {/* Display order products */}
                <div className="flex flex-col gap-3 ">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="flex">
                                <th className="w-full py-2">Product</th>
                                <th className="min-w-[44px] py-2">QTY</th>
                                <th className="min-w-[44px] py-2">Total</th>
                            </tr>
                        </thead>


                        {receipt?.getReceiptData().order_items.map((item, index) => (
                            <><tbody>
                                <tr key={index} className="flex">
                                    <td className="flex-1 py-1"> {item.menu_name}</td>
                                    <td className="min-w-[44px]"> {item.quantity}</td>
                                    <td className="min-w-[44px]"> {item.menu_price*item.quantity}</td>
                                </tr>
                            </tbody>         
                            </>))}
            
                    </table>
                    {receipt && (
                    <p className="flex justify-end mr-2">Total: {receipt.getReceiptData().order_total}</p>
                    )}
                </div>




                {/* Contact information */}

                <div className="pb-4 justify-center items-center flex flex-col ">
                    <div className="divider  divider-neutral mb-0 "></div>
                    <p>cafka@example.com</p>
                    <p>Call Us: (555) 555-5555</p>
                </div>
            </div>
            <button
                className="rounded-full mt-10 py-4 px-6 bg-[#c62d70] text-white font-semibold text-md  text-center hover:bg-black transition transform duration-900  hover:shadow-xl hover:scale-105"
                onClick={() => {
                    router.push("/");
                }}
            >
                My Stomach Craves More!
            </button>
        </div>
    );
}
