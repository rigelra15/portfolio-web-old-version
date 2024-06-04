import React, { useState, useEffect } from "react";
import { useDarkModeContext } from "../DarkModeContext";
import './Home.css';
import { FaFile, FaFilePdf } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { BsPersonFillGear } from "react-icons/bs";

export default function Home() {
  const { isDarkMode } = useDarkModeContext();
  const images = ["./2-min.png", "./4-min.png", "./6-min.png"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div id="home" style={{ backgroundColor: isDarkMode ? '#181818' : '#f0f0f0' }}>
      <div className="top-20 container pt-[8rem] md:pt-[6rem] mx-auto px-1 flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center" style={{ color: isDarkMode ? 'white' : 'black' }}>
          <h1 className="title-font text-3xl md:text-4xl mb-2 font-bold">
            Hi There,
          </h1>
          <h1 className="title-font text-3xl md:text-4xl mb-5 font-bold">
            I am <span className="text-sky-500">Rigel</span> Ramadhani W.
          </h1>
          <p className="mb-8 leading-relaxed px-5 md:px-0">
            Passionate about crafting beautiful interfaces that captivate users. Let's collaborate and bring your ideas to life!
          </p>

          {/* Buttons */}
          <div className="flex justify-center transition-all duration-300">
            <a
              href="#portfolio"
              className="inline-block text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 rounded-xl text-lg transition-all duration-300">
              <FaFile className="inline-block mr-2" />
              View Portfolio
            </a>
            <a
              href="#skills"
              className={`inline-block ml-4 transition-all duration-300 border-0 py-2 px-6 focus:outline-none hover:bg-sky-700 hover:text-white rounded-xl text-lg ${isDarkMode ? 'border-2 border-gray-200' : 'bg-white'} ${isDarkMode ? '' : 'border-gray-300 border-2 text-gray-400' }`}>
              <BsPersonFillGear className="inline-block mr-2 text-xl" />
              See Skills
            </a>
            <a
              href="https://drive.google.com/file/d/1wfYyNGMaD_qHC6Icjm2COIZ4tr_Zb7YB/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 transition-all duration-300 inline-flex border-0 py-2 px-6 focus:outline-none hover:bg-red-500 hover:text-white rounded-xl text-lg ${isDarkMode ? 'border-2 border-gray-200' : 'bg-white'} ${isDarkMode ? '' : 'border-gray-300 border-2 text-gray-400' }`}>
                <div className="flex flex-row justify-center items-center gap-2">
                  My CV
                  <FaFilePdf />
                </div>
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hover:animate-testing relative mt-0 md:mt-10">
          <LazyLoadImage
            className="object-cover object-center inset-4 rounded animate-testing"
            alt="hero"
            src={images[currentImageIndex]}
            loading="lazy"
          />
        </div>
      </div>
      <style>
        {`
        @keyframes animate-testing {
          0% {transform: translateX(0px);}
          100% {transform: translateX(-100px);}
        }
        `}
      </style>
    </div>
  );
}
