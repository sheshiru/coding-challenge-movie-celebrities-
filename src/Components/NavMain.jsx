import React from "react";
import { Link } from "react-router-dom";

export default function NavMain() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="/customize-image">Customize Image</Link>
        <Link to="/celebrities">Celebrities</Link>
      </nav>
    </>
  );
}
