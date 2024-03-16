import React, { useState } from "react";
import styles from "../styles/Posts.module.css";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faBookmark,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const Saved = ({ savedPosts, onSavePost }) => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const totalSavedPosts = savedPosts.length;

  const goToNextPost = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === totalSavedPosts - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevPost = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === 0 ? totalSavedPosts - 1 : prevIndex - 1
    );
  };

  const currentPost = savedPosts[currentPostIndex];

  const handleSavePost = () => {
    onSavePost(currentPost);
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftContainer}>
        <LeftSection />
      </div>

      {savedPosts.length > 0 ? (
        <div className={styles.postContainer}>
          <h2 className={styles.postTitle}>{currentPost.title}</h2>
          <p className={styles.postAuthor}>Posted by: {currentPost.username}</p>
          <img
            src={currentPost.photo}
            alt={currentPost.title}
            className={styles.postImage}
          />
          <p className={styles.postDescription}>{currentPost.description}</p>
          <div className={styles.iconWrapper}>
            <div className={styles.postActions}>
              <div>
                <FontAwesomeIcon
                  icon={regularHeart}
                  style={{
                    color: "#fff",
                    marginRight: "5px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                />
                <span>{currentPost.likes}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faComment}
                  style={{
                    color: "#fff",
                    marginRight: "5px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                />
                <span>{currentPost.comments}</span>
              </div>
              <div>
                <FontAwesomeIcon
                  icon={faRetweet}
                  style={{
                    color: "#fff",
                    marginRight: "5px",
                    cursor: "pointer",
                    fontSize: "18px",
                  }}
                />
                <span>{currentPost.reposts}</span>
              </div>
            </div>
            <div>
              <FontAwesomeIcon
                icon={faBookmark}
                style={{
                  color: "#ff0000",
                  float: "right",
                  fontSize: "18px",
                  cursor: "pointer",
                }}
                onClick={handleSavePost}
              />
            </div>
          </div>
          <div className={styles.navigation}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              onClick={goToPrevPost}
              className={styles.arrowLeft}
            />
            <FontAwesomeIcon
              icon={faArrowRight}
              onClick={goToNextPost}
              className={styles.arrowRight}
            />
          </div>
        </div>
      ) : (
        <div className={styles.noSavedPosts}>No saved posts</div>
      )}

      <div className={styles.extraDiv}>
        <RightSection />
      </div>
    </div>
  );
};

export default Saved;
