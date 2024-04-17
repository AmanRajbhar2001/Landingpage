"use client";
import React,{useState} from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    return(
        <div className="w-full h-[auto] bg-gray">
        {/* Header for mobile view */}
        <header className="bg-white bg-opacity-5 text-white shadow-lg md:hidden">
        <div className="container mx-auto flex items-center h-24">
          <a href="/" className="flex items-center justify-center">
            <img
              className="h-16 mx-[2vh]"
              src="https://firebasestorage.googleapis.com/v0/b/lt-website-6121c.appspot.com/o/living_things.png?alt=media&token=59ec57db-ba1e-47b5-a6a3-0a59bbc00605"
              alt=""
            />
          </a>
          <button
            onClick={toggleMenu}
            className="ml-auto mr-4 block text-black focus:outline-none"
          >
            {/* Hamburger menu icon */}
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
      </header>

  
        {/* Navigation Menu for mobile view */}
        {isMenuOpen && (
          <nav className="md:hidden bg-white bg-opacity-5 text-gray p-8 shadow-lg">
            <ul className="container mx-auto w-[20vh] bg-white  mx-[20vh]   flex flex-col items-center h-auto rounded leading-1">
              <li className="p-5 xl:p-8 active">
                <a href="/">
                  <span>Home</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>About</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Projects</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Services</span>
                </a>
              </li>
              <li className="p-5 xl:p-8">
                <a href="">
                  <span>Blog</span>
                </a>
              </li>
            </ul>
          </nav>
        )}
  
        {/* Header for desktop view */}
        <header className="bg-white bg-opacity-5 text-white shadow-lg hidden md:block">
          <div className="container mx-auto flex items-center h-24">
            <a href="" className="flex items-center justify-center">
              <img
                className="h-16"
                src="https://firebasestorage.googleapis.com/v0/b/lt-website-6121c.appspot.com/o/living_things.png?alt=media&token=59ec57db-ba1e-47b5-a6a3-0a59bbc00605"
                alt=""
              />
            </a>
            <nav className="contents font-semibold text-base lg:text-lg">
              <ul className="mx-auto flex items-center">
                <li className="p-5 xl:p-8 active">
                  <a href="">
                    <span>Home</span>
                  </a>
                </li>
                <li className="p-5 xl:p-8">
                  <a href="">
                    <span>About</span>
                  </a>
                </li>
                <li className="p-5 xl:p-8">
                  <a href="">
                    <span>Projects</span>
                  </a>
                </li>
                <li className="p-5 xl:p-8">
                  <a href="">
                    <span>Services</span>
                  </a>
                </li>
                <li className="p-5 xl:p-8">
                  <a href="">
                    <span>Blog</span>
                  </a>
                </li>
              </ul>
            </nav>
            <button className="border border-white rounded-full font-bold px-8 py-2">
              Contact me
            </button>
          </div>
        </header>
      </div>
    )
}
export default Header;