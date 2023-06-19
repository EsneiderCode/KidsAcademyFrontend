import React, { useState } from 'react';
import styles from './MultipleChooseTest.module.css';

const MultipleChooseTest = ({setChangeTest, setMultipleChooseScore, questionMultipleChooseTest}) => {
 

  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handleAnswerChange = (event) => {
    const option = event.target.value;
    const newSelectedAnswers = [...selectedAnswers];

    if (newSelectedAnswers.includes(option)) {
      newSelectedAnswers.splice(newSelectedAnswers.indexOf(option), 1);
    } else {
      newSelectedAnswers.push(option);
    }

    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNextTest = () => {
    const isCorrect = selectedAnswers.length === questionMultipleChooseTest.correctAnswers.length &&
    selectedAnswers.every((answer) =>
    questionMultipleChooseTest.correctAnswers.includes(answer)
    ) ? true : false;

    setMultipleChooseScore(isCorrect);
    setChangeTest(true);
  }



  return (
    <div className={styles.container}>
      <h2 className={styles.question}>{questionMultipleChooseTest.question}</h2>
      <div className={styles.options}>
        {questionMultipleChooseTest.options.map((option) => (
          <label key={option} className={styles.option}>
            <input
              type="checkbox"
              name="answer"
              value={option}
              checked={selectedAnswers.includes(option)}
              onChange={handleAnswerChange}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handleNextTest} className={styles.nextBtn}>Дальше</button>
    </div>
  );
};

export default MultipleChooseTest;