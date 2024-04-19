"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../static/cafka.png";
import { useRouter } from "next/navigation";
import { ord } from "../page";
import Order from "./Order";
import { useEffect, useState } from "react";
import { Bakery } from "./Bakery";
import { Food } from "./Food";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav>
      <div className="static top-0">
        <div className="navbar bg-pink-200">
          <div className="flex-1">
            <div className="btn btn-ghost" onClick={() => router.push("/")}>
              <Image
                src="/asset/logo.webp"
                alt="logo"
                width={50}
                height={50}
                className=" w-auto h-auto"
                // className="rounded-lg"
              />
              <div className="text-xl">CAFKA</div>
            </div>
          </div>

          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">
                    {ord.getSize()}
                  </span>
                </div>
              </div>

              <div
                tabIndex={0}
                className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div className="card-body">
                  <span className="font-bold text-lg">
                    {ord.getSize()} items
                  </span>
                  <span className="text-info">
                    Subtotal: {ord.computeTotalPrice()} Baht
                  </span>
                  <div className="card-actions">
                    <button
                      className="btn btn-primary btn-block"
                      onClick={() => router.push("/cart")}
                    >
                      View a Cart
                    </button>
                    <button
                      className="btn btn-secondary btn-block"
                      onClick={() =>
                        ord.addProduct(
                          new Food(10, "A", 159, "LARGE", 1, "NORMAL"),
                        )
                      }
                    >
                      HIHI\
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
