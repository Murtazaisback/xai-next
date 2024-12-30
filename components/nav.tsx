"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars } from "react-icons/fa";

const Nav = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <section className="nav_section">
        <nav>
          <img
            src="/image-removebg-preview (14).png"
            alt="Logo"
            className="nav_img"
          />
          <div className="hamburger" onClick={toggleMenu}>
            <FaBars size="19" color="white"/>
          </div>
          <ul className={`Nav_menu ${menuOpen ? "show" : ""}`} id="nav_menu">
            <li className={isActive("#pre-sale") ? "active" : ""}>
              <Link href="#pre-sale">PRE-SALE</Link>
            </li>
            <li className={isActive("#services") ? "active" : ""}>
              <Link href="#SERVICES">SERVICES</Link>
            </li>
            <li className={isActive("#bonus") ? "active" : ""}>
              <Link href="#BONUS">BONUS</Link>
            </li>
            <li className={isActive("#token") ? "active" : ""}>
              <Link href="#TOKEN">TOKEN</Link>
            </li>
            <li className={isActive("#roadmap") ? "active" : ""}>
              <Link href="#ROADMAP">ROADMAP</Link>
            </li>
            <li className={isActive("#faq") ? "active" : ""}>
              <Link href="#faq">FAQ</Link>
            </li>
            <li className={isActive("#getToch") ? "active" : ""}>
              <Link href="#GetToch">CONTACT</Link>
            </li>
            <li>
              <Link href="/user/dashboard" className="Clerk_btn">
                Buy xAI Now
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Nav;
