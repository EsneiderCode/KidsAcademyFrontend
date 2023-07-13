import React from "react";
import styles from "./PictureInputTest.module.css";

const PictureInputTest = ({pictureInputTestData, setChangeTest, setGuessPictureInput, guessPictureInput}) => {

  const handleInputChange = (event) => {
    setGuessPictureInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно добавить логику для проверки правильности ответа
    // Например, сравнение значения guessPictureInput с правильным ответом
    console.log("Ваш ответ:", guessPictureInput);
  };

  const handleNextTest = () => {
    setChangeTest(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={pictureInputTestData.url} alt={pictureInputTestData.name} />
      </div>
      <form className={styles.formGuess} onSubmit={handleSubmit}>
        <input
          className={styles.formGuessInput}
          type="text"
          value={guessPictureInput}
          onChange={handleInputChange}
          placeholder="Введите ответ..."
        />
        <button onClick={handleNextTest} className={styles.btnPrimary} type="submit">
          Дальше
        </button>
      </form>
      {
        guessPictureInput === pictureInputTestData.name && <p className={styles.correctAnswer}>Поздравляем, вы ответили правильно.</p>
      }
    </div>
  );
};

export default PictureInputTest;