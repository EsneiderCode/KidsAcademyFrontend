/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styles from "./MultiPictureTest.module.css";

const MultiplePictureTest = ({
  setChangeTest,
  multiplePictureArray,
  animalToFind,
  setMultiplePictureScore,
  multiplePictureScore
}) => {
  const [shuffledCards, setShuffledCards] = useState([]);

  useEffect(() => {
    setShuffledCards(shuffleArray(multiplePictureArray));
  }, []);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const handdleCardClick = (event, card) => {
    const element = event.target;
    if (element.alt === animalToFind.name) {
      element.className === `${styles.cardImg} ${styles.correctCard}`
        ? (element.className = `${styles.cardImg}`)
        : (element.className = `${styles.cardImg} ${styles.correctCard}`);
      if (
        !multiplePictureScore.some(
          (selectedCard) => selectedCard.id === card.id
        )
      ) {
        setMultiplePictureScore([...multiplePictureScore, card]);
      } else {
        setMultiplePictureScore(
          multiplePictureScore.filter(
            (selectedCard) => selectedCard.id !== card.id
          )
        );
      }
    } else {
      element.className === `${styles.cardImg} ${styles.incorrectCard}`
        ? (element.className = `${styles.cardImg}`)
        : (element.className = `${styles.cardImg} ${styles.incorrectCard}`);
      setMultiplePictureScore([...multiplePictureScore]);
    }
  };

  const handleNextTest = () => {
    setChangeTest(true);
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.descriptionContainer}>
          <div className={styles.titleContainer}>
            <p>Выберите все изобрадения где есть</p>
            <h3>Птицы</h3>
          </div>
          <div className={styles.cardExample}>
            <img
              className={styles.cardExampleImg}
              src={animalToFind.url}
              alt={animalToFind.name}
            />
          </div>
        </div>
        <div className={styles.cardsContainer}>
          {shuffledCards.map((card) => {
            return (
              <>
                <div
                  className={styles.card}
                  key={card.name}
                  onClick={(event) => handdleCardClick(event, card)}
                >
                  <img
                    className={styles.cardImg}
                    src={card.url}
                    alt={card.name}
                  />
                </div>
              </>
            );
          })}
        </div>
        <button onClick={handleNextTest} className={styles.btnPrimary}>
        Дальше
      </button>
      </div>
    </>
  );
};

export default MultiplePictureTest;
