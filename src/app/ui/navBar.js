"use client";
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function FlowByteNavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [width, setWidth] = useState(null);

  const toggleMenu = () => {
    setTimeout(() => {
      setIsMenuOpen(!isMenuOpen);
    }, 100);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="#">
        {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Cloth Donation
        </span> */}
        <div className="p-1">
          <Image src={"/logo-old-cloth-3.png"} height={80} width={140} />
        </div>
      </NavbarBrand>
      <div>
        <div className="flex sm:order-2 sm:hidden">
          {/* <NavbarToggle onClick={toggleMenu} /> */}
          <div
            onClick={toggleMenu}
            className={`${isMenuOpen ? "hidden" : "flex"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <div
            onClick={toggleMenu}
            className={`${isMenuOpen ? "flex" : "hidden"}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>

        <NavbarCollapse
          className={`${
            isMenuOpen ? "block" : "hidden"
          } sm:block mr-24, bg-white dark:bg-slate-800 px-4 pb-4`}
          style={{
            position: isMenuOpen && "absolute",
            top: "80px",
            left: "00vw",
            zIndex: 200,
          }}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-16 sm:space-y-0 space-y-3">
            <Link
              onClick={width < 640 && toggleMenu}
              style={{ width: "100%" }}
              href="/"
              className={`link ${pathname === "/" ? "text-blue-400" : ""} p-1`}
            >
              Home
            </Link>
            <Link
              onClick={width < 640 && toggleMenu}
              style={{ width: "100%" }}
              href="/aboutus"
              className={`link ${
                pathname === "/aboutus" ? "text-blue-400" : ""
              } p-1`}
            >
              About
            </Link>

            {/* <Link
              onClick={width < 640 && toggleMenu}
              style={{ width: "100%" }}
              href="/volunteer"
              className={`link ${
                pathname === "/volunteer" ? "text-blue-400" : ""
              } p-1`}
            >
              Volunteer
            </Link> */}
            <Link
              onClick={width < 640 && toggleMenu}
              style={{ width: "100%" }}
              href="/faqs"
              className={`link ${
                pathname === "/faqs" ? "text-blue-400" : ""
              } p-1`}
            >
              FAQs
            </Link>
          </ul>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
