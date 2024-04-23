"use client";
import { useEffect, useState, useRef } from "react";

const images = ["/asset/promo1.webp", "/asset/promo2.webp", "/asset/promo3.webp"];

const imagesx = [
  "/asset/promo1x.webp",
  "/asset/promo2x.webp",
  "/asset/promo3x.webp",
];

export default function Slideshow() {
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState(images); 
  const bgContainerRef = useRef();

  function changeBackgroundImage() {
    if (bgContainerRef.current) {
      bgContainerRef.current.style.backgroundImage = `url(${currentImages[currentIndex]})`;
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  }

  useEffect(() => {
    const intervalId = setInterval(changeBackgroundImage, 5000);

    // Cleanup interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, currentImages, changeBackgroundImage]);

  // Initialize the background image
  useEffect(() => {
    if (bgContainerRef.current) {
      bgContainerRef.current.style.backgroundImage = `url(${currentImages[currentIndex]})`;
    }
  }, [currentIndex, currentImages]);

  function handleScreenSizeChange(e) {
    if (e.matches) {
      setCurrentImages(imagesx);
    } else {
      setCurrentImages(images);
    }
  }

  useEffect(() => {

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    mediaQuery.addEventListener("change", handleScreenSizeChange);
    handleScreenSizeChange(mediaQuery);

    // Cleanup event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleScreenSizeChange);
    };
  }, []);

  return (
    <div
      ref={bgContainerRef}
      className="h-screen w-screen bg-cover bg-center bg-no-repeat"
    >
    </div>
  );
}
