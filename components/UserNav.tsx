"use client";

import React, { useState } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LuBlocks } from "react-icons/lu";
import { FaCoins, FaHome } from "react-icons/fa";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { TbUserBitcoin } from "react-icons/tb";

const UserNav = () => {
  const { user } = useUser();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="User_nav">
        <div className="User_nav_box">
          <img
            src="/image-removebg-preview (14).png"
            alt="User Icon"
            className="nav_img"
          />
          <div className="usernames">
            <p className="mb_none">
              Welcome! {user?.firstName || user?.username || "Guest"}
            </p>
            <UserButton afterSignOutUrl="/" />
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className={`Nav_uls ${menuOpen ? "show" : ""}`}>
        <div className="Nav_uls_box">
          <Link
            href="/user/dashboard"
            className={`Nav_ul_item ${isActive("/user/dashboard") ? "active2" : ""}`}
          >
            <LuBlocks size="16" />
            <p>Dashboard</p>
          </Link>
          <Link
            href="/user/contribute"
            className={`Nav_ul_item ${isActive("/user/contribute") ? "active2" : ""}`}
          >
            <FaCoins size="16" />
            <p>Buy Token</p>
          </Link>
          <Link
            href="/user/transactions"
            className={`Nav_ul_item ${isActive("/user/transactions") ? "active2" : ""}`}
          >
            <MdOutlineCompareArrows size="16" />
            <p>Transaction</p>
          </Link>
          <Link
            href="/user/account"
            className={`Nav_ul_item ${isActive("/user/account") ? "active2" : ""}`}
          >
            <CgProfile size="16" />
            <p>Profile</p>
          </Link>
          <Link
            href="/user/balance"
            className={`Nav_ul_item ${isActive("/user/balance") ? "active2" : ""}`}
          >
            <TbUserBitcoin size="16" />
            <p>My Token</p>
          </Link>
          <Link
            href="/"
            className={`Nav_ul_item ${isActive("/") ? "active2" : ""}`}
          >
            <FaHome size="16" />
            <p>My Site</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserNav;
