import React, { useState, useEffect } from "react";
import styles from "./MatchingTest.module.css";

const MatchingTest = ({
  setChangeTest,
  questionMatchingTest,
  nounsMatchingTest,
  descriptionsMatchingTest,
  isCorrectMatchingTest,
  setIsCorrectMatchingTest,
}) => {
  const [selectedMatches, setSelectedMatches] = useState(
    Array(nounsMatchingTest.length).fill("")
  );
  const [shuffledDescriptions, setShuffledDescriptions] = useState([]);


  useEffect(() => {
    setShuffledDescriptions(shuffleArray(descriptionsMatchingTest));
  }, [descriptionsMatchingTest]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleMatchSelect = (index, value) => {
    const updatedMatches = [...selectedMatches];
    updatedMatches[index] = value;
    setSelectedMatches(updatedMatches);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Проверяем сопоставления
    const isAllMatched = selectedMatches.every((match) => match !== "");
    const isAllCorrect = selectedMatches.every(
      (match, index) => match === descriptionsMatchingTest[index]
    );

    setIsCorrectMatchingTest(isAllMatched && isAllCorrect);
  };

  const handleNextTest = () => {
    setChangeTest(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionMatchingTest}>{questionMatchingTest}</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        {nounsMatchingTest.map((animal, index) => (
          <div key={animal} className={styles.matchingItem}>
            <span className={styles.animal}>{animal}</span>
            <select
              value={selectedMatches[index]}
              onChange={(event) => handleMatchSelect(index, event.target.value)}
              className={styles.matchSelect}
            >
              <option value="">Выберите описание</option>
              {shuffledDescriptions.map((description) => (
                <option key={description} value={description}>
                  {description}
                </option>
              ))}
            </select>
          </div>
        ))}
        <button type="submit" className={styles.submitButton}>
          Проверить
        </button>
      </form>
      {isCorrectMatchingTest && (
        <p className={styles.resultCorrect}>Все сопоставления верны!</p>
      )}
      {isCorrectMatchingTest === false && (
        <p className={styles.resultIncorrect}>
          Некоторые сопоставления неверны. Попробуйте еще раз.
        </p>
      )}
      <button onClick={handleNextTest} className={styles.nextBtn}>
        Дальше
      </button>
    </div>
  );
};

export default MatchingTest;
