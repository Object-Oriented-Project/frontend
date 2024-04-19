"use client";
import { useEffect, useState, useRef } from "react";

const images = ["/asset/promo1.svg", "/asset/promo2.svg", "/asset/promo3.svg"];

const imagesx = [
  "/asset/promo1x.svg",
  "/asset/promo2x.svg",
  "/asset/promo3x.svg",
];

export default function Slideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState(images); // Initialize with images array
  const bgContainerRef = useRef();

  // Function to change the background image
  function changeBackgroundImage() {
    if (bgContainerRef.current) {
      bgContainerRef.current.style.backgroundImage = `url(${currentImages[currentIndex]})`;
    }
    // Update the index and wrap around if necessary
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentImages.length);
  }

  // Set an interval to change the background image every 5 seconds
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

  // Handle screen size changes
  function handleScreenSizeChange(e) {
    if (e.matches) {
      // If the screen is large, use imagesx
      setCurrentImages(imagesx);
    } else {
      // Otherwise, use images
      setCurrentImages(images);
    }
  }

  useEffect(() => {
    // Create a media query for large screens
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    // Add event listener for changes in screen size
    mediaQuery.addEventListener("change", handleScreenSizeChange);

    // Initial check
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
      {/* Your content here */}
    </div>
  );
}
