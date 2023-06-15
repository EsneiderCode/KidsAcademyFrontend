/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import styles from './CardsDragAndDropTest.module.css';

const shuffle = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }
  return shuffledArray;
};

const CardsDragAndDropTest = ({ animalsCardsDAD, CardsDragAndDropScore, setCardsDragAndDropScore, setChangeTest }) => {
  const [selectedAnimals, setSelectedAnimals] = useState([]);
  const [allChestsFilled, setAllChestsFilled] = useState(false);
  const [shuffledAnimalOptions, setShuffledAnimalOptions] = useState([]);

  useEffect(() => {
    setShuffledAnimalOptions(shuffle(animalsCardsDAD));
  }, [animalsCardsDAD]);

  const handleAnimalDragStart = (event, animal) => {
    event.dataTransfer.setData('text/plain', JSON.stringify(animal));
  };

  const handleDrop = (event, index) => {
    event.preventDefault();
    const { name } = JSON.parse(event.dataTransfer.getData('text/plain'));
  
    const updatedSelectedAnimals = [...selectedAnimals];
    const previousIndex = updatedSelectedAnimals.findIndex((animal) => animal === name);
  
    if (previousIndex > -1) {
      setShuffledAnimalOptions((options) => [...options, { name: updatedSelectedAnimals[index], url: animalsCardsDAD.find((animal) => animal.name === updatedSelectedAnimals[index]).url }]);
      updatedSelectedAnimals[previousIndex] = null;
    } else {
      const currentAnimal = updatedSelectedAnimals[index];
      if (currentAnimal) {
        setShuffledAnimalOptions((options) => [...options, { name: currentAnimal, url: animalsCardsDAD.find((animal) => animal.name === currentAnimal).url }]);
      }
    }
  
    updatedSelectedAnimals[index] = name;
    setSelectedAnimals(updatedSelectedAnimals);
    setShuffledAnimalOptions((options) => options.filter((option) => option.name !== name));
    checkIfAllChestsFilled(updatedSelectedAnimals);
  };
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const checkIfAllChestsFilled = (selectedAnimals) => {
    setAllChestsFilled(selectedAnimals.every((animal) => animal !== null) && !selectedAnimals.includes(undefined));
  };

  const handleContinueClick = () => {
    if (allChestsFilled && CardsDragAndDropScore === 0) {
      let correctCount = 0;
      for (let i = 0; i < selectedAnimals.length; i++) {
        if (selectedAnimals[i] === animalsCardsDAD[i].name) {
          correctCount++;
        }
      }

      const updatedScore = correctCount;
      setCardsDragAndDropScore(updatedScore);
      setChangeTest(true)
    }
  };

  return (
    <div className={styles.CardsDADContainer}>
      <h1>Перетащите животных в соответствующие ящики</h1>
      <div className={styles['animal-options']}>
        {shuffledAnimalOptions.map((animal, index) => (
          <div
            key={animal.name}
            className={styles['animal-option']}
            draggable
            onDragStart={(event) => handleAnimalDragStart(event, animal)}
          >
            <img src={animal.url} className={styles.animalPicture} alt="img-picture" />
          </div>
        ))}
      </div>
      <div className={styles.chests}>
        {animalsCardsDAD.map((animal, index) => {
          const selectedAnimal = selectedAnimals[index];
          const isChestFilled = selectedAnimal !== undefined;
  
          return (
            <div className={styles.boxContainer} key={animal.name}>
              <div className={styles['chest-name']}>{animal.name}</div>
              <div
                key={animal.name}
                className={`${styles.chest} ${isChestFilled ? styles.filled : ''}`}
                onDrop={(event) => handleDrop(event, index)}
                onDragOver={handleDragOver}
              >
                {isChestFilled && (
                  <div className={styles['card-in-chest']}>
                    <img className={styles.animalPicture} src={animalsCardsDAD.find((animal) => animal.name === selectedAnimal).url} alt={selectedAnimal} />
                  </div>
                )}
                {selectedAnimal && <div className={styles['card-overlay']} />}
              </div>
            </div>
          );
        })}
      </div>
      <button className={styles.btnPrimary} onClick={handleContinueClick} disabled={!allChestsFilled}>
        Дальше
      </button>
    </div>
  );
};

export default CardsDragAndDropTest;