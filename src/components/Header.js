import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import logo from "../images/Corp-Logo_BG_Bayer-Cross_Basic_on-screen_RGB.svg";

const Header = ({ signOut }) => {
  const [headerBackgroundOpacity, setHeaderBackgroundOpacity] = useState(0); // Start with fully visible background

  // Function to handle scroll events
  const handleScroll = () => {
    // Calculate the scroll position
    const scrollY = window.scrollY || window.pageYOffset;

    // Calculate the opacity for the background color
    const backgroundOpacity = scrollY / 1000; // You can adjust the divisor for different sensitivity

    // Ensure the background opacity stays within the range [0, 1]
    const clampedBackgroundOpacity = Math.min(
      1,
      Math.max(0, backgroundOpacity)
    );

    // Ensure the border opacity stays within the range [0, 0.23]

    // Update the state with the new opacity values
    setHeaderBackgroundOpacity(clampedBackgroundOpacity);
  };

  useEffect(() => {
    // Add a scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        backgroundColor: `rgba(16, 23, 33, ${headerBackgroundOpacity})`,
      }}
    >
      <div className="nav-area">
        <Link to="https://bayernet.int.bayer.com/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <Navbar signOut={signOut} />
      </div>
    </header>
  );
};

export default Header;
