import { SignUpButton, UserButton, useAuth } from '@clerk/nextjs';
import React from 'react'

const Nav = () => {
  const { isSignedIn } = useAuth();

  return (
    <section className="nav_section">

        <nav>
            <img src="./image-removebg-preview (14).png" alt="" className="nav_img"/>
            <button className="hamburger" id="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>
            <ul className="Nav_menu" id="nav_menu">
                <li><a href="#pre-sale">PRE-SALE</a></li>
                <li><a href="#SERVICES">SERVICES</a></li>
                <li><a href="#BONUS">BONUS</a></li>
                <li><a href="#TOKEN">TOKEN</a></li>
                <li><a href="#ROADMAP">ROADMAP</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#GetToch">CONTACT</a></li>
                <li>
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <SignUpButton>
                <button className="Clerk_btn">Buy xAI Now</button>
              </SignUpButton>
            )}
          </li>
            </ul>
        </nav>
    </section>
  )
}

export default Nav