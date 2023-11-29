import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import {Link} from "react-scroll/modules"
import Topbar from "../Topbar/Topbar";
const Hero = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    
      <div className=" bg-dark-layer-1 flex justify-between items-center h-24 max-w-[full] mx-auto px-4 text-[#f4f4f4]" >
        <h1 className="w-full text-3xl font-bold text-[#f4f4f4]">AlgoViz.</h1>
        <ul className="hidden md:flex  ">
          <li className="p-4 cursor-pointer">
            <a
              href="https://vatsalupadhyay.github.io/coin/#"
              target="_blank"
              rel="noreferrer"
              className="bg-dark-fill-3 py-1.5 px-3 cursor-pointer rounded text-[#00df9a] hover:bg-dark-fill-2 mx-5"
            >
              Animation
            </a>

            <Link to="/" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Home</Link>
          </li>
          <li className="p-4">
       <button><Link to="navbar" activeClass="active" spy={true} smooth={true} offset={50} duration={500} >Leetcode</Link></button> 
          </li>
          <li className="p-4 cursor-pointer">
            <Link to="footer" activeClass="active" spy={true} smooth={true} offset={50} duration={500}>About</Link>
          </li>
          {/* <li className="p-4 cursor-pointer">
            <Link to="/">Contact</Link>
          </li> */}
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
        >
          <h1 className="w-full text-3xl font-bold text-[#8e9a96] m-4 z-50">
            AlgoViz.
          </h1>
          <li className="p-4 border-b border-gray-600 text-black">Home</li>
          <li className="p-4 border-b border-gray-600 cursor-pointer"><Link to="navbar" activeClass="active" spy={true} smooth={true} offset={50} duration={500} >Leetcode</Link></li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>

  );
};

export default Hero;
