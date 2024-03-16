import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Posts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/logo.svg";

const LeftSection = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  return (
    <div
      className={`${styles.profileSection} ${
        showMenu ? styles.visible : styles.hidden
      }`}
    >
      <div className={styles.profileWrapper}>
        <ul>
          <img src={Logo} className={styles.LeftLogo} alt="Logo" />
          <li>
            <Link to="/myaccount">Profile</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
          <li>
            <Link to="/saved">Saved</Link>
          </li>{" "}
          <li>
            <Link to="/myposts">My Posts</Link>
          </li>
          <li className={styles.Logout} onClick={handleLogout}>
            <Link to="/">Log Out</Link>
          </li>
        </ul>
      </div>
      <div className={styles.toggleButton} onClick={toggleMenu}>
        <FontAwesomeIcon icon={showMenu ? faArrowLeft : faArrowRight} />
      </div>
    </div>
  );
};

export default LeftSection;
