import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./IntroductoryComic.module.css";
import TopicComic from "../../Components/TopicComic";
import background1 from "./images/background-1.png";
import background3 from "./images/background-3.png";
import background6 from "./images/background-6.png";
import background7 from "./images/background-7.png";
import background8 from "./images/background-8.png";
import background9 from "./images/background-9.png";
import background10 from "./images/background-10.png";
import background12 from "./images/background-12.png";
import background13 from "./images/background-13.png";
import background14 from "./images/background-14.png";
import background15 from "./images/background-15.png";
import background16 from "./images/background-16.png";
import background17 from "./images/background-17.png";
import background18 from "./images/background-18.png";
import background19 from "./images/background-19.png";
import background20 from "./images/background-20.png";
import background21 from "./images/background-21.png";
import background22 from "./images/background-22.png";
import background23 from "./images/background-23.png";
import background24 from "./images/background-24.png";
import background25 from "./images/background-25.png";
import background26 from "./images/background-26.png";
import background27 from "./images/background-27.png";
import background28 from "./images/background-28.png";
import background29 from "./images/background-29.png";
import background30 from "./images/background-30.png";
import background31 from "./images/background-31.png";
import background32 from "./images/background-32.png";
import background33 from "./images/background-33.png";
import background34 from "./images/background-34.png";
import background35 from "./images/background-35.png";
import background36 from "./images/background-36.png";
import background37 from "./images/background-37.png";

import stephanDispleased from "./images/stephanDispleased.png";
import houseStephan from "./images/houseStephan.png";
import thunder from "./images/thunder.png";
import boardLeft1 from "./images/boardLeft1.png";
import boardPoints2 from "./images/boardPoints2.png";
import boardPoints1 from "./images/boardPoints1.png";
import boardcomic12 from "./images/boardcomic12.png";
import simpleBoard from "./images/simpleBoard.png";
import rightButton from "./images/rightButton.png";
import leftButton from "./images/leftButton.png";

const IntroductoryComic = () => {
  const [testEnable, setTestEnable] = useState(1);

  const propsComic1 = {
    id: 1,
    backgroundPicture: background1,
    rightButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        picture: simpleBoard,
        description: `Начало мая. Мальчик Степан Степанов получил в школе
            <br> две двойки: по биологии и по географии. Он идет
            домой
            <br> в очень мрачном настроении: ведь дома его ждет
            тяжелый
            <br> разговор с родителями, к тому же ему точно запретят
            играть
            <br> на компьютере в ближайший месяц.`,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "22px",
            textAlign: "center",
            top: "100px",
            left: "105px",
          },
        },
      },
    ],
  };

  const propsComic2 = {
    id: 2,
    backgroundPicture: background1,
    rightButton,
    leftButton,
    setTestEnable,
    leftPicture: {
      picture: stephanDispleased,
      style: {
        position: "absolute",
        bottom: "0",
        left: "0",
      },
    },
    testEnable,
    boards: [
      {
        picture: boardLeft1,
        description: `Дурацкие география и биология! Ну, зачем они мне?! Какая <br>
             мне разница, где и как  растут цветы?! Какая 
             мне разница,<br>
              где водятся какие-то там лошади и суслики?! Вот бы мне<br>
              найти клад! Вот бы мне найти какие-нибудь сокровища! Я<br>
               бы тогда не ходил в школу… Я бы стал богатым и уехал<br>
              далеко-далеко…Я отправился бы навстречу приключениям!<br>
               Я бы, может быть, кого-нибудь спас! Я бы стал героем!<br>
            Вот это была бы интересная жизнь!`,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
            left: "130px",
            bottom: "30px",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "22px",
            textAlign: "center",
            top: "30px",
            left: "105px",
          },
        },
      },
    ],
  };

  const propsComic3 = {
    id: 3,
    backgroundPicture: background3,
    setTestEnable,
    testEnable,
  };

  const propsComic4 = {
    id: 4,
    backgroundPicture: background3,
    setTestEnable,
    testEnable,
    leftPicture: {
      picture: thunder,
      style: {
        position: "absolute",
        bottom: "150px",
        left: "295px",
      },
    },
  };

  const propsComic5 = {
    id: 5,
    backgroundPicture: background3,
    setTestEnable,
    testEnable,
    leftPicture: {
      picture: thunder,
      style: {
        position: "absolute",
        bottom: "150px",
        left: "295px",
      },
    },
    rightPicture: {
      picture: houseStephan,
      style: {
        position: "absolute",
        bottom: "10px",
        right: "95px",
      },
    },
  };

  const propsComic6 = {
    id: 6,
    backgroundPicture: background6,
    rightButton,
    setTestEnable,
    testEnable,
  };

  const propsComic7 = {
    id: 7,
    backgroundPicture: background7,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
  };

  const propsComic8 = {
    id: 8,
    backgroundPicture: background8,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
  };

  const propsComic9 = {
    id: 9,
    backgroundPicture: background9,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
  };

  const propsComic10 = {
    id: 10,
    backgroundPicture: background10,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        picture: boardPoints1,
        description: `Дорогой мой потомок!<br/>
        Наконец-то, ты нашел это письмо и <br/>
        читаешь его. Скорее всего, ты не поверишь <br/>
        сразу всему, что я напишу здесь. Но придет<br/>
         время, и ты поймешь: в мире полным-полно <br/>
         чудес, которые открываются людям,<br/>
          верящим в чудеса! А пока читай это<br/> <b>письмо </b>и <b>верь мне</b>.`,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "35px",
            textAlign: "center",
            fontFamily: "Caveat",
            wordBreak: "none",
            top: "100px",
            left: "190px",
            lineHeight: "35px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          },
        },
      },
    ],
  };

  const propsComic11 = {
    id: 11,
    backgroundPicture: background10,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        picture: boardPoints2,
        description: `Далеко-далеко, в волшебных степных краях, спрятан <br/>
        клад, настоящее сокровище. Пришло время, когда нужен </br>
        смелый человек, который не побоится отправиться</br>
         туда и разыскать это сокровище. Множество </br>
          приключений и трудностей ждет этого человека. Но и </br>
           награда будет достойная – <b>сокровище, цены которому </br>
            нет.</b> Это сокровище откроет нашедшему его человеку </br>
             целый мир; несметные богатства, свободу и много-</br>много 
              нескончаемой радости.

        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "35px",
            textAlign: "center",
            fontFamily: "Caveat",
            wordBreak: "none",
            top: "140px",
            left: "80px",
            lineHeight: "35px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          },
        },
      },
    ],
  };

  const propsComic12 = {
    id: 12,
    backgroundPicture: background12,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        picture: boardcomic12,
        description: `В пути тебя будет сопровождать верный, волшебный</br>
         помощник. Что это за помощник, узнаешь позже, когда</br>
          окажешься в первой точке своего путешествия. Главное,</br>
           не забудь взять с собой <b>маленькую фигурку лошади</b> из</br>
            дерева. Да, смотри, береги ее!

        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "35px",
            textAlign: "center",
            fontFamily: "Caveat",
            wordBreak: "none",
            top: "140px",
            left: "60px",
            lineHeight: "35px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          },
        },
      },
    ],
  };

  const propsComic13 = {
    id: 13,
    backgroundPicture: background13,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Также ты уже наверняка увидел <b>кусок карты</b>. К сожалению, мне не </br>
        удалось сохранить всю карту целиком. Но я точно знаю: если ты </br>
        отправишься в путь, то найдешь еще три части этой карты.</br>
        Карта – <b>волшебная.</b></br>
        Видишь: на ней есть точка, сияющая волшебным светом.</br>
        Как только коснешься этой карты указательным пальцем и </br>
        произнесешь волшебные слова, ты в тот же миг перенесешься в то</br>
         место, куда указывает твой палец! Когда соберешь <b>все четыре</br>
          части карты</b> – тогда  найдешь и сокровища! 
        

        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "35px",
            textAlign: "center",
            fontFamily: "Caveat",
            left: "-450px",
            top: "-190px",
            lineHeight: "35px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            minWidth: "900px",
          },
        },
      },
    ],
  };

  const propsComic14 = {
    id: 14,
    backgroundPicture: background14,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` Что ж … Отправляйся в путь!</br>
         Не бойся трудностей, верь в себя и силу великую, охраняющую</br>
         тебя,  и доверяй своему волшебному помощнику! Когда будет</br>
          трудно и страшно, проси своего помощника волшебного,  о чем </br>
          хочешь, он всё исполнит!</br>
        И вот они, волшебные слова, которые нужно произнести,</br>
         указывая на точку на карте: </br>
        «Ветер, ветер! Перенеси меня, Степана,  туда, где раскинулась</br>
         степь бескрайняя, степь великая, степь чудесная!»
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
            width: "-webkit-fill-available, -moz-available, fill-available",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "35px",
            textAlign: "center",
            fontFamily: "Caveat",
            lineHeight: "35px",
            textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            minWidth: "900px",
            left: "-450px",
            top: "-200px",
          },
        },
      },
    ],
  };

  const propsComic15 = {
    id: 15,
    backgroundPicture: background15,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Ветер, ветер! Перенеси меня,</br>
         Степана,  туда, где раскинулась степь</br>
          бескрайняя, степь великая, степь </br>
          чудесная!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "22px",
            textAlign: "center",
            wordBreak: "none",
            top: "-240px",
            lineHeight: "30px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic16 = {
    id: 16,
    backgroundPicture: background16,
    setTestEnable,
    testEnable,
  };

  const propsComic17 = {
    id: 17,
    backgroundPicture: background17,
    setTestEnable,
    testEnable,
  };

  const propsComic18 = {
    id: 18,
    backgroundPicture: background18,
    setTestEnable,
    testEnable,
  };

  const propsComic19 = {
    id: 19,
    backgroundPicture: background19,
    rightButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` Кто это тут ржет шепотом?

        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "22px",
            textAlign: "center",
            wordBreak: "none",
            top: "-250px",
            left: "80px",
            lineHeight: "30px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic20 = {
    id: 20,
    backgroundPicture: background20,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Кто, кто.. Я!</br>
        Достань скорей меня из кармана.
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "22px",
            textAlign: "center",
            wordBreak: "none",
            top: "30px",
            left: "60px",
            lineHeight: "30px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic21 = {
    id: 21,
    backgroundPicture: background21,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Ты…ты… необычная </br> лошадь!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-300px",
            left: "-420px",
            lineHeight: "30px",
            minWidth: "500px",
          },
        },
      },
      {
        description: ` Конечно!  Я – лошадь  </br>Пржевальского.
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-180px",
            left: "-250px",
            lineHeight: "30px",
            minWidth: "500px",
          },
        },
      },
    ],
  };
  const propsComic22 = {
    id: 22,
    backgroundPicture: background22,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Подожди! Я не спрашиваю </br>
        пока, как зовут твоего </br>
        хозяина! Ты необычная, </br>
        потому что … потому что …</br>
         ты  ведь только что была </br>
         деревянной игрушкой!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-320px",
            left: "-420px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
      {
        description: `Ой, умора!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "22px",
            textAlign: "center",
            wordBreak: "none",
            top: "-120px",
            left: "-310px",
            lineHeight: "30px",
            minWidth: "500px",
          },
        },
      },
    ],
  };
  const propsComic23 = {
    id: 23,
    backgroundPicture: background23,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` Пржевальский нам не </br>
        хозяин! У нас, лошадей </br>
        Пржевальского вообще нет </br>
        хозяина, мы дикие! Мы </br>
        никогда не были приручены.</br>
          Мы свободные лошади. </br>
        Хотим – побежим. Хотим – </br>
        попрыгаем!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-300px",
            left: "-360px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };
  const propsComic24 = {
    id: 24,
    backgroundPicture: background24,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Ну,  а почему же ты </br>
        говоришь, что ты лошадь </br>
        Пржевальского, если у тебя </br>
        нет никакого </br>
        Пржевальского?!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-280px",
            left: "-380px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };
  const propsComic25 = {
    id: 25,
    backgroundPicture: background25,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Это долгая история: он нас </br> 
        открыл, понимаешь? Благодаря  </br
        ему, весь мир узнал, что мы – </br>
         такие красивые, ловкие, дикие </br>
         и абсолютно свободные </br>
          лошади. До него мы были </br>
          совсем-совсем неизвестными </br>
          лошадьми!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-280px",
            left: "-330px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };
  const propsComic26 = {
    id: 26,
    backgroundPicture: background26,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` А как ты превратилась в </br>
        живую лошадь, ты ведь </br>
        только что была деревянной </br>
        игрушкой?
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-230px",
            left: "-330px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };
  const propsComic27 = {
    id: 27,
    backgroundPicture: background27,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` Ой, ну все тебе надо знать!</br>
        Ладно, расскажу. Проверь-ка </br>
        свой карман!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-245px",
            left: "-340px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic28 = {
    id: 28,
    backgroundPicture: background28,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
  };

  const propsComic29 = {
    id: 29,
    backgroundPicture: background29,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Ничего не понимаю!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-200px",
            left: "-450px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };
  const propsComic30 = {
    id: 30,
    backgroundPicture: background30,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` Ну, что тут понимать.  Я и не </br>
         превращалась. Я здешняя.</br>
          Монгольская. Даурская </br>
          красавица! А  деревянная</br>
           лошадка – это специальный </br>
           передатчик.
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-235px",
            left: "-340px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic31 = {
    id: 31,
    backgroundPicture: background31,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` Ты потер фигурку деревянной </br>
        лошадки, я получила сигнал и </br>
        прискакала к тебе, чтобы быть</br>
         твоим помощником! У тебя есть </br>
         карта и ты ведь хочешь найти </br>
         сокровища?
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-235px",
            left: "-340px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic32 = {
    id: 32,
    backgroundPicture: background32,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` Да!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "27px",
            textAlign: "center",
            wordBreak: "none",
            top: "-210px",
            left: "-440px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic33 = {
    id: 33,
    backgroundPicture: background33,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: ` Только ты можешь мне помочь. У тебя есть</br>
         карта, которая приведет меня туда, где живет  </br>
         одна… один… одна очень важная мне лошадь. </br>
         То есть  конь. Ну, в смысле лошадь </br>
         Пржевальского.  Его зовут… Оргоша. Но чтобы </br>
         к нему попасть, нужны все части карты. Без </br>
         тебя никак не обойтись.
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "19px",
            textAlign: "center",
            wordBreak: "none",
            top: "-300px",
            left: "-260px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
      {
        description: ` Оргоша?</br>
        А зачем он тебе?
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-65px",
            left: "-480px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic34 = {
    id: 34,
    backgroundPicture: background34,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `  Понимаешь, Пржевальский </br>
        нас открыл, а потом мы исчезли </br>
        в середине двадцатого века. И </br>
        нас пришлось возрождать.
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-290px",
            left: "-210px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
      {
        description: `Как же вы исчезли, если </br>
        ты тут возле меня вот </br>
        уже час скачешь?
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-65px",
            left: "-395px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic35 = {
    id: 35,
    backgroundPicture: background35,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Ну, в диком виде мы исчезли. </br>
        Только представь себе: это очень </br>
         грустно -  исчезать насовсем…

        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-270px",
            left: "-190px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
      {
        description: `Я понимаю.  Я бы вот тоже не хотел </br>
        бы исчезнуть, чтобы потом меня </br>
        пришлось заново возрождать. Мама </br>
        с папой очень расстроились бы.
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-75px",
            left: "-380px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic36 = {
    id: 36,
    backgroundPicture: background36,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `Вот... Ты меня понимаешь. Так что,</br>
         давай договоримся: я помогу тебе </br>
         найти твои сокровища, а ты </br>
         поможешь мне – найти моего Оргошу. </br>
         И тогда мы с ним создадим семью.
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-260px",
            left: "-360px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComic37 = {
    id: 37,
    backgroundPicture: background37,
    rightButton,
    leftButton,
    setTestEnable,
    testEnable,
    boards: [
      {
        description: `И на свете появятся новые, </br>
         абсолютно дикие, свободные и </br>
         веселые лошади Пржевальского.</br>
          Ураааа!!!
        `,
        style: {
          boardContainer: {
            position: "relative",
            display: "grid",
            placeContent: "center",
          },
          boardPicture: {
            margin: "auto",
          },
          boardDescription: {
            position: "absolute",
            fontSize: "20px",
            textAlign: "center",
            wordBreak: "none",
            top: "-280px",
            left: "-380px",
            lineHeight: "20px",
            minWidth: "500px",
          },
        },
      },
    ],
  };

  const propsComicVariants = {
    1: { ...propsComic1 },
    2: { ...propsComic2 },
    3: { ...propsComic3 },
    4: { ...propsComic4 },
    5: { ...propsComic5 },
    6: { ...propsComic6 },
    7: { ...propsComic7 },
    8: { ...propsComic8 },
    9: { ...propsComic9 },
    10: { ...propsComic10 },
    11: { ...propsComic11 },
    12: { ...propsComic12 },
    13: { ...propsComic13 },
    14: { ...propsComic14 },
    15: { ...propsComic15 },
    16: { ...propsComic16 },
    17: { ...propsComic17 },
    18: { ...propsComic18 },
    19: { ...propsComic19 },
    20: { ...propsComic20 },
    21: { ...propsComic21 },
    22: { ...propsComic22 },
    23: { ...propsComic23 },
    24: { ...propsComic24 },
    25: { ...propsComic25 },
    26: { ...propsComic26 },
    27: { ...propsComic27 },
    28: { ...propsComic28 },
    29: { ...propsComic29 },
    30: { ...propsComic30 },
    31: { ...propsComic31 },
    32: { ...propsComic32 },
    33: { ...propsComic33 },
    34: { ...propsComic34 },
    35: { ...propsComic35 },
    36: { ...propsComic36 },
    37: { ...propsComic37 },
  };

  const selectedPropsComic = propsComicVariants[testEnable] || null;

  return (
    <div>
      {selectedPropsComic ? (
        <TopicComic {...selectedPropsComic} />
      ) : (
        <>
          <div className={styles.container}>
            <div className={styles.comicTitle}>Кокец комикса</div>
            <Link to="/home" className={styles.homeLink}>
              Перейти на главную
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default IntroductoryComic;
