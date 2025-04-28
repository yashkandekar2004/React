import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navabar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <img src={logo} alt="" width={200} />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          navigate("/contact");
        }}
      >
        Get Started
      </button>
    </div>
  );
}

export default Navabar;
