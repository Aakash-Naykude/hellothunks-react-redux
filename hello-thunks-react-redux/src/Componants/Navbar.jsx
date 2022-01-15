import React from "react";
import { Link } from "react-router-dom";
import "./Css.css";
function Navbar() {
  return (
    <div className="navbar">
      <Link to={"/"} className="Link">
        <h2>DashBoard</h2>
      </Link>
      <Link to={"/login"} className="Link">
        <h2>Login</h2>
      </Link>
      <Link to={"/register"} className="Link">
        <h2>Register</h2>
      </Link>
    </div>
  );
}

export default Navbar;
