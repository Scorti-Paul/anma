import React from "react";
import { Link } from "react-router-dom";

import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const supports = [
    {
      label: "Help center",
      link: "#",
    },
    {
      label: "Safety information",
      link: "#",
    },
  ];
  const companies = [
    {
      label: "About us",
      link: "#",
    },
    {
      label: "Privacy policy",
      link: "#",
    },
    {
      label: "Terms of service",
      link: "#",
    },
  ];
  const contact = [
    {
      label: "Get in touch",
      link: "#",
    },
    {
      label: "FAQ",
      link: "#",
    },
  ];
  const social = [
    {
      title: "Facebook",
      link: "#",
      icons: FaFacebookF,
    },
    {
      title: "Facebook",
      link: "#",
      icons: FaTwitter,
    },
    {
      title: "Facebook",
      link: "#",
      icons: FaInstagram,
    },
  ];
  return (
    <>
      <div className="bg-[#F7F8FA] px-6 md:px-44 py-12 md:py-24 mt-24 mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-8 justify-between max-w-6xl">
          <div>
            <h3 className="text-lg md:text-xl font-semibold ">Support</h3>
            {/* <ul> */}
            {supports.map((support, index) => (
              <ul key={index}>
                <li className="my-3">
                  <Link to={support.link} className="text-gray-500">
                    {support.label}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold ">Company</h3>
            {/* <ul> */}
            {companies.map((linkItem, index) => (
              <ul key={index}>
                <li className="my-3">
                  <Link to={linkItem.link} className="text-gray-500">
                    {linkItem.label}
                  </Link>
                </li>
              </ul>
            ))}
          </div>

          <div>
            <h3 className="text-lg md:text-xl font-semibold ">Contact</h3>
            {/* <ul> */}
            {contact.map((linkItem, index) => (
              <ul key={index}>
                <li className="my-3">
                  <Link to={linkItem.link} className="text-gray-500">
                    {linkItem.label}
                  </Link>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold ">Social</h3>
            {/* <ul> */}
            <ul className="flex gap-4 items-center">
              {social.map((linkItem, index) => (
                <li key={index} className="my-3">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={linkItem.link}
                    className="text-gray-500"
                  >
                    <linkItem.icons className="w-4 h-4 md:w-6 md:h-6" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
