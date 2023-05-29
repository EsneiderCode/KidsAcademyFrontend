import React from 'react';
import './imageandquestiontest.css';

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

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  if (currentQuestion >= questions.length) setChangeTest(true);

  return (
    <div className="container">
      {currentQuestion < questions.length ? (
        <div className="screen">
          <h2>{questions[currentQuestion].question}</h2>
          <img
            src={questions[currentQuestion].picture}
            alt="Изображение"
            className="picture"
          />
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <div
                key={index}
                className="option"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </div>
            ))}
          </div>
          <button className="next-btn" onClick={handleNextQuestion}>
            Далее
          </button>
        </div>
      ) : (


        <div className="result">
          Идет загрузка теста
        </div>
      )}
    </div>
  );
};

export default ImageAndQuestionTest;