import React, { useState } from 'react';
import styles from './ChoosingCorrectPicture.module.css';


const Card = ({ card, isActive, onClick }) => {
  const cardClassName = isActive ? `${styles.card} ${styles.active}` : styles.card;

  return (
    <div className={cardClassName} onClick={onClick}>
      <img src={card.url} alt={card.name} />
    </div>
  );
};

const ChoosingCorrectPicture = ({cardsData, setChangeTest, setChoosedCorrectCard}) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleNextButtonClick = () => {
    if (selectedCard !== null && selectedCard.correct) {
      setChoosedCorrectCard(true);
    } 
    setChangeTest(true);
  };

  return (
    <div className={styles.app}>
        <h2>Укажите на какой из картинок изображена лисица</h2>
      <div className={styles.cardContainer}>
        {cardsData.map((card, index) => (
          <Card
            key={index}
            card={card}
            isActive={selectedCard === card}
            onClick={() => handleCardClick(card)}
          />
        ))}
      </div>
      <button className={styles.nxtButton} onClick={handleNextButtonClick}>Дальше</button>
    </div>
  );
};

export default ChoosingCorrectPicture;
