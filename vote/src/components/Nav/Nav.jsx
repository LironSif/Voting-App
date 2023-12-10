import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Nav/Nav.css";
import { useUserData } from "../../context/UserDataContext";
import image from "../../res/img/logo.png";


const Nav = () => {
  const { userData } = useUserData();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    navigate('/login');
  };

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
            <Link to="/logout" onClick={handleLogout}>Logout</Link>
            <Link to="/vote">Vote</Link>
            {userData.isAdmin && <Link to="/admin">Admin</Link>}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
