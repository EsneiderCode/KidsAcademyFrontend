import React, { useEffect, useState } from "react";
import styles from "./TopicComic.module.css";

const TopicComic = ({
  backgroundPicture,
  leftPicture,
  rightPicture,
  leftButton,
  rightButton,
  boards,
  setTestEnable,
  testEnable,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imageElements = document.querySelectorAll("img");

    const handleImageLoad = () => {
      const remainingImages = Array.from(imageElements).filter(
        (img) => !img.complete
      );
      if (remainingImages.length === 0) {
        setImagesLoaded(true);
      }
    };

    Array.from(imageElements).forEach((img) => {
      img.addEventListener("load", handleImageLoad);
    });

    return () => {
      Array.from(imageElements).forEach((img) => {
        img.removeEventListener("load", handleImageLoad);
      });
    };
  }, []);

  function nextScreenTimer() {
    setTimeout(() => {
      setTestEnable(testEnable + 1);
    }, 1000);
  }

  return (
    <div className={`${styles.container} ${imagesLoaded ? styles.loaded : ""}`}>
      <div className={styles.comic}>
        <img
          className={styles.backgroundPicture}
          src={backgroundPicture}
          alt="backgroundPicture"
        />
        {leftPicture && (
          <img
            className={styles.leftPicture}
            style={leftPicture.style}
            src={leftPicture.picture}
            alt="leftPicture"
          />
        )}
        {rightPicture && (
          <img
            className={styles.rightPicture}
            style={rightPicture.style}
            src={rightPicture.picture}
            alt="rightPicture"
          />
        )}
        {leftButton && (
          <img
            className={styles.leftButton}
            onClick={() => setTestEnable(testEnable - 1)}
            src={leftButton}
            alt="leftButton"
          />
        )}
        {rightButton && (
          <img
            className={styles.rightButton}
            onClick={() => setTestEnable(testEnable + 1)}
            src={rightButton}
            alt="rightButton"
          />
        )}

        {leftButton == null && rightButton == null && nextScreenTimer()}
        {boards &&
          boards.map((board, index) => {
            return (
              <div
                className={styles.boardContainer}
                style={board.style.boardContainer}
                key={index}
              >
                {board.picture && (
                  <img
                    className={styles.boardPicture}
                    style={board.style.boardPicture}
                    src={board.picture}
                    alt="board"
                  />
                )}
                {board.description && (
                  <p
                    className={styles.boardDescription}
                    style={board.style.boardDescription}
                    dangerouslySetInnerHTML={{ __html: board.description }}
                  ></p>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default TopicComic;
