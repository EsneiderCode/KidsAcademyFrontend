import React, { useState } from "react";
import styles from "./ShortAnswerTest.module.css";

const ShortAnswerTest = ({
  setChangeTest,
  isCorrectShortAnswer,
  setIsCorrectShortAnswer,
  questionShortAnswerTest,
  correctAnswerShortAnswerTest,
}) => {
  const [userAnswer, setUserAnswer] = useState("");

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formattedUserAnswer = userAnswer.trim().toLowerCase();
    const formattedCorrectAnswer = correctAnswerShortAnswerTest
      .trim()
      .toLowerCase();
    setIsCorrectShortAnswer(formattedUserAnswer === formattedCorrectAnswer);
  };

  const handleNextTest = () => {
    setChangeTest(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionShortAnswerTest}>
        {questionShortAnswerTest}
      </h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={userAnswer}
          onChange={handleAnswerChange}
          className={styles.answerInput}
          placeholder="Введите ваш ответ..."
        />
        <button type="submit" className={styles.submitButton}>
          Проверить
        </button>
      </form>
      {isCorrectShortAnswer !== null && (isCorrectShortAnswer === true ? (
        <p className={styles.correct}>Ваш ответ верный!</p>
      ) : (
        <p className={styles.incorrect}>Ваш ответ неверный!</p>
      ))}
      <button onClick={handleNextTest} className={styles.nextBtn}>
        Дальше
      </button>
    </div>
  );
};

export default ShortAnswerTest;
