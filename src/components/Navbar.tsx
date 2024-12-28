"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [CurrentDateTime, setCurretDateTime] = useState(``);
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurretDateTime(
        now.toLocaleDateString("en-US", options) +
          "" +
          now.toLocaleTimeString("en-US", { hour12: false })
      );
    };
    updateDateTime();
    const interValId = setInterval(updateDateTime, 1000);
    return () => clearInterval(interValId);
  }, []);

  return (
    <header className="text-grey-400 body-font shadow-lg bg-slate-200">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <div className="flex-1 text-black ">
          <span className="bg-orange-300 py-2 px-2 rounded-xl">{CurrentDateTime}</span>
        </div>

        <nav className="md:ml-auto flex flex-wrap items-center text-black justify-center">
          <Link
            href={"/"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            {" "}
            Home
          </Link>

          <Link
            href={"/about"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            {" "}
            About
          </Link>

          <Link
            href={"/blog"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            {" "}
            Blog
          </Link>
          <Link
            href={"/contact"}
            className="mr-5 hover:text-red-700 transition-colors duration-300 transform hover:scale-105"
          >
            {" "}
            Contact
          </Link>
        </nav>

<button className="inline-flex items-center  border-0  focus:outline-none hover:bg-slate-300 rounded-full text-white mt-4 md:mt-0 transition-colors duration-300">
  <Image
  className="w-[60px] h-[60px]"
  src={'/images/MB-logo.png'}
  width={200}
  height={20}
  alt="logo"
  />
</button>


      </div>
    </header>
  );
};

export default Navbar;
