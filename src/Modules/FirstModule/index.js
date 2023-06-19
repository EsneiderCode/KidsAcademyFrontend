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

import axios from "axios";
import Loading from "../../Components/Loading";
import ShortAnswerTest from "../../Components/Tests/ShortAnswerTest";

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
  const questionMultipleChooseTest = 
  {
    question: 'Какие из этих животных являются млекопитающими?',
    options: ['Коала', 'Крокодил', 'Змея', 'Гепард'],
    correctAnswers: ['Коала', 'Гепард'],
  };

  //Props shortAnswerTest
  const [isCorrectShortAnswer, setIsCorrectShortAnswer] = useState(null);
  const questionShortAnswerTest =
    "Какое самое высокое городское здание в мире?";
  const correctAnswerShortAnswerTest = "Бурдж Халифа";

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
    setMultipleChooseScore
  }

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

    const total =
      (imageAndQuestionTestScore +
        imageClickTestScore +
        dragAndDropScore +
        fillingGapsFinalScore +
        CardsDragAndDropScore +
        imageClickTestOneClickScore +
        choosingCorrectPictureScore +
        trueOrNotScore +
        multipleChooseTestScore+
        shortAnswerTestScore) /
      (totalQuestions +
        totalCorrectClicks +
        totalWordsCorrectsDragAndDrop +
        totalFillingTheGapsWordsCorrect +
        totalCardsDragAndDrop +
        totalCorrectClicksOneClick +
        totalChoosingCorrectPicture +
        totalTrueOrNotTest +
        totalMultipleChooseTest +
        totalShortAnswerTest);

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

      await axios.put(`http://localhost:1337/api/users/${user.id}`, data, {
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
      updateUserInfo();
      setTimeout(() => {
        navigate("/studentscore");
      }, 500);
      break;
    default:
      return <div>Opción no válida</div>;
  }
};

export default FirstModule;
