/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import styles from './FillingGapsTest.module.css'; // Archivo CSS para los estilos

const FillingGapsTest = ({
  fillingGapsScore,
  setFillingGapsScore,
  fillingGapsTitle,
  fillingGapsPicture,
  setChangeTest,
  fillingGapsWords,
  fillingGapsSentence,
  correctGuesses,
  setCorrectGuesses
}) => {

  const handleGuess = (index, value) => {
    const newGuesses = [...fillingGapsScore];
    newGuesses[index] = value;
    setFillingGapsScore(newGuesses);
  };

  const renderSentence = () => {
    const sentenceParts = fillingGapsSentence.split('__');
    const renderedSentence = [];

    for (let i = 0; i < sentenceParts.length; i++) {
      renderedSentence.push(<span key={i}>{sentenceParts[i]}</span>);
      if (i < sentenceParts.length - 1) {
        renderedSentence.push(
          <input
            key={i + sentenceParts.length}
            type="text"
            value={fillingGapsScore[i]}
            onChange={(e) => handleGuess(i, e.target.value)}
            className={fillingGapsScore[i] === fillingGapsWords[i] ? 'correct' : 'incorrect'}
          />
        );
      }
    }

    return renderedSentence;
  };

  const handleNext = () => {
    const newCorrectGuesses = [...correctGuesses];
  
    for (let i = 0; i < fillingGapsWords.length; i++) {
      if (fillingGapsScore[i] === fillingGapsWords[i]) {
        newCorrectGuesses.push(fillingGapsScore[i]);
        setCorrectGuesses(newCorrectGuesses);
      }
    }

    setChangeTest(true);
    
  };

  return (
    <div className={styles.fillingGapsContainer}>
      <h1 className={styles.title}>{fillingGapsTitle}</h1>
      <img className={styles.picture} src={fillingGapsPicture} alt="filling-gaps-picture"/>
      <p className={styles.sentence}>{renderSentence()}</p>
      <button className={styles.btnPrimary} onClick={handleNext}>Next</button>
    </div>
  );
};

export default FillingGapsTest;
