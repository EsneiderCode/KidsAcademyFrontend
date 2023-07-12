import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageAndQuestionTest from "../../Components/Tests/ImageAndQuestionTest";
import QuestionsImageAndQuestionTest from "./questions";
import ImageClickTest from "../../Components/Tests/ImageClickTest";
import DragAndDropGame from "../../Components/Tests/DragAndDropTest";
import FillingGapsTest from "../../Components/Tests/FillingGapsTest";
import CardsDragAndDropTest from "../../Components/Tests/CardsDragAndDropTest";
import ChoosingCorrectPicture from "../../Components/Tests/ChoosingCorrectPicture";
import TrueOrNotTest from "../../Components/Tests/TrueOrNotTest";
import MultipleChooseTest from "../../Components/Tests/MultipleChooseTest";
import MultiplePictureTest from "../../Components/Tests/MultiplePictureTest";

import axios from "axios";
import Loading from "../../Components/Loading";
import ShortAnswerTest from "../../Components/Tests/ShortAnswerTest";
import NumericTest from "../../Components/Tests/NumericTest";
import MatchingTest from "../../Components/Tests/MatchingTest";
import PictureInputTest from "../../Components/Tests/PictureInputTest";
import FindTerritoryTest from "../../Components/Tests/FindTerritoryTest";
import ManyPointTest from "../../Components/Tests/ManyPointTest";

const FirstModule = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Props for ImageAndQuestionTest
  const [testEnable, setTestEnable] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [imageAndQuestionTestScore, setImageAndQuestionTestScore] = useState(0);
  const [changeTest, setChangeTest] = useState(false);

  // Props for ImageClickTest
  const testTitle = "Поиск нескольких точек на картинке";
  const imageClickTestDescription = "Нажмите на глаза лисы";
  const imageClickTestUrl = require("./images/greatwolf.webp");
  const [imageClickTestScore, setImageClickTestScore] = useState(0);
  const correctClicks = [
    { x: 201, y: 162 },
    { x: 155, y: 165 },
  ];

  // Props for drag and drop test;
  const imageDragAndDropUrl = require("./images/animals.webp");
  const [wordsListDragAndDrop, setWordsListDragAndDrop] = useState([
    "Лощадь",
    "Колибри",
    "Волк",
    "Собака",
    "Кот",
    "Баран",
  ]);
  const correctWordsDragAndDrop = ["Баран", "Волк"];
  const [dragAndDropScore, setDragAndDropScore] = useState(0);
  const sentence = `Заплелись густые травы, Закудрявились луга, Да и сам я весь кудрявый,
  Даже завитком рога. Как его зовут? ______  .
  На овчарку он похож, Что ни зуб - то острый нож!
  Он бежит, оскалив пасть, На овцу готов напасть. Его зовут ______  `;

  // Props for filling gaps test
  const fillingGapsTitle = "Guess the Words!";
  const fillingGapsPicture = require("./images/lake-don.webp");
  const fillingGapsWords = ["boat", "houses"];
  const [correctGuesses, setCorrectGuesses] = useState([]);
  const [fillingGapsScore, setFillingGapsScore] = useState(
    Array(fillingGapsWords.length).fill("")
  );
  const fillingGapsSentence = `There is a __ over the river, and a __ in on the street.`;

  //Props for CardsDragAndDropTest
  const [CardsDragAndDropScore, setCardsDragAndDropScore] = useState(0);
  const foxUrl = require("./images/fox.webp");
  const wolfUrl = require("./images/wolf.webp");
  const animalsCardsDAD = [
    {
      name: "Волк",
      url: wolfUrl,
    },
    {
      name: "Лиса",
      url: foxUrl,
    },
  ];

  //Props for imageClickTestOneClick
  const baranUrl = require("./images/baran.webp");
  const testTitleOneClick = "Поиск одной точки на картинке";
  const imageClickTestOneClickDescription = "Нажмите на пасть барана";
  const [imageClickTestOneClickScore, setImageClickTestOneClickScore] =
    useState(0);
  const correctClicksOneClick = [{ x: 408, y: 384 }];

  //Props for choosingCorrectPicture
  const [choosedCorrectCard, setChoosedCorrectCard] = useState(false);
  const cardsData = [
    {
      url: require("./images/fox.webp"),
      name: "card1 1",
      correct: true,
    },
    {
      url: require("./images/wolf.webp"),
      name: "card2 2",
      correct: false,
    },
    {
      url: require("./images/perrochistoso.webp"),
      name: "card3 3",
      correct: false,
    },
  ];

  //Props TrueOrNotTest
  const [trueOrNotTestScore, setTrueOrNotTestScore] = useState(false);

  //Props multiplechooseTest
  const [multipleChooseScore, setMultipleChooseScore] = useState(false);
  const questionMultipleChooseTest = {
    question: "Какие из этих животных являются млекопитающими?",
    options: ["Коала", "Крокодил", "Змея", "Гепард"],
    correctAnswers: ["Коала", "Гепард"],
  };

  //Props shortAnswerTest
  const [isCorrectShortAnswer, setIsCorrectShortAnswer] = useState(null);
  const questionShortAnswerTest =
    "Какое самое высокое городское здание в мире?";
  const correctAnswerShortAnswerTest = "Бурдж Халифа";

  //Props numericTest
  const [isCorrectNumericTest, setIsCorrectNumericTest] = useState(null);
  const correctAnswerNumericTest = 4;
  const allowedErrorAnswerNumeric = 0.1;
  const questionNumericTest = "Сколько будет 2 + 2?";

  //Props matchingtest
  const [isCorrectMatchingTest, setIsCorrectMatchingTest] = useState(null);
  const questionMatchingTest = "Сопоставьте животных с их описаниями:";
  const nounsMatchingTest = ["Лев", "Обезьяна", "Змея"];
  const descriptionsMatchingTest = [
    "Хищное животное из семейства кошачьих.",
    "Примат, обитающий в тропических лесах.",
    "Холоднокровное пресмыкающееся без конечностей.",
  ];

  //Props multiplepicturetest
  const animalToFind = {
    name: "bird",
    url: require("./images/birdexample.webp"),
  };
  const [multiplePictureScore, setMultiplePictureScore] = useState([]);

  const multiplePictureArray = [
    {
      id: 0,
      url: require("./images/fox.webp"),
      name: "fox",
      correct: false,
    },
    {
      id: 1,
      url: require("./images/bird.webp"),
      name: "bird",
      correct: false,
    },
    {
      id: 2,
      url: require("./images/lake-don.webp"),
      name: "lake-don",
      correct: false,
    },
    {
      id: 3,
      url: require("./images/perrochistoso.webp"),
      name: "perrochistoso",
      correct: false,
    },
    {
      id: 4,
      url: require("./images/bird.webp"),
      name: "bird",
      correct: false,
    },
    {
      id: 5,
      url: require("./images/bird.webp"),
      name: "bird",
      correct: false,
    },
    {
      id: 6,
      url: require("./images/baran.webp"),
      name: "baran",
      correct: false,
    },
    {
      id: 7,
      url: require("./images/wolf.webp"),
      name: "wolf",
      correct: false,
    },
    {
      id: 8,
      url: require("./images/zebra.webp"),
      name: "zebra",
      correct: false,
    },
  ];

  //Props pictureInputTest 
  const [guessPictureInput, setGuessPictureInput] = useState("");
  const pictureInputTestData = {
    url:require("./images/fishtest.webp"),
    name: "Ребус"
  }

  //Props findTerritory
  const [selectedTerritory, setSelectedTerritory] = useState(null);
  const findTerritoryTestData = {
    mainPicture: require("./images/map.jpg"),
    options : [
      {
        name: "spain",
        url: require("./images/map1.png"),
        correct: false,
      },
      {
        name: "turkish",
        url: require("./images/map2.png"),
        correct: true,
      },
      {
        name: "poland",
        url: require("./images/map3.png"),
        correct: false,
      },
      {
        name: "island",
        url: require("./images/map4.png"),
        correct: false
      },
    ]
  }

  //Props for ManyPointTest
   const manyPointTitle = "Поиск нескольких точек на картинке";
   const manyPointDescription = "Нажмите на лицо всех животных (26)";
   const manyPointsPictureUrl = require("./images/allanimals.webp");
   const [manyPointScore, setManyPointScore] = useState(0);
   const manyPointsData = [
     { x: 129, y: 676, description: "описание животного 1" },
     { x: 273, y: 670, description: "описание животного 2" },
     { x: 337, y: 699, description: "описание животного 3" },
     { x: 504, y: 663, description: "описание животного 4" },
     { x: 436, y: 627, description: "описание животного 5"},
     { x: 366, y: 572, description: "описание животного 6" },
     { x: 166, y: 582, description: "описание животного 7" },
     { x: 276, y: 523, description: "описание животного 8"},
     { x: 466, y: 547, description: "описание животного 9" },
     { x: 560, y: 431, description: "описание животного 10" },
     { x: 445, y: 478, description: "описание животного 11" },
     { x: 653, y: 431, description: "описание животного 12" },
     { x: 115, y: 491, description: "описание животного 13" },
     { x: 187, y: 524, description: "описание животного 14" },
     { x: 100, y: 428, description: "описание животного 15" },
     { x: 161, y: 385, description: "описание животного 16" },
     { x: 332, y: 393, description: "описание животного 17" },
     { x: 484, y: 341, description: "описание животного 18" },
     { x: 581, y: 202, description: "описание животного 19" },
     { x: 404, y: 243, description: "описание животного 20" },
     { x: 547, y: 110, description: "описание животного 21" },
     { x: 416, y: 96, description: "описание животного 22" },
     { x: 213, y: 171, description: "описание животного 23" },
     { x: 215, y: 61, description: "описание животного 24" },
     { x: 112, y: 289, description: "описание животного 25" },
     { x: 44, y: 139, description: "описание животного 26" }
   ];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("id");
    setUser(JSON.parse(localStorage.getItem("user")));
    if (!token || !id || !user) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (changeTest === true) {
    setLoading(true);
    setTestEnable(testEnable + 1);
    setChangeTest(false);
  }

  const propsImageAndQuestionTest = {
    questions: QuestionsImageAndQuestionTest,
    currentQuestion,
    setCurrentQuestion,
    imageAndQuestionTestScore,
    setImageAndQuestionTestScore,
    setChangeTest,
  };

  const propsImageClickTest = {
    title: testTitle,
    imageClickTestDescription,
    imageClickTestUrl,
    correctClicks,
    setChangeTest,
    setImageClickTestScore,
    imageClickTestScore,
  };

  const propsDragAndDropTest = {
    imageDragAndDropUrl,
    correctWordsDragAndDrop,
    setDragAndDropScore,
    wordsListDragAndDrop,
    setWordsListDragAndDrop,
    sentence,
    setChangeTest,
  };

  const propsFillingGapsTest = {
    setChangeTest,
    fillingGapsTitle,
    fillingGapsSentence,
    fillingGapsWords,
    fillingGapsPicture,
    correctGuesses,
    setCorrectGuesses,
    fillingGapsScore,
    setFillingGapsScore,
  };

  const propsCardsDragAndDropTest = {
    setChangeTest,
    animalsCardsDAD,
    CardsDragAndDropScore,
    setCardsDragAndDropScore,
  };

  const propsImageClickTestOneClick = {
    imageClickTestUrl: baranUrl,
    title: testTitleOneClick,
    imageClickTestDescription: imageClickTestOneClickDescription,
    imageClickTestScore: imageClickTestOneClickScore,
    setImageClickTestScore: setImageClickTestOneClickScore,
    correctClicks: correctClicksOneClick,
    setChangeTest,
  };

  const propsChoosingCorrectPicture = {
    cardsData,
    setChoosedCorrectCard,
    setChangeTest,
  };

  const propsMultipleChooseTest = {
    questionMultipleChooseTest,
    setChangeTest,
    setMultipleChooseScore,
  };

  const propsTrueOrNotTest = {
    setChangeTest,
    setTrueOrNotTestScore,
  };

  const propsShortAnswerTest = {
    questionShortAnswerTest,
    correctAnswerShortAnswerTest,
    setIsCorrectShortAnswer,
    isCorrectShortAnswer,
    setChangeTest,
  };

  const propsNumericTest = {
    setChangeTest,
    isCorrectNumericTest,
    setIsCorrectNumericTest,
    questionNumericTest,
    correctAnswerNumericTest,
    allowedErrorAnswerNumeric,
  };

  const propsMatchingTest = {
    questionMatchingTest,
    setChangeTest,
    nounsMatchingTest,
    descriptionsMatchingTest,
    setIsCorrectMatchingTest,
    isCorrectMatchingTest,
  };

  const propsMultiplePictureTest = {
    setChangeTest,
    multiplePictureArray,
    animalToFind,
    setMultiplePictureScore,
    multiplePictureScore
  };

  const propsPictureInputTest = {
    setChangeTest,
    pictureInputTestData,
    setGuessPictureInput,
    guessPictureInput
  }

  const propsFindTerritory = {
    setChangeTest,
    findTerritoryTestData,
    setSelectedTerritory,
    selectedTerritory
  }

  const propsManyPoint = {
    title: manyPointTitle,
    manyPointDescription,
    manyPointsPictureUrl,
    manyPointsData,
    setChangeTest,
    setManyPointScore,
    manyPointScore,
  };


  function calculateStudentRating() {
    const totalQuestions = QuestionsImageAndQuestionTest.length;
    const totalCorrectClicks = correctClicks.length;
    const totalWordsCorrectsDragAndDrop = correctWordsDragAndDrop.length;
    const totalFillingTheGapsWordsCorrect = fillingGapsWords.length;
    const fillingGapsFinalScore = correctGuesses.length;
    const totalCardsDragAndDrop = animalsCardsDAD.length;
    const totalCorrectClicksOneClick = correctClicksOneClick.length;
    const totalChoosingCorrectPicture = 1;
    const choosingCorrectPictureScore = choosedCorrectCard === true ? 1 : 0;
    const totalTrueOrNotTest = 1;
    const trueOrNotScore = trueOrNotTestScore === true ? 1 : 0;
    const totalMultipleChooseTest = 1;
    const multipleChooseTestScore = multipleChooseScore === true ? 1 : 0;
    const totalShortAnswerTest = 1;
    const shortAnswerTestScore = isCorrectShortAnswer === true ? 1 : 0;
    const totalNumericTest = 1;
    const numericTestScore = isCorrectNumericTest === true ? 1 : 0;
    const totalMatchingTest = 1;
    const matchingTestScore = isCorrectMatchingTest === true ? 1 : 0;

    const total =
      (imageAndQuestionTestScore +
        imageClickTestScore +
        dragAndDropScore +
        fillingGapsFinalScore +
        CardsDragAndDropScore +
        imageClickTestOneClickScore +
        choosingCorrectPictureScore +
        trueOrNotScore +
        multipleChooseTestScore +
        shortAnswerTestScore +
        numericTestScore +
        matchingTestScore) /
      (totalQuestions +
        totalCorrectClicks +
        totalWordsCorrectsDragAndDrop +
        totalFillingTheGapsWordsCorrect +
        totalCardsDragAndDrop +
        totalCorrectClicksOneClick +
        totalChoosingCorrectPicture +
        totalTrueOrNotTest +
        totalMultipleChooseTest +
        totalShortAnswerTest +
        totalNumericTest +
        totalMatchingTest);

    const rating = total * 100;
    return rating;
  }

  const updateUserInfo = async () => {
    try {
      const data = {
        rating: calculateStudentRating(),
      };
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
      };

      await axios.put(`https://stepi-backend.onrender.com/api/users/${user.id}`, data, {
        headers,
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (loading === true) {
    return <Loading setLoading={setLoading} />;
  }

  switch (testEnable) {
    case 1:
      return <ImageAndQuestionTest {...propsImageAndQuestionTest} />;
    case 2:
      return <ImageClickTest {...propsImageClickTest} />;
    case 3:
      return <DragAndDropGame {...propsDragAndDropTest} />;
    case 4:
      return <FillingGapsTest {...propsFillingGapsTest} />;
    case 5:
      return <CardsDragAndDropTest {...propsCardsDragAndDropTest} />;
    case 6:
      return <ImageClickTest {...propsImageClickTestOneClick} />;
    case 7:
      return <ChoosingCorrectPicture {...propsChoosingCorrectPicture} />;
    case 8:
      return <TrueOrNotTest {...propsTrueOrNotTest} />;
    case 9:
      return <MultipleChooseTest {...propsMultipleChooseTest} />;
    case 10:
      return <ShortAnswerTest {...propsShortAnswerTest} />;
    case 11:
      return <NumericTest {...propsNumericTest} />;
    case 12:
      return <MatchingTest {...propsMatchingTest} />;
    case 13:
      return <MultiplePictureTest {...propsMultiplePictureTest} />;
    case 14:
      return <PictureInputTest {...propsPictureInputTest} />;
    case 15:
      return <FindTerritoryTest {...propsFindTerritory} />;
    case 16:
      return <ManyPointTest {...propsManyPoint} />;
    case 17:
      updateUserInfo();
      setTimeout(() => {
        navigate("/studentscore");
      }, 500);
      break;
    default:
      return <div>Что-то не так</div>;
  }
};

export default FirstModule;
