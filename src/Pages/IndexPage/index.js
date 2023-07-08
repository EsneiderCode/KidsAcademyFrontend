import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./index.module.css";
import backgroundImg from "./images/background.svg";
import blueseaflag from "./images/blueseaflag.svg";
import greenflag from "./images/greenflag.svg";
import orangeflag from "./images/orangeflag.svg";
import yellowflag from "./images/yellowflag.svg";
import purpleflag from "./images/purpleflag.svg";
import titleImg from "./images/stepi.svg";
import stepenboy from "./images/stepen1.svg";
import indicatorTable from "./images/table-indicator.svg";
import mapAnimals from "./images/mapWithAnimals.svg";
import hand from "./images/handslogo.svg";
import partner1 from "./images/partner1.svg";
import partner2 from "./images/partner2.svg";
import partner3 from "./images/partner3.svg";
import partner4 from "./images/partner4.svg";
import vklogo from "./images/vk.svg";
import mailLogo from "./images/mailicon.svg";
import closeIcon from "./images/close.svg";

const IndexPage = () => {
  const [activeFlag, setActiveFlag] = useState(0);
  const navigate = useNavigate();
  const [modalMessage, setModalMessage] = useState({
    status: false,
    message: "",
  });

  const handleHoverOut = () => {
    setActiveFlag(0);
  };

  return (
    <>
      <div className={styles.greatContainer}>
        <div className={styles.indexContainer}>
          <header className={styles.indexHeader}>
            <nav className={styles.indexNav}>
              <ul className={styles.flagsUl}>
                <li
                  onMouseEnter={() => setActiveFlag(1)}
                  onMouseLeave={() => handleHoverOut()}
                >
                  <div
                    className={
                      activeFlag === 1
                        ? `${styles.boxOrange} ${styles.boxActive}`
                        : styles.boxOrange
                    }
                  >
                    {activeFlag === 1 && (
                      <div className={styles.verticalContainer}>
                        <Link to="/sign-up" className={styles.verticalText}>
                          Регистрация
                        </Link>
                      </div>
                    )}
                  </div>
                  <img
                    className={styles.flagIcon}
                    src={orangeflag}
                    alt="orangeflag"
                  />
                </li>
                <li
                  onMouseEnter={() => setActiveFlag(2)}
                  onMouseLeave={() => handleHoverOut()}
                >
                  <div
                    className={
                      activeFlag === 2
                        ? `${styles.boxYellow} ${styles.boxActive}`
                        : styles.boxYellow
                    }
                  >
                    {" "}
                    {activeFlag === 2 && (
                      <div className={styles.verticalContainer}>
                        <Link to="/home" className={styles.verticalText}>
                          Личный кабинет
                        </Link>
                      </div>
                    )}
                  </div>
                  <img
                    className={styles.flagIcon}
                    src={yellowflag}
                    alt="yellowflag"
                  />
                </li>
                <li
                  onMouseEnter={() => setActiveFlag(3)}
                  onMouseLeave={() => handleHoverOut()}
                >
                  <div
                    className={
                      activeFlag === 3
                        ? `${styles.boxGreen} ${styles.boxActive}`
                        : styles.boxGreen
                    }
                  >
                    {" "}
                    {activeFlag === 3 && (
                      <div className={styles.verticalContainer}>
                        <Link to="/about-us" className={styles.verticalText}>
                          О платформе
                        </Link>
                      </div>
                    )}
                  </div>
                  <img
                    className={styles.flagIcon}
                    src={greenflag}
                    alt="greenflag"
                  />
                </li>
                <li
                  onMouseEnter={() => setActiveFlag(4)}
                  onMouseLeave={() => handleHoverOut()}
                >
                  <div
                    className={
                      activeFlag === 4
                        ? `${styles.boxSeablue} ${styles.boxActive}`
                        : styles.boxSeablue
                    }
                  >
                    {" "}
                    {activeFlag === 4 && (
                      <div className={styles.verticalContainer}>
                        <Link to="/about-team" className={styles.verticalText}>
                          О команде
                        </Link>
                      </div>
                    )}
                  </div>
                  <img
                    className={styles.flagIcon}
                    src={blueseaflag}
                    alt="blueseaflag"
                  />
                </li>
                <li
                  onMouseEnter={() => setActiveFlag(5)}
                  onMouseLeave={() => handleHoverOut()}
                >
                  <div
                    className={
                      activeFlag === 5
                        ? `${styles.boxPurple} ${styles.boxActive}`
                        : styles.boxPurple
                    }
                  >
                    {" "}
                    {activeFlag === 5 && (
                      <div className={styles.verticalContainer}>
                        <Link to="/news" className={styles.verticalText}>
                          Новости
                        </Link>
                      </div>
                    )}
                  </div>
                  <img
                    className={styles.flagIcon}
                    src={purpleflag}
                    alt="purpleflag"
                  />
                </li>
              </ul>
            </nav>
          </header>
          <div className={styles.titleContainer}>
            <h4 className={styles.title}>
              Познавательная <br />
              интерактивная платформа
            </h4>
            <img src={titleImg} alt="Stepi" />
          </div>
          <div className={styles.mapContainer}>
            <div className={styles.mapHeader}>
              <img
                className={styles.indicatorTable}
                onClick={() => navigate("/sign-in")}
                src={indicatorTable}
                alt="indicatorTable"
              />
              <img className={styles.boyPicture} src={stepenboy} alt="boy" />
            </div>
            <div className={styles.mapBody}>
              <img
                className={styles.mapAnimals}
                src={mapAnimals}
                alt="mapanimals"
              />
              <div className={styles.mapInfo}>
                <div
                  className={styles.whatIsPlain}
                  onClick={() =>
                    setModalMessage({
                      status: true,
                      message: "Текст про что такое степь",
                    })
                  }
                >
                  <p>
                    Что такое <br /> степь?
                  </p>
                  <img className={styles.hand} src={hand} alt="hand" />
                </div>
                <div
                  className={styles.whoLivedAtPlain}
                  onClick={() =>
                    setModalMessage({
                      status: true,
                      message: "Текст про Кто жил в степи",
                    })
                  }
                >
                  <p>
                    Кто жил в <br />
                    степи?
                  </p>
                  <img className={styles.hand} src={hand} alt="hand" />
                </div>
                <div
                  className={styles.howToSavePlain}
                  onClick={() =>
                    setModalMessage({
                      status: true,
                      message: "Текст про Как сохранить степь",
                    })
                  }
                >
                  <p>
                    Как
                    <br /> сохранить <br />
                    степь?
                  </p>
                  <img className={styles.hand} src={hand} alt="hand" />
                </div>
                <div
                  className={styles.greatDrinskayaPlain}
                  onClick={() =>
                    setModalMessage({
                      status: true,
                      message: "Текст Великая Дрнская степь",
                    })
                  }
                >
                  <p>
                    Великая
                    <br /> Дрнская
                    <br /> степь
                  </p>
                  <img className={styles.hand} src={hand} alt="hand" />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footerContainer}>
            <h3 className={styles.footerTitle}>Наши партнеры</h3>
            <div className={styles.partnersContainer}>
              <div className={styles.partnerContainer}>
                <img src={partner1} alt="partner" />
              </div>
              <div className={styles.partnerContainer}>
                <img src={partner2} alt="partner" />
              </div>
              <div className={styles.partnerContainer}>
                <img src={partner3} alt="partner" />
              </div>
              <div className={styles.partnerContainer}>
                <img src={partner4} alt="partner" />
              </div>
            </div>
            <div className={styles.footerContact}>
              <a href="./">
                <img src={vklogo} alt="vklogo" />
              </a>
              <a href="./">
                <img src={mailLogo} alt="mailLogo" />
              </a>
              <a href="tel:88632907157">8 (863) 2-907-157</a>
            </div>
          </div>
          <img
            className={styles.backgroundImg}
            src={backgroundImg}
            alt="backgroundpicture"
          />
        </div>
        {modalMessage.status === true && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalWindow}>
              <p>{modalMessage.message}</p>
              <img
                src={closeIcon}
                alt="close"
                className={styles.closeIcon}
                onClick={() => setModalMessage({ status: false, message: "" })}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default IndexPage;
