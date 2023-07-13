/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import styles from './ManyPointsTest.module.css';

const ManyPointTest = ({
  title,
  manyPointsPictureUrl,
  manyPointDescription,
  manyPointsData,
  setChangeTest,
  setManyPointScore,
  manyPointScore
}) => {
  const [clicks, setClicks] = useState([]);
  const [clickedAreas, setClickedAreas] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSelectedAnimal(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [selectedAnimal]);

  const handleImageClick = (e) => {
    console.log(manyPointScore, manyPointsData.length)
    const offsetX = e.nativeEvent.offsetX;
    const offsetY = e.nativeEvent.offsetY;

    const isAreaClicked = clickedAreas.some((area) => {
      const { startX, endX, startY, endY } = area;
      return (
        offsetX >= startX &&
        offsetX <= endX &&
        offsetY >= startY &&
        offsetY <= endY
      );
    });

    const clickedAnimal = manyPointsData.find((animal) => {
      const { x, y } = animal;
      const marginOfError = 30;
      return (
        offsetX >= x - marginOfError &&
        offsetX <= x + marginOfError &&
        offsetY >= y - marginOfError &&
        offsetY <= y + marginOfError
      );
    });

    if (!isAreaClicked && clickedAnimal) {
      const marginOfError = 30;

      setManyPointScore(manyPointScore + 1);
      const newArea = {
        startX: offsetX - marginOfError,
        endX: offsetX + marginOfError,
        startY: offsetY - marginOfError,
        endY: offsetY + marginOfError,
      };
      setClickedAreas((prevAreas) => [...prevAreas, newArea]);
      setSelectedAnimal(clickedAnimal);
      e.target.classList.add(styles.correct);
    } else {
      e.target.classList.add(styles.incorrect);
    }

    setClicks((prevClicks) => [
      ...prevClicks,
      { x: offsetX, y: offsetY, isCorrect: !!clickedAnimal },
    ]);
  };

  const handleNextTest = () => {
    setChangeTest(true);
  };

  const handleClosePopup = () => {
    setSelectedAnimal(null);
  };

  return (
    <div className={styles.testContainer}>
      <div className={styles.infoContainer}>
        <h1>{title}</h1>
        <p className={styles.description}>{manyPointDescription}</p>
        <div className={styles.imageContainer}>
          <img src={manyPointsPictureUrl} alt="Test Image" onClick={handleImageClick} />
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
              <div
                key={index}
                className={`${styles.clickMarker} ${styles.incorrect}`}
                style={{ left: click.x, top: click.y }}
              >
                &#10060;
              </div>
            )
          )}
        </div>
      </div>
      {selectedAnimal && (
        <div className={`${styles.popup} ${selectedAnimal ? '' : styles.hidden}`}>
          <h2>{selectedAnimal.name}</h2>
          <p>{selectedAnimal.description}</p>
          <span className={styles.closeButton} onClick={handleClosePopup}>
            &times;
          </span>
        </div>
      )}
      {manyPointScore === manyPointsData.length && (
        <p>Поздравляем, Вы нашли все животные!!</p>
      )}
      <button onClick={handleNextTest} className={styles.nextBtn} type="submit">
        Дальше
      </button>
    </div>
  );
};

export default ManyPointTest;
