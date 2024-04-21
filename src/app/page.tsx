"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Order from "./components/order";
import Customer from "./components/Customer";
import Slideshow from "./components/decoration/SlideShow";

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    if (name.trim() !== "") {
      cust = new Customer(name);
      ord = new Order(cust.getUid());
      setTimeout(() => {
        router.push("/menu");
      }, 1000); // 10 seconds delay (10000 milliseconds)
    }
  };

  return (
    <div>
      <section className="relative min-h-screen">
        <section className="relative">
          {/* <div className="absolute left-1/2 transform -translate-x-1/2" > */}
          <Slideshow />
          {/* </div> */}
        </section>
        {/* Hero content */}
        <div className="absolute inset-0 flex flex-col z-10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-36 pb-16 md:pt-16 md:pb-16  lg:pt-52">
              <div className="text-center pb-6 md:pb-6">
                <h1 className="text-5xl md:text-6xl  font-extrabold leading-tighter tracking-tighter mb-4">
                  Discover Your Favorites{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-pink-500">
                    Now
                  </span>
                </h1>
                <div className=" flex justify-center max-w-3xl mx-auto">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="input input-bordered input-info w-full max-w-xs border-black hover:bg-pink-100 hover:border-pink-600"
                    value={name}
                    onChange={handleInputChange}
                  />
                  <button
                    className="flex justify-center rounded-xl bg-pink-100 pt-3 sm:w-20 lg:w-40 ms-10 transition  hover:shadow-xl  transform duration-700 hover:scale-105 hover:bg-black hover:text-white "
                    onClick={handleButtonClick}
                    disabled={name.trim() === ""}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 hover:text-white"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export let cust: any;
export let ord: Order;
