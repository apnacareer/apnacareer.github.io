"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import { RiGraduationCapFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const logoName = "Apna Career";

  const menuItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Contact",
      url: "#contact",
    },
  ];

  return (
    <nav className="flex justify-center items-center w-full bg-zinc-800">
      <div className="lg:w-[80vw] w-[95vw] md:px-5 px-3 py-3 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center cursor-pointer text-slate-200 text-2xl font-semibold px-3">
            <Link href='/' className="flex gap-2 items-center"><img src="/logo.png" alt="" className="rounded-full h-10 max-w-10"/><h1>Apna Career</h1></Link>
          </div>
          {/* Desktop Menu */}
          <div className="hidden lg:flex justify-center items-center gap-5 text-slate-200">
            {menuItems.map((menuItems, index) => (
              <Link
                href={menuItems.url}
                className="hover:bg-slate-200 hover:text-zinc-900 transition ease-in-out cursor-pointer px-3 py-2 font-medium rounded-lg"
                key={index}
              >
                {menuItems.name}
              </Link>
            ))}
          </div>
          {/* Menu Icons */}
          <div className="flex lg:hidden">
            <button
              className="inline-flex items-center justify-center rounded-md text-slate-200 focus:outline-none"
              onClick={toggleNavbar}
              type="button"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={36}
                  height={36}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={36}
                  height={36}
                  color={"#ffffff"}
                  fill={"none"}
                >
                  <path
                    d="M10 5L20 5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4 19L14 19"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div className="flex lg:hidden flex-col justify-center items-center gap-5 mt-3 mb-3">
            {menuItems.map((menuItems, index) => (
              <Link
                href={menuItems.url}
                key={index}
                onClick={closeNavbar}
                className="hover:bg-slate-200 hover:text-zinc-900 transition ease-in-out text-slate-200 w-full cursor-pointer px-3 py-2 font-medium rounded-lg self-start"
              >
                {menuItems.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
