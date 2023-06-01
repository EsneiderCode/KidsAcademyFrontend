import React, { useState } from 'react';
import styles from './DragAndDrop.module.css';

const DragAndDrop = ({ imageDragAndDropUrl, sentence, wordsListDragAndDrop, setWordsListDragAndDrop, correctWordsDragAndDrop, setDragAndDropScore, setChangeTest }) => {

  const [filledWords, setFilledWords] = useState([]);

  const handleDragStart = (event, word) => {
    event.dataTransfer.setData('text/plain', word);
  };

  const handleDrop = (event) => {
    event.preventDefault();

    const droppedWord = event.dataTransfer.getData('text/plain');

    if (event.target.classList.contains(styles.blank)) {
      const blankSpan = event.target;
      const replacedWord = blankSpan.textContent;
      const remainingWords = wordsListDragAndDrop.filter((word) => word !== droppedWord);
      replacedWord !== "______" ? setWordsListDragAndDrop([...remainingWords, replacedWord]) : setWordsListDragAndDrop([...remainingWords]);
      const updatedFilledWords = filledWords.filter((word) => word !== replacedWord);
      setFilledWords([...updatedFilledWords, droppedWord]);

      blankSpan.textContent = droppedWord;
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleButtonClick = () => {
    let score = 0;
    for (let i = 0; i < correctWordsDragAndDrop.length; i++) {
      if (filledWords[i] === correctWordsDragAndDrop[i]) {
        score++;
      }
    }
    setDragAndDropScore(score);
    setChangeTest(true);
  };

  return (
    <div className={styles.dragAndDrop}>
      <h2>Перетащите слова и фразы в текст:</h2>
      <div className={styles.picture}>
        <img src={imageDragAndDropUrl} alt="drag-and-drop__picture"/>
      </div>
      <div className={styles.container}>
        <div className={styles.text}>
          <div
            className={styles.sentence}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
          >
            {sentence.split(' ').map((word, i) =>
              word === '______' ? (
                <span key={i} className={styles.blank}>
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              )
            )}
          </div>
        </div>
        <div className={styles.words}>
          <h2>Слова:</h2>
          <ul>
            {wordsListDragAndDrop.map((word, i) => (
              <li
                key={i}
                className={styles.word}
                draggable
                onDragStart={(event) => handleDragStart(event, word)}
              >
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button
        className={styles.button}
        onClick={handleButtonClick}
      >
        Отправлять
      </button>
    </div>
  );
};

export default DragAndDrop;
