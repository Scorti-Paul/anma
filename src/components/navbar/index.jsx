import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between items-center bg-[#232323] px-6 md:px-16 py-2">
        <ul className="md:flex items-center gap-3">
          <li>
            <a
              href="tel:0240635363"
              className="text-gray-300 text-xs hover:text-gray-100"
            >
              (+233) 24 362 0993
            </a>
          </li>
          <li>
            <a
              href="mailto:info@anma.com"
              className="text-gray-300 text-xs hover:text-gray-100"
            >
              info@akpenamawu.com
            </a>
          </li>
        </ul>
        <ul className="flex gap-6">
          <li>
            <a href="##" className="text-gray-300 text-xs hover:text-gray-100">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href="##" className="text-gray-300 text-xs hover:text-gray-100">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="##" className="text-gray-300 text-xs hover:text-gray-100">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>
      <nav className="">
        <div className="hero-bg h-72">
          <div className="hero-bg-overlay h-full bg-black/20 px-6 md:px-16">
            <h1 className="text-3xl md:text-5xl text-left font-bold text-white pt-28">
              AKPE NA MAWU HOSPITALITY
            </h1>
            <p className="flex items-center gap-2 mt-3 text-white">
              Home{" "}
              <span className="inline-block p-1 bg-white rounded-full"></span>{" "}
              Keta
              <span className="inline-block p-1 bg-white rounded-full"></span>{" "}
              Volta Region
            </p>
          </div>{" "}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
