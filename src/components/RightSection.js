import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Posts.module.css";

const RightSection = () => {
  return (
    <div className={styles.RightMainContainer}>
      <ul>
        <div className={styles.Media}>
          <span>Media</span>
          <li>
            <Link to="/posts">Photos</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
        </div>
        <div className={styles.Action}>
          <span>Action</span>

          <li>
            <Link to="/create">Create post</Link>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default RightSection;
