/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import styles from './ImageClickTest.module.css';

const ImageClickTest = ({ 
  title, 
  imageClickTestUrl, 
  correctClicks, 
  setChangeTest,
  setImageClickTestScore,
  imageClickTestScore
}) => {
  const [clicks, setClicks] = useState([]);
  const [clickAreas, setClickAreas] = useState([]);

  const handleImageClick = (e) => {
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    const marginOfError = 10;

    if (clicks.length + 1 === correctClicks.length){
      setTimeout(() => {
        setChangeTest(true);
      }, 500);
    }

    const isClickedInArea = clickAreas.some((area) => {
      const { startX, endX, startY, endY } = area;
      return (
        offsetX >= startX - marginOfError &&
        offsetX <= endX + marginOfError &&
        offsetY >= startY - marginOfError &&
        offsetY <= endY + marginOfError
      );
    });

    const isCorrectClick = correctClicks.some((click) => {
      const { x, y } = click;
      return (
        offsetX >= x - marginOfError &&
        offsetX <= x + marginOfError &&
        offsetY >= y - marginOfError &&
        offsetY <= y + marginOfError
      );
    });

    if (!isClickedInArea && isCorrectClick) {
      setImageClickTestScore(imageClickTestScore + 1);
      const newArea = {
        startX: offsetX - marginOfError,
        endX: offsetX + marginOfError,
        startY: offsetY - marginOfError,
        endY: offsetY + marginOfError,
      };
      setClickAreas((prevAreas) => [...prevAreas, newArea]);
      e.target.classList.add(styles.correct);
    } else {
      e.target.classList.add(styles.incorrect);
    }

    setClicks((prevClicks) => [
      ...prevClicks,
      { x: offsetX, y: offsetY, isCorrect: isCorrectClick },
    ]);
  };

  return (
    <div className={styles.testContainer}>
      <h1>{title}</h1>
      <div className={styles.imageContainer}>
        <img src={imageClickTestUrl} alt="Test Image" onClick={handleImageClick} />
        {clicks.map((click, index) =>
          click.isCorrect ? (
            <div
              key={index}
              className={`${styles.clickMarker} ${styles.correct}`}
              style={{ left: click.x, top: click.y }}
            >
              &#9989;
            </div>
          ) : (
            !click.isCorrect && (
              <div
                key={index}
                className={`${styles.clickMarker} ${styles.incorrect}`}
                style={{ left: click.x, top: click.y }}
              >
                &#10060;
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default ImageClickTest;
