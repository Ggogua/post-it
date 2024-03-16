import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import styles from "../styles/Posts.module.css";

const Settings = () => {
  const [showFileInput, setShowFileInput] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    const storedBio = localStorage.getItem("bio");
    const storedPassword = localStorage.getItem("password");
    const storedImage = localStorage.getItem("selectedImage");

    if (storedUsername) setUsername(storedUsername);
    if (storedBio) setBio(storedBio);
    if (storedPassword) setPassword(storedPassword);
    if (storedImage) setSelectedImage(storedImage);
  }, []);

  const handleUploadTextClick = () => {
    setShowFileInput(true);
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setShowFileInput(false);
    localStorage.setItem("selectedImage", URL.createObjectURL(file));
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
    localStorage.setItem("username", value);
  };

  const handleBioChange = (event) => {
    const value = event.target.value;
    setBio(value);
    localStorage.setItem("bio", value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    localStorage.setItem("password", value);
  };

  const handleSaveButtonClick = () => {
    alert("Saved");
  };

  const handleDeleteAccount = () => {
    // Clear all stored data
    localStorage.clear();
    // Navigate to "/"
    navigate("/");
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftContainer}>
        <LeftSection />
      </div>
      <div className={styles.settingsContainer}>
        <div className={styles.settingsUploadContainer}>
          <div className={styles.settingsUploadBox}>
            {selectedImage ? (
              <img
                src={selectedImage}
                alt="Uploaded"
                className={styles.settingsUploadImage}
              />
            ) : showFileInput ? (
              <input
                type="file"
                onChange={handleFileSelect}
                className={styles.settingsUploadImage}
              />
            ) : (
              <div
                onClick={handleUploadTextClick}
                className={styles.settingsUploadText}
              >
                Upload photo
              </div>
            )}
          </div>
        </div>
        <div className={styles.settingsInputContainer}>
          <div className={styles.settingsChangePassword}>
            <input
              type="username"
              placeholder="Change Username"
              className={styles.settingsInputField}
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="username"
              placeholder="Change Bio"
              className={styles.settingsInputField}
              value={bio}
              onChange={handleBioChange}
            />
            <input
              type="password"
              placeholder="New Password"
              className={styles.settingsInputField}
              value={password}
              onChange={handlePasswordChange}
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className={styles.settingsInputField}
            />
          </div>
        </div>

        <div className={styles.settingsAccountDeletion}>
          <button
            className={styles.settingsDeleteAccountButtonSave}
            onClick={handleSaveButtonClick}
          >
            Save
          </button>
          <button
            className={styles.settingsDeleteAccountButton}
            onClick={handleDeleteAccount}
          >
            Delete Account
          </button>
        </div>
      </div>
      <div className={styles.extraDiv}>
        <RightSection />
      </div>
    </div>
  );
};

export default Settings;
