import React, { useState } from 'react';
import styles from './NumericTest.module.css';

const NumericTest = ({questionNumericTest, setChangeTest, setIsCorrectNumericTest, isCorrectNumericTest,  correctAnswerNumericTest, allowedErrorAnswerNumeric}) => {

  const [userAnswer, setUserAnswer] = useState('');

  const handleAnswerChange = (event) => {
    setUserAnswer(event.target.value);
  };

  const handleNextTest = () => {
    setChangeTest(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const userNumber = parseFloat(userAnswer);
    const lowerBound = correctAnswerNumericTest - allowedErrorAnswerNumeric;
    const upperBound = correctAnswerNumericTest + allowedErrorAnswerNumeric;
    setIsCorrectNumericTest(userNumber >= lowerBound && userNumber <= upperBound);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.questionNumericTest}>{questionNumericTest}</h2>
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
      {isCorrectNumericTest !== null && (isCorrectNumericTest ? (
        <p className={styles.resultCorrect}>
          Ваш ответ верный!
        </p>
      ) : (
        <p className={styles.resultIncorrect}>
          Ваш ответ неправильный. Попробуйте еще раз.
        </p>
      ))}
      <button onClick={handleNextTest} className={styles.nextBtn}>Дальше</button>
    </div>
  );
};

export default NumericTest;