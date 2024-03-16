import React, { useState, useEffect } from "react";
import styles from "../styles/Header.module.css";
import LogoSvg from "../assets/logo.svg";
import Sign from "../components/Sign";

const Header = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [fadeInAuthor, setFadeInAuthor] = useState(false);
  const [authorDisplay, setAuthorDisplay] = useState("none");

  useEffect(() => {
    const fadeInTimeout = setTimeout(() => {
      setFadeIn(true);
    }, 5000);

    const fadeOutTimeout = setTimeout(() => {
      setFadeOut(true);
      setAuthorDisplay("flex");
    }, 4000);

    const fadeInAuthorTimeout = setTimeout(() => {
      setFadeInAuthor(true);
    }, 1000);

    return () => {
      clearTimeout(fadeInTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(fadeInAuthorTimeout);
    };
  }, []);

  return (
    <section className={`${styles.header} ${fadeIn && styles.fadeIn}`}>
      <div className={`${styles.logo} ${fadeOut ? styles.fadeOut : ""}`}>
        <img src={LogoSvg} alt="logo" />
        <div
          className={`${styles.postDreams} ${fadeOut ? styles.fadeOut : ""}`}
        >
          Post your Dreams
        </div>
      </div>
      <div
        className={`${styles.author} ${fadeInAuthor ? styles.fadeIn : ""}`}
        style={{ display: authorDisplay }}
      >
        <React.Fragment>
          <Sign />
        </React.Fragment>
      </div>
    </section>
  );
};

export default Header;
