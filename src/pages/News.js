// Posts.js
import React, { useState } from "react";
import news from "../pages/news.json";
import styles from "../styles/Posts.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as solidHeart,
  faRetweet,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import { faComment } from "@fortawesome/free-regular-svg-icons";

const Posts = () => {
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const totalPosts = news.length;
  const currentPost = news[currentPostIndex];

  const [likes, setLikes] = useState(news.map((post) => post.likes));
  const [likedPosts, setLikedPosts] = useState([]);

  const goToNextPost = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === totalPosts - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevPost = () => {
    setCurrentPostIndex((prevIndex) =>
      prevIndex === 0 ? totalPosts - 1 : prevIndex - 1
    );
  };

  const handleLikePost = () => {
    if (!likedPosts.includes(currentPost.id)) {
      const newLikes = [...likes];
      newLikes[currentPostIndex]++;
      setLikes(newLikes);
      setLikedPosts([...likedPosts, currentPost.id]);
    } else {
      const newLikes = [...likes];
      newLikes[currentPostIndex]--;
      setLikes(newLikes);
      setLikedPosts(likedPosts.filter((id) => id !== currentPost.id));
    }
  };

  const isPostLiked = likedPosts.includes(currentPost.id);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftContainer}>
        <LeftSection />
      </div>

      <div className={styles.postContainer}>
        <h2 className={styles.postTitle}>{currentPost.title}</h2>
        <p className={styles.postAuthor}>Posted by: {currentPost.username}</p>
        <img
          src={currentPost.photo}
          alt={currentPost.title}
          className={styles.postImage}
          onDoubleClick={handleLikePost}
        />
        <p className={styles.postDescription}>{currentPost.description}</p>
        <div className={styles.iconWrapper}>
          <div className={styles.postActions}>
            <div>
              <FontAwesomeIcon
                icon={isPostLiked ? solidHeart : regularHeart}
                style={{
                  color: isPostLiked ? "#ff0000" : "#fff",
                  marginRight: "5px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
                onClick={handleLikePost}
              />
              <span>{likes[currentPostIndex]}</span>
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

      <div className={styles.extraDiv}>
        <RightSection />
      </div>
    </div>
  );
};

export default Posts;
