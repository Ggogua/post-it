import React, { useState, useEffect } from "react";
import styles from "../styles/Posts.module.css";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as solidHeart,
  faRetweet,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faHeart as regularHeart,
  faComment,
} from "@fortawesome/free-regular-svg-icons";
import { createClient } from "pexels";

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const totalVideos = videos.length;
  const currentVideo = videos[currentVideoIndex] || {};
  const [likes, setLikes] = useState([]);
  const [likedVideos, setLikedVideos] = useState([]);

  useEffect(() => {
    const client = createClient(
      "Z3TNvhOLn16ZTLD7WUPAjEOE7OvNVxVEdq7cqX7DlZTNT945rUKdcPO2"
    );

    client.videos
      .search({ query: "nature", per_page: 10 })
      .then((response) => {
        setVideos(response.videos);
        setLikes(Array(response.videos.length).fill(0));
      })
      .catch((error) => {
        console.error("Error fetching videos:", error);
      });
  }, []);

  const goToNextVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === totalVideos - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevVideo = () => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? totalVideos - 1 : prevIndex - 1
    );
  };

  const handleLikeVideo = () => {
    if (!likedVideos.includes(currentVideo.id)) {
      const newLikes = [...likes];
      newLikes[currentVideoIndex]++;
      setLikes(newLikes);
      setLikedVideos([...likedVideos, currentVideo.id]);
    } else {
      const newLikes = [...likes];
      newLikes[currentVideoIndex]--;
      setLikes(newLikes);
      setLikedVideos(likedVideos.filter((id) => id !== currentVideo.id));
    }
  };

  const isVideoLiked = likedVideos.includes(currentVideo.id);

  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftContainer}>
        <LeftSection />
      </div>

      <div className={styles.videoContainer}>
        {totalVideos > 0 && (
          <>
            <h2 className={styles.videoTitle}>{currentVideo.title}</h2>
            <p className={styles.videoAuthor}>
              Posted by: {currentVideo.user ? currentVideo.user.name : ""}
            </p>
            <video
              src={
                currentVideo.video_files ? currentVideo.video_files[0].link : ""
              }
              controls
              className={styles.videoElement}
            />
          </>
        )}
        <p className={styles.videoDescription}>{currentVideo.description}</p>
        <div className={styles.iconWrapper}>
          <div className={styles.videoActions}>
            <div>
              <FontAwesomeIcon
                icon={isVideoLiked ? solidHeart : regularHeart}
                style={{
                  color: isVideoLiked ? "#ff0000" : "#fff",
                  marginRight: "5px",
                  cursor: "pointer",
                  fontSize: "18px",
                }}
                onClick={handleLikeVideo}
              />
              <span>{likes[currentVideoIndex]}</span>
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
              <span>{currentVideo.comments}</span>
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
              <span>{currentVideo.reposts}</span>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            onClick={goToPrevVideo}
            className={styles.arrowLeft}
          />
          <FontAwesomeIcon
            icon={faArrowRight}
            onClick={goToNextVideo}
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

export default Videos;
