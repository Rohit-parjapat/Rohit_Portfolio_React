import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { RxHamburgerMenu } from "react-icons/rx";

const MobileNav = () => {
  const [toggleClick, setToggleClick] = useState(false);

  const handleClick = () => {
    setToggleClick((toggleClick) => !toggleClick);
  };

  let display = toggleClick ? "" : "hidden";

  const menuRef = useRef();
  const toggleRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (
        !menuRef.current.contains(e.target) &&
        !toggleRef.current.contains(e.target)
      ) {
        setToggleClick(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className="flex justify-between md:hidden px-3 py-2 relative">
        <div className="flex justify-center items-center px-2">
          <Link to="/">
            {/* <h1 className="font-bold text-gray-700 font-sarif text-center">
              ROHIT
            </h1> */}
            <img
              src="/images/rlogo.jpg"
              className="font-bold text-gray-700 font-sarif text-center w-8 h-7"
              alt=""
            />
          </Link>
        </div>
        <span
          className=" p-1 bg-white shadow-md shadow-gray-300 rounded-sm "
          ref={toggleRef}
        >
          <RxHamburgerMenu
            onClick={() => {
              setToggleClick(!toggleClick);
            }}
          />
        </span>
        <div
          className={`flex flex-col absolute top-10 right-0 w-auto justify-center text-sm font-mono bg-white gap-1 px-3 text-gray-600 font-semibold ${display} shadow-md shadow-gray-300`}
          ref={menuRef}
          onClick={handleClick}
        >
          <Link
            to="/"
            className="hover:font-bold transition ease-in delay-100 duration-100"
          >
            <span>Home</span>
          </Link>
          <Link
            to="/about"
            className="hover:font-bold transition ease-in delay-100 duration-100"
          >
            <span>About</span>
          </Link>
          <Link
            to="/skills"
            className="hover:font-bold transition ease-in delay-100 duration-100"
          >
            <span>Skills</span>
          </Link>
          <Link
            to="/projects"
            className="hover:font-bold transition ease-in delay-100 duration-100"
          >
            <span>Projects</span>
          </Link>
          <Link
            to="/contact"
            className="hover:font-bold transition ease-in delay-100 duration-100 "
          >
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
};

const LargeNavbar = () => {
  return (
    <>
      <div className="flex inline-block justify-between lg:py-5 md:py-3 hidden md:flex">
        <div className="lg:px-12 md:px-5 px-3">
          <Link to="#">
            {/* <h1 className="font-bold text-gray-700 font-sarif text-center lg:text-2xl md:text-xl">
              ROHIT
            </h1> */}
            <img
              src="/images/rlogo.jpg"
              className="font-bold text-gray-700 font-sarif text-center lg:text-2xl md:text-xl w-9 h-8"
              alt=""
            />
          </Link>
        </div>
        <div className="flex inline-block justify-center items-center lg:gap-6 md:gap-4 text-sm font-mono ">
          <Link
            to="#"
            className="text-center lg:text-sm md:text-xs lg:px-3 md:px-1 hover:font-bold transition ease-in delay-100 hover:-translate-y-0.5 duration-100"
          >
            <span>Home</span>
          </Link>
          <Link
            to="#about"
            className="text-center lg:text-sm md:text-xs lg:px-3 md:px-1 hover:font-bold transition ease-in delay-100 hover:-translate-y-0.5 duration-100"
          >
            <span>About</span>
          </Link>
          <Link
            to="#skills"
            className="text-center lg:text-sm md:text-xs lg:px-3 md:px-1 hover:font-bold transition ease-in delay-100 hover:-translate-y-0.5 duration-100"
          >
            <span>Skills</span>
          </Link>
          <Link
            to="#projects"
            className="text-center lg:text-sm md:text-xs lg:px-3 md:px-1 hover:font-bold transition ease-in delay-100 hover:-translate-y-0.5 duration-100"
          >
            <span>Projects</span>
          </Link>
          <Link
            to="#contact"
            className="text-center lg:text-sm md:text-xs lg:px-3 md:px-1 hover:font-bold transition ease-in delay-100 hover:-translate-y-0.5 duration-100"
          >
            <span>Contact</span>
          </Link>
        </div>
        <div className="lg:px-12 md:px-5 px-3">
          <Link to="https://www.linkedin.com/in/rohit-ba7655200/">
            <span className="text-white font-bold lg:text-2xl md:text-xl text-center bg-blue-600 font-sarif rounded-lg px-2">
              in
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <MobileNav />
      <LargeNavbar />
    </>
  );
};
export default Navbar;
