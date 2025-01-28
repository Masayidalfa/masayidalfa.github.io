"use client";
// import Image from "next/image";
import '@/styles/globals.css';
// Import fungsi dari file TypeScript
import { useEffect } from "react";
import { initializeBgAnimation } from "@/utils/bgAnimation";

export default function Home() {

  useEffect(() => {
    initializeBgAnimation(); // Panggil logika untuk animasi latar
  }, []);


  return (
    <div>

      {/* BG Animation Start */}
      <div className="bgAnimation" id="bgAnimation">
        <div className="backgroundAnim">
        </div>
      </div>
      {/* BG Animation End */}

      {/* Navbar Start */}
      <nav className="w-full flex justify-between items-center p-10 h-[100px] bg-transparent">
        <h1 className="text-4xl font-semibold text-white tracking-widest cursor-pointer relative">
          <span className="text-cyan-400">MASAYID</span>ALFA
        </h1>
        <ul className="flex space-x-6 relative">
          <li className="text-lg font-medium cursor-pointer hover:text-cyan-400">
            Home
            <div className="absolute bottom-1 left-1/2 w-0 h-[3px] bg-cyan-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-4/5"></div>
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-cyan-400">
            About
            <div className="absolute bottom-1 left-1/2 w-0 h-[3px] bg-cyan-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-4/5"></div>
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-cyan-400">
            Tools and System
            <div className="absolute bottom-1 left-1/2 w-0 h-[3px] bg-cyan-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-4/5"></div>
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-cyan-400">
            Portofolio
            <div className="absolute bottom-1 left-1/2 w-0 h-[3px] bg-cyan-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-4/5"></div>
          </li>
          <li className="text-lg font-medium cursor-pointer hover:text-cyan-400">
            Certification
            <div className="absolute bottom-1 left-1/2 w-0 h-[3px] bg-cyan-400 transform -translate-x-1/2 transition-all duration-300 group-hover:w-4/5"></div>
          </li>
        </ul>
      </nav>
      {/* Navbar End */}

      {/* Hero Section Start */}
      <section className="flex justify-center items-center h-[calc(100vh-100px)] text-center">
        <div className="text-white">
          <h1 className="text-5xl font-bold relative">
            <span className="text-cyan-400">Muhamad</span> Masayid Alfarizqi
          </h1>
          <p className="text-lg my-4 relative">This is your introductory text here</p>
          <button className="px-6 py-2 bg-cyan-400 text-black font-semibold text-lg rounded-lg transition hover:bg-cyan-600 relative">
            Contact Me
          </button>
        </div>
      </section>

      {/* Hero Section End */}
    </div>

  );
}
