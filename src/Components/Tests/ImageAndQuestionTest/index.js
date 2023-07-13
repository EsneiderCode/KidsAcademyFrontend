import React from 'react';
import styles from './ImageAndQuestion.module.css';

const ImageAndQuestionTest = ({
  questions,
  currentQuestion,
  setCurrentQuestion,
  imageAndQuestionTestScore,
  setImageAndQuestionTestScore,
  setChangeTest}) => {

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setImageAndQuestionTestScore(imageAndQuestionTestScore + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) setChangeTest(true);

  return (
    <div className={styles.container}>
      {currentQuestion < questions.length ? (
        <div className={styles.screen}>
          <h2>{questions[currentQuestion].question}</h2>
          <img
            src={questions[currentQuestion].picture}
            alt="Изображение"
            className={styles.picture}
          />
          <div className={styles.options}>
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className={styles.option}
                onClick={() => handleAnswer(option)}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.result}>
          Идет загрузка теста
        </div>
      )}
    </div>
  );
};

export default ImageAndQuestionTest;
