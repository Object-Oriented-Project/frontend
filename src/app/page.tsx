'use client'
import Slideshow from "./components/SlideShow";
import { useRouter } from "next/navigation";
import {useEffect, useState} from 'react';
import Customer from './components/Customer';
export let cust : any

export default function Home() {
  const router = useRouter(); 
  const [name, setName] = useState('');
  
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleButtonClick = () => {
    if (name.trim() !== '') {
        cust = new Customer(name);
      console.log(cust)
      setTimeout(() => {
        router.push('/summary');
    }, 2000); // 10 seconds delay (10000 milliseconds)
    }
  }

  


  return (
    <div>
      <section className="relative">
        {/* Hero content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-16 pb-16 md:pt-16 md:pb-16">
            <div className="text-center pb-6 md:pb-6">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4">
                Discover Your Favorites{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-400">
                  Now
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered input-info w-full max-w-xs"
                  value={name}
                  onChange={handleInputChange}
                />
                <button
                  className="btn btn-square btn-outline"
                  onClick={handleButtonClick}
                  disabled={name.trim() === ''}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2" >
          <Slideshow />
        </div>
      </section>
    </div>
  );
}
