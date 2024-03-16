import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Profile.module.css";

const Profile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setPhoto] = useState(null);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPhoto(file);
    } else {
      setPhoto(null);
    }
  };

  const handleSave = () => {
    const newErrors = {};

    if (!firstName.trim()) {
      newErrors.firstName = true;
    }
    if (!lastName.trim()) {
      newErrors.lastName = true;
    }
    if (!username.trim()) {
      newErrors.username = true;
    }
    if (!bio.trim()) {
      newErrors.bio = true;
    }
    if (!gender.trim()) {
      newErrors.gender = true;
    }

    setErrors(newErrors);

    if (!photo) {
      alert("Please upload a photo.");
      setTimeout(() => {
        setErrors({});
      }, 3000);
      return;
    }

    if (Object.keys(newErrors).length === 0) {
      const profileData = {
        firstName,
        lastName,
        username,
        bio,
        gender,
        photoUrl: URL.createObjectURL(photo),
      };

      localStorage.setItem("profileData", JSON.stringify(profileData));

      alert("Profile saved successfully!");

      navigate("/posts");
    } else {
      setTimeout(() => {
        setErrors({});
      }, 3000);
    }
  };

  return (
    <section className={styles.profile}>
      <div className={styles.profileImage}>
        <label htmlFor="fileInput" className={styles.imageUpload}>
          {photo ? (
            <img src={URL.createObjectURL(photo)} alt="Selected" />
          ) : (
            <div className={styles.imagePlaceholder}>
              <span>Add Photo</span>
            </div>
          )}
        </label>
        <input
          type="file"
          id="fileInput"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>

      <div className={styles.profileInfo}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className={`${errors.firstName ? styles.error : ""} ${
            errors.firstName ? styles.shake : ""
          }`}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className={`${errors.lastName ? styles.error : ""} ${
            errors.lastName ? styles.shake : ""
          }`}
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`${errors.username ? styles.error : ""} ${
            errors.username ? styles.shake : ""
          }`}
        />
        <textarea
          placeholder="Add Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className={`${styles.bio} ${errors.bio ? styles.error : ""} ${
            errors.bio ? styles.shake : ""
          }`}
        ></textarea>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className={`${errors.gender ? styles.error : ""} ${
            errors.gender ? styles.shake : ""
          }`}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className={styles.checker}>
          <input type="checkbox" />
          Don't show gender on my Profile
        </div>

        <div>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
