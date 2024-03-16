import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Account.module.css";

const Account = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleSignIn = () => {
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
      navigate("/profile");
    } else {
      alert("Account not registered or Username/Password is wrong");
    }
  };

  return (
    <div className={styles.SignForm}>
      <div className={styles.InputContainer}>
        <div
          className={`${styles.InputBackground} ${
            usernameFocused ? styles.focused : ""
          }`}
        >
          <input
            className={`${styles.inputField} ${
              usernameFocused ? styles.focused : ""
            }`}
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            onFocus={() => setUsernameFocused(true)}
            onBlur={(e) => setUsernameFocused(e.target.value.trim() !== "")}
          />
          <p className={usernameFocused ? styles.labelFocused : ""}>Username</p>
        </div>
      </div>

      <div className={styles.InputContainer}>
        <div
          className={`${styles.InputBackground} ${
            passwordFocused ? styles.focused : ""
          }`}
        >
          <input
            className={`${styles.inputField} ${
              passwordFocused ? styles.focused : ""
            }`}
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => setPasswordFocused(true)}
            onBlur={(e) => setPasswordFocused(e.target.value.trim() !== "")}
          />
          <p className={passwordFocused ? styles.labelFocused : ""}>Password</p>
        </div>
      </div>

      <div className={styles.InputContainer}>
        <div className={styles.InputBackground}>
          <button onClick={handleSignIn}>Sign In</button>
        </div>

        <div className={styles.Help}>
          <div>Forgot Password?</div>
          <div onClick={() => navigate("/")}>
            Don't have an Account? Sign Up
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
