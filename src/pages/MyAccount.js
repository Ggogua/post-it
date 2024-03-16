import React from "react";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import styles from "../styles/Posts.module.css";

const MyAccount = () => {
  const storedPhoto = localStorage.getItem("selectedImage");
  const storedUsername = localStorage.getItem("username");
  const storedBio = localStorage.getItem("bio");

  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftContainer}>
        <LeftSection />
      </div>

      <div className={styles.middleContainer}>
        <div className={styles.userProfile}>
          {storedPhoto && (
            <img
              src={storedPhoto}
              alt="User"
              className={styles.userProfilePhoto}
            />
          )}
          {storedUsername && (
            <h2 className={styles.userProfileUsername}>{storedUsername}</h2>
          )}
          {storedBio && <p className={styles.userProfileBio}>{storedBio}</p>}
        </div>
      </div>

      <div className={styles.extraDiv}>
        <RightSection />
      </div>
    </div>
  );
};

export default MyAccount;
