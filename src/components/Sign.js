import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/Sign.module.css";

const Sign = () => {
  const navigate = useNavigate();

  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [repeatPasswordFocused, setRepeatPasswordFocused] = useState(false);

  const [fields, setFields] = useState({
    username: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [invalidFields, setInvalidFields] = useState([]);

  const handleInputChange = (field, value) => {
    setFields({ ...fields, [field]: value });
  };

  const handleButtonClick = () => {
    const invalidFields = Object.keys(fields).filter(
      (field) => fields[field].trim() === ""
    );

    setInvalidFields(invalidFields);

    if (invalidFields.length === 0) {
      localStorage.setItem("username", fields.username);
      localStorage.setItem("password", fields.password);
      navigate("/account");
    }

    setTimeout(() => {
      setInvalidFields([]);
    }, 3000);
  };

  const handleHaveAccountClick = () => {
    // eslint-disable-next-line no-unused-vars
    const storedUsername = localStorage.getItem("username");
    // eslint-disable-next-line no-unused-vars
    const storedPassword = localStorage.getItem("password");
    navigate("/account");
  };

  return (
    <div className={styles.SignForm}>
      <div className={styles.InputContainer}>
        <div
          className={`${styles.InputBackground} ${
            invalidFields.includes("username") ? styles.invalid : ""
          }`}
        >
          <input
            className={`${styles.inputField} ${
              usernameFocused ? styles.focused : ""
            }`}
            onFocus={() => setUsernameFocused(true)}
            onBlur={(e) => {
              setUsernameFocused(e.target.value.trim() !== "");
              handleInputChange("username", e.target.value);
            }}
          />
          <p className={usernameFocused ? styles.labelFocused : ""}>Username</p>
        </div>
      </div>

      <div className={styles.InputContainer}>
        <div
          className={`${styles.InputBackground} ${
            invalidFields.includes("email") ? styles.invalid : ""
          }`}
        >
          <input
            className={`${styles.inputField} ${
              emailFocused ? styles.focused : ""
            }`}
            type="email"
            onFocus={() => setEmailFocused(true)}
            onBlur={(e) => {
              setEmailFocused(e.target.value.trim() !== "");
              if (!e.target.value.includes("@")) {
                setInvalidFields((prevInvalidFields) =>
                  prevInvalidFields.includes("email")
                    ? prevInvalidFields
                    : [...prevInvalidFields, "email"]
                );
              }
              handleInputChange("email", e.target.value);
            }}
          />
          <p className={emailFocused ? styles.labelFocused : ""}>Email</p>
        </div>
      </div>

      <div className={styles.InputContainer}>
        <div
          className={`${styles.InputBackground} ${
            invalidFields.includes("password") ? styles.invalid : ""
          }`}
        >
          <input
            className={`${styles.inputField} ${
              passwordFocused ? styles.focused : ""
            }`}
            type="password"
            onFocus={() => setPasswordFocused(true)}
            onBlur={(e) => {
              setPasswordFocused(e.target.value.trim() !== "");
              handleInputChange("password", e.target.value);
            }}
          />
          <p className={passwordFocused ? styles.labelFocused : ""}>Password</p>
        </div>
      </div>

      <div className={styles.InputContainer}>
        <div
          className={`${styles.InputBackground} ${
            invalidFields.includes("repeatPassword") ? styles.invalid : ""
          }`}
        >
          <input
            className={`${styles.inputField} ${
              repeatPasswordFocused ? styles.focused : ""
            }`}
            type="password"
            onFocus={() => setRepeatPasswordFocused(true)}
            onBlur={(e) => {
              setRepeatPasswordFocused(e.target.value.trim() !== "");
              handleInputChange("repeatPassword", e.target.value);
            }}
          />
          <p className={repeatPasswordFocused ? styles.labelFocused : ""}>
            Repeat Password
          </p>
        </div>
      </div>

      <div className={styles.InputContainer}>
        <div className={styles.InputBackground}>
          <button onClick={handleButtonClick}>Sign Up</button>
        </div>
        <div className={styles.Help}>
          <div onClick={handleHaveAccountClick}>Have an Account?</div>
        </div>
      </div>
    </div>
  );
};

export default Sign;
