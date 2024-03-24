"use client";
import React, { useState } from "react";
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

export default function FlowByteNavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar fluid rounded>
      <NavbarBrand href="#" className="border">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Cloth Donation
        </span>
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
          } sm:block mr-24, bg-white px-4 pb-4`}
          style={{
            position: isMenuOpen && "absolute",
            top: "50px",
            left: "00vw",
          }}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-16 sm:space-y-0 space-y-3">
            <li>
              <Link
                href="/"
                className={`link ${pathname === "/" ? "text-blue-400" : ""}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/aboutus"
                className={`link ${
                  pathname === "/aboutus" ? "text-blue-400" : ""
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/volunteer"
                className={`link ${
                  pathname === "/volunteer" ? "text-blue-400" : ""
                }`}
              >
                Volunteer
              </Link>
            </li>
            <li>
              <Link
                href="/faqs"
                className={`link ${
                  pathname === "/faqs" ? "text-blue-400" : ""
                }`}
              >
                FAQs
              </Link>
            </li>
          </ul>
        </NavbarCollapse>
      </div>
    </Navbar>
  );
}
