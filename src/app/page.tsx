"use client";
import Image from "next/image";

import '@/styles/globals.css';
// Import fungsi dari file TypeScript
import { useEffect } from "react";
import { initializeBgAnimation } from "@/utils/bgAnimation";
import { initializeHamburgerAnimation } from "@/utils/hamburgerAnimation";

export default function Home() {

  useEffect(() => {
    initializeBgAnimation();
    initializeHamburgerAnimation();
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
      
        <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-30">
          <div className="container">
            <div className="flex items-center justify-between relative">
              <div className="px-4">
                <h1 className="text-4xl font-semibold text-white tracking-widest cursor-pointer block">
                  <span className="text-cyan-400">MASAYID</span>ALFA
                </h1>
              </div>
              <div className="flex items-center px-4">
                <button id="hamburger" name="hamburger" type="button" className="block absolute right-4">
                  <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out"></span>
                  <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left "></span>
                </button>
                
              </div>
            </div>
          </div>
        </header>
      {/* Header Start */}

      {/* Hero Section Start */}
      <section id="home" className="pt-36 relative">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2  ">
              <h1 className="text-base font-semibold text-cyan-400">Halo Semua, Saya <span className="block font-bold text-white text-4xl mt-1">Muhamad Masayid Alfarizqi</span></h1>
              <h2 className="font-medium text-slate-200 text-lg mb-5">Fullstack Web Developer & Content Creator</h2>
              <p className="font-medium text-slate-200 mb-10 leading-relaxed">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, odio. Laudantium, <span className="font-bold text-cyan-400">ipsum</span></p>
              <a href="#" className="text-base font-semibold text-white bg-cyan-400 py-3 px-8 rounded-full hover:shadow-lg hover:bg-cyan-200">Hubungi Saya</a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2 ">
              <div className="mt10">
                <Image src="/img/in_formal1.jpg" alt="Masayid Alfarizqi" className="max-w-full mx-auto rounded-full" width={200} height={100} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}

      {/* About Section Start */}
      <section id="about" className="pt-36 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h4 className="font-bold uppercase text-lg mb-3">Tentang Saya</h4>
              <h2 className="font-bold text-3xl mb-3">Yuk, Kenalan sama aku</h2>
              <p className="font-medium text-base">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid qui nobis alias?</p>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <h3 className="font-semibold text-2xl mb-4">Mari Berteman</h3>
              <p className="font-medium text-base mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quae facere quod?</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}

      {/* Tools adn System */}
      <section id="tools">
        <div className="container">
          <div className="flex flex-wrap">

          </div>
          <div className="w-full px4"></div>
        </div>
      </section>
      {/* Tools adn System */}

      {/* Project section Start */}
      <div id="project">
        <div className="container">
          <div className="flex flex-wrap">

          </div>
        </div>
      </div>
      {/* Project section End */}

      {/* Certification section Start */}
      <div id="certificate">
        <div className="container">
          <div className="flex flex-wrap">

          </div>
        </div>
      </div>
      {/* Certification section End */}

      {/* Contact section Start */}
      <div id="contact">
        <div className="container">
          <div className="flex flex-wrap">

          </div>
        </div>
      </div>
      {/* Contact section End */}
    </div>



  );
}
