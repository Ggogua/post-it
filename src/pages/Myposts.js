import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Posts.module.css";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const Myposts = ({ savedPosts }) => {
  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftContainer}>
        <LeftSection />
      </div>

      <div className={styles.createContainer}>
        <p className={styles.mainText}></p>
        <div className={styles.createWrapper}>
          {savedPosts.map((post, index) => (
            <div key={index} className={styles.postsContainer}>
              <h4 style={{ color: "rgb(129, 133, 137)" }}>My Posts</h4>
              {post.content && (
                <p className={styles.postText}>{post.content}</p>
              )}
              {post.image && (
                <div className={styles.imageContainer}>
                  <img
                    src={post.image}
                    alt="Posted"
                    className={styles.postedImage}
                  />
                </div>
              )}
              <div className={styles.iconsWrapper}>
                <div>
                  <FontAwesomeIcon icon={faHeart} className={styles.icons} />
                  <span className={styles.iconsText}>0</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faComment} className={styles.icons} />
                  <span className={styles.iconsText}>0</span>
                </div>
                <div>
                  <FontAwesomeIcon icon={faShare} className={styles.icons} />
                  <span className={styles.iconsText}>0</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.extraDiv}>
        <RightSection />
      </div>
    </div>
  );
};

export default Myposts;
