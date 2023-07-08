import React from "react";
import styles from "./FindTerritoryTest.module.css";
const FindTerritoryTest = ({ setChangeTest, findTerritoryTestData, selectedTerritory, setSelectedTerritory }) => {
  const options = findTerritoryTestData.options;

  const handleNextTest = () => {
    setChangeTest(true);
  };

  const handdleOptionClick = (event, territory) => {
    setSelectedTerritory(territory);
  };

  return (
    <>
      <div className={styles.container}>
        <h3>Найдите турцию</h3>
        <div className={styles.mainPicture}>
          <img src={findTerritoryTestData.mainPicture} alt="mainpicture" />
        </div>
        <div className={styles.territoriesContainer}>
          {options.map((territory, index) => {
            return (
              <>
                <div
                  key={index}
                  className={`${styles.terrotoryContainer} ${
                    selectedTerritory === territory
                      ? styles.selectedTerritory
                      : ""
                  }`}
                  onClick={(event) => handdleOptionClick(event, territory)}
                >
                  <img src={territory.url} alt={territory.name} />
                </div>
              </>
            );
          })}
        </div>
        <button
          onClick={handleNextTest}
          className={styles.nextBtn}
          type="submit"
        >
          Дальше
        </button>
      </div>
    </>
  );
};

export default FindTerritoryTest;
