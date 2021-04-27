import React from "react";
import "../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="container">
      <h1 className="navTitle">Name here</h1>
      <ul className="links">
        <Link className="link">Home</Link>
        <Link className="link">Features</Link>
        <Link className="link">About</Link>
        <Link className="link">Gallery</Link>
        <Link className="link">Team</Link>
        <Link className="link">Support</Link>
        <Link className="link">Account</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
