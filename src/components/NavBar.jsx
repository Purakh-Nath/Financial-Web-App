import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

function NavBar() {
  const [nav, setNav] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNav(false);
        // console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      name="home"
      className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
    >
      <h1 className="w-full text-3xl font-bold text-[#ffc519]">PURAKHNATH.</h1>
      <ul className="hidden md:flex  cursor-pointer">
        <li className="p-4">
          {" "}
          <Link to="home" smooth duration={500}>
          Home
          </Link>{" "}
        </li>
        <li className="p-4">
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
        <li className="p-4">
          <Link to="Pricing" smooth duration={500}>
            Pricing
          </Link>
        </li>
        <li className="p-4">
          <Link to="About" smooth duration={500}>
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="Insight" smooth duration={500}>
            Insights
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
        ref={menuRef}
      >
        <h1 className="w-full text-3xl font-bold text-[#ffc519] m-4">
          PURAKHNATH.
        </h1>
        <li className="p-4 border-b border-gray-600">
          {" "}
          <Link to="home" smooth duration={500}>
            Home
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="Pricing" smooth duration={500}>
            Pricing
          </Link>
        </li>
        <li className="p-4 border-b border-gray-600">
          <Link to="About" smooth duration={500}>
            About
          </Link>
        </li>
        <li className="p-4">
          <Link to="Insight" smooth duration={500}>
            Insights
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
