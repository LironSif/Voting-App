import React, { useState } from "react";
import "../Nav/Nav.css";
import { useUserData } from "../../context/UserDataContext";
import image from "../../res/img/logo.png";

const Nav = () => {
  const { userData } = useUserData();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log("nav is on");
  console.log(userData);
  if (!userData) return null;

  return (
    <nav>
      <div className="nav-logo">
        <img src={image} alt="logo" />
      </div>
      <div className="nav-container">
        <button className="nav-toggle" onClick={toggleMenu}>
          Welcome {userData.name}
          <span className="dropdown-arrow"></span>
        </button>
        {isOpen && (
          <div className="nav-links">
            <a href="/logout">Logout</a>
            <a href="/vote">Vote</a>
            {userData.isAdmin && <a href="/admin">Admin</a>}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
