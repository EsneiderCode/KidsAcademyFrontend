import React, { useState } from 'react';
import styles from './TrueOrNotTest.module.css';

const TrueOrNotTest = ({ setChangeTest, setTrueOrNotTestScore }) => {
  const questions = [
    {
      question: 'Коала - это млекопитающее?',
      answer: true,
    }
  ];

  const [answer, setAnswer] = useState(null);

  const handleAnswer = (isTrue) => {
    setAnswer(isTrue);
    isTrue === currentQuestion.answer ? setTrueOrNotTestScore(true) : setTrueOrNotTestScore(false);
  };

  const handleNextTest = () => {
    setChangeTest(true);
  }

  const currentQuestion = questions[0];

  return (
    <div className={styles.container}>
      <h2 className={styles.question}>{currentQuestion.question}</h2>
      <div className={styles.options}>
        <label className={styles.option}>
          <input
            type="radio"
            name="answer"
            value="true"
            checked={answer === true}
            onChange={() => handleAnswer(true)}
          />
          Верно
        </label>
        <label className={styles.option}>
          <input
            type="radio"
            name="answer"
            value="false"
            checked={answer === false}
            onChange={() => handleAnswer(false)}
          />
          Неверно
        </label>
      </div>
      <button className={styles.nextBtn} onClick={handleNextTest}>Дальше</button>
    </div>
  );
};

export default TrueOrNotTest;
