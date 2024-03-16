import React, { useState } from "react";
import styles from "../styles/Posts.module.css";
import LeftSection from "../components/LeftSection";
import RightSection from "../components/RightSection";

const Create = ({ onSavePost }) => {
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSavePost = () => {
    onSavePost({ content, image });
    setContent("");
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.gridContainer}>
      <div className={styles.leftContainer}>
        <LeftSection />
      </div>

      <div className={styles.CreateContainer}>
        <p className={styles.MainText}>Post your thoughts</p>
        <div className={styles.CreateWrapper}>
          {image && (
            <div className={styles.imagePreview}>
              <img src={image} alt="Uploaded" className={styles.previewImage} />
            </div>
          )}
          <textarea
            className={styles.createTextarea}
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <div>
            <button className={styles.createButton} onClick={handleSavePost}>
              Create Post
            </button>
          </div>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className={styles.createFileInput}
          />
        </div>
      </div>

      <div className={styles.extraDiv}>
        <RightSection />
      </div>
    </div>
  );
};

export default Create;
